/**
 * Arayüz sınamaları: sürükleme gerçekten protokol eylemine dönüyor mu.
 *
 * Buradaki tek iddia şu: takvimdeki **aynı hareket** üç ayrı protokol eylemine
 * karşılık gelir ve hangisine karşılık geldiği kutucuğun demirinden çıkar.
 * Bu yüzden testler `applyDrop`u taklit etmez — olaylar taklit DOM üzerinden
 * gerçek sürükleme makinesine girer, oradan çekirdeğe kadar yürür.
 *
 * Ayrıca kaydırma savunması sınanır: dokunuşta parmak kayarsa sürükleme
 * kurulmaz, çünkü o hareketin anlamı sayfayı kaydırmaktır.
 */

import { expect, test } from "bun:test";
import { createNodeCore, type NodeCore, type PeerTransport } from "../core.ts";
import { NODES, type NodeConfig } from "../scenario.ts";
import { createBlockInfo } from "./block-info.ts";
import { createCalendar } from "./calendar.ts";
import { directClient, type NodeClient } from "./client.ts";
import type { PanelBus } from "./controls.ts";
import { buildSpec, createCreateForm } from "./create-form.ts";
import { fmtAt } from "./format.ts";
import {
	applyDrop,
	type DropOutcome,
	dropKindOf,
	snapMin,
} from "./interact.ts";
import { axisSpan } from "./layout.ts";
import { mountPanel } from "./panel.ts";
import type { StatePayload } from "./payload.ts";
import {
	byButton,
	byClass,
	fire,
	fireDocument,
	installStubDom,
	StubElement,
	walk,
} from "./stub-dom.ts";

installStubDom();

const LONG_PRESS = 5;
const tick = (ms = 0): Promise<void> =>
	new Promise((done) => setTimeout(done, ms));

function cfgOf(id: string): NodeConfig {
	const found = NODES[id];
	if (!found) throw new Error(`senaryoda ${id} yok`);
	return found;
}

/** Sayfa içi eş: iki çekirdek doğrudan çağrıyla konuşur (sim.ts ile aynı yol). */
function pair(): { alice: NodeCore; bob: NodeCore } {
	const link = (get: () => NodeCore): PeerTransport => ({
		post: async (path, body) =>
			path === "/ctcp/freebusy"
				? get().ctcpFreeBusy(body).body
				: get().ctcpProposal(body).body,
	});
	let bob: NodeCore | undefined;
	const alice = createNodeCore(
		cfgOf("alice"),
		link(() => bob as NodeCore),
	);
	bob = createNodeCore(
		cfgOf("bob"),
		link(() => alice),
	);
	return { alice, bob };
}

type Call = { name: string; args: unknown[] };

/** Çekirdeğe giden çağrıları kaydeden istemci — taşıma yine gerçek. */
function recording(core: NodeCore): { client: NodeClient; calls: Call[] } {
	const base = directClient(core);
	const calls: Call[] = [];
	const note = (name: string, ...args: unknown[]): void => {
		calls.push({ name, args });
	};
	const client: NodeClient = {
		...base,
		observeStart: (id, min) => {
			note("observeStart", id, min);
			return base.observeStart(id, min);
		},
		planStart: (id, min) => {
			note("planStart", id, min);
			return base.planStart(id, min);
		},
		propose: (start) => {
			note("propose", start);
			return base.propose(start);
		},
		addContainer: (spec) => {
			note("addContainer", spec);
			return base.addContainer(spec);
		},
		removeContainer: (id) => {
			note("removeContainer", id);
			return base.removeContainer(id);
		},
	};
	return { client, calls };
}

const payloadOf = (core: NodeCore): StatePayload =>
	core.statePayload() as unknown as StatePayload;

type Harness = {
	calls: Call[];
	outcomes: DropOutcome[];
	creates: Array<{ min: number; minutes: number }>;
	opens: string[];
	root: StubElement;
	lanes: StubElement;
	blockOf(label: string): StubElement;
	state(): StatePayload;
	settle(): Promise<void>;
};

/**
 * Takvimi taklit DOM'a kurar ve 1 dakika = 1 piksel yapar: ölçek testin
 * konusunu bulanıklaştırmasın.
 */
function mountCalendar(core: NodeCore): Harness {
	const { client, calls } = recording(core);
	const outcomes: DropOutcome[] = [];
	const creates: Array<{ min: number; minutes: number }> = [];
	const opens: string[] = [];
	let state = payloadOf(core);
	let pending: Promise<void> = Promise.resolve();

	const commit = async (id: string, min: number): Promise<void> => {
		const c = state.plan.containers.find((x) => x.id === id);
		if (!c) return;
		const kind = dropKindOf(
			c,
			state.containers.find((m) => m.id === id),
		);
		outcomes.push(
			await applyDrop(client, kind, c, min, {
				peer: state.node.peer,
				hadPin: state.input.pins.toplanti !== undefined,
			}),
		);
		state = payloadOf(core);
		cal.update(state);
	};

	const cal = createCalendar(
		{
			drop: (id, min) => {
				pending = pending.then(() => commit(id, min));
			},
			create: (min, minutes) => {
				creates.push({ min, minutes });
			},
			open: (id) => {
				opens.push(id);
			},
			hold: () => {},
		},
		{ longPressMs: LONG_PRESS },
	);
	cal.update(state);

	const root = cal.element as unknown as StubElement;
	const lanes = byClass(root, "lanes");
	const grid = byClass(root, "cal-grid");
	if (!lanes || !grid) throw new Error("takvim kurulmadı");
	const minutes = Number(grid.style["--axis-min"]);
	lanes.rect = {
		top: 0,
		left: 0,
		width: 300,
		height: minutes,
		bottom: minutes,
		right: 300,
	};

	return {
		calls,
		outcomes,
		creates,
		opens,
		root,
		lanes,
		state: () => state,
		blockOf: (label) => {
			const blk = walk(
				root,
				(el) => el.classes.has("blk") && el.title.startsWith(label),
			);
			if (!blk) throw new Error(`blok bulunamadı: ${label}`);
			return blk;
		},
		settle: async () => {
			await pending;
		},
	};
}

type Point = { id?: number; touch?: boolean; y: number };

const ev = (p: Point): Record<string, unknown> => ({
	pointerId: p.id ?? 1,
	pointerType: p.touch === true ? "touch" : "mouse",
	button: 0,
	clientX: 20,
	clientY: p.y,
});

/** Blokun içinden basılır: olayın ağaçta yukarı yürümesi de sınanmış olur. */
function grab(h: Harness, label: string, y: number, touch = false): void {
	const blk = h.blockOf(label);
	const inner = byClass(blk, "zone") ?? blk;
	fire(inner, "pointerdown", ev({ y, touch }));
}

const move = (h: Harness, y: number, touch = false): void => {
	fire(h.lanes, "pointermove", ev({ y, touch }));
};

const release = (h: Harness, y: number, touch = false): void => {
	fire(h.lanes, "pointerup", ev({ y, touch }));
};

const startOf = (h: Harness, id: string): number => {
	const c = h.state().plan.containers.find((x) => x.id === id);
	if (!c) throw new Error(`kutucuk yok: ${id}`);
	return c.start.lo;
};

/* --- saat eki -------------------------------------------------------- */

test("saat eki okunan sayıya uyar", () => {
	expect(fmtAt(9 * 60 + 30)).toBe("09:30'da");
	expect(fmtAt(11 * 60)).toBe("11:00'de");
	expect(fmtAt(10 * 60 + 45)).toBe("10:45'te");
	expect(fmtAt(12 * 60 + 40)).toBe("12:40'ta");
	expect(fmtAt(13 * 60)).toBe("13:00'te");
	expect(fmtAt(9 * 60 + 50)).toBe("09:50'de");
});

/* --- bırakmanın anlamı ----------------------------------------------- */

test("bırakmanın anlamı kutucuğun demirinden çıkar", () => {
	const { alice, bob } = pair();
	const a = payloadOf(alice);
	const b = payloadOf(bob);
	const kindOf = (s: StatePayload, id: string) => {
		const c = s.plan.containers.find((x) => x.id === id);
		if (!c) throw new Error(id);
		return dropKindOf(
			c,
			s.containers.find((m) => m.id === id),
		);
	};
	expect(kindOf(a, "hazirlik")).toBe("observe");
	expect(kindOf(a, "uyanis")).toBe("observe");
	expect(kindOf(a, "yol-otobus")).toBe("observe");
	expect(kindOf(a, "toplanti")).toBe("propose");
	expect(kindOf(b, "standup")).toBe("plan");
	// gerçekleşmeyen kutucuk zamana oturmaz: taşınamaz
	expect(kindOf(a, "yol-metro")).toBe("none");
});

/* --- sürükleme: zincir → gözlem -------------------------------------- */

test("zincir bloğunu sürüklemek gözlem kaydeder", async () => {
	const { alice } = pair();
	const h = mountCalendar(alice);
	const from = startOf(h, "hazirlik");

	grab(h, "Hazırlık", 200);
	move(h, 290);
	release(h, 290);
	await h.settle();

	const call = h.calls.find((c) => c.name === "observeStart");
	expect(call).toBeDefined();
	expect(call?.args[0]).toBe("hazirlik");
	expect(call?.args[1]).toBe(snapMin(from + 90));
	expect(startOf(h, "hazirlik")).toBe(snapMin(from + 90));
	expect(h.outcomes[0]?.tone).toBe("ok");
	expect(h.outcomes[0]?.text).toContain("gözlem:");
});

test("yerinde bırakma eylem değil, ayrıntı balonudur", async () => {
	const { alice } = pair();
	const h = mountCalendar(alice);

	// sürükleme kurulur ama aynı dakikaya dönülür: kazara gözlem kaydedilmez
	grab(h, "Hazırlık", 200);
	move(h, 206);
	move(h, 200);
	release(h, 200);
	await h.settle();
	expect(h.calls).toHaveLength(0);
	expect(h.opens).toEqual(["hazirlik"]);

	// hiç kımıldamadan bırakmak: dokunma sayılır
	grab(h, "Hazırlık", 200);
	release(h, 200);
	expect(h.opens).toHaveLength(2);
	expect(h.calls).toHaveLength(0);
});

/* --- sürükleme: federe → teklif -------------------------------------- */

test("federe bloğu sürüklemek teklif gönderir, karşı teklif bloğu taşır", async () => {
	const { alice } = pair();
	alice.observe(9 * 60 + 10);
	const h = mountCalendar(alice);
	const from = startOf(h, "toplanti");

	// Bob'un standup'ına (09:30–10:00) çakışan vakit: karşı teklif 10:00 olur
	const target = 9 * 60 + 40;
	grab(h, "Bob ile toplantı", 300);
	move(h, 300 + (target - from));
	release(h, 300 + (target - from));
	await h.settle();

	const call = h.calls.find((c) => c.name === "propose");
	expect(call).toBeDefined();
	expect(call?.args[0]).toBe(target);

	const outcome = h.outcomes[0];
	expect(outcome?.text).toContain("karşı teklif");
	expect(outcome?.tone).toBe("warn");
	// blok bırakıldığı yere değil, Bob'un dediği yere oturur
	expect(outcome?.landedAt).toBe(10 * 60);
	expect(startOf(h, "toplanti")).toBe(10 * 60);
});

test("karşı teklif son başlama vaktini geçerse kutucuk dala düşer", async () => {
	const { alice } = pair();
	alice.observe(9 * 60 + 10);
	const h = mountCalendar(alice);
	const from = startOf(h, "toplanti");

	// öğle bloğuna (12:30) bırakılırsa karşı teklif 13:30 olur: son başlama 13:00
	const target = 12 * 60 + 30;
	grab(h, "Bob ile toplantı", 300);
	move(h, 300 + (target - from));
	release(h, 300 + (target - from));
	await h.settle();

	expect(h.outcomes[0]?.landedAt).toBe(13 * 60 + 30);
	const meeting = h.state().plan.containers.find((c) => c.id === "toplanti");
	expect(meeting?.state).toBe("skipped");
	expect(meeting?.branchTaken).toBe("async-inceleme");
});

test("boş bir vakte bırakılan teklif kabul edilir ve oraya sabitlenir", async () => {
	const { alice } = pair();
	alice.observe(9 * 60 + 10);
	const h = mountCalendar(alice);
	const from = startOf(h, "toplanti");
	const target = 10 * 60;

	grab(h, "Bob ile toplantı", 400);
	move(h, 400 + (target - from));
	release(h, 400 + (target - from));
	await h.settle();

	expect(h.outcomes[0]?.text).toContain("teklif kabul");
	expect(startOf(h, "toplanti")).toBe(target);
});

/* --- sürükleme: demirli → plan taşıma -------------------------------- */

test("demirli bloğu sürüklemek planı taşır, gözlem saymaz", async () => {
	const { bob } = pair();
	const h = mountCalendar(bob);
	const from = startOf(h, "standup");

	grab(h, "Standup", 150);
	move(h, 210);
	release(h, 210);
	await h.settle();

	const call = h.calls.find((c) => c.name === "planStart");
	expect(call).toBeDefined();
	expect(call?.args).toEqual(["standup", snapMin(from + 60)]);
	expect(startOf(h, "standup")).toBe(snapMin(from + 60));
	// plan taşıma cephe ilerletmez
	expect(h.state().plan.frontier).toBeNull();
	expect(h.state().input.plannedStarts.standup).toBe(snapMin(from + 60));
});

/* --- dokunma: kaydırma savunması ------------------------------------- */

test("dokunuşta uzun basış sürüklemeyi kurar", async () => {
	const { bob } = pair();
	const h = mountCalendar(bob);
	const from = startOf(h, "standup");

	grab(h, "Standup", 150, true);
	await tick(LONG_PRESS + 10);
	move(h, 210, true);
	release(h, 210, true);
	await h.settle();

	expect(h.calls.find((c) => c.name === "planStart")?.args[1]).toBe(
		snapMin(from + 60),
	);
});

test("dokunuşta parmak kayarsa sürükleme kurulmaz — sayfa kayar", async () => {
	const { bob } = pair();
	const h = mountCalendar(bob);

	grab(h, "Standup", 150, true);
	move(h, 190, true); // uzun basış dolmadan kaydı
	await tick(LONG_PRESS + 10);
	move(h, 240, true);
	release(h, 240, true);
	await h.settle();

	expect(h.calls).toHaveLength(0);
	expect(h.opens).toEqual([]);
});

test("dışarıda bırakılan yarım hareket takvimi kilitlemez", async () => {
	const { bob } = pair();
	const h = mountCalendar(bob);
	const from = startOf(h, "standup");

	// kurulmamış basış: işaretçi yakalaması yok, `pointerup` hiç gelmiyor
	fire(h.lanes, "pointerdown", ev({ y: 100 }));

	// sonraki hareket temiz başlamak zorunda
	grab(h, "Standup", 150);
	move(h, 210);
	release(h, 210);
	await h.settle();

	expect(h.calls.find((c) => c.name === "planStart")?.args[1]).toBe(
		snapMin(from + 60),
	);
});

test("Esc sürüklemeyi iptal eder", async () => {
	const { bob } = pair();
	const h = mountCalendar(bob);

	grab(h, "Standup", 150);
	move(h, 210);
	fireDocument("keydown", { key: "Escape" });
	release(h, 210);
	await h.settle();

	expect(h.calls).toHaveLength(0);
});

test("klavye: odaklı blokta Enter ayrıntıyı açar", () => {
	const { bob } = pair();
	const h = mountCalendar(bob);
	const blk = h.blockOf("Standup");
	expect(blk.tabIndex).toBe(0);
	fire(blk, "keydown", { key: "Enter", preventDefault: () => {} });
	expect(h.opens).toEqual(["standup"]);
});

/* --- boş alan: yeni kutucuk ------------------------------------------ */

test("boş alana dokunmak o vakitte kutucuk açar", () => {
	const { bob } = pair();
	const h = mountCalendar(bob);
	const axisLo = axisSpan(h.state().plan.containers).lo;

	fire(h.lanes, "pointerdown", ev({ y: 120 }));
	fire(h.lanes, "pointerup", ev({ y: 120 }));

	expect(h.creates).toHaveLength(1);
	expect(h.creates[0]?.minutes).toBe(30);
	// 1 dk = 1 px kurulduğu için 120 piksel = eksen başından 120 dakika sonrası
	expect(h.creates[0]?.min).toBe(axisLo + 120);
});

test("boş alanı sürüklemek süreyi belirler", () => {
	const { bob } = pair();
	const h = mountCalendar(bob);
	fire(h.lanes, "pointerdown", ev({ y: 120 }));
	fire(h.lanes, "pointermove", ev({ y: 210 }));
	fire(h.lanes, "pointerup", ev({ y: 210 }));

	expect(h.creates).toHaveLength(1);
	expect(h.creates[0]?.minutes).toBe(90);
});

/* --- form: tarife --------------------------------------------------- */

const FIELDS = {
	label: "Spor",
	durationKind: "fixed" as const,
	fixedMin: "45",
	durLo: "20",
	durHi: "40",
	anchorKind: "startsAt" as const,
	startsAt: "16:30",
	afterId: "",
	gapLo: "0",
	gapHi: "10",
	onMiss: "wait" as const,
	rigid: false,
	mustStartBefore: "",
};

test("form tarifesi: tek demir, geçerli süre, tanımlı dal", () => {
	const ok = buildSpec(FIELDS);
	expect(ok.ok).toBe(true);
	if (!ok.ok) return;
	expect(ok.spec.startsAt).toBe(16 * 60 + 30);
	expect(ok.spec.duration).toEqual({ kind: "fixed", min: 45 });
	// dal her zaman gönderilir: eksik bırakılırsa çekirdek 'cancel' varsayar
	expect(ok.spec.onMiss).toBe("wait");
	expect(ok.spec.after).toBeUndefined();

	expect(buildSpec({ ...FIELDS, label: "  " }).ok).toBe(false);
	expect(
		buildSpec({ ...FIELDS, durationKind: "contingent", durLo: "50" }).ok,
	).toBe(false);
	const after = buildSpec({
		...FIELDS,
		anchorKind: "after",
		afterId: "standup",
		gapLo: "5",
		gapHi: "20",
	});
	expect(after.ok).toBe(true);
	if (after.ok) {
		expect(after.spec.after).toEqual({ id: "standup", gapLo: 5, gapHi: 20 });
		expect(after.spec.startsAt).toBeUndefined();
	}
	expect(
		buildSpec({
			...FIELDS,
			anchorKind: "after",
			afterId: "standup",
			gapLo: "30",
		}).ok,
	).toBe(false);
});

/* --- form: gerçek gönderim ------------------------------------------ */

function stubBus(): { bus: PanelBus; notes: string[] } {
	const notes: string[] = [];
	return {
		notes,
		bus: {
			refresh: async () => {},
			setFedResult: () => {},
			notify: (text: string) => {
				notes.push(text);
			},
			hold: () => {},
		},
	};
}

const inputOf = (root: StubElement, type: string, value?: string) =>
	walk(
		root,
		(el) =>
			el.tag === "input" &&
			el.getAttribute("type") === type &&
			(value === undefined || el.getAttribute("value") === value),
	);

test("form gönderimi kutucuk ekler, çekirdek hatası balonda görünür", async () => {
	const { bob } = pair();
	const { client, calls } = recording(bob);
	const { bus, notes } = stubBus();
	const form = createCreateForm(client, bus);
	const root = form.element as unknown as StubElement;
	const state = payloadOf(bob);

	form.openAt(state, 16 * 60 + 30, 45, { x: 10, y: 10 });
	const label = inputOf(root, "text");
	const submit = byButton(root, "Kutucuğu ekle");
	if (!label || !submit) throw new Error("form kurulmadı");
	label.value = "Spor";
	submit.onclick?.();
	await tick();

	const call = calls.find((c) => c.name === "addContainer");
	expect(call).toBeDefined();
	expect(notes[0]).toContain("kutucuk eklendi");
	expect(form.isOpen()).toBe(false);
	const added = payloadOf(bob).containers.find((c) => c.custom);
	expect(added).toBeDefined();
	expect(added?.startsAt).toBe(16 * 60 + 30);

	// geçersiz demir: çekirdek 422 döner, balon açık kalır ve nedeni yazar
	form.openAt(state, 600, 30, { x: 10, y: 10 });
	const after = inputOf(root, "radio", "after");
	const at = inputOf(root, "radio", "startsAt");
	const select = walk(root, (el) => el.tag === "select");
	if (!after || !at || !select) throw new Error("demir alanı kurulmadı");
	label.value = "Bozuk";
	at.checked = false;
	after.checked = true;
	select.value = "boyle-bir-kutucuk-yok";
	submit.onclick?.();
	await tick();

	const error = byClass(root, "pop-error");
	expect(form.isOpen()).toBe(true);
	expect(error?.hidden).toBe(false);
	expect(error?.textContent).toContain("after");
});

/* --- ayrıntı balonu: silme ------------------------------------------ */

test("sonradan eklenen kutucuk balondan silinir", async () => {
	const { bob } = pair();
	const added = bob.addContainer({
		label: "Spor",
		startsAt: 17 * 60,
		duration: { kind: "fixed", min: 45 },
		onMiss: "wait",
	});
	const id = String(added.body.id);
	const { client, calls } = recording(bob);
	const { bus } = stubBus();
	const info = createBlockInfo(client, bus);
	const root = info.element as unknown as StubElement;

	info.openFor(payloadOf(bob), id, { x: 10, y: 10 });
	const del = byButton(root, "Kutucuğu sil");
	if (!del) throw new Error("silme düğmesi yok");
	del.onclick?.();
	await tick();

	expect(calls.find((c) => c.name === "removeContainer")?.args[0]).toBe(id);
	expect(payloadOf(bob).containers.some((c) => c.id === id)).toBe(false);
});

test("senaryo kutucuğunda silme düğmesi olmaz", () => {
	const { bob } = pair();
	const { client } = recording(bob);
	const { bus } = stubBus();
	const info = createBlockInfo(client, bus);
	const root = info.element as unknown as StubElement;
	info.openFor(payloadOf(bob), "standup", { x: 10, y: 10 });
	expect(byButton(root, "Kutucuğu sil")).toBeNull();
	// bırakmanın anlamı yine yazılı olmalı
	expect(byClass(root, "info-drag")?.textContent).toContain("plan taşıma");
});

test("açık balonu yeniden açmak yoklama sayacını şişirmez", () => {
	const { bob } = pair();
	const { client } = recording(bob);
	let held = 0;
	const bus: PanelBus = {
		refresh: async () => {},
		setFedResult: () => {},
		notify: () => {},
		hold: (on) => {
			held += on ? 1 : -1;
		},
	};
	const info = createBlockInfo(client, bus);
	const s = payloadOf(bob);
	info.openFor(s, "standup", { x: 10, y: 10 });
	info.openFor(s, "ogle", { x: 10, y: 10 });
	expect(held).toBe(1);
	info.close();
	expect(held).toBe(0);
	info.close();
	expect(held).toBe(0);
});

/* --- panel: tek düğüm tek başına kurulur ---------------------------- */

test("tek düğüm paneli tek başına kurulur (?node=bob)", async () => {
	const { bob } = pair();
	const host = new StubElement("div") as unknown as HTMLElement;
	const panel = mountPanel(host, directClient(bob));
	await panel.refresh();

	const root = panel.element as unknown as StubElement;
	expect(byClass(root, "panel-title")?.textContent).toContain("Bob");
	expect(byClass(root, "cal-head")).not.toBeNull();
	expect(byClass(root, "lanes")).not.toBeNull();
	expect(byClass(root, "toasts")).not.toBeNull();
	panel.stop();
});

/* --- hata gövdeleri iki modda de aynı okunur ------------------------ */

test("çekirdek hatası bildirime hata tonuyla düşer", async () => {
	const { alice } = pair();
	const { client } = recording(alice);
	const c = payloadOf(alice).plan.containers.find((x) => x.id === "hazirlik");
	if (!c) throw new Error("hazirlik yok");
	// hazırlık demirli değil: plan taşıma 409 döner
	const outcome = await applyDrop(client, "plan", c, 600, {
		peer: "bob",
		hadPin: false,
	});
	expect(outcome.tone).toBe("bad");
	expect(outcome.text).toContain("plan taşınmadı");
	expect(outcome.landedAt).toBeUndefined();
});

test("gözlem toplantı sabitlemesini düşürünce bildirim bunu söyler", async () => {
	const { alice } = pair();
	alice.observe(9 * 60 + 10);
	await alice.propose(12 * 60 + 30);
	const s = payloadOf(alice);
	expect(s.input.pins.toplanti).toBeDefined();

	const { client } = recording(alice);
	const c = s.plan.containers.find((x) => x.id === "hazirlik");
	if (!c) throw new Error("hazirlik yok");
	const outcome = await applyDrop(client, "observe", c, 9 * 60 + 40, {
		peer: s.node.peer,
		hadPin: true,
	});
	expect(outcome.text).toContain("toplantı sabitlemesi kalktı");
	expect(payloadOf(alice).input.pins.toplanti).toBeUndefined();
});
