/// <reference lib="dom" />

/**
 * En küçük DOM yardımcıları.
 *
 * Panel şablon yerine kodla kurulur, çünkü aynı sayfada iki düğüm birlikte
 * gösterilir: `id` kullanan bir şablon ikinci mount'ta sessizce çakışırdı.
 * Bu yüzden hiçbir yerde `getElementById` yok — her düğüm kendi ağacını tutar.
 */

export type Attrs = Record<string, string | number | boolean | undefined>;
export type Kid = Node | string | number | null | undefined | false;

const SVG_NS = "http://www.w3.org/2000/svg";

function appendKids(parent: Element, kids: Kid[]): void {
	for (const k of kids) {
		if (k === null || k === undefined || k === false) continue;
		parent.append(typeof k === "object" ? k : String(k));
	}
}

/**
 * Eleman kurar. `--` ile başlayan anahtarlar CSS özel değişkeni olarak yazılır;
 * `false`/`undefined` nitelikler hiç yazılmaz.
 */
export function h<K extends keyof HTMLElementTagNameMap>(
	tag: K,
	attrs?: Attrs,
	...kids: Kid[]
): HTMLElementTagNameMap[K] {
	const node = document.createElement(tag);
	for (const [key, value] of Object.entries(attrs ?? {})) {
		if (value === undefined || value === false) continue;
		if (key.startsWith("--")) node.style.setProperty(key, String(value));
		else node.setAttribute(key, value === true ? "" : String(value));
	}
	appendKids(node, kids);
	return node;
}

/** Düğme; `type` unutulursa form gönderen düğme olur, o yüzden hep yazılır. */
export function button(
	cls: string,
	label: Kid,
	title?: string,
): HTMLButtonElement {
	return h("button", { type: "button", class: cls, title }, label);
}

/** Bir metin kutusu — sınıf + içerik, en sık kullanılan kalıp. */
export function span(cls: string, ...kids: Kid[]): HTMLSpanElement {
	return h("span", { class: cls }, ...kids);
}

/** Süsleme amaçlı ikon: ekran okuyucudan gizli, rengi metinden alır. */
function glyph(...paths: string[]): SVGSVGElement {
	const svg = document.createElementNS(SVG_NS, "svg");
	svg.setAttribute("viewBox", "0 0 16 16");
	svg.setAttribute("width", "12");
	svg.setAttribute("height", "12");
	svg.setAttribute("fill", "none");
	svg.setAttribute("stroke", "currentColor");
	svg.setAttribute("stroke-width", "1.4");
	svg.setAttribute("stroke-linecap", "round");
	svg.setAttribute("aria-hidden", "true");
	svg.setAttribute("focusable", "false");
	svg.setAttribute("class", "glyph");
	for (const d of paths) {
		const p = document.createElementNS(SVG_NS, "path");
		p.setAttribute("d", d);
		svg.append(p);
	}
	return svg;
}

/** Kilit: yer açamayan (rigid) kutucuk. */
export const lockGlyph = (): SVGSVGElement =>
	glyph("M4 7.5h8v6H4z", "M6 7.5V5.6a2 2 0 0 1 4 0v1.9");

/** Yay: yer açabilen (esnek) kutucuk. */
export const springGlyph = (): SVGSVGElement =>
	glyph("M2 8h2l1.6-3.4L7.2 11l1.6-6.4L10.4 11L12 8h2");

/** Tabloya bir hücre koyar; `wrap` satır sonlarını korur. */
export function cell(text: string, wrap = false): HTMLTableCellElement {
	return h("td", { class: wrap ? "wrap" : undefined }, text);
}

/** Bir elemanın çocuklarını tek seferde yeniler. */
export function replace(host: Element, ...kids: Kid[]): void {
	host.textContent = "";
	appendKids(host, kids);
}
