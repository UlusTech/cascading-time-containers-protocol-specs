/**
 * The Hono app serving the UI.
 * @module
 */

import { Hono } from "hono";
import htmxScript from "htmx.org/dist/htmx.min.js" with { type: "file" };

const app = new Hono();

/**
 * htmx is served from our own binary, never a CDN.
 *
 * The `type: "file"` import resolves to a path: the real file during
 * development, an embedded `$bunfs/` path after `bun build --compile`.
 * So {@linkcode Bun.file} works either way and the compiled binary needs
 * no `node_modules` beside it.
 */
app.get("/htmx.js", () => new Response(Bun.file(htmxScript)));

export default app;
