import { expect, test } from "bun:test";
import type { ResolveOptions } from "./cascade.ts";
import { resolve } from "./cascade.ts";
import { createNodeCore, type NodeCore, type PeerTransport } from "./core.ts";
import {
	ALICE_CONTAINERS,
	FORMULA_DEFS,
	MEETING_DEADLINE,
	NODES,
	type NodeConfig,
	PLANNED_WAKE,
} from "./scenario.ts";
import type { Container } from "./types.ts";
import { DEVRE_TABLE, msToUlus, resolveHilal, ulusToMs } from "./units.ts";

function opts(over: Partial<ResolveOptions> = {}): ResolveOptions {
	const wake = over.observations?.uyanis ?? PLANNED_WAKE;
	return {
		fuelBudget: 20_000,
		observations: {},
		forcedMiss: [],
		pins: {},
		env: {
			plananUyanis: PLANNED_WAKE,
			gozlenenUyanis: wake,
			gecikme: Math.max(0, wake - PLANNED_WAKE),
		},
		defs: FORMULA_DEFS,
		...over,
	};
}

const pick = (r: ReturnType<typeof resolve>, id: string) => {
	const c = r.containers.find((x) => x.id === id);
	if (!c) throw new Error(`kutucuk yok: ${id}`);
	return c;
};

/* --- K1: resolve asla nokta dönmez ------------------------------- */

test("contingent link taşıyan zincir nokta değil aralık döner", () => {
	const r = resolve(
		ALICE_CONTAINERS,
		opts({ observations: { uyanis: PLANNED_WAKE } }),
	);
	const yol = pick(r, "yol-otobus");
	expect(yol.end.hi).toBeGreaterThan(yol.end.lo);
});

test("bütçe azalınca aralık genişler, cevap yanlış olmaz", () => {
	const late = { uyanis: 11 * 60 + 50 };
	const rich = resolve(
		ALICE_CONTAINERS,
		opts({ observations: late, fuelBudget: 20_000 }),
	);
	const poor = resolve(
		ALICE_CONTAINERS,
		opts({ observations: late, fuelBudget: 200 }),
	);

	const a = pick(rich, "hazirlik");
	const b = pick(poor, "hazirlik");

	expect(a.certainty).toBe("derived");
	expect(b.certainty).toBe("budget-truncated");
	// kısmi hesap = daha geniş aralık, ve doğru cevabı içermek zorunda
	expect(b.end.hi - b.end.lo).toBeGreaterThan(a.end.hi - a.end.lo);
	expect(b.usedDuration.lo).toBeLessThanOrEqual(a.usedDuration.lo);
	expect(b.usedDuration.hi).toBeGreaterThanOrEqual(a.usedDuration.hi);
});

test("aralık eşiği kesiyorsa karar verilmedi olarak işaretlenir", () => {
	const late = { uyanis: 11 * 60 + 50 };
	const poor = resolve(
		ALICE_CONTAINERS,
		opts({ observations: late, fuelBudget: 200 }),
	);
	const toplanti = pick(poor, "toplanti");

	expect(toplanti.undecided).toBe(true);
	expect(toplanti.start.lo).toBeLessThanOrEqual(MEETING_DEADLINE);
	expect(toplanti.start.hi).toBeGreaterThan(MEETING_DEADLINE);

	// bütçe artınca aynı girdi kararlı hale gelir
	const rich = resolve(
		ALICE_CONTAINERS,
		opts({ observations: late, fuelBudget: 20_000 }),
	);
	expect(pick(rich, "toplanti").undecided).toBe(false);
});

/* --- K2: her dal tanımlıdır: illa bir şey olur -------------------- */

test("hiçbir kutucuk tanımsız kalmaz", () => {
	const r = resolve(
		ALICE_CONTAINERS,
		opts({ observations: { uyanis: 12 * 60 + 20 } }),
	);
	expect(r.containers).toHaveLength(ALICE_CONTAINERS.length);
	for (const c of r.containers) {
		expect(["resolved", "cancelled", "skipped"]).toContain(c.state);
	}
});

test("kaçırılan kutucuk alternatif dalı etkinleştirir ve bağımlılık yeniden bağlanır", () => {
	const r = resolve(
		ALICE_CONTAINERS,
		opts({ observations: { uyanis: 9 * 60 + 10 }, forcedMiss: ["yol-otobus"] }),
	);
	expect(pick(r, "yol-otobus").state).toBe("skipped");
	expect(pick(r, "yol-otobus").branchTaken).toBe("yol-metro");

	const metro = pick(r, "yol-metro");
	const toplanti = pick(r, "toplanti");
	expect(metro.state).toBe("resolved");
	// toplantı artık otobüsü değil metroyu takip ediyor
	expect(toplanti.start.lo).toBeGreaterThanOrEqual(metro.end.lo);
});

test("son başlama vakti geçtiğinde iptal yerine yedek dal çalışır", () => {
	const r = resolve(
		ALICE_CONTAINERS,
		opts({
			observations: { uyanis: 9 * 60 + 10 },
			pins: { toplanti: 13 * 60 + 30 },
		}),
	);
	expect(pick(r, "toplanti").state).toBe("skipped");
	expect(pick(r, "async-inceleme").state).toBe("resolved");
});

/* --- wait dalı: illa beklenir ------------------------------------- */

const WAIT_CHAIN: Container[] = [
	{
		id: "a",
		label: "A",
		duration: { kind: "fixed", min: 30 },
		startsAt: 9 * 60,
		onMiss: { kind: "cancel" },
	},
	{
		id: "b",
		label: "B",
		duration: { kind: "fixed", min: 30 },
		after: { id: "a", gap: { lo: 0, hi: 0 } },
		mustStartBefore: 9 * 60,
		onMiss: { kind: "wait" },
	},
];

test("son başlama vakti geçse de wait dalı kutucuğu bekletir, düşürmez", () => {
	const r = resolve(WAIT_CHAIN, opts());
	const b = pick(r, "b");
	expect(b.state).toBe("resolved");
	expect(b.undecided).toBe(false);
	expect(b.start.lo).toBe(9 * 60 + 30);
});

test("kaçırılan wait kutucuğu yine de çözülür", () => {
	const r = resolve(WAIT_CHAIN, opts({ forcedMiss: ["b"] }));
	expect(pick(r, "b").state).toBe("resolved");
});

test("wait dalı ölü bağımlılıkta iptale düşer, 'çözülemedi'ye değil", () => {
	const r = resolve(WAIT_CHAIN, opts({ forcedMiss: ["a"] }));
	expect(pick(r, "a").state).toBe("cancelled");
	const b = pick(r, "b");
	expect(b.state).toBe("cancelled");
	expect(b.notes.join(" ")).not.toContain("çözülemedi");
});

/* --- çekirdek: sürükleme anlamları --------------------------------- */

function cfgOf(id: string): NodeConfig {
	const c = NODES[id];
	if (!c) throw new Error(`senaryo düğümü yok: ${id}`);
	return c;
}

/** Sayfa içi simülasyonla aynı: taşıma = doğrudan çağrı. */
const direct = (peer: () => NodeCore): PeerTransport => ({
	post: async (path, body) =>
		(path === "/ctcp/proposal"
			? peer().ctcpProposal(body)
			: peer().ctcpFreeBusy(body)
		).body,
});

const startOf = (core: NodeCore, id: string) => {
	const c = core.plan().containers.find((x) => x.id === id);
	if (!c) throw new Error(`kutucuk yok: ${id}`);
	return c;
};

test("observeStart herhangi bir kutucuğu gözlemler ve cepheyi ilerletir", () => {
	const alice = createNodeCore(cfgOf("alice"));
	const r = alice.observeStart("hazirlik", 600);
	expect(r.status).toBe(200);
	const h = startOf(alice, "hazirlik");
	expect(h.start).toEqual({ lo: 600, hi: 600 });
	// kesinlik bileşenlerin en kötüsüdür: gözlenen başlangıç + formül süre = derived
	expect(h.notes.join(" ")).toContain("gözlem");
	expect(alice.plan().frontier).toBe(600);
	expect(alice.observeStart("yok-boyle-kutucuk", 600).status).toBe(404);
});

test("setPlannedStart startsAt demirli kutucuğu taşır, reset geri alır", () => {
	const bob = createNodeCore(cfgOf("bob"));
	expect(bob.setPlannedStart("standup", 700).status).toBe(200);
	expect(startOf(bob, "standup").start.lo).toBe(700);
	// senaryo nesnesi mutasyona uğramadı: ikinci çekirdek eski planı görür
	expect(startOf(createNodeCore(cfgOf("bob")), "standup").start.lo).toBe(570);
	bob.reset();
	expect(startOf(bob, "standup").start.lo).toBe(570);
	// bağımlılıktan türeyen başlangıç taşınamaz
	const alice = createNodeCore(cfgOf("alice"));
	expect(alice.setPlannedStart("hazirlik", 700).status).toBe(409);
});

test("addContainer K1/K2 doğrular, removeContainer yalnızca ekleneni siler", () => {
	const bob = createNodeCore(cfgOf("bob"));
	expect(
		bob.addContainer({ label: "", duration: { kind: "fixed", min: 30 } })
			.status,
	).toBe(422);
	expect(
		bob.addContainer({
			label: "iki demir",
			startsAt: 600,
			after: { id: "standup", gapLo: 0, gapHi: 0 },
			duration: { kind: "fixed", min: 30 },
		}).status,
	).toBe(422);

	const added = bob.addContainer({
		label: "Spor",
		startsAt: 1000,
		duration: { kind: "fixed", min: 45 },
		onMiss: "wait",
	});
	expect(added.status).toBe(200);
	const id = String(added.body.id);
	expect(startOf(bob, id).start.lo).toBe(1000);

	expect(bob.removeContainer("standup").status).toBe(409);
	expect(bob.removeContainer(id).status).toBe(200);
	expect(bob.plan().containers.some((c) => c.id === id)).toBe(false);
});

test("sürükle-teklif: override pencere Bob'a gider, kabul override'ı sabitler", async () => {
	let bobCore: NodeCore | undefined;
	const alice = createNodeCore(
		cfgOf("alice"),
		direct(() => bobCore as NodeCore),
	);
	bobCore = createNodeCore(
		cfgOf("bob"),
		direct(() => alice),
	);

	alice.observe(550); // 09:10
	// 10:00'a sürükle: zarf 600–660, Bob'un sabit blokları (standup 570–600,
	// öğle 750–795) ile çakışmaz → kabul + o noktaya sabitleme
	const r = await alice.propose(600);
	expect(r.status).toBe(200);
	const answer = r.body.answer as { decision: string };
	expect(answer.decision).toBe("accept");
	expect(startOf(alice, "toplanti").start).toEqual({ lo: 600, hi: 600 });
});

/* --- birim cebri -------------------------------------------------- */

test("karma taban gidiş-dönüş korunur", () => {
	const now = Date.UTC(2026, 6, 30, 12, 34);
	const stamp = msToUlus(now);
	const back = ulusToMs(stamp);
	expect(Math.abs(back - now)).toBeLessThan(60_000);
});

test("düzensiz seviyede elde bir üst basamağa taşınır", () => {
	const first = DEVRE_TABLE[0] ?? 0;
	const end = msToUlus(
		ulusToMs({ donem: 3, devre: 0, gun: first - 1, dilim: 19, an: 71 }),
	);
	const next = msToUlus(
		ulusToMs({ donem: 3, devre: 0, gun: first, dilim: 0, an: 0 }),
	);
	expect(end.devre).toBe(0);
	expect(next.devre).toBe(1);
	expect(next.gun).toBe(0);
});

test("gözlenen birim sonsuza kadar sabitlenir, gözlenmeyen oracle ister", () => {
	const st = { observed: { 1: 29 } };
	expect(resolveHilal(1, st).class).toBe("eventually-static");
	expect(resolveHilal(1, st).offlineConvertible).toBe(true);

	const future = resolveHilal(9, st);
	expect(future.class).toBe("dynamic");
	expect(future.offlineConvertible).toBe(false);
	expect(future.days).toBeNull();
});
