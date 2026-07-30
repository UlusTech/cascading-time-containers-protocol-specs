/**
 * Test için en küçük DOM.
 *
 * Arayüzün asıl mantığı DOM'da değil (`interact.ts`, `layout.ts`, `create-form`
 * içindeki `buildSpec` hepsi saf); ama sürükleme **olay akışıdır** ve akışı
 * gerçekten çalıştırmadan sınamanın yolu yok: uzun basış zamanlayıcısı, kaydırma
 * eşiği, Esc iptali, yerinde bırakma. O yüzden burada gerçek bir tarayıcı değil,
 * yalnızca panelin dokunduğu yüzey taklit edilir — bağımlılık eklemeden.
 *
 * Yalnızca testten çağrılır; hiçbir arayüz modülü buraya bağlı değildir ve
 * paketlenen çıktıya girmez.
 */

type StubStyle = Record<string, unknown> & {
	setProperty(key: string, value: string): void;
	removeProperty(key: string): void;
};

function makeStyle(): StubStyle {
	const bag: Record<string, unknown> = {};
	bag.setProperty = (key: string, value: string) => {
		bag[key] = value;
	};
	bag.removeProperty = (key: string) => {
		delete bag[key];
	};
	return bag as StubStyle;
}

export type Rect = {
	top: number;
	left: number;
	width: number;
	height: number;
	bottom: number;
	right: number;
};

type Listener = (e: unknown) => void;
type Handler = ((e?: unknown) => void) | null;

/** Olay nesnesi — panelin okuduğu alanlar kadarı. */
export type StubEvent = {
	type: string;
	target: StubElement;
	preventDefault(): void;
	stopPropagation(): void;
} & Record<string, unknown>;

export class StubElement {
	readonly tag: string;
	readonly attrs = new Map<string, string>();
	readonly kids: Array<StubElement | string> = [];
	readonly style = makeStyle();
	readonly classes = new Set<string>();
	readonly dataset: Record<string, string> = {};
	readonly listeners = new Map<string, Set<Listener>>();
	parentNode: StubElement | null = null;
	title = "";
	value = "";
	checked = false;
	disabled = false;
	offsetWidth = 0;
	tabIndex = -1;
	rect: Rect = {
		top: 0,
		left: 0,
		width: 320,
		height: 400,
		bottom: 400,
		right: 320,
	};
	onclick: Handler = null;
	onchange: Handler = null;
	onfocus: Handler = null;
	onblur: Handler = null;
	onmouseenter: Handler = null;
	onmouseleave: Handler = null;

	constructor(tag: string) {
		this.tag = tag.toLowerCase();
	}

	get hidden(): boolean {
		return this.attrs.has("hidden");
	}

	set hidden(on: boolean) {
		if (on) this.attrs.set("hidden", "");
		else this.attrs.delete("hidden");
	}

	get className(): string {
		return [...this.classes].join(" ");
	}

	set className(v: string) {
		this.classes.clear();
		for (const c of v.split(/\s+/).filter(Boolean)) this.classes.add(c);
	}

	get classList() {
		const classes = this.classes;
		return {
			add: (c: string) => classes.add(c),
			remove: (c: string) => classes.delete(c),
			contains: (c: string) => classes.has(c),
			toggle: (c: string, on?: boolean) => {
				const want = on ?? !classes.has(c);
				if (want) classes.add(c);
				else classes.delete(c);
			},
		};
	}

	get textContent(): string {
		return this.kids
			.map((k) => (typeof k === "string" ? k : k.textContent))
			.join("");
	}

	set textContent(v: string) {
		for (const k of this.kids) if (typeof k !== "string") k.parentNode = null;
		this.kids.length = 0;
		if (v !== "") this.kids.push(v);
	}

	setAttribute(key: string, value: string): void {
		if (key === "class") this.className = value;
		else this.attrs.set(key, value);
	}

	getAttribute(key: string): string | null {
		return key === "class" ? this.className : (this.attrs.get(key) ?? null);
	}

	removeAttribute(key: string): void {
		this.attrs.delete(key);
	}

	append(...kids: Array<StubElement | string>): void {
		for (const k of kids) {
			if (typeof k !== "string") k.parentNode = this;
			this.kids.push(k);
		}
	}

	prepend(...kids: Array<StubElement | string>): void {
		for (const k of [...kids].reverse()) {
			if (typeof k !== "string") k.parentNode = this;
			this.kids.unshift(k);
		}
	}

	remove(): void {
		const parent = this.parentNode;
		if (!parent) return;
		const at = parent.kids.indexOf(this);
		if (at >= 0) parent.kids.splice(at, 1);
		this.parentNode = null;
	}

	contains(node: unknown): boolean {
		if (node === this) return true;
		return this.kids.some((k) => typeof k !== "string" && k.contains(node));
	}

	/** Yalnızca `tag` ve `.sınıf` seçicileri — panelin kullandığı kadarı. */
	querySelector(sel: string): StubElement | null {
		for (const k of this.kids) {
			if (typeof k === "string") continue;
			if (sel.startsWith(".") ? k.classes.has(sel.slice(1)) : k.tag === sel) {
				return k;
			}
			const deep = k.querySelector(sel);
			if (deep) return deep;
		}
		return null;
	}

	getBoundingClientRect(): Rect {
		return this.rect;
	}

	addEventListener(type: string, fn: Listener): void {
		const set = this.listeners.get(type) ?? new Set<Listener>();
		set.add(fn);
		this.listeners.set(type, set);
	}

	removeEventListener(type: string, fn: Listener): void {
		this.listeners.get(type)?.delete(fn);
	}

	setPointerCapture(): void {}
	releasePointerCapture(): void {}
	scrollIntoView(): void {}
	focus(): void {}
}

/** Ağaçta gezinir; testin blok elemanını bulması için. */
export function walk(
	root: StubElement,
	hit: (el: StubElement) => boolean,
): StubElement | null {
	if (hit(root)) return root;
	for (const k of root.kids) {
		if (typeof k === "string") continue;
		const found = walk(k, hit);
		if (found) return found;
	}
	return null;
}

/** Sınıfa göre ilk eleman. */
export const byClass = (root: StubElement, cls: string): StubElement | null =>
	walk(root, (el) => el.classes.has(cls));

/**
 * Metnine göre düğme. Sarmalayıcı da aynı metni taşır (tek çocuğu düğmedir), o
 * yüzden etiket değil `tag` de sınanır — yoksa `onclick` taşımayan kap dönerdi.
 */
export const byButton = (root: StubElement, text: string): StubElement | null =>
	walk(root, (el) => el.tag === "button" && el.textContent === text);

/** Olayı hedeften köke doğru yürütür — gerçek kabarma sırası. */
export function fire(
	el: StubElement,
	type: string,
	props: Record<string, unknown> = {},
): void {
	const event: StubEvent = {
		type,
		target: el,
		preventDefault: () => {},
		stopPropagation: () => {},
		...props,
	};
	let node: StubElement | null = el;
	while (node) {
		for (const fn of [...(node.listeners.get(type) ?? [])]) fn(event);
		node = node.parentNode;
	}
}

const docRoot = new StubElement("#document");

const doc = {
	body: new StubElement("body"),
	activeElement: null,
	createElement: (tag: string) => new StubElement(tag),
	createElementNS: (_ns: string, tag: string) => new StubElement(tag),
	addEventListener: (type: string, fn: Listener) =>
		docRoot.addEventListener(type, fn),
	removeEventListener: (type: string, fn: Listener) =>
		docRoot.removeEventListener(type, fn),
};

/** Belge düzeyinde olay: Esc iptali ve balonun dışına tıklama böyle sınanır. */
export function fireDocument(
	type: string,
	props: Record<string, unknown> = {},
): void {
	fire(docRoot, type, props);
}

/** Küresel `document`/`window`/`Node`'u kurar; testin ilk satırı. */
export function installStubDom(): void {
	const g = globalThis as unknown as Record<string, unknown>;
	g.document = doc;
	g.window = { innerWidth: 1280, innerHeight: 900 };
	g.Node = StubElement;
	g.HTMLElement = StubElement;
}
