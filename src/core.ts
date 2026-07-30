/**
 * Bir CTCP düğümünün çekirdeği — taşıma katmanından bağımsız.
 *
 * Aynı çekirdek iki yerde çalışır:
 *
 *   - src/node.ts   → Bun.serve HTTP sarmalayıcısı (gerçek iki süreç)
 *   - tarayıcı sim  → iki çekirdek aynı sayfada, transport = doğrudan çağrı
 *
 * Eşe giden çağrılar {@linkcode PeerTransport} üzerinden yapılır; HTTP mü,
 * fonksiyon çağrısı mı olduğu çekirdeğin umurunda değildir. Protokol
 * mesajlarının kendisi (freebusy, proposal) burada tanımlıdır.
 */

import { fmt, fmtInterval, resolve } from "./cascade.ts";
import { EventLog } from "./log.ts";
import {
	FORMULA_DEFS,
	FUEL_STEPS,
	MEETING_DEADLINE,
	type NodeConfig,
	PLANNED_WAKE,
	PRESETS,
} from "./scenario.ts";
import type {
	Capability,
	Container,
	Interval,
	ResolveResult,
} from "./types.ts";
import {
	carryDemo,
	compatibilityTable,
	HILAL_ENVELOPE,
	type HilalState,
	msToUlus,
	resolveHilal,
} from "./units.ts";

/** Taşıma katmanı soyutlaması: eşe POST at, gövdeyi çözülmüş olarak döndür. */
export interface PeerTransport {
	post(
		path: "/ctcp/freebusy" | "/ctcp/proposal",
		body: Record<string, unknown>,
	): Promise<Record<string, unknown>>;
}

/** HTTP durum kodu + gövde; sarmalayıcı bunu Response'a çevirir. */
export interface CoreResult {
	status: number;
	body: Record<string, unknown>;
}

const ok = (body: Record<string, unknown>): CoreResult => ({
	status: 200,
	body,
});

export type NodeCore = ReturnType<typeof createNodeCore>;

export function createNodeCore(cfg: NodeConfig, transport?: PeerTransport) {
	const log = new EventLog();

	const state = {
		observations: {} as Record<string, number>,
		forcedMiss: [] as string[],
		pins: {} as Record<string, number>,
		fuelBudget: FUEL_STEPS[FUEL_STEPS.length - 1] ?? 20_000,
		hilal: { observed: { 0: 30, 1: 29, 2: 30 } } as HilalState,
		/** bu düğümün DAĞITTIĞI jetonlar (gelen çağrıları bununla kısıtlar) */
		issued: new Map<string, Capability>(),
		/** (jeton, yuvarlanmış aralık) -> cevap. Aynı soru = aynı cevap, bütçe yakmaz. */
		fbCache: new Map<string, "free" | "busy">(),
		federation: [] as Array<Record<string, unknown>>,
	};

	const issueCapabilities = (): void => {
		if (!cfg.issues) return;
		const cap = cfg.issues();
		state.issued.set(cap.token, cap);
	};
	issueCapabilities();

	function plan(): ResolveResult {
		const wake = state.observations.uyanis ?? PLANNED_WAKE;
		return resolve(cfg.containers, {
			fuelBudget: state.fuelBudget,
			observations: state.observations,
			forcedMiss: state.forcedMiss,
			pins: state.pins,
			env: {
				plananUyanis: PLANNED_WAKE,
				gozlenenUyanis: wake,
				gecikme: Math.max(0, wake - PLANNED_WAKE),
			},
			defs: FORMULA_DEFS,
		});
	}

	/* ---------------------------- gizlilik ---------------------------- */

	/** Izgaraya dışa doğru yuvarlama: küçük kaydırmalar aynı anahtara çöker. */
	function roundOut(i: Interval, grid: number): Interval {
		return {
			lo: Math.floor(i.lo / grid) * grid,
			hi: Math.ceil(i.hi / grid) * grid,
		};
	}

	/** Yalnızca yer açamayan (rigid) kutucuklar meşguldür; esnekler yer açar. */
	function rigidBlocks(containers: Container[], p: ResolveResult): Interval[] {
		const rigidIds = new Set(
			containers.filter((c) => c.rigid).map((c) => c.id),
		);
		return p.containers
			.filter((r) => r.state === "resolved" && rigidIds.has(r.id))
			.map((r) => ({ lo: r.start.lo, hi: r.end.hi }));
	}

	function overlaps(a: Interval, b: Interval): boolean {
		return a.lo < b.hi && b.lo < a.hi;
	}

	type Gate = { ok: true; cap: Capability } | { ok: false; res: CoreResult };

	function checkCapability(token: unknown, need: "query" | "propose"): Gate {
		const cap = typeof token === "string" ? state.issued.get(token) : undefined;
		if (!cap) {
			log.append("capability-denied", `jetonsuz ${need} isteği reddedildi`, {
				token,
			});
			return {
				ok: false,
				res: { status: 401, body: { error: "yetenek jetonu geçersiz" } },
			};
		}
		if (need === "query" && !cap.canQuery) {
			return {
				ok: false,
				res: { status: 403, body: { error: "jeton sorgu yetkisi taşımıyor" } },
			};
		}
		if (need === "propose" && !cap.canPropose) {
			return {
				ok: false,
				res: { status: 403, body: { error: "jeton teklif yetkisi taşımıyor" } },
			};
		}
		return { ok: true, cap };
	}

	/* ------------------------- federe uçlar --------------------------- */

	function ctcpFreeBusy(body: Record<string, unknown>): CoreResult {
		const gate = checkCapability(body.token, "query");
		if (!gate.ok) return gate.res;
		const cap = gate.cap;

		log.merge(Number(body.lamport ?? 0));
		const asked: Interval = {
			lo: Number(body.from ?? 0),
			hi: Number(body.to ?? 0),
		};
		const rounded = roundOut(asked, cap.grid);
		const key = `${cap.token}:${rounded.lo}-${rounded.hi}`;

		const cached = state.fbCache.get(key);
		if (cached) {
			log.append(
				"freebusy-answer",
				`önbellekten: ${fmtInterval(rounded)} → ${cached} (bütçe yanmadı)`,
			);
			return ok({
				answer: cached,
				grid: cap.grid,
				rounded,
				cached: true,
				budgetLeft: cap.maxQueries - cap.usedQueries,
			});
		}

		if (cap.usedQueries >= cap.maxQueries) {
			log.append("capability-denied", "sorgu bütçesi tükendi", {
				token: cap.token,
			});
			return {
				status: 429,
				body: {
					error: "sorgu bütçesi tükendi",
					budgetLeft: 0,
					note: "yineleme ile takvim yeniden inşa edilemez",
				},
			};
		}
		cap.usedQueries++;

		const blocks = rigidBlocks(cfg.containers, plan());
		const answer: "free" | "busy" = blocks.some((b) => overlaps(rounded, b))
			? "busy"
			: "free";
		state.fbCache.set(key, answer);

		log.append(
			"freebusy-query",
			`yüklem sorusu: ${fmtInterval(rounded)} (ızgara ${cap.grid} dk)`,
		);
		log.append(
			"freebusy-answer",
			`cevap: ${answer} — içerik, etiket, komşu blok yok`,
		);

		return ok({
			answer,
			grid: cap.grid,
			rounded,
			cached: false,
			budgetLeft: cap.maxQueries - cap.usedQueries,
		});
	}

	function ctcpProposal(body: Record<string, unknown>): CoreResult {
		const gate = checkCapability(body.token, "propose");
		if (!gate.ok) return gate.res;
		const cap = gate.cap;

		const asked = body.window as Interval | undefined;
		const lamport = log.merge(Number(body.lamport ?? 0));
		const win: Interval = {
			lo: Number(asked?.lo ?? 0),
			hi: Number(asked?.hi ?? 0),
		};
		const duration = Number(body.duration ?? 60);

		log.append(
			"proposal-received",
			`${body.from} teklifi: ${fmtInterval(win)} + ${duration} dk (kesinlik: ${body.certainty})`,
			{ lamport },
		);

		const blocks = rigidBlocks(cfg.containers, plan());
		/** Belirsizlik federasyona yayılır: tüm zarfın güvenli olması gerekir. */
		const envelope: Interval = { lo: win.lo, hi: win.hi + duration };
		const clash = blocks.find((b) => overlaps(envelope, b));

		if (!clash) {
			const l = log.tick();
			log.append(
				"decision-sent",
				`kabul: ${fmtInterval(envelope)} zarfı sabit bloklarla çakışmıyor`,
				{ lamport: l },
			);
			return ok({
				decision: "accept",
				lamport: l,
				node: cfg.id,
				envelope,
				grid: cap.grid,
				reason:
					"zarfın tamamı boş. Esnek kutucuk kendi kaskadıyla yer açtı; hangisi olduğu söylenmedi.",
			});
		}

		// ızgaraya hizalı en erken uygun başlangıç
		let s = Math.ceil(win.hi / cap.grid) * cap.grid;
		const limit = 22 * 60;
		while (
			s + duration <= limit &&
			blocks.some((b) => overlaps({ lo: s, hi: s + duration }, b))
		) {
			s += cap.grid;
		}
		const feasible = s + duration <= limit;
		const l = log.tick();
		log.append(
			"decision-sent",
			feasible
				? `karşı teklif: ${fmt(s)} (çakışma vardı, gerekçe içeriği paylaşılmadı)`
				: "reddedildi: gün içinde uygun blok yok",
			{ lamport: l },
		);

		return ok({
			decision: feasible ? "counter" : "reject",
			lamport: l,
			node: cfg.id,
			counterStart: feasible ? s : null,
			grid: cap.grid,
			reason: feasible
				? "istenen zarf sabit bir blokla çakışıyor; en erken ızgaraya hizalı boşluk önerildi"
				: "gün sonuna kadar uygun boşluk kalmadı",
		});
	}

	/* ------------------------ yerel eylemler -------------------------- */

	const stamp = (): string => new Date().toISOString().slice(11, 19);

	async function propose(): Promise<CoreResult> {
		if (!cfg.peer || !transport)
			return { status: 400, body: { error: "bu düğümün eşi yok" } };
		const meeting = plan().containers.find((c) => c.id === "toplanti");
		if (!meeting)
			return { status: 400, body: { error: "toplantı kutucuğu yok" } };
		if (meeting.state !== "resolved") {
			return {
				status: 409,
				body: {
					error: "teklif gönderilmedi",
					note: `toplantı zaten '${meeting.state}' durumunda; dal: ${
						meeting.branchTaken ?? "-"
					}. Kaskad yerel olarak karar verdi, federasyona gerek kalmadı.`,
				},
			};
		}

		const lamport = log.tick();
		const payload = {
			token: cfg.heldCapability,
			from: cfg.id,
			lamport,
			containerId: "toplanti",
			window: meeting.start,
			duration: meeting.usedDuration.lo,
			certainty: meeting.certainty,
		};
		log.append(
			"proposal-sent",
			`teklif → ${cfg.peer.id}: ${fmtInterval(meeting.start)}`,
			{ lamport },
		);

		let answer: {
			decision?: string;
			lamport?: number;
			counterStart?: number | null;
			reason?: string;
		};
		try {
			answer = await transport.post("/ctcp/proposal", payload);
		} catch (err) {
			log.append(
				"decision-received",
				`eşe ulaşılamadı: ${(err as Error).message}`,
			);
			return {
				status: 502,
				body: { error: `eşe ulaşılamadı (${cfg.peer.id} ayakta mı?)` },
			};
		}
		log.merge(answer.lamport ?? 0);

		let applied = "-";
		if (
			answer.decision === "counter" &&
			typeof answer.counterStart === "number"
		) {
			state.pins.toplanti = answer.counterStart;
			applied = `toplantı ${fmt(answer.counterStart)} olarak sabitlendi`;
			if (answer.counterStart > MEETING_DEADLINE) {
				applied += ` — son başlama vaktini (${fmt(MEETING_DEADLINE)}) geçiyor, kaskad dala düşecek`;
			}
		} else if (answer.decision === "accept") {
			delete state.pins.toplanti;
			applied = "kabul edildi, pencere korunuyor";
		}
		log.append(
			"decision-received",
			`${cfg.peer.id}: ${answer.decision} — ${applied}`,
			answer,
		);

		const record = { at: stamp(), sent: payload, answer, applied };
		state.federation = [record, ...state.federation].slice(0, 8);
		return ok(record);
	}

	async function queryFreeBusy(from: number, to: number): Promise<CoreResult> {
		if (!cfg.peer || !transport)
			return { status: 400, body: { error: "bu düğümün eşi yok" } };
		const lamport = log.tick();
		log.append(
			"freebusy-query",
			`→ ${cfg.peer.id}: ${fmt(from)}–${fmt(to)} müsait mi?`,
		);
		let answer: Record<string, unknown>;
		try {
			answer = await transport.post("/ctcp/freebusy", {
				token: cfg.heldCapability,
				lamport,
				from,
				to,
			});
		} catch (err) {
			return {
				status: 502,
				body: { error: `eşe ulaşılamadı: ${(err as Error).message}` },
			};
		}
		log.append(
			"freebusy-answer",
			`← ${cfg.peer.id}: ${JSON.stringify(answer)}`,
		);
		const record = { at: stamp(), sent: { from, to }, answer };
		state.federation = [record, ...state.federation].slice(0, 8);
		return ok(record);
	}

	function observe(wake: number): CoreResult {
		state.observations.uyanis = wake;
		delete state.pins.toplanti;
		log.tick();
		log.append("observation", `uyanış gözlemi: ${fmt(wake)} (cephe ilerledi)`, {
			wake,
		});
		return ok({ ok: true, plan: plan() });
	}

	function forceMiss(id: string, on: boolean): CoreResult {
		state.forcedMiss = on
			? [...new Set([...state.forcedMiss, id])]
			: state.forcedMiss.filter((x) => x !== id);
		delete state.pins.toplanti;
		log.tick();
		log.append("branch-forced", `${id} ${on ? "kaçırıldı" : "geri alındı"}`);
		return ok({ ok: true, plan: plan() });
	}

	function setFuel(fuel: number): CoreResult {
		state.fuelBudget = Math.max(10, fuel);
		log.tick();
		log.append("budget-changed", `yakıt bütçesi: ${state.fuelBudget}`);
		return ok({ ok: true, plan: plan() });
	}

	function observeHilal(index: number, days: number): CoreResult {
		state.hilal.observed[index] = days;
		log.tick();
		log.append(
			"unit-observed",
			`hilal-ayı ${index} gözlendi: ${days} gün → artık sabit`,
		);
		return ok({ ok: true, resolved: resolveHilal(index, state.hilal) });
	}

	function reset(): CoreResult {
		state.observations = {};
		state.forcedMiss = [];
		state.pins = {};
		state.fbCache.clear();
		state.federation = [];
		state.issued.clear();
		issueCapabilities();
		log.append("observation", "sıfırlandı");
		return ok({ ok: true });
	}

	/* -------------------------- dış görünüm --------------------------- */

	function describe(): Record<string, unknown> {
		return {
			node: cfg.id,
			label: cfg.label,
			protocol: "ctcp/0.1-demo",
			transport: "agnostik (http veya sayfa içi çağrı)",
			linkTypes: ["fixed=requirement", "contingent"],
			branches: ["wait", "alternative", "cancel"],
			resolvePolicy: {
				returns: "interval + certainty",
				never: "nokta değer",
				fuelBudget: state.fuelBudget,
				onExhaustion:
					"envelope'a düşer, kesinlik damgası budget-truncated olur",
			},
			unitClasses: ["static", "eventually-static", "dynamic"],
			privacy: {
				queries: "yalnızca yüklem (müsait mi?)",
				grid: 30,
				contentShared: false,
				capabilityRequired: true,
			},
		};
	}

	function statePayload(): Record<string, unknown> {
		return {
			node: {
				id: cfg.id,
				label: cfg.label,
				port: cfg.port,
				peer: cfg.peer?.id ?? null,
			},
			lamport: log.lamport,
			input: {
				observations: state.observations,
				forcedMiss: state.forcedMiss,
				pins: state.pins,
				fuelBudget: state.fuelBudget,
				fuelSteps: FUEL_STEPS,
				presets: PRESETS,
				plannedWake: PLANNED_WAKE,
				deadline: MEETING_DEADLINE,
			},
			plan: plan(),
			containers: cfg.containers.map((c) => ({
				id: c.id,
				kind: c.duration.kind,
				onMiss: c.onMiss?.kind ?? "cancel",
				rigid: Boolean(c.rigid),
				federated: Boolean(c.federated),
			})),
			capabilities: {
				held: cfg.heldCapability ?? null,
				issued: [...state.issued.values()],
			},
			federation: state.federation,
			units: {
				nowIso: new Date().toISOString(),
				ulus: msToUlus(Date.now()),
				carry: carryDemo(Date.now()),
				table: compatibilityTable(),
				hilal: {
					envelope: HILAL_ENVELOPE,
					observed: state.hilal.observed,
					past: resolveHilal(1, state.hilal),
					future: resolveHilal(9, state.hilal),
				},
			},
			log: log.tail(),
		};
	}

	function resolveUnit(index: number): CoreResult {
		return ok(
			resolveHilal(index, state.hilal) as unknown as Record<string, unknown>,
		);
	}

	return {
		cfg,
		log,
		plan,
		describe,
		statePayload,
		resolveUnit,
		ctcpFreeBusy,
		ctcpProposal,
		propose,
		queryFreeBusy,
		observe,
		forceMiss,
		setFuel,
		observeHilal,
		reset,
	};
}
