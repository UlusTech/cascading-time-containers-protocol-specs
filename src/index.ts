/**
 * İki düğümü birlikte başlatır. Federasyon ilk günden var: her düğüm ayrı
 * süreç, ayrı port, ayrı log, ayrı Lamport saati.
 *
 *   bun run src/index.ts   →   alice :4001   bob :4002
 *
 * Tek düğümü ayrı çalıştırmak için: bun run alice  /  bun run bob
 */

import { NODES } from "./scenario.ts";

const procs = Object.keys(NODES).map((id) =>
	Bun.spawn(["bun", "run", `${import.meta.dir}/node.ts`], {
		env: { ...process.env, CTCP_NODE: id },
		stdout: "inherit",
		stderr: "inherit",
	}),
);

console.log(
	"\n  alice → http://localhost:4001   kaskad zinciri, teklifi gönderen taraf",
);
console.log(
	"  bob   → http://localhost:4002   federe karşı taraf, teklifi değerlendiren\n",
);
console.log(
	"  İkisini iki sekmede açık tut: teklif gönderince iki log birlikte değişir.\n",
);

const stop = () => {
	for (const p of procs) p.kill();
	process.exit(0);
};
process.on("SIGINT", stop);
process.on("SIGTERM", stop);

await Promise.all(procs.map((p) => p.exited));
