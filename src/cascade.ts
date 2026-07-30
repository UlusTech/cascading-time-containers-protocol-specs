/**
 * Kaskad çözücü.
 *
 * İki protokol kanunu burada uygulanıyor:
 *
 *   K1. resolve() asla nokta dönmez. Aralık + kesinlik damgası döner.
 *       Böylece kısmi hesap = daha geniş aralık; yanlış cevap değil.
 *   K2. Her dal tanımlıdır (wait | alternative | cancel). Çözümleme
 *       "tanımsız" dönmez — illa bir şey olur.
 *
 * Link tipleri: fixed = requirement link (bizim kontrolümüz),
 * contingent = kontrol etmediğimiz süre (uyku, otobüs, trafik).
 *
 * Dikkat: iptal + alternatif + bekleme üçlüsü eklendiği an bu artık STNU
 * değil, ayrık kısıtlı (disjunctive) bir problem. Bu yüzden yakıt bütçesi
 * süs değil, tasarımın zorunlu sonucu.
 */

import {
	evaluate,
	type FnDef,
	type Fuel,
	FuelExhausted,
	parse,
} from "./minilang.ts";
import {
	CERTAINTY_RANK,
	type Certainty,
	type Container,
	type Interval,
	type ResolvedContainer,
	type ResolveResult,
} from "./types.ts";

export interface ResolveOptions {
	fuelBudget: number;
	/** gözlemlenen gerçeklik: hangi kutucuk ne zaman başladı */
	observations: Record<string, number>;
	/** kullanıcı "bunu kaçırdım" dedi */
	forcedMiss: string[];
	/** federe karşı teklifle sabitlenen başlangıçlar */
	pins: Record<string, number>;
	/** formüllere verilen ortam */
	env: Record<string, number>;
	defs: Record<string, FnDef>;
}

function worse(a: Certainty, b: Certainty): Certainty {
	return CERTAINTY_RANK[a] >= CERTAINTY_RANK[b] ? a : b;
}

function addInterval(i: Interval, d: Interval): Interval {
	return { lo: i.lo + d.lo, hi: i.hi + d.hi };
}

interface DurationOutcome {
	interval: Interval;
	certainty: Certainty;
	note?: string;
}

function durationOf(
	c: Container,
	opts: ResolveOptions,
	fuel: Fuel,
): DurationOutcome {
	const d = c.duration;
	if (d.kind === "fixed") {
		return { interval: { lo: d.min, hi: d.min }, certainty: "derived" };
	}
	if (d.kind === "contingent") {
		return {
			interval: { lo: d.lo, hi: d.hi },
			certainty: "derived",
			note: "contingent link: süre bizim kontrolümüzde değil",
		};
	}
	// formula
	const before = fuel.used;
	try {
		const ast = parse(d.expr);
		const v = evaluate(ast, opts.env, opts.defs, fuel);
		const clamped = Math.min(d.envelope.hi, Math.max(d.envelope.lo, v));
		const rounded = Math.round(clamped);
		return {
			interval: { lo: rounded, hi: rounded },
			certainty: "derived",
			note: `formül çözüldü (${fuel.used - before} yakıt)`,
		};
	} catch (err) {
		if (err instanceof FuelExhausted) {
			return {
				interval: { ...d.envelope },
				certainty: "budget-truncated",
				note: "bütçe bitti → formül bırakıldı, envelope'a düşüldü (cevap yanlış değil, geniş)",
			};
		}
		return {
			interval: { ...d.envelope },
			certainty: "budget-truncated",
			note: `formül hatası → envelope: ${(err as Error).message}`,
		};
	}
}

export function resolve(
	containers: Container[],
	opts: ResolveOptions,
): ResolveResult {
	const out = new Map<string, ResolvedContainer>();
	const active = new Set(containers.filter((c) => !c.dormant).map((c) => c.id));
	/** iptal edilen kutucuk -> onun yerine geçen alternatif */
	const rewire = new Map<string, string>();
	const fuel: Fuel = { left: opts.fuelBudget, used: 0 };

	const effectiveAfter = (id: string): string => {
		let cur = id;
		for (let i = 0; i < 8; i++) {
			const next = rewire.get(cur);
			if (!next) return cur;
			cur = next;
		}
		return cur;
	};

	const mkDead = (
		c: Container,
		state: "cancelled" | "skipped",
		notes: string[],
		branch?: string,
	) => {
		out.set(c.id, {
			id: c.id,
			label: c.label,
			state,
			start: { lo: 0, hi: 0 },
			end: { lo: 0, hi: 0 },
			usedDuration: { lo: 0, hi: 0 },
			certainty: "derived",
			undecided: false,
			branchTaken: branch,
			notes,
		});
	};

	/**
	 * K2: her kaçırma bir dala düşer. `wait` dalında kutucuk ölmez —
	 * `false` döner ve çağıran normal çözümlemeye devam eder (geç de olsa olur).
	 */
	const applyMiss = (c: Container, reason: string): boolean => {
		const branch = c.onMiss ?? { kind: "cancel" as const };
		if (branch.kind === "wait") return false;
		if (branch.kind === "alternative") {
			active.add(branch.use);
			rewire.set(c.id, branch.use);
			mkDead(
				c,
				"skipped",
				[reason, `alternatif dal etkinleşti → ${branch.use}`],
				branch.use,
			);
			return true;
		}
		mkDead(
			c,
			"cancelled",
			[reason, "dal: cancel (iptal aşağıya yayılır)"],
			"cancel",
		);
		return true;
	};

	// sabit nokta yerine sonlu geçiş: bağımlılığı çözülmemiş kutucuk sonraki tura kalır
	let guard = containers.length * 4;
	while (out.size < containers.length && guard-- > 0) {
		let progressed = false;

		for (const c of containers) {
			if (out.has(c.id)) continue;

			if (c.dormant && !active.has(c.id)) {
				mkDead(c, "skipped", ["uykuda: bir dal tarafından etkinleştirilmedi"]);
				progressed = true;
				continue;
			}

			const notes: string[] = [];
			let start: Interval;
			let certainty: Certainty = "derived";

			const pinned = opts.pins[c.id];
			const observed = opts.observations[c.id];

			if (observed !== undefined) {
				start = { lo: observed, hi: observed };
				certainty = "observed";
				notes.push("gözlem: cephe buraya taşındı, bu nokta artık değişmez");
			} else if (pinned !== undefined) {
				start = { lo: pinned, hi: pinned };
				notes.push("federe karşı teklifle sabitlendi");
			} else if (c.after) {
				const parentId = effectiveAfter(c.after.id);
				const parent = out.get(parentId);
				if (!parent) continue; // bağımlılık henüz çözülmedi
				if (parent.state !== "resolved") {
					const reason = `bağlı olduğu '${parent.label}' gerçekleşmedi`;
					if (!applyMiss(c, reason)) {
						// wait dalı ölü bağımlılıktan başlangıç üretemez
						mkDead(
							c,
							"cancelled",
							[reason, "dal 'wait' ama bağımlılık ölü → iptal"],
							"cancel",
						);
					}
					progressed = true;
					continue;
				}
				start = addInterval(parent.end, c.after.gap);
				if (parentId !== c.after.id)
					notes.push(`bağımlılık yeniden bağlandı: ${parentId}`);
			} else if (c.startsAt !== undefined) {
				start = { lo: c.startsAt, hi: c.startsAt };
			} else if (c.startWindow) {
				start = { ...c.startWindow };
				notes.push("gözlem yok: projeksiyon penceresi");
			} else {
				mkDead(c, "skipped", ["demirsiz kutucuk: başlangıç tanımlanamadı"]);
				progressed = true;
				continue;
			}

			if (opts.forcedMiss.includes(c.id)) {
				if (applyMiss(c, "gerçeklik girdisi: kaçırıldı")) {
					progressed = true;
					continue;
				}
				notes.push("kaçırıldı ama dal 'wait': kutucuk yine de bekleniyor");
			}

			let undecided = false;
			if (c.mustStartBefore !== undefined) {
				if (start.lo > c.mustStartBefore) {
					if (
						applyMiss(c, `son başlama vakti geçti (${fmt(c.mustStartBefore)})`)
					) {
						progressed = true;
						continue;
					}
					notes.push(
						`son başlama vakti (${fmt(c.mustStartBefore)}) geçti ama dal 'wait': geç de olsa bekleniyor`,
					);
				} else if (start.hi > c.mustStartBefore) {
					undecided = true;
					notes.push(
						`KARAR VERİLEMEDİ: aralık son başlama vaktini (${fmt(c.mustStartBefore)}) kesiyor. ` +
							"Bütçe artınca aralık daralır ve karar netleşir.",
					);
				}
			}

			const dur = durationOf(c, opts, fuel);
			if (dur.note) notes.push(dur.note);
			certainty = worse(certainty, dur.certainty);

			out.set(c.id, {
				id: c.id,
				label: c.label,
				state: "resolved",
				start,
				end: addInterval(start, dur.interval),
				usedDuration: dur.interval,
				certainty,
				undecided,
				notes,
			});
			progressed = true;
		}

		if (!progressed) break;
	}

	// döngüsel/erişilemez kalanlar
	for (const c of containers) {
		if (!out.has(c.id)) {
			mkDead(c, "skipped", [
				"çözülemedi: döngüsel kısıt veya erişilemez bağımlılık",
			]);
		}
	}

	const ordered = containers.flatMap((c) => {
		const r = out.get(c.id);
		return r ? [r] : [];
	});
	const truncated = ordered.some((r) => r.certainty === "budget-truncated");
	const overall = ordered.reduce<Certainty>(
		(acc, r) => worse(acc, r.certainty),
		"observed",
	);
	const frontierVals = Object.values(opts.observations);

	return {
		containers: ordered,
		fuelBudget: opts.fuelBudget,
		fuelUsed: fuel.used,
		truncated,
		certainty: overall,
		frontier: frontierVals.length ? Math.max(...frontierVals) : null,
	};
}

export function fmt(min: number): string {
	const m = ((Math.round(min) % 1440) + 1440) % 1440;
	const h = Math.floor(m / 60);
	return `${String(h).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;
}

export function fmtInterval(i: Interval): string {
	return i.lo === i.hi ? fmt(i.lo) : `${fmt(i.lo)} – ${fmt(i.hi)}`;
}

export function widthOf(i: Interval): number {
	return i.hi - i.lo;
}
