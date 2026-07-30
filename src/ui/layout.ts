/**
 * Takvim geometrisi — saf hesap, DOM yok.
 *
 * Buradaki tek fikir şu: bir kutucuk dikdörtgen değildir. Başlangıcın ve
 * bitişin kendi aralıkları vardır; arada kalan parça "kesin" olan tek yerdir.
 * Yakıt bütçesi düşünce zarf genişler, çekirdek erir; blok da uzar. Demonun
 * anlattığı şey bu, o yüzden ölçek dakikadan piksele burada çevrilir.
 */

import type { ResolvedContainer } from "../types.ts";
import { widthOf } from "./format.ts";

export type Span = { lo: number; hi: number };

/** Varsayılan görünür pencere: 06:00 – 17:30. Gerekirse dışa doğru büyür. */
export const AXIS_BASE: Span = { lo: 6 * 60, hi: 17 * 60 + 30 };

/** Bir şeritteki en dar blok genişliği; altına inince bloklar kaskatlanır. */
const MIN_LANE_PX = 96;
const LANE_GAP_PX = 4;

/** Blokun kapladığı toplam zaman: en erken başlangıçtan en geç bitişe. */
export function extentOf(c: ResolvedContainer): Span {
	return { lo: c.start.lo, hi: c.end.hi };
}

/** Genişliği sıfır olan kutucuk blok değil, işaret çizgisidir (ör. uyanış). */
export function isMilestone(c: ResolvedContainer): boolean {
	const e = extentOf(c);
	return e.hi - e.lo === 0;
}

/** Takvimde yeri olan kutucuklar: yalnızca çözülenler zamana oturur. */
export function isLive(c: ResolvedContainer): boolean {
	return c.state === "resolved";
}

/**
 * Eksen aralığı. Taban pencereyi kapsar, taşan blokları içine alır, saate
 * yuvarlanır — böylece saat çizgileri ızgarayla hizalı kalır.
 */
export function axisSpan(cs: ResolvedContainer[], marks: number[] = []): Span {
	let lo = AXIS_BASE.lo;
	let hi = AXIS_BASE.hi;
	for (const c of cs.filter(isLive)) {
		const e = extentOf(c);
		lo = Math.min(lo, e.lo);
		hi = Math.max(hi, e.hi);
	}
	for (const m of marks) {
		lo = Math.min(lo, m);
		hi = Math.max(hi, m);
	}
	return {
		lo: Math.max(0, Math.floor(lo / 60) * 60),
		hi: Math.min(1440, Math.ceil(hi / 60) * 60),
	};
}

function overlaps(a: Span, b: Span): boolean {
	return a.lo < b.hi && b.lo < a.hi;
}

/**
 * Çakışan bloklar üst üste binmesin: her biri ilk boş şeride girer. Otobüs ve
 * metro alternatifleri, ya da gözlem öncesi tamamen iç içe geçmiş projeksiyon
 * pencereleri bu yüzden ayrı sütunlarda durur.
 */
export function packLanes(items: Array<{ id: string; span: Span }>): {
	lanes: Map<string, number>;
	count: number;
} {
	const sorted = [...items].sort((a, b) => a.span.lo - b.span.lo);
	const tails: Span[][] = [];
	const lanes = new Map<string, number>();

	for (const item of sorted) {
		let target = tails.findIndex((lane) =>
			lane.every((s) => !overlaps(s, item.span)),
		);
		if (target === -1) {
			tails.push([]);
			target = tails.length - 1;
		}
		tails[target]?.push(item.span);
		lanes.set(item.id, target);
	}
	return { lanes, count: Math.max(1, tails.length) };
}

export type ZoneKind = "start" | "core" | "fuzzy" | "end";
export type Zone = { kind: ZoneKind; lo: number; hi: number };

/**
 * Blokun içi — daima üç ardışık dilim, hiç çakışmadan tüm bloku kaplar:
 *
 *   1. başlangıç aralığı (taralı: henüz başlamış olabilir de olmayabilir de)
 *   2. orta dilim — `start.hi <= end.lo` ise KESİN çekirdek (dolu çizilir),
 *      değilse blok bitmiş de olabilir: çift belirsiz, o da taralı
 *   3. bitiş aralığı (taralı)
 *
 * Dilim sayısı sabit tutuldu ki yakıt değişince aynı elemanlar yer değiştirsin
 * ve geçiş animasyonu görünsün; yeniden kurulan bloklar animasyon yapmaz.
 */
export function zonesOf(c: ResolvedContainer): [Zone, Zone, Zone] {
	const mid0 = Math.min(c.start.hi, c.end.lo);
	const mid1 = Math.max(c.start.hi, c.end.lo);
	return [
		{ kind: "start", lo: c.start.lo, hi: mid0 },
		{ kind: c.start.hi <= c.end.lo ? "core" : "fuzzy", lo: mid0, hi: mid1 },
		{ kind: "end", lo: mid1, hi: c.end.hi },
	];
}

/** Kesin çekirdeği olmayan blok — arayüzde ayrıca söylenmesi gerekir. */
export function hasNoCore(c: ResolvedContainer): boolean {
	return c.start.hi >= c.end.lo;
}

/**
 * Şeridin yatay yeri. Panel daralınca şerit genişliği tabana dayanır ve
 * bloklar birbirinin üstüne kaskatlanır; etiketler yine soldan okunur.
 */
export function laneGeom(
	lane: number,
	count: number,
): { left: string; width: string } {
	const width =
		count === 1
			? "100%"
			: `max(${MIN_LANE_PX}px, calc(${(100 / count).toFixed(3)}% - ${LANE_GAP_PX}px))`;
	const frac = count === 1 ? 0 : lane / (count - 1);
	return {
		width,
		left: frac === 0 ? "0px" : `calc(${frac.toFixed(4)} * (100% - ${width}))`,
	};
}

/**
 * Demonun tek sayısı: çözülen kutucukların bitiş aralıkları toplamı. Yakıt
 * bütçesi düşünce bu sayı büyür — cevap yanlışlaşmaz, sadece genişler.
 */
export function totalUncertainty(cs: ResolvedContainer[]): number {
	return cs.filter(isLive).reduce((sum, c) => sum + widthOf(c.end), 0);
}

/** Saat etiketleri: eksenin kapsadığı her tam saat. */
export function hourMarks(axis: Span): number[] {
	const out: number[] = [];
	for (let m = axis.lo; m <= axis.hi; m += 60) out.push(m);
	return out;
}
