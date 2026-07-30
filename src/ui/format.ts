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

/**
 * Bulunma hâli eki, okunan son sayı sözcüğüne göre: 09:30'**da**, 11:00'**de**,
 * 10:45'**te**, 12:40'**ta**. Ek, sayının son sözcüğünün ünlü ve ünsüz uyumundan
 * gelir; tablo o sözcükleri temsil eder (0 sıfır … 50 elli).
 */
const LOCATIVE: Record<number, string> = {
	0: "da",
	1: "de",
	2: "de",
	3: "te",
	4: "te",
	5: "te",
	6: "da",
	7: "de",
	8: "de",
	9: "da",
	10: "da",
	20: "de",
	30: "da",
	40: "ta",
	50: "de",
};

/** `09:30'da` — bildirim metinlerinde saat, ek alarak cümleye girer. */
export function fmtAt(min: number): string {
	const m = ((Math.round(min) % 1440) + 1440) % 1440;
	const mm = m % 60;
	const spoken = mm === 0 ? Math.floor(m / 60) : mm;
	const tail = spoken % 10 === 0 ? spoken : spoken % 10;
	return `${fmt(min)}'${LOCATIVE[tail] ?? "da"}`;
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
