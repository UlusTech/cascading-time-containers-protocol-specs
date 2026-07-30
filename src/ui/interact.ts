/**
 * Bırakmanın anlamı. DOM yok — saf karar.
 *
 * Demonun anlattığı şey burada: bir bloğu taşımak her yerde aynı şey demek
 * değildir. Aynı hareket üç ayrı protokol eylemine karşılık gelir ve her biri
 * farklı bir kesinlik damgası bırakır:
 *
 *   gözlem  → `observeStart`  · cephe ilerler, damga `observed` olur
 *   plan    → `setPlannedStart`· gelecek plan değişir, damga `derived` kalır
 *   teklif  → `propose(start)` · cevabı karşı düğüm verir; kabul de gelir, karşı
 *             teklif de — o yüzden blok bırakıldığı yerde kalmayabilir
 *
 * Sürükleme etiketinin rengi bu üçlüden gelir: kullanıcı bırakmadan önce
 * bloğun hangi damgayı taşıyacağını görür.
 */

import type { ResolvedContainer } from "../types.ts";
import type { Answer, NodeClient } from "./client.ts";
import { fmt, fmtAt } from "./format.ts";
import type { ContainerMeta } from "./payload.ts";

export type DropKind = "observe" | "plan" | "propose" | "none";

/** Etiketin tek kelimelik anlamı — sürükleme rozetinde okunur. */
export const DROP_LABEL: Record<DropKind, string> = {
	observe: "gözlem",
	plan: "plan",
	propose: "teklif",
	none: "taşınamaz",
};

/** Bırakmanın hangi damgaya döneceği; sürükleme rozetinin rengi bu. */
export const DROP_TONE: Record<DropKind, string> = {
	observe: "observed",
	plan: "derived",
	propose: "needs-oracle",
	none: "none",
};

/** Bırakmanın uzun hâli — ayrıntı balonunda "bu bloğu taşırsan ne olur". */
export const DROP_MEANING: Record<DropKind, string> = {
	observe:
		"sürükle = gözlem. Gerçekte kaçta başladığını söylersin; cephe oraya taşınır ve akış aşağısı yeniden çözülür.",
	plan: "sürükle = plan taşıma. Demirlenmiş başlangıç değişir; gözlem değildir, cephe ilerlemez. Müsaitlik cevabın da değişir.",
	propose:
		"sürükle = teklif. Pencere karşı düğüme gider; kabul ederse oraya sabitlenir, etmezse kendi karşı teklifini yollar.",
	none: "bu kutucuk zamana oturmuyor: taşınamaz.",
};

export type ToastTone = "ok" | "warn" | "bad";

export type DropOutcome = {
	text: string;
	tone: ToastTone;
	/** karşı taraf başka bir vakit dayattı: blok oraya kayar */
	landedAt?: number;
};

/**
 * Bırakmanın anlamı kutucuğun demirine bakılarak seçilir:
 *
 *   federe kutucuk        → teklif (cevabı biz vermiyoruz)
 *   `startsAt` taşıyan    → plan taşıma (demir bizde, sabit bir vakit)
 *   bağımlılıktan türeyen → gözlem (tek meşru girdi: gerçekte ne oldu)
 */
export function dropKindOf(
	c: ResolvedContainer,
	meta: ContainerMeta | undefined,
): DropKind {
	if (c.state !== "resolved") return "none";
	if (meta?.federated) return "propose";
	if (meta && meta.startsAt !== null) return "plan";
	return "observe";
}

/** Izgaraya oturt: takvim 5 dakikalık adımlarla düşünür. */
export function snapMin(v: number, step = 5): number {
	return Math.round(v / step) * step;
}

const str = (v: unknown): string | null => (typeof v === "string" ? v : null);
const num = (v: unknown): number | null => (typeof v === "number" ? v : null);
const obj = (v: unknown): Answer | null =>
	typeof v === "object" && v !== null ? (v as Answer) : null;

/** Hata gövdesi iki modda aynı: `{ error, note? }`. */
function errorOf(r: Answer): string | null {
	const e = str(r.error);
	if (e === null) return null;
	const note = str(r.note);
	return note ? `${e} — ${note}` : e;
}

async function applyPropose(
	client: NodeClient,
	c: ResolvedContainer,
	min: number,
	peer: string,
): Promise<DropOutcome> {
	const r = await client.propose(min);
	const failed = errorOf(r);
	if (failed) return { text: `teklif gitmedi: ${failed}`, tone: "bad" };

	const answer = obj(r.answer) ?? {};
	const reason = str(answer.reason) ?? "gerekçe paylaşılmadı";
	const decision = str(answer.decision);
	const counter = num(answer.counterStart);

	if (decision === "accept") {
		return {
			text: `teklif kabul: ${c.label} ${fmt(min)} olarak sabitlendi — ${reason}`,
			tone: "ok",
			landedAt: min,
		};
	}
	if (decision === "counter" && counter !== null) {
		return {
			text: `karşı teklif: ${peer} ${fmt(counter)} dedi — ${reason}`,
			tone: "warn",
			landedAt: counter,
		};
	}
	return {
		text: `${peer} reddetti — ${reason}`,
		tone: "bad",
	};
}

export type DropContext = {
	/** karşı düğümün adı; teklif metninde geçer */
	peer: string | null;
	/** bırakmadan önce toplantı federe bir karşı teklifle sabitlenmiş miydi */
	hadPin: boolean;
};

/**
 * Bırakmayı uygular ve ne olduğunu tek cümlede söyler. Toast metni süs değil:
 * aynı hareketin üç ayrı protokol eylemi olduğunu yalnızca burası anlatıyor.
 */
export async function applyDrop(
	client: NodeClient,
	kind: DropKind,
	c: ResolvedContainer,
	min: number,
	ctx: DropContext,
): Promise<DropOutcome> {
	if (kind === "propose") {
		if (!ctx.peer) return { text: "bu düğümün eşi yok", tone: "bad" };
		return applyPropose(client, c, min, ctx.peer);
	}

	if (kind === "plan") {
		const r = await client.planStart(c.id, min);
		const failed = errorOf(r);
		if (failed) return { text: `plan taşınmadı: ${failed}`, tone: "bad" };
		return {
			text: `plan taşındı: ${c.label} → ${fmt(min)} · müsaitlik cevabın değişti, teklifi yeniden dene`,
			tone: "ok",
			landedAt: min,
		};
	}

	if (kind === "observe") {
		const r = await client.observeStart(c.id, min);
		const failed = errorOf(r);
		if (failed) return { text: `gözlem kaydedilmedi: ${failed}`, tone: "bad" };
		const dropped = ctx.hadPin ? " · toplantı sabitlemesi kalktı" : "";
		return {
			text: `gözlem: ${c.label} ${fmtAt(min)} başladı — kaskad yeniden çözüldü${dropped}`,
			tone: "ok",
			landedAt: min,
		};
	}

	return { text: DROP_MEANING.none, tone: "warn" };
}
