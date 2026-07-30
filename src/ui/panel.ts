/// <reference lib="dom" />

/**
 * Tek düğüm paneli: gün başlığı + kumanda + takvim + ölü kutucuklar + ayrıntı.
 *
 * Panel bir {@linkcode NodeClient} ile beslenir, dolayısıyla ayrı süreçte
 * çalışan bir düğümün HTTP uçlarıyla da, aynı sayfadaki bir çekirdekle de aynı
 * kodla çizilir. `sim.html` iki paneli yan yana mount eder; `?node=alice`
 * yalnızca birini ister.
 *
 * Etkileşimin anlamı burada birleşir: takvim "şu blok şu dakikaya bırakıldı"
 * der, {@linkcode applyDrop} bunun hangi protokol eylemi olduğuna karar verir,
 * bildirim şeridi de sonucu tek cümleyle söyler.
 */

import { createBlockInfo } from "./block-info.ts";
import { createCalendar } from "./calendar.ts";
import type { Answer, NodeClient } from "./client.ts";
import { createControls, type PanelBus } from "./controls.ts";
import { createCreateForm } from "./create-form.ts";
import { createDetail } from "./detail.ts";
import { button, h, span } from "./dom.ts";
import { fmt } from "./format.ts";
import { createGhosts } from "./ghosts.ts";
import { applyDrop, dropKindOf } from "./interact.ts";
import type { StatePayload } from "./payload.ts";
import { createToast } from "./toast.ts";

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
	/** Dokunuşta sürüklemeyi kuran uzun basış süresi. */
	longPressMs?: number;
};

const POLL_MS = 2000;
/** İyimser yerleşimin görünmesi için bırakılan pay — `.blk` geçişi 0.3 sn. */
const COUNTER_BEAT_MS = 260;

const beat = (ms: number): Promise<void> =>
	new Promise((done) => setTimeout(done, ms));

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
	/** balon açık ya da sürükleme sürüyor: yeniden çizim beklemek zorunda */
	let held = 0;
	/** bir eylem uçuşta: yoklama araya girip iyimser yerleşimi bozmasın */
	let inFlight = false;

	const toast = createToast();

	const bus: PanelBus = {
		refresh: async () => {
			await refresh();
			await opts.afterAction?.();
		},
		setFedResult: (v) => {
			fed = v;
		},
		notify: (text, tone) => toast.show(text, tone),
		hold: (on) => {
			held = Math.max(0, held + (on ? 1 : -1));
		},
	};

	const calendar = createCalendar(
		{
			drop: (id, min) => void commitDrop(id, min),
			create: (min, minutes, at) => {
				if (state) createForm.openAt(state, min, minutes, at);
			},
			open: (id, at) => {
				if (state) blockInfo.openFor(state, id, at);
			},
			hold: (on) => bus.hold(on),
		},
		{ longPressMs: opts.longPressMs },
	);
	const ghosts = createGhosts(calendar);
	const controls = createControls(client, bus);
	const detail = createDetail(client, bus);
	const createForm = createCreateForm(client, bus);
	const blockInfo = createBlockInfo(client, bus);

	const element = h(
		"article",
		{ class: "panel" },
		head,
		status,
		controls.element,
		calendar.element,
		ghosts.element,
		detail.element,
		toast.element,
		createForm.element,
		blockInfo.element,
	);
	host.append(element);

	/**
	 * Bırakmanın anlamı kutucuğun demirinden gelir; sonuç tek cümleyle söylenir.
	 *
	 * Karşı teklif geldiğinde blok önce **bırakıldığı** yere oturur, sonra karşı
	 * düğümün dediği yere kayar. İkinci yazımdan önce gerçek zaman bekleniyor:
	 * eylem tümüyle mikro görevlerden oluştuğu için (sayfa içi simülasyonda eş de
	 * bir fonksiyon çağrısı) tarayıcı arada hiç kare basmaz ve iyimser yerleşim
	 * görünmeden ezilirdi. Demonun anlatmak istediği an tam olarak o kayma.
	 */
	async function commitDrop(id: string, min: number): Promise<void> {
		const s = state;
		const c = s?.plan.containers.find((x) => x.id === id);
		if (!s || !c) return;
		const kind = dropKindOf(
			c,
			s.containers.find((m) => m.id === id),
		);
		inFlight = true;
		try {
			const outcome = await applyDrop(client, kind, c, min, {
				peer: s.node.peer,
				hadPin: s.input.pins.toplanti !== undefined,
			});
			if (kind === "propose") bus.setFedResult(null);
			const overridden =
				outcome.landedAt !== undefined && outcome.landedAt !== min;
			if (overridden) await beat(COUNTER_BEAT_MS);
			await bus.refresh();
			toast.show(outcome.text + branchNote(id), outcome.tone);
			if (overridden) calendar.flash(id);
		} finally {
			inFlight = false;
		}
	}

	/**
	 * Kutucuk bu eylemden sonra zamanda yerini kaybettiyse bunu bildirim söyler:
	 * aksi hâlde blok sessizce "gerçekleşmeyenler" şeridine düşer ve kullanıcı
	 * bunu bir hata sanır. K2: her kaçırma tanımlı bir dala düşer.
	 */
	function branchNote(id: string): string {
		const after = state?.plan.containers.find((x) => x.id === id);
		if (!after || after.state === "resolved") return "";
		const branch = after.branchTaken;
		return ` · kutucuk dala düştü${branch ? ` → ${branch}` : ""}`;
	}

	resetBtn.onclick = () =>
		void client.reset().then(() => {
			fed = null;
			toast.clear();
			createForm.close();
			blockInfo.close();
			return bus.refresh();
		});

	function render(s: StatePayload): void {
		element.dataset.node = s.node.id;
		title.textContent = s.node.label;
		meta.textContent = `${s.node.id} · :${s.node.port} · eş: ${s.node.peer ?? "yok"} · lamport ${s.lamport}`;
		frontierNote.textContent =
			s.plan.frontier === null
				? "Gözlem yok: gün baştan sona projeksiyon. Bir bloğu sürükle — anlamı kutucuğa göre değişir."
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
				if (autoBox.checked && held === 0 && !inFlight) void refresh();
			}, opts.poll ?? POLL_MS)
		: null;

	void refresh();

	return {
		element,
		refresh,
		stop: () => {
			if (timer !== null) clearInterval(timer);
			calendar.stop();
		},
	};
}
