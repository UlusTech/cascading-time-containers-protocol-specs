/// <reference lib="dom" />

/**
 * Katlanır ayrıntı: log, federe trafik, birim cebri ve ham kutucuk tablosu.
 *
 * Takvim "ne oldu"yu gösterir; burası "neden"i tutar. Varsayılan olarak kapalı
 * çünkü demoyu ilk açan kişi önce günü görmeli — ama protokolün kanıtı (salt
 * eklemeli log, jeton sayacı, yüklem cevapları) bir tık uzakta durur.
 *
 * Tablolar yalnızca içerik değişince yeniden kurulur: aksi hâlde her yoklama
 * seçili metni ve açık bölümü siler.
 */

import type { Answer, NodeClient } from "./client.ts";
import type { PanelBus } from "./controls.ts";
import { button, cell, h, replace, span } from "./dom.ts";
import {
	BRANCH_LABEL,
	fmtDuration,
	fmtInterval,
	STATE_LABEL,
	widthOf,
} from "./format.ts";
import type { HilalView, StatePayload } from "./payload.ts";

export type Detail = {
	element: HTMLElement;
	update(s: StatePayload, fed: Answer | null): void;
};

function table(head: string[], cls: string): HTMLTableElement {
	return h(
		"table",
		{ class: cls },
		h("thead", {}, h("tr", {}, ...head.map((t) => h("th", {}, t)))),
		h("tbody", {}),
	);
}

const body = (t: HTMLTableElement): HTMLElement =>
	t.querySelector("tbody") ?? t;

function section(title: string, ...kids: Array<Node | string>): HTMLElement {
	return h("div", { class: "detail-block" }, span("eyebrow", title), ...kids);
}

/**
 * Gözlenmemiş ay bir aralık bildirir, gözlenen ay tek sayı — ve `envelope` alanı
 * kaybolur. Satır bu yüzden alanın varlığına göre yazılır; sınıf geçişi tam da
 * demonun göstermek istediği şey.
 */
function hilalLine(v: HilalView): string {
	const value = v.envelope
		? `bilinmiyor, envelope ${v.envelope.lo}–${v.envelope.hi} gün`
		: `${v.days} gün (sabit)`;
	return `hilal-ayı #${v.index}: ${value} · ${v.certainty} — ${v.note}`;
}

export function createDetail(client: NodeClient, bus: PanelBus): Detail {
	const planTable = table(
		[
			"kutucuk",
			"durum",
			"başlangıç",
			"bitiş",
			"süre",
			"±bitiş",
			"kesinlik",
			"not",
		],
		"grid-table plan-table",
	);
	const logTable = table(["L", "saat", "tür", "not"], "grid-table log-table");
	const unitsTable = table([], "grid-table units-table");
	unitsTable.querySelector("thead")?.remove();

	const capLine = h("p", { class: "note mono" });
	const feed = h("div", { class: "feed" });
	const hilalBtn = button("ghost", "hilal-ayı #9'u 30 gün olarak gözle");
	hilalBtn.onclick = () =>
		void client.observeHilal(9, 30).then(() => bus.refresh());

	const element = h(
		"details",
		{ class: "detail" },
		h(
			"summary",
			{},
			span("summary-text", "detay"),
			span("summary-hint", "log · federe trafik · birim cebri · ham tablo"),
		),
		section("federe trafik", capLine, feed),
		section("salt-eklemeli log", h("div", { class: "scroll" }, logTable)),
		section(
			"birim cebri",
			unitsTable,
			h("div", { class: "bar-row" }, hilalBtn),
		),
		section("çözülen kutucuklar", planTable),
	);

	let planSig = " ";
	let logSig = " ";

	function drawPlan(s: StatePayload): void {
		const sig = JSON.stringify(s.plan.containers);
		if (sig === planSig) return;
		planSig = sig;
		replace(
			body(planTable),
			...s.plan.containers.map((c) => {
				const meta = s.containers.find((m) => m.id === c.id);
				const live = c.state === "resolved";
				const tags = meta
					? `${meta.kind} · onMiss=${BRANCH_LABEL[meta.onMiss] ?? meta.onMiss}` +
						`${meta.federated ? " · federe" : ""}${meta.rigid ? " · sabit" : ""}`
					: "";
				const row = h(
					"tr",
					{ class: c.state === "resolved" ? undefined : c.state },
					h("td", { class: "wrap" }, c.label, h("br", {}), span("tag", tags)),
					cell(
						(STATE_LABEL[c.state] ?? c.state) +
							(c.branchTaken ? ` → ${c.branchTaken}` : ""),
						true,
					),
					cell(live ? fmtInterval(c.start) : "-"),
					cell(live ? fmtInterval(c.end) : "-"),
					cell(live ? fmtDuration(c.usedDuration) : "-"),
					cell(live ? `${widthOf(c.end)} dk` : "-"),
					cell(c.certainty),
					cell(c.notes.join("\n"), true),
				);
				if (c.undecided) row.classList.add("undecided");
				if (c.certainty === "budget-truncated") row.classList.add("truncated");
				return row;
			}),
		);
	}

	function drawLog(s: StatePayload): void {
		const sig = `${s.log.length}:${s.log[0]?.seq ?? 0}`;
		if (sig === logSig) return;
		logSig = sig;
		replace(
			body(logTable),
			...s.log.map((e) =>
				h(
					"tr",
					{},
					cell(String(e.lamport)),
					cell(e.wall),
					cell(e.kind),
					cell(e.note, true),
				),
			),
		);
	}

	function drawUnits(s: StatePayload): void {
		const u = s.units;
		const rows: Array<[string, string]> = [
			["şimdi (ISO)", u.nowIso],
			["ulus-zamanı", `${u.ulus.path}   ← adres = ağaçta bir yol`],
			["bildirimler", u.table.declarations.join(" · ")],
			[
				"sınıf 1 · static",
				"offline çevrilebilir (afin + tablo), sunucu gerekmez",
			],
			[
				"elde (carry)",
				`${u.carry.before} + ${u.carry.addGun} gün → ${u.carry.after}\n${u.carry.note}`,
			],
			["sınıf 2 · eventually-static", hilalLine(u.hilal.past)],
			["sınıf 3 · dynamic → gözlenince sınıf 2", hilalLine(u.hilal.future)],
		];
		replace(
			body(unitsTable),
			...rows.map(([k, v]) => h("tr", {}, h("th", {}, k), cell(v, true))),
		);
	}

	function drawFeed(s: StatePayload, fed: Answer | null): void {
		const issued = s.capabilities.issued
			.map(
				(c) =>
					`${c.token} → ${c.holder} (ızgara ${c.grid} dk · sorgu ${c.usedQueries}/${c.maxQueries})`,
			)
			.join(" | ");
		capLine.textContent =
			`elimdeki jeton: ${s.capabilities.held ?? "yok"} · ` +
			`dağıttığım: ${issued || "yok"} · lamport: ${s.lamport}`;

		const records = fed ? [fed, ...s.federation] : s.federation;
		if (records.length === 0) {
			replace(
				feed,
				h(
					"p",
					{ class: "empty" },
					"Henüz federe trafik yok. Teklif gönder ya da müsaitlik sor — karşı tarafa takvim değil, yalnızca yüklem cevabı gider.",
				),
			);
			return;
		}
		replace(
			feed,
			...records
				.slice(0, 4)
				.map((r) => h("pre", {}, JSON.stringify(r, null, 1))),
		);
	}

	return {
		element,
		update: (s, fed) => {
			drawFeed(s, fed);
			drawLog(s);
			drawUnits(s);
			drawPlan(s);
		},
	};
}
