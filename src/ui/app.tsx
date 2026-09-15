import { Hono } from "hono";

const app = new Hono();

app.get(
	"/htmx.js",
	() => new Response(Bun.file("node_modules/htmx.org/dist/htmx.min.js")),
);

export default app;
