/**
 * CTCP demo — çekirdek tipler.
 *
 * Kaskad çözücü, gösterim kolaylığı için tek bir günün "gece yarısından beri
 * geçen dakika" uzayında çalışır. Birim cebri (units.ts) mutlak ms ile çalışır;
 * ikisi bilerek ayrı tutulmuştur (monoton çekirdek vs. sunum takvimi).
 */

export type Min = number;

export interface Interval {
	lo: Min;
	hi: Min;
}

/** Kesinlik damgası. resolve() asla nokta dönmez; aralık + damga döner. */
export type Certainty =
	| "observed"
	| "derived"
	| "budget-truncated"
	| "needs-oracle";

export const CERTAINTY_RANK: Record<Certainty, number> = {
	observed: 0,
	derived: 1,
	"budget-truncated": 2,
	"needs-oracle": 3,
};

/** "İlla bir şey olur" kuralı: her kutucuğun tanımlı bir dalı vardır. */
export type Branch =
	| { kind: "wait" }
	| { kind: "alternative"; use: string }
	| { kind: "cancel" };

export type Duration =
	/** requirement link — süreyi biz kontrol ediyoruz */
	| { kind: "fixed"; min: Min }
	/** contingent link — süreyi kontrol etmiyoruz (trafik, uyku, otobüs) */
	| { kind: "contingent"; lo: Min; hi: Min }
	/**
	 * kod/formül olarak verilen süre. `envelope` zorunludur: bütçe biterse
	 * cevap yanlış olmaz, sadece genişler.
	 */
	| { kind: "formula"; expr: string; envelope: Interval };

export interface Container {
	id: string;
	label: string;
	duration: Duration;
	/** demirlenmiş başlangıç (gözlem veya sabit plan) */
	startsAt?: Min;
	/** gözlem öncesi projeksiyon penceresi */
	startWindow?: Interval;
	after?: { id: string; gap: Interval };
	mustStartBefore?: Min;
	onMiss?: Branch;
	/** yalnızca bir dal tarafından etkinleştirilince devreye girer */
	dormant?: boolean;
	/** federe tarafta: yer açamaz (öğle yemeği, kurul) */
	rigid?: boolean;
	/** bu kutucuk karşı tarafla müzakere edilir */
	federated?: { peer: string };
}

export type ContainerState = "resolved" | "cancelled" | "skipped";

export interface ResolvedContainer {
	id: string;
	label: string;
	state: ContainerState;
	start: Interval;
	end: Interval;
	usedDuration: Interval;
	certainty: Certainty;
	/** aralık bir eşiği kesiyor: karar verilemedi (bütçe artırılınca netleşir) */
	undecided: boolean;
	branchTaken?: string;
	notes: string[];
}

export interface ResolveResult {
	containers: ResolvedContainer[];
	fuelBudget: number;
	fuelUsed: number;
	truncated: boolean;
	certainty: Certainty;
	/** çözümleme cephesi: bundan gerisi değişmez log, ilerisi projeksiyon */
	frontier: Min | null;
}

export interface Capability {
	token: string;
	issuer: string;
	holder: string;
	/** cevap çözünürlüğü (dk). Izgaraya yuvarlama = parmak izi savunması */
	grid: number;
	canQuery: boolean;
	canPropose: boolean;
	maxQueries: number;
	usedQueries: number;
}
