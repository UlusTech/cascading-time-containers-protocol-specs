/**
 * Declarations for files imported with `with { type: "file" }`.
 *
 * Bun resolves such an import to a path string: the source path during
 * development, an embedded `$bunfs/` path after `bun build --compile`.
 */

declare module "htmx.org/dist/htmx.min.js" {
	const path: string;
	export default path;
}
