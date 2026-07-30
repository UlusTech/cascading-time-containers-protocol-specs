/**
 * Arayüzün gördüğü tam durum yükü.
 *
 * Bu tip {@linkcode createNodeCore}'un `statePayload()` çıktısının aynasıdır:
 * HTTP'den gelse de sayfa içi çağrıdan gelse de panel yalnızca bunu tanır.
 * Çekirdekte bir alan değişirse burada da değişmeli.
 */

import type { Certainty, Interval, ResolvedContainer } from "../types.ts";

/** Kutucuğun protokol kimliği — plan çıktısında olmayan statik nitelikler. */
export type ContainerMeta = {
	id: string;
	kind: string;
	onMiss: string;
	rigid: boolean;
	federated: boolean;
	/** demirlenmiş planlı başlangıç; yoksa başlangıç bağımlılıktan türer */
	startsAt: number | null;
	/** senaryodan değil, kullanıcıdan gelen kutucuk — silinebilir */
	custom: boolean;
};

/**
 * Arayüzden gönderilen yeni kutucuk tarifi. Çekirdeğin `addContainer` yüzeyinin
 * aynası: tam olarak bir demir (`startsAt` YA DA `after`) ve geçerli bir süre
 * tanımı zorunlu, aksi hâlde `422` döner.
 */
export type ContainerSpec = {
	label: string;
	startsAt?: number;
	after?: { id: string; gapLo: number; gapHi: number };
	duration:
		| { kind: "fixed"; min: number }
		| { kind: "contingent"; lo: number; hi: number };
	onMiss?: "wait" | "cancel";
	rigid?: boolean;
	mustStartBefore?: number;
};

export type CapabilityView = {
	token: string;
	holder: string;
	grid: number;
	usedQueries: number;
	maxQueries: number;
};

/**
 * Bir hilal-ayı çözümü. `envelope` yalnızca gözlenmemiş (dynamic) aylarda
 * bulunur: ay gözlenince alan kaybolur ve birim `eventually-static` olur. Tip
 * bunu opsiyonel tutmak zorunda — sınıf geçişi demonun anlattığı şeyin parçası.
 */
export type HilalView = {
	index: number;
	class: string;
	days: number | null;
	envelope?: Interval;
	certainty: string;
	note: string;
};

export type LogEntryView = {
	seq: number;
	lamport: number;
	wall: string;
	kind: string;
	note: string;
};

export type StatePayload = {
	node: { id: string; label: string; port: number; peer: string | null };
	lamport: number;
	input: {
		observations: Record<string, number>;
		forcedMiss: string[];
		pins: Record<string, number>;
		fuelBudget: number;
		fuelSteps: number[];
		presets: Array<{ label: string; wake: number }>;
		plannedWake: number;
		deadline: number;
		/** sürüklemeyle taşınmış planlı başlangıçlar (id → dakika) */
		plannedStarts: Record<string, number>;
	};
	plan: {
		containers: ResolvedContainer[];
		fuelBudget: number;
		fuelUsed: number;
		truncated: boolean;
		certainty: Certainty;
		frontier: number | null;
	};
	containers: ContainerMeta[];
	capabilities: { held: string | null; issued: CapabilityView[] };
	federation: Array<Record<string, unknown>>;
	units: {
		nowIso: string;
		ulus: { path: string };
		carry: { before: string; addGun: number; after: string; note: string };
		table: { declarations: string[] };
		hilal: {
			envelope: Interval;
			observed: Record<string, number>;
			past: HilalView;
			future: HilalView;
		};
	};
	log: LogEntryView[];
};

/**
 * Alice'e özgü yetenekler (son başlama çizgisi, teklif düğmesi) yalnızca federe
 * kutucuğu olan düğümde açılır. Eş varlığına bakmak yetmez: simülasyonda iki
 * çekirdeğin de eşi vardır ama toplantıyı yalnızca biri taşır.
 */
export function isProposer(s: StatePayload): boolean {
	return s.containers.some((c) => c.federated);
}
