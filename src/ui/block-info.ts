/// <reference lib="dom" />

/**
 * Blok ayrıntısı balonu.
 *
 * Takvimde bir bloğa dokununca ne görmek istenir: kaçta başlıyor, kaçta bitiyor,
 * ne kadar sürüyor. Burada üçü de **aralık** olarak yazılıdır ve yanında
 * kesinlik damgası durur — K1'in arayüzdeki yüzü. Bir satır fazladan var:
 * "bu bloğu sürüklersen ne olur". Aynı hareketin üç ayrı protokol eylemi olduğu
 * ancak söylenirse öğrenilir.
 *
 * Sonradan eklenen kutucuklarda silme düğmesi çıkar. Bağımlısı olan kutucuk
 * silinemez (`409`): kaskad kendi bütünlüğünü korur, arayüz onu gizlemez.
 */

import type { ResolvedContainer } from "../types.ts";
import type { NodeClient } from "./client.ts";
import type { PanelBus } from "./controls.ts";
import { button, h, lockGlyph, span, springGlyph } from "./dom.ts";
import type { Anchor } from "./drag.ts";
import {
	BRANCH_LABEL,
	CERTAINTY_LABEL,
	fmtDuration,
	fmtInterval,
	widthOf,
} from "./format.ts";
import { DROP_MEANING, DROP_TONE, dropKindOf } from "./interact.ts";
import { hasNoCore } from "./layout.ts";
import type { ContainerMeta, StatePayload } from "./payload.ts";
import { createPopover } from "./popover.ts";

export type BlockInfo = {
	element: HTMLElement;
	openFor(s: StatePayload, id: string, at: Anchor): void;
	close(): void;
	isOpen(): boolean;
};

function line(key: string, value: string): HTMLElement {
	return h(
		"div",
		{ class: "info-line" },
		span("info-key", key),
		span("info-val", value),
	);
}

function metaLine(meta: ContainerMeta): HTMLElement {
	return h(
		"div",
		{ class: "info-tags" },
		span("badge", meta.kind === "fixed" ? "requirement" : meta.kind),
		span("badge", `onMiss=${BRANCH_LABEL[meta.onMiss] ?? meta.onMiss}`),
		meta.federated && span("badge", "federe"),
		meta.rigid
			? span("badge badge-icon", lockGlyph(), "sabit")
			: span("badge badge-icon", springGlyph(), "esnek"),
		meta.custom && span("badge", "sonradan eklendi"),
	);
}

export function createBlockInfo(client: NodeClient, bus: PanelBus): BlockInfo {
	const pop = createPopover("info");
	pop.onToggle((on) => bus.hold(on));

	function deleteRow(id: string, label: string): HTMLElement {
		const error = h("p", { class: "pop-error", hidden: true });
		const del = button("danger", "Kutucuğu sil");
		del.onclick = () =>
			void (async () => {
				error.hidden = true;
				del.disabled = true;
				try {
					const answer = await client.removeContainer(id);
					const err = answer.error;
					if (typeof err === "string") {
						error.hidden = false;
						error.textContent = err;
						return;
					}
					pop.close();
					bus.notify(`kutucuk silindi: ${label}`, "ok");
					await bus.refresh();
				} finally {
					del.disabled = false;
				}
			})();
		return h("div", { class: "pop-foot" }, del, error);
	}

	function content(
		c: ResolvedContainer,
		meta: ContainerMeta | undefined,
	): Array<Node | false> {
		const kind = dropKindOf(c, meta);
		return [
			line("başlangıç", `${fmtInterval(c.start)}  ±${widthOf(c.start)} dk`),
			line("bitiş", `${fmtInterval(c.end)}  ±${widthOf(c.end)} dk`),
			line("süre", fmtDuration(c.usedDuration)),
			line("kesinlik", CERTAINTY_LABEL[c.certainty] ?? c.certainty),
			hasNoCore(c) &&
				h(
					"p",
					{ class: "info-note" },
					"kesin çekirdeği yok: bu blok bitmiş de olabilir, hiç başlamamış da.",
				),
			meta ? metaLine(meta) : false,
			h("p", { class: `info-drag t-${DROP_TONE[kind]}` }, DROP_MEANING[kind]),
			...c.notes.map((n) => h("p", { class: "info-note" }, n)),
			meta?.custom ? deleteRow(c.id, c.label) : false,
		];
	}

	function openFor(s: StatePayload, id: string, at: Anchor): void {
		const c = s.plan.containers.find((x) => x.id === id);
		if (!c) return;
		const meta = s.containers.find((m) => m.id === id);
		pop.open(at, c.label, ...content(c, meta));
	}

	return {
		element: pop.element,
		openFor,
		close: pop.close,
		isOpen: pop.isOpen,
	};
}
