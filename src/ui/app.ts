/// <reference lib="dom" />

/**
 * Tek düğüm sayfası — `src/node.ts` tarafından `/` adresinde sunulur.
 *
 * Panelin tamamı {@linkcode mountPanel} içinde; buradaki tek karar taşımanın
 * HTTP olması. Aynı panel `sim.html` içinde sayfa içi çekirdekle çalışır.
 */

import { httpClient } from "./client.ts";
import { mountPanel } from "./panel.ts";

const host = document.querySelector<HTMLElement>("#app");
if (!host) throw new Error("panel için #app bulunamadı");

mountPanel(host, httpClient());
