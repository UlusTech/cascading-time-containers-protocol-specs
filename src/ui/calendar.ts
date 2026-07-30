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
 */

import type { ResolvedContainer } from "../types.ts";
import { h, lockGlyph, replace, span, springGlyph } from "./dom.ts";
import {
	CERTAINTY_LABEL,
	fmt,
	fmtDuration,
	fmtInterval,
	widthOf,
} from "./format.ts";
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

export type Calendar = {
	element: HTMLElement;
	update(s: StatePayload): void;
	/** Ölü kutucuk şeridinden gelen "şuna bak" isteği. */
	highlight(id: string, on: boolean): void;
	reveal(id: string): void;
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

function blockTitle(c: ResolvedContainer): string {
	return [
		c.label,
		`başlangıç ${fmtInterval(c.start)}  (±${widthOf(c.start)} dk)`,
		`bitiş     ${fmtInterval(c.end)}  (±${widthOf(c.end)} dk)`,
		`süre      ${fmtDuration(c.usedDuration)}`,
		`kesinlik  ${c.certainty}`,
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

export function createCalendar(): Calendar {
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
	const element = h("section", { class: "cal" }, grid, legend());

	const blocks = new Map<string, BlockView>();
	let axis: Span = { lo: 0, hi: 0 };

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

		const cls = ["blk", `c-${c.certainty}`];
		if (milestone) cls.push("is-milestone");
		if (c.undecided) cls.push("is-undecided");
		if (hasNoCore(c) && !milestone) cls.push("no-core");
		view.root.className = cls.join(" ");
		view.root.title = blockTitle(c);

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

	function update(s: StatePayload): void {
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
	};
}
