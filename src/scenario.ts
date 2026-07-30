/**
 * Senaryo: iki federe CTCP düğümü.
 *
 *   alice (:4001) — sabah zinciri: uyanış → hazırlık → yol → toplantı
 *   bob   (:4002) — kendi günü var; toplantıyı kendi kısıtlarına göre değerlendirir
 *
 * Bob'un takvimi Alice'e hiçbir zaman gönderilmez. Alice yalnızca
 * yüklem sorusu sorabilir ("t anında müsait misin?") ve teklif gönderebilir.
 * İkisi de aynı yetenek jetonuna bağlı: gizlilik ve teklif-spam'i tek primitif.
 */

import { defineFns } from "./minilang.ts";
import type { Capability, Container } from "./types.ts";

export const PLANNED_WAKE = 7 * 60; // 07:00
export const MEETING_DEADLINE = 13 * 60; // 13:00 — sonrası anlamsız

/**
 * Özyinelemeli, kasten pahalı bir formül. Sonlanır ama derinliği gecikmeyle
 * doğru orantılı: yakıt bütçesinin neden zorunlu olduğunu gösterir.
 */
export const FORMULA_DEFS = defineFns({
	uykuBorcu: {
		params: ["n"],
		body: "n <= 0 ? 0 : 1 + uykuBorcu(n - 1) * 0.985",
	},
});

export const HAZIRLIK_EXPR = "min(60, max(20, 25 + uykuBorcu(gecikme) * 0.4))";

export const ALICE_CONTAINERS: Container[] = [
	{
		id: "uyanis",
		label: "Uyanış",
		duration: { kind: "fixed", min: 0 },
		startWindow: { lo: 6 * 60 + 40, hi: 9 * 60 + 30 },
		onMiss: { kind: "wait" },
	},
	{
		id: "hazirlik",
		label: "Hazırlık",
		duration: {
			kind: "formula",
			expr: HAZIRLIK_EXPR,
			envelope: { lo: 20, hi: 60 },
		},
		after: { id: "uyanis", gap: { lo: 0, hi: 0 } },
		onMiss: { kind: "wait" },
	},
	{
		id: "yol-otobus",
		label: "Yol (otobüs)",
		duration: { kind: "contingent", lo: 25, hi: 55 },
		after: { id: "hazirlik", gap: { lo: 0, hi: 10 } },
		onMiss: { kind: "alternative", use: "yol-metro" },
	},
	{
		id: "yol-metro",
		label: "Yol (metro — alternatif)",
		duration: { kind: "contingent", lo: 40, hi: 70 },
		after: { id: "hazirlik", gap: { lo: 5, hi: 20 } },
		dormant: true,
		onMiss: { kind: "cancel" },
	},
	{
		id: "toplanti",
		label: "Bob ile toplantı",
		duration: { kind: "fixed", min: 60 },
		after: { id: "yol-otobus", gap: { lo: 0, hi: 20 } },
		mustStartBefore: MEETING_DEADLINE,
		federated: { peer: "bob" },
		onMiss: { kind: "alternative", use: "async-inceleme" },
	},
	{
		id: "async-inceleme",
		label: "Asenkron inceleme (toplantı yerine)",
		duration: { kind: "fixed", min: 45 },
		startsAt: 16 * 60,
		dormant: true,
		onMiss: { kind: "wait" },
	},
];

export const BOB_CONTAINERS: Container[] = [
	{
		id: "standup",
		label: "Standup",
		duration: { kind: "fixed", min: 30 },
		startsAt: 9 * 60 + 30,
		rigid: true,
		onMiss: { kind: "wait" },
	},
	{
		id: "derin-calisma",
		label: "Derin çalışma (yer açabilir)",
		duration: { kind: "fixed", min: 120 },
		startsAt: 10 * 60,
		rigid: false,
		onMiss: { kind: "wait" },
	},
	{
		id: "ogle",
		label: "Öğle (sabit)",
		duration: { kind: "fixed", min: 45 },
		startsAt: 12 * 60 + 30,
		rigid: true,
		onMiss: { kind: "wait" },
	},
	{
		id: "kurul",
		label: "Üst kurul (sabit)",
		duration: { kind: "fixed", min: 60 },
		startsAt: 15 * 60,
		rigid: true,
		onMiss: { kind: "wait" },
	},
];

/** Bob'un Alice'e verdiği jeton. Jeton yoksa ne sorgu ne teklif geçer. */
export function freshCapability(): Capability {
	return {
		token: "cap-bob-to-alice-01",
		issuer: "bob",
		holder: "alice",
		grid: 30,
		canQuery: true,
		canPropose: true,
		maxQueries: 6,
		usedQueries: 0,
	};
}

export interface NodeConfig {
	id: string;
	label: string;
	port: number;
	peer?: { id: string; base: string };
	containers: Container[];
	/** bu düğümün elinde tuttuğu jeton (giden çağrılar için) */
	heldCapability?: string;
	/** bu düğümün eşine dağıttığı jeton (her sıfırlamada tazelenir) */
	issues?: () => Capability;
}

export const NODES: Record<string, NodeConfig> = {
	alice: {
		id: "alice",
		label: "Alice — kaskad zinciri",
		port: 4001,
		peer: { id: "bob", base: "http://127.0.0.1:4002" },
		containers: ALICE_CONTAINERS,
		heldCapability: "cap-bob-to-alice-01",
	},
	bob: {
		id: "bob",
		label: "Bob — federe karşı taraf",
		port: 4002,
		peer: { id: "alice", base: "http://127.0.0.1:4001" },
		containers: BOB_CONTAINERS,
		issues: freshCapability,
	},
};

export const PRESETS = [
	{ label: "07:00 — planlandığı gibi", wake: 7 * 60 },
	{ label: "09:10 — geç kalktım", wake: 9 * 60 + 10 },
	{ label: "11:50 — bütçe testi", wake: 11 * 60 + 50 },
	{ label: "12:20 — dal iptali", wake: 12 * 60 + 20 },
];

export const FUEL_STEPS = [200, 2000, 20000];
