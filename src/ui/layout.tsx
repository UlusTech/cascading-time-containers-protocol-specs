import { raw } from "hono/html";
import type { PropsWithChildren } from "hono/jsx";
import { getText } from "../lib/text-key";

/**
 * Setting `responseHandling` replaces htmx's default array wholesale, so every
 * status class has to be restated. The only change from the default is that
 * `[45]..` swaps: without it a boosted link to an error page does nothing
 * visible, because htmx refuses to swap 4xx/5xx bodies.
 */
const htmxConfig = JSON.stringify({
	globalViewTransitions: true,
	responseHandling: [
		{ code: "204", swap: false },
		{ code: "[23]..", swap: true },
		{ code: "[45]..", swap: true, error: true },
	],
});

/**
 * The page shell. `hx-boost` on the body makes every `<a>` and `<form>` under
 * it fetch over AJAX instead of navigating: htmx replaces this body's
 * innerHTML with the response's body, copies the response `<title>`, and
 * pushes the URL. Routes keep returning whole pages — no fragments.
 *
 * Consequence: everything in `<head>` is frozen after the first load. Only
 * the body and the title ever change again.
 *
 * The doctype is not an element, so JSX cannot express it. {@linkcode raw}
 * marks it as already-escaped so it survives as a sibling of `<html>` — which
 * keeps the whole document in one component instead of a wrapper.
 */
export const Layout = (props: PropsWithChildren<{ title: string }>) => (
	<>
		{raw("<!doctype html>")}
		<html lang="en">
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="htmx-config" content={htmxConfig} />
				<title>{props.title}</title>
				<script src="/htmx.js" />
			</head>
			<body hx-boost="true">
				<nav>
					<a href="/">{getText("siteTitle")}</a>
				</nav>
				{props.children}
			</body>
		</html>
	</>
);
