/**
 * Birim cebri — karma tabanlı (mixed-radix) konumsal zaman sistemi.
 *
 * Üç birim sınıfı ayrı ayrı gösterilir:
 *
 *  1. static            — afin veya tablo ile çevrilir, offline çevrilebilir.
 *                         (ulus-zamanı: 1 dilim = 72 an, 1 gün = 20 dilim)
 *  2. eventually-static — geçmişi gözlemlenince sonsuza kadar sabit,
 *                         geleceği oracle gerektirir. (hilal-ayı / Hicri)
 *  3. dynamic           — her sorguda hesaplanır, offline çevrilemez.
 *
 * "Yıllar birbirini ittirir" ifadesinin statik hali tam olarak **elde (carry)**:
 * bu dosya kaskadın aritmetik modunu, cascade.ts kısıt modunu uygular.
 */

/** Ulus Zamanı sıfır noktası: 6 Şubat 2023, 04:17 TRT (01:17 UTC). */
export const ANCHOR_MS = Date.UTC(2023, 1, 6, 1, 17, 0, 0);

export const MS_PER_AN = 60_000;
export const AN_PER_DILIM = 72;
export const DILIM_PER_GUN = 20;
export const AN_PER_GUN = AN_PER_DILIM * DILIM_PER_GUN; // 1440 → tam bir güneş günü
/** Düzensiz seviye: tabanın kendisi bir fonksiyon (ayların eşit olmaması gibi) */
export const DEVRE_TABLE = [40, 37, 41, 39, 43];
export const GUN_PER_DONEM = DEVRE_TABLE.reduce((a, b) => a + b, 0); // 200

export interface UlusStamp {
	donem: number;
	devre: number;
	gun: number;
	dilim: number;
	an: number;
	/** ağaçta bir yol = adresleme; leksikografik sıra = zaman sırası */
	path: string;
}

export function msToUlus(ms: number): UlusStamp {
	let an = Math.floor((ms - ANCHOR_MS) / MS_PER_AN);
	const gunTotal = Math.floor(an / AN_PER_GUN);
	an -= gunTotal * AN_PER_GUN;
	const dilim = Math.floor(an / AN_PER_DILIM);
	an -= dilim * AN_PER_DILIM;

	const donem = Math.floor(gunTotal / GUN_PER_DONEM);
	let rest = gunTotal - donem * GUN_PER_DONEM;
	let devre = 0;
	for (const len of DEVRE_TABLE) {
		if (rest < len) break;
		rest -= len;
		devre++;
	}
	return {
		donem,
		devre,
		gun: rest,
		dilim,
		an,
		path: `D${donem}/V${devre}/G${rest}/S${dilim}/A${an}`,
	};
}

export function ulusToMs(s: Omit<UlusStamp, "path">): number {
	let gunTotal = s.donem * GUN_PER_DONEM;
	gunTotal += DEVRE_TABLE.slice(0, s.devre).reduce((a, b) => a + b, 0);
	gunTotal += s.gun;
	const an = gunTotal * AN_PER_GUN + s.dilim * AN_PER_DILIM + s.an;
	return ANCHOR_MS + an * MS_PER_AN;
}

/** Elde (carry) gösterimi: düzensiz seviyede taşma nasıl görünür. */
export function carryDemo(ms: number): {
	before: string;
	addGun: number;
	after: string;
	note: string;
} {
	const s = msToUlus(ms);
	const devreLen = DEVRE_TABLE[s.devre] ?? GUN_PER_DONEM;
	const addGun = devreLen - s.gun; // devrenin sonuna kadar
	const after = msToUlus(ulusToMs({ ...s, gun: s.gun + addGun }));
	return {
		before: s.path,
		addGun,
		after: after.path,
		note: `V${s.devre} uzunluğu ${devreLen} gün; +${addGun} gün eklenince elde bir üst seviyeye taşındı.`,
	};
}

/** Başka bir sunucunun offline çevirmesi için yeterli olan bildirim. */
export function compatibilityTable() {
	return {
		system: "ulus-zamanı",
		class: "static" as const,
		offlineConvertible: true,
		anchor: {
			iso: new Date(ANCHOR_MS).toISOString(),
			note: "6 Şubat 2023 04:17 TRT",
		},
		levels: [
			{ name: "an", ms: MS_PER_AN },
			{ name: "dilim", per: AN_PER_DILIM, of: "an" },
			{ name: "gün", per: DILIM_PER_GUN, of: "dilim" },
			{
				name: "devre",
				perTable: DEVRE_TABLE,
				of: "gün",
				note: "taban sabit değil, tablo",
			},
			{ name: "dönem", per: DEVRE_TABLE.length, of: "devre" },
		],
		declarations: [
			"1 dilim = 72 an",
			"1 gün = 20 dilim = 1440 an",
			"1 dönem = 200 gün",
		],
	};
}

/* ------------------------------------------------------------------ *
 * Sınıf 2/3: gözleme dayalı birim (Hicri ay mantığı)
 * ------------------------------------------------------------------ */

export interface HilalState {
	/** ay indeksi -> gözlemlenmiş uzunluk (gün). Gözlemlenen ay sonsuza dek sabit. */
	observed: Record<number, number>;
}

export const HILAL_ENVELOPE = { lo: 29, hi: 30 };

export function resolveHilal(index: number, st: HilalState) {
	const days = st.observed[index];
	if (days !== undefined) {
		return {
			index,
			class: "eventually-static" as const,
			days,
			certainty: "observed" as const,
			offlineConvertible: true,
			note: "gözlem cepheden geride kaldı; bu ay artık sabit ve önbelleklenebilir",
		};
	}
	return {
		index,
		class: "dynamic" as const,
		days: null,
		envelope: HILAL_ENVELOPE,
		certainty: "needs-oracle" as const,
		offlineConvertible: false,
		note: "gözlem yok: offline çevrilemez, resolve çağrısı gerekir (aralık döner)",
	};
}
