/**
 * Bir CTCP düğümünün HTTP sarmalayıcısı.
 *
 * Bütün düğüm mantığı {@linkcode createNodeCore} içinde (src/core.ts);
 * burada yalnızca Bun.serve rotaları çekirdek çağrılarına bağlanır.
 * Taşıma katmanı agnostiktir: aynı çekirdek tarayıcı içi simülasyonda
 * doğrudan fonksiyon çağrısıyla da çalışır (src/ui/sim.ts).
 *
 *   GET  /ctcp/describe        düğümün kendini tanımlaması
 *   GET  /ctcp/units           statik uyumluluk tablosu (offline çevrilebilir)
 *   POST /ctcp/resolve-unit    dinamik/oracle birim çözümü (aralık döner)
 *   POST /ctcp/freebusy        yetenek kapsamlı YÜKLEM sorusu ("müsait misin?")
 *   POST /ctcp/proposal        federe yeniden planlama teklifi
 */

import { type CoreResult, createNodeCore, type PeerTransport } from "./core.ts";
import { NODES, type NodeConfig, PLANNED_WAKE } from "./scenario.ts";
import ui from "./ui/index.html";
import sim from "./ui/sim.html";
import { compatibilityTable } from "./units.ts";

function requireNode(id: string): NodeConfig {
	const found = NODES[id];
	if (!found) throw new Error(`bilinmeyen düğüm: ${id} (alice | bob)`);
	return found;
}

const nodeId = process.env.CTCP_NODE ?? "alice";
const cfg = requireNode(nodeId);

/** Eşe giden çağrılar HTTP üzerinden; çekirdek bunu bilmez. */
function httpTransport(base: string): PeerTransport {
	return {
		post: async (path, body) => {
			const res = await fetch(`${base}${path}`, {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify(body),
			});
			return (await res.json()) as Record<string, unknown>;
		},
	};
}

const core = createNodeCore(
	cfg,
	cfg.peer ? httpTransport(cfg.peer.base) : undefined,
);

const asResponse = (r: CoreResult): Response =>
	Response.json(r.body, { status: r.status });

async function readBody(req: Request): Promise<Record<string, unknown>> {
	return (await req.json().catch(() => ({}))) as Record<string, unknown>;
}

const server = Bun.serve({
	port: cfg.port,
	development: { hmr: true, console: true },
	routes: {
		"/": ui,
		/** Statik iki düğüm simülasyonu; Pages'te tek başına yayınlanan sayfa. */
		"/sim": sim,

		/* ---- federe protokol uçları ---- */
		"/ctcp/describe": () => Response.json(core.describe()),
		"/ctcp/units": () => Response.json(compatibilityTable()),
		"/ctcp/resolve-unit": {
			POST: async (req: Request) => {
				const b = await readBody(req);
				return asResponse(core.resolveUnit(Number(b.index ?? 0)));
			},
		},
		"/ctcp/freebusy": {
			POST: async (req: Request) =>
				asResponse(core.ctcpFreeBusy(await readBody(req))),
		},
		"/ctcp/proposal": {
			POST: async (req: Request) =>
				asResponse(core.ctcpProposal(await readBody(req))),
		},

		/* ---- yerel arayüz uçları ---- */
		"/api/state": () => Response.json(core.statePayload()),
		"/api/observe": {
			POST: async (req: Request) => {
				const b = await readBody(req);
				return asResponse(core.observe(Number(b.wake ?? PLANNED_WAKE)));
			},
		},
		"/api/force-miss": {
			POST: async (req: Request) => {
				const b = await readBody(req);
				return asResponse(core.forceMiss(String(b.id ?? ""), Boolean(b.on)));
			},
		},
		"/api/fuel": {
			POST: async (req: Request) => {
				const b = await readBody(req);
				return asResponse(core.setFuel(Number(b.fuel ?? 20_000)));
			},
		},
		"/api/observe-hilal": {
			POST: async (req: Request) => {
				const b = await readBody(req);
				return asResponse(
					core.observeHilal(Number(b.index ?? 0), Number(b.days ?? 29)),
				);
			},
		},
		"/api/observe-start": {
			POST: async (req: Request) => {
				const b = await readBody(req);
				return asResponse(
					core.observeStart(String(b.id ?? ""), Number(b.min ?? 0)),
				);
			},
		},
		"/api/plan-start": {
			POST: async (req: Request) => {
				const b = await readBody(req);
				return asResponse(
					core.setPlannedStart(String(b.id ?? ""), Number(b.min ?? 0)),
				);
			},
		},
		"/api/container": {
			POST: async (req: Request) =>
				asResponse(core.addContainer(await readBody(req))),
			DELETE: async (req: Request) => {
				const b = await readBody(req);
				return asResponse(core.removeContainer(String(b.id ?? "")));
			},
		},
		"/api/propose": {
			POST: async (req: Request) => {
				const b = await readBody(req);
				return asResponse(
					await core.propose(typeof b.start === "number" ? b.start : undefined),
				);
			},
		},
		"/api/freebusy": {
			POST: async (req: Request) => {
				const b = await readBody(req);
				return asResponse(
					await core.queryFreeBusy(Number(b.from ?? 600), Number(b.to ?? 660)),
				);
			},
		},
		"/api/reset": { POST: () => asResponse(core.reset()) },
	},
	fetch: () => new Response("bulunamadı", { status: 404 }),
});

console.log(
	`[ctcp:${nodeId}] ${server.url} · ${cfg.containers.length} kutucuk`,
);
