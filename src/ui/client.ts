/**
 * Panelin düğümle konuşma yolu.
 *
 * İki uygulaması var, ikisi de aynı yüzeyi verir:
 *
 *   - {@linkcode httpClient} — sayfanın sunulduğu düğümün `/api/*` uçları
 *   - {@linkcode directClient} — aynı sayfadaki {@linkcode NodeCore}'a doğrudan çağrı
 *
 * Panel hangisiyle çalıştığını bilmez. Taşımayı soyutlamak süs değil: çekirdek
 * de aynı şeyi eşe giden çağrılar için yapıyor (`PeerTransport`). Tek fark
 * `mode`: HTTP tarafında durum sunucuda değişebileceği için yoklama gerekir,
 * sayfa içinde gerekmez.
 */

import type { NodeCore } from "../core.ts";
import type { StatePayload } from "./payload.ts";

/** Uçların cevabı; hata durumunda da gövde döner (`{ error: ... }`). */
export type Answer = Record<string, unknown>;

export type NodeClient = {
	/** `http`: durumu yoklamak gerekir · `direct`: eylemden sonra yeniden çiz. */
	mode: "http" | "direct";
	state(): Promise<StatePayload>;
	observe(wake: number): Promise<Answer>;
	forceMiss(id: string, on: boolean): Promise<Answer>;
	setFuel(fuel: number): Promise<Answer>;
	observeHilal(index: number, days: number): Promise<Answer>;
	propose(): Promise<Answer>;
	freeBusy(from: number, to: number): Promise<Answer>;
	reset(): Promise<Answer>;
};

async function post(path: string, body: unknown = {}): Promise<Answer> {
	const res = await fetch(path, {
		method: "POST",
		headers: { "content-type": "application/json" },
		body: JSON.stringify(body),
	});
	return (await res
		.json()
		.catch(() => ({ error: "cevap okunamadı" }))) as Answer;
}

/** Bu origin'deki düğüme bağlanır — `src/node.ts` tarafından sunulan sayfa. */
export function httpClient(): NodeClient {
	return {
		mode: "http",
		state: async () =>
			(await (await fetch("/api/state")).json()) as StatePayload,
		observe: (wake) => post("/api/observe", { wake }),
		forceMiss: (id, on) => post("/api/force-miss", { id, on }),
		setFuel: (fuel) => post("/api/fuel", { fuel }),
		observeHilal: (index, days) => post("/api/observe-hilal", { index, days }),
		propose: () => post("/api/propose"),
		freeBusy: (from, to) => post("/api/freebusy", { from, to }),
		reset: () => post("/api/reset"),
	};
}

/**
 * Sayfa içindeki çekirdeğe doğrudan bağlanır. HTTP durum kodu yerine yalnızca
 * gövde döner — {@linkcode httpClient} de öyle davranır, böylece hata gövdeleri
 * (`401`, `409`, `429`) iki modda aynı görünür.
 */
export function directClient(core: NodeCore): NodeClient {
	return {
		mode: "direct",
		state: async () => core.statePayload() as unknown as StatePayload,
		observe: async (wake) => core.observe(wake).body,
		forceMiss: async (id, on) => core.forceMiss(id, on).body,
		setFuel: async (fuel) => core.setFuel(fuel).body,
		observeHilal: async (index, days) => core.observeHilal(index, days).body,
		propose: async () => (await core.propose()).body,
		freeBusy: async (from, to) => (await core.queryFreeBusy(from, to)).body,
		reset: async () => core.reset().body,
	};
}
