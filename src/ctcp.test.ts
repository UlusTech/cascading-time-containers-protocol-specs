import { expect, test } from "bun:test";
import type { ResolveOptions } from "./cascade.ts";
import { resolve } from "./cascade.ts";
import {
	ALICE_CONTAINERS,
	FORMULA_DEFS,
	MEETING_DEADLINE,
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
