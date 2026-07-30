/// <reference lib="dom" />

/**
 * Bildirim şeridi.
 *
 * Demonun öğrettiği şey bırakmanın **ne anlama geldiği**; blok yer değiştirince
 * bunu söyleyen tek yüzey burası. Metin kısa ve eylemin kendi diliyle: gözlem
 * "gözlem" der, teklif "teklif" der. Aynı anda en fazla üç bildirim durur, en
 * yenisi üstte; sıra dolarsa en eski anında düşer.
 */

import { h } from "./dom.ts";
import type { ToastTone } from "./interact.ts";

export type Toast = {
	element: HTMLElement;
	show(text: string, tone: ToastTone): void;
	clear(): void;
};

const LIFE_MS = 6000;
const MAX = 3;

export function createToast(): Toast {
	const element = h("div", { class: "toasts", "aria-live": "polite" });
	/** en yeni başta — eleman eklenip çıkarılır, yeniden kurulmaz: giriş
	 * animasyonu yalnızca yeni bildirimde oynasın. */
	let live: HTMLElement[] = [];

	function remove(node: HTMLElement): void {
		if (!live.includes(node)) return;
		live = live.filter((n) => n !== node);
		node.remove();
	}

	function show(text: string, tone: ToastTone): void {
		const node = h("p", { class: `toast toast-${tone}` }, text);
		element.prepend(node);
		live = [node, ...live];
		while (live.length > MAX) {
			const oldest = live.pop();
			oldest?.remove();
		}
		setTimeout(() => remove(node), LIFE_MS);
	}

	return {
		element,
		show,
		clear: () => {
			for (const node of live) node.remove();
			live = [];
		},
	};
}
