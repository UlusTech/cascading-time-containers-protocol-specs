import type { PropsWithChildren } from "hono/jsx";

export const Layout = (props: PropsWithChildren<{ title: string }>) => (
	<html lang="en">
		<head>
			<title>{props.title}</title>
			<script src="/htmx.js" />
		</head>
		<body>{props.children}</body>
	</html>
);
