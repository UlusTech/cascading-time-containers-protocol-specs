/// <reference lib="dom" />

/**
 * Takvim çizimi.
 *
 * Google Calendar'ın dikey ekseni, ama bloklar dikdörtgen değil: her blokun
 * başı ve sonu taralı bir belirsizlik bölgesi, ortası kesin çekirdek. Yakıt
 * bütçesi düşünce zarf genişler ve bloklar gözle görülür şekilde uzar — demonun
 * söylediği şey bu.
 *
 * Bloklar her çizimde yeniden kurulmaz: id başına bir eleman tutulur, yalnızca
 * ölçü değişkenleri güncellenir. Yeniden kurulan eleman son geometrisiyle
 * doğar, yani CSS geçişi hiç tetiklenmez ve "uzama" görünmez.
 *
 * Etkileşim buradan geçer ama anlamı burada değil: takvim bir bloğun nereye
 * bırakıldığını bilir, bunun **ne demek olduğunu** `interact.ts` bilir. Blok
 * bırakıldığı yere iyimser olarak yerleşir; sunucu başka bir vakit dayatırsa
 * (karşı teklif) oraya kayarak gider — protokolün kullanıcıyı geçtiği an görünür.
 */

import type { ResolvedContainer } from "../types.ts";
import { createDayHead } from "./dayhead.ts";
import { h, lockGlyph, replace, span, springGlyph } from "./dom.ts";
import { type Anchor, createDragLayer, type DragTarget } from "./drag.ts";
import {
	CERTAINTY_LABEL,
	fmt,
	fmtDuration,
	fmtInterval,
	widthOf,
} from "./format.ts";
import { DROP_LABEL, type DropKind, dropKindOf } from "./interact.ts";
import {
	axisSpan,
	extentOf,
	hasNoCore,
	hourMarks,
	isLive,
	isMilestone,
	laneGeom,
	packLanes,
	type Span,
	zonesOf,
} from "./layout.ts";
import { isProposer, type StatePayload } from "./payload.ts";

type BlockView = {
	root: HTMLElement;
	zones: HTMLElement[];
	title: HTMLElement;
	time: HTMLElement;
	marks: HTMLElement;
};

/** Takvimin panele geri konuşma yolu; eylemlerin anlamı panelde kararlaşır. */
export type CalendarHooks = {
	/** blok bırakıldı: `id` kutucuğu `min` dakikasına taşındı */
	drop(id: string, min: number): void;
	/** boş alan: verilen vakitte verilen süreyle yeni kutucuk */
	create(min: number, minutes: number, at: Anchor): void;
	/** bloğa tıklandı: ayrıntı balonu */
	open(id: string, at: Anchor): void;
	/** sürükleme sürüyor: yoklama durur */
	hold(on: boolean): void;
};

export type CalendarOptions = { longPressMs?: number };

export type Calendar = {
	element: HTMLElement;
	update(s: StatePayload): void;
	/** Ölü kutucuk şeridinden gelen "şuna bak" isteği. */
	highlight(id: string, on: boolean): void;
	reveal(id: string): void;
	/** Karşı teklif geldi: blok kısa süre vurgulanır. */
	flash(id: string): void;
	stop(): void;
};

const LEGEND: Array<[string, string]> = [
	["observed", CERTAINTY_LABEL.observed ?? "observed"],
	["derived", CERTAINTY_LABEL.derived ?? "derived"],
	["budget-truncated", CERTAINTY_LABEL["budget-truncated"] ?? "truncated"],
	["needs-oracle", CERTAINTY_LABEL["needs-oracle"] ?? "oracle"],
];

function legend(): HTMLElement {
	return h(
		"div",
		{ class: "legend" },
		...LEGEND.map(([key, label]) =>
			span(`legend-item c-${key}`, span("swatch"), label),
		),
		span("legend-item legend-hatch", span("swatch hatch"), "belirsiz aralık"),
	);
}

function blockTitle(c: ResolvedContainer, kind: DropKind): string {
	return [
		c.label,
		`başlangıç ${fmtInterval(c.start)}  (±${widthOf(c.start)} dk)`,
		`bitiş     ${fmtInterval(c.end)}  (±${widthOf(c.end)} dk)`,
		`süre      ${fmtDuration(c.usedDuration)}`,
		`kesinlik  ${c.certainty}`,
		kind === "none" ? "taşınamaz" : `sürükle   → ${DROP_LABEL[kind]}`,
		...c.notes.map((n) => `· ${n}`),
	].join("\n");
}

function createBlock(): BlockView {
	const zones = ["start", "mid", "end"].map((k) =>
		h("div", { class: `zone z-${k}` }),
	);
	const title = span("blk-title");
	const time = span("blk-time");
	const marks = span("blk-marks");
	const root = h(
		"article",
		{ class: "blk" },
		...zones,
		h("div", { class: "blk-body" }, title, time, marks),
	);
	return { root, zones, title, time, marks };
}

const FLASH_MS = 1100;

export function createCalendar(
	hooks: CalendarHooks,
	opts: CalendarOptions = {},
): Calendar {
	const axisCol = h("div", { class: "axis" });
	const lanes = h("div", { class: "lanes" });
	const settled = h("div", { class: "settled", hidden: true });
	const frontierMark = h(
		"div",
		{ class: "hline frontier", hidden: true },
		span("hline-tag"),
	);
	const deadlineMark = h(
		"div",
		{ class: "hline deadline", hidden: true },
		span("hline-tag"),
	);
	lanes.append(settled, frontierMark, deadlineMark);

	const grid = h("div", { class: "cal-grid" }, axisCol, lanes);
	const head = createDayHead();
	const element = h("section", { class: "cal" }, head.element, grid, legend());

	const blocks = new Map<string, BlockView>();
	let axis: Span = { lo: 0, hi: 0 };
	let state: StatePayload | null = null;
	const flashTimers = new Map<string, ReturnType<typeof setTimeout>>();

	const place = (el: HTMLElement, from: number, to: number): void => {
		el.style.setProperty("--top", String(from - axis.lo));
		el.style.setProperty("--h", String(Math.max(0, to - from)));
	};

	function drawAxis(next: Span): void {
		if (next.lo === axis.lo && next.hi === axis.hi) return;
		axis = next;
		grid.style.setProperty("--axis-min", String(axis.hi - axis.lo));
		replace(
			axisCol,
			...hourMarks(axis).map((m) => {
				const tick = h("div", { class: "tick" }, span("tick-label", fmt(m)));
				tick.style.setProperty("--top", String(m - axis.lo));
				return tick;
			}),
		);
	}

	function drawBlock(
		c: ResolvedContainer,
		s: StatePayload,
		lane: number,
		laneCount: number,
		showRigidity: boolean,
	): void {
		let view = blocks.get(c.id);
		if (!view) {
			view = createBlock();
			blocks.set(c.id, view);
			lanes.append(view.root);
		}
		const meta = s.containers.find((m) => m.id === c.id);
		const milestone = isMilestone(c);
		const ext = extentOf(c);

		const kind = dropKindOf(c, meta);
		// geçici vurgular yeniden çizimde silinmesin (vurgu · karşı teklif)
		const kept = ["is-lit", "is-counter"].filter((k) =>
			view.root.classList.contains(k),
		);
		const cls = ["blk", `c-${c.certainty}`, ...kept];
		if (milestone) cls.push("is-milestone");
		if (c.undecided) cls.push("is-undecided");
		if (hasNoCore(c) && !milestone) cls.push("no-core");
		if (kind !== "none") cls.push("can-drag");
		view.root.className = cls.join(" ");
		view.root.title = blockTitle(c, kind);
		// klavye: blok odaklanabilir, Enter ayrıntıyı açar (sürükleme fare/dokunma)
		view.root.tabIndex = kind === "none" ? -1 : 0;

		const geom = milestone
			? { left: "0px", width: "100%" }
			: laneGeom(lane, laneCount);
		view.root.style.left = geom.left;
		view.root.style.width = geom.width;
		view.root.style.zIndex = String(milestone ? 40 : 10 + lane);
		place(view.root, ext.lo, ext.hi);

		for (const [i, z] of zonesOf(c).entries()) {
			const el = view.zones[i];
			if (!el) continue;
			el.className = `zone z-${z.kind}`;
			el.style.setProperty("--top", String(z.lo - ext.lo));
			el.style.setProperty("--h", String(z.hi - z.lo));
		}

		view.title.textContent = c.label;
		view.time.textContent = milestone
			? fmt(c.start.lo)
			: `${fmtInterval(c.start)} → ${fmtInterval(c.end)}`;

		replace(
			view.marks,
			c.undecided && span("badge badge-loud", "KARARSIZ"),
			c.certainty === "budget-truncated" &&
				span("badge badge-warn", "envelope"),
			meta?.federated && span("badge", "federe"),
			showRigidity &&
				meta?.rigid &&
				span("badge badge-icon", lockGlyph(), "sabit"),
			showRigidity &&
				meta &&
				!meta.rigid &&
				span("badge badge-icon", springGlyph(), "esnek"),
		);
	}

	/**
	 * Olay hedefinden bloğu bulur. Blokun içi (bölgeler) olayı yakalar, o yüzden
	 * ağaçta yukarı yürünür; `.lanes`'e varılırsa boş alan sürüklenmiştir.
	 */
	function targetOf(el: EventTarget | null): DragTarget | null {
		let node: Node | null = el instanceof Node ? el : null;
		while (node && node !== lanes) {
			const hit = [...blocks.entries()].find(([, v]) => v.root === node);
			if (hit) {
				const c = state?.plan.containers.find((x) => x.id === hit[0]);
				if (!c) return null;
				const ext = extentOf(c);
				return {
					id: c.id,
					from: c.start.lo,
					span: Math.max(0, ext.hi - ext.lo),
					kind: dropKindOf(
						c,
						state?.containers.find((m) => m.id === c.id),
					),
				};
			}
			node = node.parentNode;
		}
		return null;
	}

	const drag = createDragLayer({
		surface: lanes,
		axis: () => axis,
		targetOf,
		longPressMs: opts.longPressMs,
		onActive: (on) => {
			lanes.classList.toggle("is-dragging", on);
			hooks.hold(on);
		},
		onMove: (t, min) => {
			// iyimser yerleşim: blok bırakıldığı yere gider. Sunucu başka bir
			// vakit dayatırsa yeniden çizim onu oraya kaydırır (geçiş animasyonu).
			blocks.get(t.id)?.root.style.setProperty("--top", String(min - axis.lo));
			hooks.drop(t.id, min);
		},
		onTap: (t, at) => hooks.open(t.id, at),
		onCreate: (min, minutes, at) => hooks.create(min, minutes, at),
	});

	/** Klavye eşdeğeri: odaklı blokta Enter/Boşluk ayrıntı balonunu açar. */
	function onKey(e: Event): void {
		const key = (e as KeyboardEvent).key;
		if (key !== "Enter" && key !== " ") return;
		const hit = targetOf(e.target);
		if (!hit) return;
		e.preventDefault();
		const rect = (blocks.get(hit.id)?.root ?? lanes).getBoundingClientRect();
		hooks.open(hit.id, { x: rect.left, y: rect.bottom });
	}
	lanes.addEventListener("keydown", onKey);

	function flash(id: string): void {
		const view = blocks.get(id);
		if (!view) return;
		const prev = flashTimers.get(id);
		if (prev !== undefined) clearTimeout(prev);
		view.root.classList.add("is-counter");
		flashTimers.set(
			id,
			setTimeout(() => {
				view.root.classList.remove("is-counter");
				flashTimers.delete(id);
			}, FLASH_MS),
		);
	}

	function update(s: StatePayload): void {
		state = s;
		head.update(s);
		const live = s.plan.containers.filter(isLive);
		const proposer = isProposer(s);
		const marks: number[] = [];
		if (proposer) marks.push(s.input.deadline);
		if (s.plan.frontier !== null) marks.push(s.plan.frontier);
		drawAxis(axisSpan(s.plan.containers, marks));

		const packed = packLanes(
			live
				.filter((c) => !isMilestone(c))
				.map((c) => ({ id: c.id, span: extentOf(c) })),
		);
		const showRigidity = s.containers.some((m) => m.rigid);
		for (const c of live) {
			drawBlock(c, s, packed.lanes.get(c.id) ?? 0, packed.count, showRigidity);
		}

		const liveIds = new Set(live.map((c) => c.id));
		for (const [id, view] of blocks) {
			if (liveIds.has(id)) continue;
			view.root.remove();
			blocks.delete(id);
		}

		const frontier = s.plan.frontier;
		settled.hidden = frontier === null;
		frontierMark.hidden = frontier === null;
		if (frontier !== null) {
			place(settled, axis.lo, frontier);
			place(frontierMark, frontier, frontier);
			const tag = frontierMark.querySelector(".hline-tag");
			if (tag) tag.textContent = `cephe ${fmt(frontier)}`;
		}

		deadlineMark.hidden = !proposer;
		if (proposer) {
			place(deadlineMark, s.input.deadline, s.input.deadline);
			const tag = deadlineMark.querySelector(".hline-tag");
			if (tag) tag.textContent = `son başlama ${fmt(s.input.deadline)}`;
		}
	}

	return {
		element,
		update,
		highlight: (id, on) => blocks.get(id)?.root.classList.toggle("is-lit", on),
		reveal: (id) =>
			blocks
				.get(id)
				?.root.scrollIntoView({ block: "nearest", behavior: "smooth" }),
		flash,
		stop: () => {
			for (const t of flashTimers.values()) clearTimeout(t);
			flashTimers.clear();
			lanes.removeEventListener("keydown", onKey);
			drag.stop();
		},
	};
}
