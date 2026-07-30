/// <reference lib="dom" />

/**
 * Gün başlığı — takvimin üstüne yapışır.
 *
 * Google Calendar'da sütunun tepesinde günün adı durur; burada da öyle, ama bir
 * satır daha var: günün **durumu**. Cephe nerede, genel kesinlik damgası ne,
 * belirsizlik kaç dakika. Bu üçlü blokların rengiyle aynı dili konuşur, o yüzden
 * ayrı bir gösterge paneli değil, başlığın ikinci satırı.
 */

import { h, span } from "./dom.ts";
import { CERTAINTY_LABEL, fmt } from "./format.ts";
import { totalUncertainty } from "./layout.ts";
import type { StatePayload } from "./payload.ts";

export type DayHead = { element: HTMLElement; update(s: StatePayload): void };

const DAY_FMT: Intl.DateTimeFormatOptions = { weekday: "long" };
const DATE_FMT: Intl.DateTimeFormatOptions = { day: "numeric", month: "long" };

function parseDay(iso: string): Date {
	const d = new Date(iso);
	return Number.isNaN(d.getTime()) ? new Date() : d;
}

export function createDayHead(): DayHead {
	const dayName = h("b", { class: "day-name" }, "—");
	const dayDate = span("day-date");
	const frontier = span("strip-item");
	const stamp = span("strip-stamp");
	const spread = span("strip-item strip-spread");

	const element = h(
		"header",
		{ class: "cal-head" },
		h("div", { class: "cal-head-row" }, dayName, dayDate, span("day-dot")),
		h("div", { class: "cal-strip" }, frontier, stamp, spread),
	);

	function update(s: StatePayload): void {
		const day = parseDay(s.units.nowIso);
		dayName.textContent = day.toLocaleDateString("tr-TR", DAY_FMT);
		dayDate.textContent = day.toLocaleDateString("tr-TR", DATE_FMT);

		frontier.textContent =
			s.plan.frontier === null
				? "cephe yok · gün baştan sona projeksiyon"
				: `cephe ${fmt(s.plan.frontier)}`;
		stamp.textContent = CERTAINTY_LABEL[s.plan.certainty] ?? s.plan.certainty;
		stamp.className = `strip-stamp c-${s.plan.certainty}`;
		spread.textContent = `±${totalUncertainty(s.plan.containers)} dk`;
	}

	return { element, update };
}
