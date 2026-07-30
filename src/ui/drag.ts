/// <reference lib="dom" />

/**
 * Dikey sürükleme — fare ve dokunma, tek yol.
 *
 * Takvimde iki şey sürüklenir: var olan bir blok (taşıma) ve boş alan (yeni
 * kutucuk). İkisi de aynı durum makinesinden geçer, çünkü ikisi de aynı sorunu
 * çözmek zorunda: dokunmatik ekranda parmağın aşağı kayması **sayfayı kaydırmak**
 * demek olabilir. O yüzden dokunuşta sürükleme uzun basışla kurulur (~300 ms) ve
 * o ana kadar hiçbir olay iptal edilmez — kullanıcı takvimin üstünden geçip
 * sayfayı kaydırabilir. Fare tarafında eşik yalnızca birkaç pikseldir, çünkü
 * farede kaydırma tekerlekle olur.
 *
 * Hayalet ve etiket bırakmadan önce ne olacağını söyler: etiketin rengi,
 * bırakınca bloğun taşıyacağı kesinlik damgasının rengidir.
 */

import { h, span } from "./dom.ts";
import { fmt } from "./format.ts";
import { DROP_LABEL, DROP_TONE, type DropKind, snapMin } from "./interact.ts";
import type { Span } from "./layout.ts";

export type Anchor = { x: number; y: number };

export type DragTarget = {
	id: string;
	/** taşımanın referans aldığı başlangıç dakikası */
	from: number;
	/** blokun kapladığı dakika — hayaletin yüksekliği */
	span: number;
	kind: DropKind;
};

export type DragDeps = {
	/** olayları dinleyen ve ölçüsü alınan yüzey (`.lanes`) */
	surface: HTMLElement;
	/** görünür eksen; dakika ↔ piksel çevrimi buradan türer */
	axis(): Span;
	/** olay hedefinden bloğu bul; `null` dönerse boş alan sürüklenmiştir */
	targetOf(el: EventTarget | null): DragTarget | null;
	/** blok bırakıldı */
	onMove(t: DragTarget, min: number): void;
	/** bloğa tıklandı/dokunuldu — sürükleme değil */
	onTap(t: DragTarget, at: Anchor): void;
	/** boş alan: verilen vakitte verilen süreyle yeni kutucuk */
	onCreate(from: number, minutes: number, at: Anchor): void;
	/** sürükleme başladı/bitti — yoklama bu süre boyunca durur */
	onActive(on: boolean): void;
	/** dokunuşta sürüklemeyi kuran uzun basış süresi (test için ayarlanır) */
	longPressMs?: number;
};

export type DragLayer = {
	/** sürükleme sürüyor mu — yeniden çizim bunu beklemek zorunda */
	active(): boolean;
	/** dinleyicileri söker */
	stop(): void;
};

/** Fare tarafında tıklama ile sürüklemeyi ayıran eşik. */
const TAP_SLOP = 4;
/** Dokunuşta bu kadar kaydıysa niyet sayfayı kaydırmaktır: sürükleme kurulmaz. */
const SCROLL_SLOP = 10;
const LONG_PRESS_MS = 300;
/** Tıklamayla açılan formun varsayılan süresi. */
const DEFAULT_CREATE_MIN = 30;
const MIN_CREATE_MIN = 15;
/** Süresi sıfır olan kutucuğun hayaleti de görünür olmalı. */
const MIN_GHOST_MIN = 4;

type Pending = {
	pointerId: number;
	touch: boolean;
	x0: number;
	y0: number;
	/** basıldığı andaki dakika — boş alan sürüklemesinin bir ucu */
	anchorMin: number;
	target: DragTarget | null;
	timer: ReturnType<typeof setTimeout> | null;
	armed: boolean;
};

const clamp = (v: number, lo: number, hi: number): number =>
	Math.min(hi, Math.max(lo, v));

export function createDragLayer(deps: DragDeps): DragLayer {
	const chip = span("drag-chip");
	const ghost = h("div", { class: "drag-ghost", hidden: true }, chip);
	deps.surface.append(ghost);

	const longPress = deps.longPressMs ?? LONG_PRESS_MS;
	let pending: Pending | null = null;
	/** son hesaplanan bırakma yeri; commit bunu kullanır */
	let landing: { from: number; minutes: number } | null = null;

	/* --------------------------- geometri ---------------------------- */

	/**
	 * Ölçek yüzeyin ölçüsünden türer, CSS değişkeni okunmaz: `--ppm` ile
	 * `--axis-min` her zaman tutarlı olmak zorunda kalmaz. Kenarlık payı (1px)
	 * ihmal edilir; 5 dakikalık ızgara bunu zaten yutar.
	 */
	function pxPerMin(): number {
		const a = deps.axis();
		const rect = deps.surface.getBoundingClientRect();
		const minutes = Math.max(1, a.hi - a.lo);
		return rect.height > 0 ? rect.height / minutes : 1;
	}

	function minAt(clientY: number): number {
		const a = deps.axis();
		const rect = deps.surface.getBoundingClientRect();
		return a.lo + (clientY - rect.top) / pxPerMin();
	}

	function place(from: number, minutes: number): void {
		const a = deps.axis();
		ghost.style.setProperty("--top", String(from - a.lo));
		ghost.style.setProperty("--h", String(Math.max(MIN_GHOST_MIN, minutes)));
	}

	/* ---------------------------- hayalet ---------------------------- */

	function paintMove(p: Pending, t: DragTarget, clientY: number): void {
		const a = deps.axis();
		const delta = (clientY - p.y0) / pxPerMin();
		const from = clamp(
			snapMin(t.from + delta),
			a.lo,
			Math.max(a.lo, a.hi - t.span),
		);
		landing = { from, minutes: t.span };
		place(from, t.span);
		ghost.className = `drag-ghost t-${DROP_TONE[t.kind]}`;
		chip.textContent = `${fmt(from)} · ${DROP_LABEL[t.kind]}`;
	}

	function paintCreate(p: Pending, clientY: number): void {
		const a = deps.axis();
		const cur = clamp(snapMin(minAt(clientY)), a.lo, a.hi);
		const from = Math.min(p.anchorMin, cur);
		const minutes = Math.max(MIN_CREATE_MIN, Math.abs(cur - p.anchorMin));
		landing = { from, minutes };
		place(from, minutes);
		ghost.className = "drag-ghost t-new";
		chip.textContent = `${fmt(from)} – ${fmt(from + minutes)} · ${minutes} dk`;
	}

	/* -------------------------- durum makinesi ----------------------- */

	function arm(p: Pending, clientY: number): void {
		p.armed = true;
		if (p.timer !== null) {
			clearTimeout(p.timer);
			p.timer = null;
		}
		ghost.hidden = false;
		deps.surface.setPointerCapture?.(p.pointerId);
		document.addEventListener("keydown", onKey);
		deps.onActive(true);
		if (p.target) paintMove(p, p.target, clientY);
		else paintCreate(p, clientY);
	}

	function clear(): void {
		if (pending?.timer != null) clearTimeout(pending.timer);
		if (pending?.armed) {
			document.removeEventListener("keydown", onKey);
			deps.surface.releasePointerCapture?.(pending.pointerId);
			deps.onActive(false);
		}
		pending = null;
		landing = null;
		ghost.hidden = true;
	}

	function onKey(e: KeyboardEvent): void {
		if (e.key !== "Escape" || !pending?.armed) return;
		e.preventDefault();
		clear();
	}

	function onDown(e: PointerEvent): void {
		/*
		 * Kalmış bir hareket varsa atılır, beklenmez: kurulmamış bir sürükleme
		 * (fare 4 pikselden az kaydı) işaretçi yakalaması almadığı için `pointerup`
		 * başka bir ağaca gidebilir. O durumda `pending` sonsuza kadar dolu kalır
		 * ve takvim sessizce ölür. Yeni basış her zaman temiz başlar.
		 */
		if (pending) clear();
		if (e.button !== undefined && e.button > 0) return;
		const target = deps.targetOf(e.target);
		if (target?.kind === "none") return;
		const touch = e.pointerType === "touch";
		const p: Pending = {
			pointerId: e.pointerId,
			touch,
			x0: e.clientX,
			y0: e.clientY,
			anchorMin: snapMin(minAt(e.clientY)),
			target,
			timer: null,
			armed: false,
		};
		pending = p;
		if (touch) {
			p.timer = setTimeout(() => {
				p.timer = null;
				if (pending === p) arm(p, p.y0);
			}, longPress);
		}
	}

	function onMove(e: PointerEvent): void {
		const p = pending;
		if (!p || e.pointerId !== p.pointerId) return;

		if (!p.armed) {
			const dist = Math.max(
				Math.abs(e.clientY - p.y0),
				Math.abs(e.clientX - p.x0),
			);
			// dokunuşta kayma niyeti sayfayı kaydırmaktır: sürüklemeden vazgeç
			if (p.touch) {
				if (dist > SCROLL_SLOP) clear();
				return;
			}
			if (dist <= TAP_SLOP) return;
			arm(p, e.clientY);
			return;
		}

		e.preventDefault();
		if (p.target) paintMove(p, p.target, e.clientY);
		else paintCreate(p, e.clientY);
	}

	function onUp(e: PointerEvent): void {
		const p = pending;
		if (!p || e.pointerId !== p.pointerId) return;
		const spot = landing;
		const at: Anchor = { x: e.clientX, y: e.clientY };
		const armed = p.armed;
		const target = p.target;
		const anchorMin = p.anchorMin;
		clear();

		if (!armed) {
			// dokunma/tıklama: blok → ayrıntı, boş alan → yeni kutucuk formu
			if (target) deps.onTap(target, at);
			else deps.onCreate(anchorMin, DEFAULT_CREATE_MIN, at);
			return;
		}
		if (!spot) return;
		if (target) {
			// yerinde bırakma eylem değildir: kazara gözlem kaydetmeyelim
			if (spot.from === target.from) deps.onTap(target, at);
			else deps.onMove(target, spot.from);
			return;
		}
		deps.onCreate(spot.from, spot.minutes, at);
	}

	const surface = deps.surface;
	surface.addEventListener("pointerdown", onDown as EventListener);
	surface.addEventListener("pointermove", onMove as EventListener);
	surface.addEventListener("pointerup", onUp as EventListener);
	surface.addEventListener("pointercancel", clear as EventListener);

	return {
		active: () => pending?.armed === true,
		stop: () => {
			clear();
			surface.removeEventListener("pointerdown", onDown as EventListener);
			surface.removeEventListener("pointermove", onMove as EventListener);
			surface.removeEventListener("pointerup", onUp as EventListener);
			surface.removeEventListener("pointercancel", clear as EventListener);
		},
	};
}
