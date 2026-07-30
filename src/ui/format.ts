/**
 * Biçimlendirme — DOM'a dokunmaz.
 *
 * Kaskad dakika uzayında (gece yarısından beri) çalışır; burada yalnızca o
 * uzayın okunur hâli üretilir. Aralıklar bilerek "lo – hi" olarak yazılır:
 * tek sayı görmek, protokolün asla vermediği bir kesinlik hissi yaratır.
 */

import type { Interval } from "../types.ts";

/** Dakikayı `ss:dd` yapar; gün taşmasını sarar. */
export function fmt(min: number): string {
	const m = ((Math.round(min) % 1440) + 1440) % 1440;
	const h = String(Math.floor(m / 60)).padStart(2, "0");
	return `${h}:${String(m % 60).padStart(2, "0")}`;
}

/** Nokta gibi görünen aralık tek saat yazılır, gerisi `lo – hi`. */
export function fmtInterval(i: Interval): string {
	return i.lo === i.hi ? fmt(i.lo) : `${fmt(i.lo)} – ${fmt(i.hi)}`;
}

/** Süre aralığı; kontrol etmediğimiz süreler için genişlik görünür kalır. */
export function fmtDuration(i: Interval): string {
	return i.lo === i.hi ? `${i.lo} dk` : `${i.lo}–${i.hi} dk`;
}

/** Aralık genişliği — belirsizliğin dakika cinsinden ölçüsü. */
export function widthOf(i: Interval): number {
	return i.hi - i.lo;
}

/** `<input type="time">` değerini dakikaya çevirir. */
export function toMin(hhmm: string): number {
	const [h = "0", m = "0"] = hhmm.split(":");
	return Number(h) * 60 + Number(m);
}

/** Türkçe kesinlik damgası etiketleri — damganın kendisi teknik terim kalır. */
export const CERTAINTY_LABEL: Record<string, string> = {
	observed: "gözlenen",
	derived: "türetilen",
	"budget-truncated": "bütçe kesti",
	"needs-oracle": "oracle bekliyor",
};

export const STATE_LABEL: Record<string, string> = {
	resolved: "çözüldü",
	cancelled: "iptal",
	skipped: "atlandı",
};

/** Dalın ne yaptığını tek kelimeyle söyler. */
export const BRANCH_LABEL: Record<string, string> = {
	wait: "bekle",
	alternative: "alternatif",
	cancel: "iptal",
};
