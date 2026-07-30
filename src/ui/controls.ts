/// <reference lib="dom" />

/**
 * Kumanda çubuğu.
 *
 * Yakıt bütçesi burada baş kahramandır: ölçer, sayaç ve segmentli düğmeler bir
 * arada durur çünkü sebep ile sonuç yan yana okunmalı. Bütçeyi düşürünce
 * "toplam belirsizlik" sayısı büyür ve takvimdeki bloklar uzar — aynı hareketin
 * iki yüzü.
 *
 * Eleman ağacı bir kez kurulur, sonra yalnızca değerler yazılır: 2 saniyelik
 * yoklama sırasında odak, imleç ve yazılmakta olan saat kaybolmasın.
 */

import type { Answer, NodeClient } from "./client.ts";
import { button, h, replace, span } from "./dom.ts";
import { CERTAINTY_LABEL, fmt, toMin } from "./format.ts";
import { totalUncertainty } from "./layout.ts";
import { isProposer, type StatePayload } from "./payload.ts";

/** Panelin kendisine geri konuşma yolu. */
export type PanelBus = {
	refresh(): Promise<void>;
	setFedResult(v: Answer | null): void;
};

export type Controls = { element: HTMLElement; update(s: StatePayload): void };

const BUS_ID = "yol-otobus";

function field(label: string, input: HTMLElement): HTMLLabelElement {
	return h("label", { class: "field" }, span("field-label", label), input);
}

function timeInput(value: string): HTMLInputElement {
	return h("input", { type: "time", value, step: 300, class: "time" });
}

export function createControls(client: NodeClient, bus: PanelBus): Controls {
	/* ---- yakıt: hero ---- */
	const seg = h("div", {
		class: "seg",
		role: "group",
		"aria-label": "yakıt bütçesi",
	});
	const meterFill = span("meter-fill");
	const meter = h("div", { class: "meter" }, meterFill);
	const bigValue = h("b", { class: "big" }, "0");
	const stamp = h("b", { class: "stamp" }, "-");
	const fuelCount = h("b", { class: "mono" }, "-");
	const fuelNote = h("p", { class: "fuel-note" });

	const readout = (main: HTMLElement, label: string): HTMLElement =>
		h("div", { class: "read" }, main, span("read-label", label));

	const fuel = h(
		"div",
		{ class: "fuel" },
		h("div", { class: "fuel-top" }, span("eyebrow", "yakıt bütçesi"), seg),
		meter,
		h(
			"div",
			{ class: "fuel-read" },
			readout(
				h("span", { class: "big-wrap" }, bigValue, span("unit", "dk")),
				"toplam belirsizlik",
			),
			readout(stamp, "genel kesinlik damgası"),
			readout(fuelCount, "harcanan / bütçe"),
		),
		fuelNote,
	);

	/* ---- gerçeklik girdisi ---- */
	const chips = h("div", { class: "chips" });
	const wake = timeInput("07:00");
	const observeBtn = button("primary", "Gözlemi kaydet");
	const missBox = h("input", { type: "checkbox", class: "box" });
	const missLabel = h(
		"label",
		{ class: "switch" },
		missBox,
		span("switch-text", "otobüsü kaçırdım"),
	);

	/* ---- federasyon ---- */
	const proposeBtn = button("primary", "Teklif gönder");
	const fbFrom = timeInput("10:30");
	const fbTo = timeInput("11:30");
	const fbBtn = button("ghost", "Sor");

	const element = h(
		"section",
		{ class: "controls" },
		fuel,
		h(
			"div",
			{ class: "bar" },
			span("eyebrow", "gerçeklik girdisi"),
			chips,
			h(
				"div",
				{ class: "bar-row" },
				field("uyanış", wake),
				observeBtn,
				missLabel,
			),
		),
		h(
			"div",
			{ class: "bar" },
			span("eyebrow", "federasyon"),
			h(
				"div",
				{ class: "bar-row" },
				proposeBtn,
				field(
					"müsait misin?",
					h("span", { class: "range" }, fbFrom, "–", fbTo),
				),
				fbBtn,
			),
		),
	);

	/* ---- eylemler ---- */
	const act = async (fn: () => Promise<Answer>): Promise<void> => {
		element.classList.add("busy");
		try {
			await fn();
		} finally {
			element.classList.remove("busy");
		}
		await bus.refresh();
	};

	observeBtn.onclick = () => void act(() => client.observe(toMin(wake.value)));
	missBox.onchange = () =>
		void act(() => client.forceMiss(BUS_ID, missBox.checked));
	proposeBtn.onclick = () =>
		void act(async () => {
			const r = await client.propose();
			bus.setFedResult(r);
			return r;
		});
	fbBtn.onclick = () =>
		void act(async () => {
			const r = await client.freeBusy(toMin(fbFrom.value), toMin(fbTo.value));
			bus.setFedResult(r);
			return r;
		});

	let built = false;
	let lastTotal = -1;

	function buildOnce(s: StatePayload): void {
		if (built) return;
		built = true;
		replace(
			chips,
			...s.input.presets.map((p) => {
				const b = button("chip", p.label);
				b.onclick = () =>
					void act(async () => {
						wake.value = fmt(p.wake);
						return client.observe(p.wake);
					});
				return b;
			}),
		);
		replace(
			seg,
			...s.input.fuelSteps.map((f) => {
				const b = button("seg-btn", String(f));
				b.onclick = () => void act(() => client.setFuel(f));
				return b;
			}),
		);
	}

	function update(s: StatePayload): void {
		buildOnce(s);
		const p = s.plan;

		for (const [i, f] of s.input.fuelSteps.entries()) {
			seg.children[i]?.setAttribute("aria-pressed", String(f === p.fuelBudget));
		}

		const used = Math.min(1, p.fuelUsed / Math.max(1, p.fuelBudget));
		meterFill.style.width = `${(used * 100).toFixed(1)}%`;
		meter.classList.toggle("is-spent", p.truncated);
		fuelCount.textContent = `${p.fuelUsed} / ${p.fuelBudget}`;

		const total = totalUncertainty(p.containers);
		bigValue.textContent = String(total);
		if (total !== lastTotal && lastTotal >= 0) {
			bigValue.classList.remove("flash");
			void bigValue.offsetWidth;
			bigValue.classList.add("flash");
		}
		lastTotal = total;

		stamp.textContent = CERTAINTY_LABEL[p.certainty] ?? p.certainty;
		stamp.className = `stamp c-${p.certainty}`;
		fuel.classList.toggle("is-truncated", p.truncated);
		fuelNote.textContent = p.truncated
			? "Bütçe yetmedi: formül bırakıldı, envelope'a düşüldü. Cevap yanlış değil — geniş."
			: "Bütçeyi düşür: formül yarıda kalır, aralıklar genişler. Doğruluk değişmez, kesinlik azalır.";

		if (document.activeElement !== wake) {
			const observed = s.input.observations.uyanis;
			wake.value = fmt(observed ?? s.input.plannedWake);
		}

		const hasBus = s.containers.some((c) => c.id === BUS_ID);
		missBox.checked = s.input.forcedMiss.includes(BUS_ID);
		missBox.disabled = !hasBus;
		missLabel.hidden = !hasBus;

		const proposer = isProposer(s);
		proposeBtn.disabled = !proposer || s.node.peer === null;
		proposeBtn.title = proposer
			? `teklif → ${s.node.peer ?? "eş yok"}`
			: "bu düğümde federe kutucuk yok: teklifi karşı taraf gönderir";
	}

	return { element, update };
}
