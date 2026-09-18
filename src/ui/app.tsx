/**
 * The Hono app serving the UI.
 * @module
 */

import { Hono } from "hono";
import htmxScript from "htmx.org/dist/htmx.min.js" with { type: "file" };
import { getText } from "../lib/text-key";
import { ContainerView } from "./components/container";
import { Layout } from "./layout";

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

app.get("/", (context) =>
	context.html(
		<Layout title={getText("siteTitle")}>
			<a href="/containers/root">root</a>
		</Layout>,
	),
);

app.get("/containers/:id", (context) => {
	const id = context.req.param("id");
	return context.html(
		<Layout title={id}>
			<ContainerView id={id} cascade={["alpha", "beta"]} />
			<a href="/">{getText("backLink")}</a>
		</Layout>,
	);
});

app.notFound((context) =>
	context.html(
		<Layout title={getText("notFoundTitle")}>
			<p>{getText("notFoundBody")}</p>
		</Layout>,
		404,
	),
);

export default app;
