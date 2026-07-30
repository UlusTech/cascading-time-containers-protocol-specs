/// <reference lib="dom" />

/**
 * Yeni kutucuk formu.
 *
 * Takvimde boş bir yere tıklamak her uygulamada "etkinlik ekle" demektir; burada
 * eklenen şey bir etkinlik değil bir **kutucuk**, o yüzden form iki alanı fazla
 * sorar: demir (bu saatte mi başlar, yoksa başka bir kutucuktan sonra mı) ve
 * kaçarsa hangi dala düşer. İkisi protokolün K2 kuralının formdaki yüzü —
 * dalsız kutucuk olamaz.
 *
 * Doğrulama iki kez yapılır: burada okunur bir Türkçe cümleyle, çekirdekte
 * `422` ile. Alan adları çekirdeğin tarifiyle bire bir aynı, o yüzden ikinci
 * doğrulama bir güvenlik ağı, kopya bir kural kümesi değil.
 */

import type { NodeClient } from "./client.ts";
import type { PanelBus } from "./controls.ts";
import { button, h, replace, span } from "./dom.ts";
import type { Anchor } from "./drag.ts";
import { fmt, toMin } from "./format.ts";
import { isLive } from "./layout.ts";
import type { ContainerSpec, StatePayload } from "./payload.ts";
import { createPopover } from "./popover.ts";

export type FormFields = {
	label: string;
	durationKind: "fixed" | "contingent";
	fixedMin: string;
	durLo: string;
	durHi: string;
	anchorKind: "startsAt" | "after";
	startsAt: string;
	afterId: string;
	gapLo: string;
	gapHi: string;
	onMiss: "wait" | "cancel";
	rigid: boolean;
	mustStartBefore: string;
};

export type SpecResult =
	| { ok: true; spec: ContainerSpec }
	| { ok: false; error: string };

const int = (v: string): number | null => {
	const n = Number(v);
	return Number.isFinite(n) && Number.isInteger(n) ? n : null;
};

/**
 * Formdan tarife. DOM'a dokunmaz: sürükleme anlamları gibi bu da saf karar,
 * o yüzden testten doğrudan çağrılır.
 */
export function buildSpec(f: FormFields): SpecResult {
	const label = f.label.trim();
	if (!label) return { ok: false, error: "etiket boş olamaz" };

	let duration: ContainerSpec["duration"];
	if (f.durationKind === "fixed") {
		const min = int(f.fixedMin);
		if (min === null || min < 0)
			return {
				ok: false,
				error: "süre tam sayı ve 0'dan küçük olmayan olmalı",
			};
		duration = { kind: "fixed", min };
	} else {
		const lo = int(f.durLo);
		const hi = int(f.durHi);
		if (lo === null || hi === null || lo < 0)
			return { ok: false, error: "belirsiz süre iki tam sayı ister" };
		if (lo > hi)
			return { ok: false, error: "en az süre, en çok süreden büyük olamaz" };
		duration = { kind: "contingent", lo, hi };
	}

	const spec: ContainerSpec = {
		label,
		duration,
		onMiss: f.onMiss,
		rigid: f.rigid,
	};

	if (f.anchorKind === "startsAt") {
		spec.startsAt = toMin(f.startsAt);
	} else {
		if (!f.afterId)
			return { ok: false, error: "hangi kutucuktan sonra başlayacağını seç" };
		const gapLo = int(f.gapLo);
		const gapHi = int(f.gapHi);
		if (gapLo === null || gapHi === null || gapLo < 0)
			return { ok: false, error: "boşluk iki tam sayı ister" };
		if (gapLo > gapHi)
			return {
				ok: false,
				error: "en az boşluk, en çok boşluktan büyük olamaz",
			};
		spec.after = { id: f.afterId, gapLo, gapHi };
	}

	if (f.mustStartBefore) spec.mustStartBefore = toMin(f.mustStartBefore);
	return { ok: true, spec };
}

export type CreateForm = {
	element: HTMLElement;
	openAt(s: StatePayload, min: number, minutes: number, at: Anchor): void;
	close(): void;
	isOpen(): boolean;
};

let formSeq = 0;

function radio(name: string, value: string, label: string, on = false) {
	const input = h("input", { type: "radio", name, value, checked: on });
	return {
		input,
		element: h(
			"label",
			{ class: "switch pop-radio" },
			input,
			span("switch-text", label),
		),
	};
}

function num(value: string, cls = "num"): HTMLInputElement {
	return h("input", { type: "number", class: cls, min: 0, step: 5, value });
}

function row(label: string, ...kids: Array<Node | string>): HTMLElement {
	return h(
		"div",
		{ class: "pop-row" },
		span("field-label", label),
		h("div", { class: "pop-row-body" }, ...kids),
	);
}

export function createCreateForm(
	client: NodeClient,
	bus: PanelBus,
): CreateForm {
	const pop = createPopover("form");
	const name = `ctcp-form-${++formSeq}`;

	const label = h("input", { type: "text", class: "text", placeholder: "ne?" });

	const durFixed = radio(`${name}-dur`, "fixed", "sabit", true);
	const durCont = radio(`${name}-dur`, "contingent", "belirsiz");
	const fixedMin = num("30");
	const durLo = num("20");
	const durHi = num("40");
	const fixedWrap = h("span", { class: "pop-inline" }, fixedMin, "dk");
	const contWrap = h(
		"span",
		{ class: "pop-inline" },
		durLo,
		"–",
		durHi,
		"dk",
		span("pop-hint", "· süreyi biz kontrol etmiyoruz"),
	);

	const anchorAt = radio(
		`${name}-anchor`,
		"startsAt",
		"bu saatte başlar",
		true,
	);
	const anchorAfter = radio(`${name}-anchor`, "after", "şundan sonra");
	const startsAt = h("input", { type: "time", class: "time", step: 300 });
	const afterId = h("select", { class: "select" });
	const gapLo = num("0");
	const gapHi = num("10");
	const atWrap = h("span", { class: "pop-inline" }, startsAt);
	const afterWrap = h(
		"span",
		{ class: "pop-inline" },
		afterId,
		span("pop-hint", "boşluk"),
		gapLo,
		"–",
		gapHi,
		"dk",
	);

	const missWait = radio(`${name}-miss`, "wait", "bekle", true);
	const missCancel = radio(`${name}-miss`, "cancel", "iptal");

	const rigidBox = h("input", { type: "checkbox", class: "box" });
	const rigidLabel = h(
		"label",
		{ class: "switch pop-radio" },
		rigidBox,
		span("switch-text", "yer açamaz (sabit)"),
	);
	const rigidRow = row("federe", rigidLabel);

	const deadline = h("input", { type: "time", class: "time", step: 300 });
	const submit = button("primary", "Kutucuğu ekle");
	const error = h("p", { class: "pop-error", hidden: true });

	const body = h(
		"div",
		{ class: "pop-form" },
		row("etiket", label),
		row("süre", durFixed.element, fixedWrap, durCont.element, contWrap),
		row("demir", anchorAt.element, atWrap, anchorAfter.element, afterWrap),
		row("kaçarsa", missWait.element, missCancel.element),
		rigidRow,
		row("son başlama", deadline, span("pop-hint", "isteğe bağlı")),
		h("div", { class: "pop-foot" }, submit, error),
	);

	function syncEnabled(): void {
		const fixed = durFixed.input.checked;
		fixedWrap.classList.toggle("is-off", !fixed);
		contWrap.classList.toggle("is-off", fixed);
		fixedMin.disabled = !fixed;
		durLo.disabled = fixed;
		durHi.disabled = fixed;

		const at = anchorAt.input.checked;
		atWrap.classList.toggle("is-off", !at);
		afterWrap.classList.toggle("is-off", at);
		startsAt.disabled = !at;
		afterId.disabled = at;
		gapLo.disabled = at;
		gapHi.disabled = at;
	}

	for (const r of [durFixed, durCont, anchorAt, anchorAfter]) {
		r.input.onchange = syncEnabled;
	}

	function read(): FormFields {
		return {
			label: label.value,
			durationKind: durFixed.input.checked ? "fixed" : "contingent",
			fixedMin: fixedMin.value,
			durLo: durLo.value,
			durHi: durHi.value,
			anchorKind: anchorAt.input.checked ? "startsAt" : "after",
			startsAt: startsAt.value,
			afterId: afterId.value,
			gapLo: gapLo.value,
			gapHi: gapHi.value,
			onMiss: missWait.input.checked ? "wait" : "cancel",
			rigid: rigidBox.checked,
			mustStartBefore: deadline.value,
		};
	}

	function fail(msg: string): void {
		error.hidden = false;
		error.textContent = msg;
	}

	submit.onclick = () => {
		error.hidden = true;
		const built = buildSpec(read());
		if (!built.ok) {
			fail(built.error);
			return;
		}
		void (async () => {
			submit.disabled = true;
			try {
				const answer = await client.addContainer(built.spec);
				const err = answer.error;
				if (typeof err === "string") {
					fail(err);
					return;
				}
				pop.close();
				bus.notify(
					`kutucuk eklendi: ${built.spec.label} — kaskad yeniden çözüldü`,
					"ok",
				);
				await bus.refresh();
			} finally {
				submit.disabled = false;
			}
		})();
	};

	pop.onToggle((on) => bus.hold(on));

	function openAt(
		s: StatePayload,
		min: number,
		minutes: number,
		at: Anchor,
	): void {
		error.hidden = true;
		label.value = "";
		startsAt.value = fmt(min);
		fixedMin.value = String(Math.max(5, Math.round(minutes)));
		durFixed.input.checked = true;
		durCont.input.checked = false;
		anchorAt.input.checked = true;
		anchorAfter.input.checked = false;
		missWait.input.checked = true;
		missCancel.input.checked = false;
		rigidBox.checked = false;
		deadline.value = "";
		rigidRow.hidden = !s.containers.some((c) => c.rigid);

		replace(
			afterId,
			...s.plan.containers
				.filter(isLive)
				.map((c) => h("option", { value: c.id }, c.label)),
		);
		syncEnabled();

		pop.open(at, `yeni kutucuk · ${fmt(min)}`, body);
		label.focus();
	}

	return {
		element: pop.element,
		openAt,
		close: pop.close,
		isOpen: pop.isOpen,
	};
}
