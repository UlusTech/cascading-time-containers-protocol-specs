/// <reference lib="dom" />

/**
 * Tek düğüm paneli: başlık + kumanda + takvim + ölü kutucuklar + ayrıntı.
 *
 * Panel bir {@linkcode NodeClient} ile beslenir, dolayısıyla ayrı süreçte
 * çalışan bir düğümün HTTP uçlarıyla da, aynı sayfadaki bir çekirdekle de aynı
 * kodla çizilir. `sim.html` iki paneli yan yana mount eder; `?node=alice`
 * yalnızca birini ister.
 */

import { createCalendar } from "./calendar.ts";
import type { Answer, NodeClient } from "./client.ts";
import { createControls, type PanelBus } from "./controls.ts";
import { createDetail } from "./detail.ts";
import { button, h, span } from "./dom.ts";
import { fmt } from "./format.ts";
import { createGhosts } from "./ghosts.ts";
import type { StatePayload } from "./payload.ts";

export type Panel = {
	element: HTMLElement;
	refresh(): Promise<void>;
	stop(): void;
};

export type PanelOptions = {
	/** Yoklama aralığı (ms). Yalnızca HTTP modunda anlamlı. */
	poll?: number;
	/** Bu paneldeki bir eylemden sonra çalışır — sim'de kardeş paneli tazeler. */
	afterAction?: () => void | Promise<void>;
};

const POLL_MS = 2000;

export function mountPanel(
	host: HTMLElement,
	client: NodeClient,
	opts: PanelOptions = {},
): Panel {
	const eyebrow = span("eyebrow", "ctcp düğümü");
	const title = h("h2", { class: "panel-title" }, "yükleniyor…");
	const meta = h("p", { class: "panel-meta mono" });
	const frontierNote = h("p", { class: "panel-note" });
	const resetBtn = button("ghost small", "Sıfırla");
	const status = h("p", { class: "banner", hidden: true });

	const live = client.mode === "http";
	const autoBox = h("input", { type: "checkbox", class: "box", checked: true });
	const autoLabel = h(
		"label",
		{ class: "switch small" },
		autoBox,
		span("switch-text", "2 sn'de bir yenile"),
	);

	const head = h(
		"header",
		{ class: "panel-head" },
		h("div", { class: "panel-head-main" }, eyebrow, title, meta, frontierNote),
		h("div", { class: "panel-head-side" }, live && autoLabel, resetBtn),
	);

	let state: StatePayload | null = null;
	let fed: Answer | null = null;

	const bus: PanelBus = {
		refresh: async () => {
			await refresh();
			await opts.afterAction?.();
		},
		setFedResult: (v) => {
			fed = v;
		},
	};

	const calendar = createCalendar();
	const ghosts = createGhosts(calendar);
	const controls = createControls(client, bus);
	const detail = createDetail(client, bus);

	const element = h(
		"article",
		{ class: "panel" },
		head,
		status,
		controls.element,
		calendar.element,
		ghosts.element,
		detail.element,
	);
	host.append(element);

	resetBtn.onclick = () =>
		void client.reset().then(() => {
			fed = null;
			return bus.refresh();
		});

	function render(s: StatePayload): void {
		element.dataset.node = s.node.id;
		title.textContent = s.node.label;
		meta.textContent = `${s.node.id} · :${s.node.port} · eş: ${s.node.peer ?? "yok"} · lamport ${s.lamport}`;
		frontierNote.textContent =
			s.plan.frontier === null
				? "Gözlem yok: gün baştan sona projeksiyon."
				: `Cephe ${fmt(s.plan.frontier)} — buradan gerisi değişmez log, ilerisi projeksiyon.`;
		controls.update(s);
		calendar.update(s);
		ghosts.update(s);
		detail.update(s, fed);
	}

	async function refresh(): Promise<void> {
		try {
			state = await client.state();
			status.hidden = true;
			render(state);
		} catch (err) {
			status.hidden = false;
			status.textContent = `düğüme ulaşılamadı: ${(err as Error).message}`;
		}
	}

	const timer = live
		? setInterval(() => {
				if (autoBox.checked) void refresh();
			}, opts.poll ?? POLL_MS)
		: null;

	void refresh();

	return {
		element,
		refresh,
		stop: () => {
			if (timer !== null) clearInterval(timer);
		},
	};
}
