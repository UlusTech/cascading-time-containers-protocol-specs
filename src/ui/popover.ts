/// <reference lib="dom" />

/**
 * Tıklanan yere çıpalanan balon.
 *
 * İki yerde kullanılıyor: yeni kutucuk formu ve blok ayrıntısı. Konum `fixed`,
 * çünkü takvim kaydırılabilir bir kutunun içindedir ve balonun oraya
 * hapsolmaması gerekir; ekran kenarına dayanınca içeri çekilir.
 *
 * Balon açıkken panelin yoklaması durur (bkz. `panel.ts`): 2 saniyede bir
 * yeniden çizim, yazılmakta olan formu siler.
 */

import { button, h, type Kid, replace, span } from "./dom.ts";
import type { Anchor } from "./drag.ts";

export type Popover = {
	element: HTMLElement;
	open(anchor: Anchor, title: string, ...kids: Kid[]): void;
	close(): void;
	isOpen(): boolean;
	/**
	 * Yalnızca gerçek durum değişiminde çağrılır. Panel bununla yoklamayı
	 * durdurup açıyor; açıkken yeniden açmak sayacı şişirirse yoklama bir daha
	 * hiç dönmez, o yüzden geçişi balonun kendisi sahipleniyor.
	 */
	onToggle(fn: (open: boolean) => void): void;
};

const MARGIN = 10;
const WIDTH = 296;

export function createPopover(kind: string): Popover {
	const heading = span("pop-title");
	const body = h("div", { class: "pop-body" });
	const closeBtn = button("pop-x", "✕", "kapat");
	const element = h(
		"div",
		{ class: `pop pop-${kind}`, hidden: true, role: "dialog" },
		h("header", { class: "pop-head" }, heading, closeBtn),
		body,
	);

	let toggled: ((open: boolean) => void) | null = null;

	function close(): void {
		if (element.hidden) return;
		element.hidden = true;
		document.removeEventListener("pointerdown", onOutside, true);
		document.removeEventListener("keydown", onKey);
		toggled?.(false);
	}

	function onOutside(e: Event): void {
		const t = e.target;
		if (t instanceof Node && element.contains(t)) return;
		close();
	}

	function onKey(e: KeyboardEvent): void {
		if (e.key === "Escape") close();
	}

	/** Çıpa ekran koordinatı; balon sağa ve aşağı açılır, sığmazsa içeri çekilir. */
	function position(anchor: Anchor): void {
		const vw = window.innerWidth;
		const left = Math.min(Math.max(MARGIN, anchor.x + 12), vw - WIDTH - MARGIN);
		element.style.left = `${Math.round(left)}px`;
		element.style.top = `${Math.round(Math.max(MARGIN, anchor.y + 10))}px`;
	}

	/**
	 * Konum `fixed`: sayfayı kaydırarak ekran dışına taşan balona ulaşılamaz. Bu
	 * yüzden gösterildikten sonra yüksekliği ölçülüp alt kenara sığdırılır —
	 * takvimin dibindeki bir blokta gönder düğmesi ekran altında kalırdı.
	 */
	function fitVertically(anchor: Anchor): void {
		const height = element.getBoundingClientRect().height;
		const limit = Math.max(MARGIN, window.innerHeight - height - MARGIN);
		const top = Math.min(Math.max(MARGIN, anchor.y + 10), limit);
		element.style.top = `${Math.round(top)}px`;
	}

	closeBtn.onclick = close;

	return {
		element,
		open: (anchor, title, ...kids) => {
			const was = element.hidden;
			heading.textContent = title;
			replace(body, ...kids);
			position(anchor);
			element.hidden = false;
			fitVertically(anchor);
			if (!was) return;
			document.addEventListener("pointerdown", onOutside, true);
			document.addEventListener("keydown", onKey);
			toggled?.(true);
		},
		close,
		isOpen: () => !element.hidden,
		onToggle: (fn) => {
			toggled = fn;
		},
	};
}
