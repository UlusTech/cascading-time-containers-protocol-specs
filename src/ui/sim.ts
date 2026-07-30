/// <reference lib="dom" />

/**
 * Tarayıcı içi iki düğüm simülasyonu — sunucu yok, kurulum yok.
 *
 * Alice ve Bob'un çekirdekleri aynı sayfada yaşar; eşe giden çağrılar HTTP
 * yerine doğrudan fonksiyon çağrısıdır. Protokol bundan etkilenmez: çekirdek
 * taşımayı {@linkcode PeerTransport} arkasında görür, panel de
 * {@linkcode NodeClient} arkasında. Aynı kod, iki taşıma.
 *
 * `?node=alice` veya `?node=bob` yalnızca o paneli mount eder — panel modüler
 * olmak zorunda, çünkü ayrı süreçlerde de tek başına çalışıyor. İki çekirdek
 * her hâlde kurulur: tek panel gösterilse bile karşısında konuşacak bir eş olur.
 */

import { createNodeCore, type NodeCore, type PeerTransport } from "../core.ts";
import { NODES } from "../scenario.ts";
import { directClient } from "./client.ts";
import { h } from "./dom.ts";
import { mountPanel, type Panel } from "./panel.ts";

type NodeId = "alice" | "bob";
const IDS: NodeId[] = ["alice", "bob"];

const cores = new Map<NodeId, NodeCore>();

/** Eş çağrısı: karşı çekirdeğin federe ucunu doğrudan çağırır. */
function pageTransport(target: NodeId): PeerTransport {
	return {
		post: async (path, body) => {
			const peer = cores.get(target);
			if (!peer) throw new Error(`${target} çekirdeği kurulmadı`);
			return path === "/ctcp/freebusy"
				? peer.ctcpFreeBusy(body).body
				: peer.ctcpProposal(body).body;
		},
	};
}

for (const id of IDS) {
	const cfg = NODES[id];
	if (!cfg) throw new Error(`senaryoda ${id} yok`);
	const other: NodeId = id === "alice" ? "bob" : "alice";
	cores.set(id, createNodeCore(cfg, pageTransport(other)));
}

const asked = new URLSearchParams(location.search).get("node");
const wanted = IDS.filter((id) => asked === null || asked === id);
if (wanted.length === 0) wanted.push(...IDS);

const grid = document.querySelector<HTMLElement>("#sim");
if (!grid) throw new Error("simülasyon için #sim bulunamadı");
if (wanted.length === 1) grid.classList.add("sim-solo");

const panels = new Map<NodeId, Panel>();
for (const id of wanted) {
	const core = cores.get(id);
	if (!core) continue;
	const column = h("div", { class: "sim-col" });
	grid.append(column);
	panels.set(
		id,
		mountPanel(column, directClient(core), {
			/** Teklif iki logu birden hareket ettirir; kardeş panel de tazelenir. */
			afterAction: async () => {
				for (const [other, panel] of panels) {
					if (other !== id) await panel.refresh();
				}
			},
		}),
	);
}
