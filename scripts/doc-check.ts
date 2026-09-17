#!/usr/bin/env bun

/**
 * doc-check — type-checks the code examples in your JSDoc comments.
 *
 * The Bun/TypeScript answer to `deno check --doc`. Bun does not type-check at
 * all, so none of this is free: the script lifts every fenced code block out of
 * `/** ... *\/` comments (and out of Markdown files, if you point it at them),
 * turns each block into an in-memory TypeScript module, and runs the real
 * TypeScript checker over those modules. Diagnostics are mapped back to the
 * line and column of the original comment, so an error inside an `@example`
 * points at the `@example`.
 *
 *   bun scripts/doc-check.ts                        check the default globs
 *   bun scripts/doc-check.ts "lib/ ** / *.ts" "*.md"  check explicit globs
 *   bun scripts/doc-check.ts --json                 machine-readable output
 *   bun scripts/doc-check.ts --no-cache             re-check an unchanged tree
 *   bun scripts/doc-check.ts --list                 list snippets, check nothing
 *   bun scripts/doc-check.ts --print src/thing.ts   dump the generated modules
 *
 * Exit status is 0 when every example checks and 1 otherwise, which is all a
 * git hook needs. With lefthook:
 *
 *   pre-push:
 *     parallel: true
 *     commands:
 *       doc-check:
 *         run: bun scripts/doc-check.ts
 *
 * Nothing is written next to your sources. The generated modules exist only in
 * memory, so an interrupted run cannot leave junk in the worktree and two runs
 * cannot collide. The single file the script writes is its own cache, under
 * `node_modules/.cache/doc-check/`.
 *
 * ---------------------------------------------------------------------------
 * Requirements
 * ---------------------------------------------------------------------------
 * TypeScript 7 (the native compiler) and Bun. TypeScript 7 dropped the classic
 * in-process `ts.createProgram` API, so the checking here goes through the new
 * `typescript/unstable/async` client, which drives the Go compiler over a pipe
 * and accepts a virtual file system — which is exactly what an extractor needs.
 * That API is marked unstable: if a TypeScript upgrade breaks this script, the
 * three entry points to look at are `API`, `Snapshot.getProject` and
 * `Program.getSemanticDiagnostics`.
 *
 * Cross-platform: no shell-outs, no POSIX-only paths, CRLF input is handled,
 * and compiler output is read as structured diagnostics rather than scraped
 * from stdout, so a Windows `C:\...` path never has to be parsed.
 *
 * ---------------------------------------------------------------------------
 * What is taken from Deno's `cli/util/extract.rs`, and where this differs
 * ---------------------------------------------------------------------------
 * Taken (each one is a bug Deno had to fix at some point — the issue numbers
 * are theirs, and they are worth reading before "simplifying" any of it):
 *   - Names exported by the documented module are auto-imported into its
 *     examples, so an `@example` can call `greet()` with no import line.
 *   - Type-only exports are injected as `import type` specifiers, or a project
 *     with `verbatimModuleSyntax` fails to check (denoland/deno#31385).
 *   - Re-exported names (`export { x } from "./y"`) are part of the module's
 *     export surface too (denoland/deno#33511).
 *   - Export names that cannot be import bindings — `export { x as "a-b" }`,
 *     reserved words — are skipped (denoland/deno#35177).
 *   - Names the snippet declares or imports itself beat the injected import, so
 *     an example can shadow the module on purpose and never sees a duplicate
 *     identifier error (denoland/deno#25720).
 *   - A default export is imported under its declared name unless a named
 *     export already claims that name (denoland/deno#26112).
 *   - Fences are found by scanning lines rather than with one big regular
 *     expression: a fence closes only on a run of at least as many backticks,
 *     HTML-commented blocks are skipped, and blockquote markers are stripped
 *     (denoland/deno#35125, #34871, #34866).
 *   - The language tag picks the dialect (`ts`, `typescript`, `tsx`, `js`, ...)
 *     and an `ignore` attribute skips the block.
 *
 * Deliberately different:
 *   - Deno reports an error against a virtual file called `main.ts#12-18.ts` at
 *     a line number relative to the snippet; mapping back to the real file is
 *     still a TODO in their source. This keeps a per-line source map and
 *     reports real positions.
 *   - Deno injects the module's entire export surface. This injects only the
 *     names a snippet actually mentions: fewer bindings, fewer collisions.
 *   - On the JSDoc path Deno's line regex also strips one leading `#` per line,
 *     which silently eats a `#privateField` that starts a line (no test covers
 *     it). Here only a leading `#!` is special-cased.
 *   - Deno's shebang-to-permissions handling is meaningless outside the Deno
 *     runtime, so a `#!` first line is just dropped.
 *   - `deno check --doc` is, as of Deno 2.9, ignored with a warning when the
 *     native type checker is in use — so this currently does something Deno
 *     itself does not.
 */

import { mkdir, readdir } from "node:fs/promises";
import { dirname, isAbsolute, join, relative, resolve } from "node:path";
import { parseArgs } from "node:util";
import { Glob } from "bun";
import { SyntaxKind } from "typescript/unstable/ast";
import { createScanner } from "typescript/unstable/ast/scanner";
import { API } from "typescript/unstable/async";
import type { FileSystem } from "typescript/unstable/fs";

/** Bump when extraction changes in a way that invalidates cached results. */
const CACHE_VERSION = 1;

/** Fence language tags worth handing to the type checker, and their extension. */
const LANGUAGE_EXTENSIONS = new Map<string, string>([
	["ts", ".ts"],
	["typescript", ".ts"],
	["mts", ".mts"],
	["cts", ".cts"],
	["tsx", ".tsx"],
	["js", ".js"],
	["javascript", ".js"],
	["mjs", ".mjs"],
	["cjs", ".cjs"],
	["jsx", ".jsx"],
]);

const DEFAULT_PATTERNS = [
	"src/**/*.ts",
	"src/**/*.tsx",
	"src/**/*.mts",
	"src/**/*.cts",
];
const IGNORED_DIRECTORIES =
	/(?:^|[\\/])(?:node_modules|\.git|dist|build|coverage|out)(?:[\\/]|$)/;
const MARKDOWN_PATTERN = /\.(?:md|markdown)$/i;

/* ========================================================================== */
/* Types                                                                      */
/* ========================================================================== */

/**
 * One line of an extracted snippet, remembering where it came from.
 * `columnDelta` is how many characters were cut off the front of the original
 * line (the ` * ` of a JSDoc comment, a `> ` blockquote marker), so a column
 * the compiler reports can be shifted back onto the real line.
 */
interface SnippetLine {
	readonly text: string;
	readonly originalLine: number; // 1-based, in the original file
	readonly columnDelta: number;
}

/** A code block lifted out of a comment or a Markdown file. */
interface Snippet {
	/** Absolute path of the file the block was written in. */
	readonly sourcePath: string;
	/** Path of the in-memory module handed to the compiler. */
	readonly virtualPath: string;
	/** 1-based line of the opening fence; the fallback position for a diagnostic. */
	readonly fenceLine: number;
	readonly lines: readonly SnippetLine[];
	/** Text of the generated module: injected imports, the body, a module marker. */
	generatedText: string;
	/** How many injected lines sit above the first body line. */
	preludeLineCount: number;
	/** Offset of the start of each generated line, for offset-to-position maths. */
	generatedLineStarts: number[];
}

/** The export surface of a documented module, split by value versus type. */
interface ModuleExports {
	readonly valueNames: Set<string>;
	readonly typeNames: Set<string>;
	defaultName: string | undefined;
}

interface FencedBlock {
	readonly languageTag: string;
	readonly attributes: readonly string[];
	readonly fenceLine: number;
	readonly lines: readonly SnippetLine[];
}

interface ReportedDiagnostic {
	readonly filePath: string;
	readonly line: number;
	readonly column: number;
	readonly code: number;
	readonly isError: boolean;
	readonly message: string;
	/** False when the position fell on an injected line and could not be mapped. */
	readonly mappedExactly: boolean;
}

/* ========================================================================== */
/* Text helpers                                                               */
/* ========================================================================== */

/** Splits text into lines, tolerating CRLF. Index 0 is line 1. */
function splitLines(text: string): string[] {
	return text
		.split("\n")
		.map((line) => (line.endsWith("\r") ? line.slice(0, -1) : line));
}

/** Byte-agnostic offset of the first character of every line. */
function computeLineStartOffsets(text: string): number[] {
	const starts = [0];
	for (let index = 0; index < text.length; index++) {
		if (text.charCodeAt(index) === 10 /* \n */) starts.push(index + 1);
	}
	return starts;
}

/** Turns a character offset into a 1-based line and column. */
function offsetToPosition(
	lineStarts: readonly number[],
	offset: number,
): { line: number; column: number } {
	let low = 0;
	let high = lineStarts.length - 1;
	while (low < high) {
		const middle = (low + high + 1) >> 1;
		if (lineStarts[middle]! <= offset) low = middle;
		else high = middle - 1;
	}
	return { line: low + 1, column: offset - lineStarts[low]! + 1 };
}

/** Path as it should be printed: relative to the project, native separators. */
function displayPath(projectRoot: string, absolutePath: string): string {
	const relativePath = relative(projectRoot, absolutePath);
	return relativePath.startsWith("..") ? absolutePath : relativePath;
}

/** Forward slashes, which is what a tsconfig always wants, on every platform. */
function toConfigPath(absolutePath: string): string {
	return absolutePath.replaceAll("\\", "/");
}

/**
 * Removes blockquote markers (`>`, `> > `) from the front of a line and reports
 * how many characters went away. Markdown allows up to three leading spaces
 * before a marker, hence the space budget.
 */
function stripBlockquoteMarkers(line: string): {
	text: string;
	removed: number;
} {
	let cursor = 0;
	let spaceBudget = 3;
	let sawMarker = false;

	for (;;) {
		let probe = cursor;
		while (probe < line.length && line[probe] === " " && spaceBudget > 0) {
			probe++;
			spaceBudget--;
		}
		if (line[probe] !== ">") break;
		probe++;
		if (line[probe] === " " || line[probe] === "\t") probe++;
		cursor = probe;
		spaceBudget = 3;
		sawMarker = true;
	}

	return sawMarker
		? { text: line.slice(cursor), removed: cursor }
		: { text: line, removed: 0 };
}

const RESERVED_WORDS = new Set([
	"await",
	"break",
	"case",
	"catch",
	"class",
	"const",
	"continue",
	"debugger",
	"default",
	"delete",
	"do",
	"else",
	"enum",
	"export",
	"extends",
	"false",
	"finally",
	"for",
	"function",
	"if",
	"import",
	"in",
	"instanceof",
	"let",
	"new",
	"null",
	"return",
	"static",
	"super",
	"switch",
	"this",
	"throw",
	"true",
	"try",
	"typeof",
	"var",
	"void",
	"while",
	"with",
	"yield",
]);

/** Can `name` be the local binding of an import specifier? */
function isImportableIdentifier(name: string): boolean {
	if (name.length === 0 || RESERVED_WORDS.has(name)) return false;
	return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name);
}

/* ========================================================================== */
/* Fence scanning                                                             */
/* ========================================================================== */

/**
 * Finds fenced code blocks in a sequence of already-normalized lines.
 *
 * A line scanner, not a regular expression, on purpose: Deno replaced their
 * regex with one of these (denoland/deno#35125) because a regex cannot express
 * "a fence closes on a run of *at least* as many backticks" — which is how you
 * write a Markdown block that itself contains a triple-backtick example.
 * Blocks parked inside `<!-- ... -->` stay parked, same as in Deno.
 */
function findFencedBlocks(lines: readonly SnippetLine[]): FencedBlock[] {
	const blocks: FencedBlock[] = [];
	let insideHtmlComment = false;
	let lineIndex = 0;

	while (lineIndex < lines.length) {
		const currentLine = lines[lineIndex]!;
		const trimmed = currentLine.text.replace(/^[ \t]+/, "");

		if (insideHtmlComment) {
			if (currentLine.text.includes("-->")) insideHtmlComment = false;
			lineIndex++;
			continue;
		}
		if (trimmed.startsWith("<!--")) {
			if (!trimmed.includes("-->")) insideHtmlComment = true;
			lineIndex++;
			continue;
		}

		const opening = parseFenceOpening(currentLine.text);
		if (!opening) {
			lineIndex++;
			continue;
		}

		// Look forward for a closing fence of the same character, at least as long.
		// An unterminated fence is not a block: step over just the opening line so
		// whatever follows is still scanned.
		let closingIndex = lineIndex + 1;
		while (closingIndex < lines.length) {
			if (
				isFenceClosing(
					lines[closingIndex]!.text,
					opening.marker,
					opening.markerCount,
				)
			)
				break;
			closingIndex++;
		}
		if (closingIndex >= lines.length) {
			lineIndex++;
			continue;
		}

		const body = lines.slice(lineIndex + 1, closingIndex).map((line) => {
			if (!opening.insideBlockquote) return line;
			const stripped = stripBlockquoteMarkers(line.text);
			return {
				text: stripped.text,
				originalLine: line.originalLine,
				columnDelta: line.columnDelta + stripped.removed,
			} satisfies SnippetLine;
		});

		const attributes = opening.infoString.trim().split(/\s+/).filter(Boolean);
		blocks.push({
			languageTag: (attributes[0] ?? "").toLowerCase(),
			attributes,
			fenceLine: currentLine.originalLine,
			lines: body,
		});
		lineIndex = closingIndex + 1;
	}

	return blocks;
}

function parseFenceOpening(line: string):
	| {
			marker: string;
			markerCount: number;
			infoString: string;
			insideBlockquote: boolean;
	  }
	| undefined {
	const unquoted = stripBlockquoteMarkers(line.replace(/^[ \t]+/, ""));
	const candidate = unquoted.text.replace(/^[ \t]+/, "");
	const marker = candidate.startsWith("```")
		? "`"
		: candidate.startsWith("~~~")
			? "~"
			: undefined;
	if (!marker) return undefined;

	let markerCount = 0;
	while (candidate[markerCount] === marker) markerCount++;
	const infoString = candidate.slice(markerCount);
	// CommonMark: a backtick fence's info string may not contain a backtick.
	if (marker === "`" && infoString.includes("`")) return undefined;

	return {
		marker,
		markerCount,
		infoString,
		insideBlockquote: unquoted.removed > 0,
	};
}

function isFenceClosing(
	line: string,
	marker: string,
	openingCount: number,
): boolean {
	const candidate = stripBlockquoteMarkers(
		line.replace(/^[ \t]+/, ""),
	).text.replace(/^[ \t]+/, "");
	let markerCount = 0;
	while (candidate[markerCount] === marker) markerCount++;
	if (markerCount < openingCount) return false;
	return candidate.slice(markerCount).trim().length === 0;
}

/* ========================================================================== */
/* Source scanning: comments and exports                                      */
/* ========================================================================== */

interface ScannedSource {
	/** `/** ... *\/` comment ranges, in source order. */
	readonly jsDocRanges: readonly { start: number; end: number }[];
	readonly moduleExports: ModuleExports;
}

/** A significant (non-trivia) token, with the brace depth it was seen at. */
interface Token {
	readonly kind: SyntaxKind;
	readonly text: string;
	readonly braceDepth: number;
}

interface TokenizeResult {
	readonly tokens: readonly Token[];
	readonly jsDocRanges: readonly { start: number; end: number }[];
}

/**
 * Runs the TypeScript scanner over a source text and returns its significant
 * tokens plus any `/** ... *\/` comment ranges.
 *
 * The scanner is normally driven by the parser, and two constructs cannot be
 * lexed without that context. Both are handled here, because getting either one
 * wrong desynchronizes the token stream and silently loses every export after
 * the offending line:
 *
 *   - A template literal. `` `a ${x} b` `` comes back as a TemplateHead, then
 *     the substitution's tokens, then a plain `}` — and unless the scanner is
 *     told to re-scan that brace as a template continuation, it reads the rest
 *     of the template as ordinary code and then swallows the remainder of the
 *     file into one giant string token.
 *   - A regular expression. `/` is scanned as a division operator unless the
 *     previous token says a value cannot precede it, which is the same rule the
 *     real parser applies before calling `reScanSlashToken`.
 */
function tokenize(
	text: string,
	isJsx: boolean,
	collectJsDoc: boolean,
): TokenizeResult {
	const scanner = createScanner(/* skipTrivia */ false, isJsx ? 1 : 0, text);
	const tokens: Token[] = [];
	const jsDocRanges: { start: number; end: number }[] = [];

	let braceDepth = 0;
	/** Brace depth at which each open template substitution started. */
	const templateSubstitutionDepths: number[] = [];
	let previousKind: SyntaxKind | undefined;

	for (;;) {
		let kind = scanner.scan();
		if (kind === SyntaxKind.EndOfFile) break;

		if (kind === SyntaxKind.MultiLineCommentTrivia) {
			if (collectJsDoc) {
				const start = scanner.getTokenStart();
				if (text.startsWith("/**", start))
					jsDocRanges.push({ start, end: scanner.getTokenEnd() });
			}
			continue;
		}
		if (
			kind === SyntaxKind.WhitespaceTrivia ||
			kind === SyntaxKind.NewLineTrivia ||
			kind === SyntaxKind.SingleLineCommentTrivia
		) {
			continue;
		}

		// A slash where no value can precede it starts a regular expression.
		if (
			kind === SyntaxKind.SlashToken ||
			kind === SyntaxKind.SlashEqualsToken
		) {
			if (!canPrecedeDivision(previousKind)) kind = scanner.reScanSlashToken();
		}

		if (kind === SyntaxKind.TemplateHead) {
			templateSubstitutionDepths.push(braceDepth);
		} else if (kind === SyntaxKind.OpenBraceToken) {
			braceDepth++;
		} else if (kind === SyntaxKind.CloseBraceToken) {
			if (templateSubstitutionDepths.at(-1) === braceDepth) {
				// This brace closes a `${ ... }`, so the text after it is template, not
				// code. TemplateMiddle opens another substitution at the same depth;
				// TemplateTail ends the literal.
				kind = scanner.reScanTemplateToken(/* isTaggedTemplate */ false);
				if (kind === SyntaxKind.TemplateTail) templateSubstitutionDepths.pop();
			} else if (braceDepth > 0) {
				braceDepth--;
			}
		}

		tokens.push({ kind, text: scanner.getTokenText(), braceDepth });
		previousKind = kind;
	}

	return { tokens, jsDocRanges };
}

/**
 * Whether a `/` following this token is a division rather than the start of a
 * regular expression. True after anything that can end a value.
 */
function canPrecedeDivision(previousKind: SyntaxKind | undefined): boolean {
	if (previousKind === undefined) return false;
	switch (previousKind) {
		case SyntaxKind.Identifier:
		case SyntaxKind.CloseParenToken:
		case SyntaxKind.CloseBracketToken:
		case SyntaxKind.CloseBraceToken:
		case SyntaxKind.StringLiteral:
		case SyntaxKind.NumericLiteral:
		case SyntaxKind.BigIntLiteral:
		case SyntaxKind.RegularExpressionLiteral:
		case SyntaxKind.TemplateTail:
		case SyntaxKind.NoSubstitutionTemplateLiteral:
		case SyntaxKind.ThisKeyword:
		case SyntaxKind.SuperKeyword:
		case SyntaxKind.TrueKeyword:
		case SyntaxKind.FalseKeyword:
		case SyntaxKind.NullKeyword:
		case SyntaxKind.PlusPlusToken:
		case SyntaxKind.MinusMinusToken:
			return true;
		default:
			// Anything else — an operator, `return`, `case`, `typeof` — can only be
			// followed by the start of a value, so a `/` there opens a regex.
			return false;
	}
}

/**
 * One pass of the TypeScript scanner over a file, collecting both the JSDoc
 * comments and the module's export surface.
 *
 * TypeScript 7 exposes a scanner but no local parser (parsing happens inside
 * the Go compiler), so the export collection below is a token-level state
 * machine rather than an AST walk. It covers every export form that can
 * produce an importable binding; the one place it is deliberately shallow is a
 * destructured `export const { a, b } = ...`, where it takes the identifiers of
 * the pattern and does not try to model nested defaults.
 *
 * Using the real scanner rather than a regular expression matters: a `/**`
 * inside a string, a template literal or a regular expression is a token, not
 * the start of a comment, and only a scanner knows the difference.
 */
function scanSource(text: string, isJsx: boolean): ScannedSource {
	const { tokens, jsDocRanges } = tokenize(
		text,
		isJsx,
		/* collectJsDoc */ true,
	);
	const valueNames = new Set<string>();
	const typeNames = new Set<string>();
	let defaultName: string | undefined;

	const addValue = (name: string): void => {
		if (!isImportableIdentifier(name)) return;
		typeNames.delete(name); // a value export wins over a merged type export
		valueNames.add(name);
	};
	const addType = (name: string): void => {
		if (!isImportableIdentifier(name) || valueNames.has(name)) return;
		typeNames.add(name);
	};

	// --- export state machine ------------------------------------------------
	// Only top-level `export` keywords matter (a nested one is inside a namespace
	// or a class body and does not widen the module's import surface).
	for (let index = 0; index < tokens.length; index++) {
		const token = tokens[index]!;
		if (token.kind !== SyntaxKind.ExportKeyword) continue;
		if (token.braceDepth !== 0) continue;

		let cursor = index + 1;
		const peek = (offset = 0): Token | undefined => tokens[cursor + offset];

		// `export default ...`
		if (peek()?.kind === SyntaxKind.DefaultKeyword) {
			cursor++;
			const next = peek();
			if (!next) continue;
			if (
				next.kind === SyntaxKind.FunctionKeyword ||
				next.kind === SyntaxKind.ClassKeyword
			) {
				const name = peek(1);
				if (name && name.kind === SyntaxKind.Identifier)
					defaultName = name.text;
			} else if (next.kind === SyntaxKind.Identifier) {
				defaultName = next.text;
			}
			continue;
		}

		// `export type { ... }` / `export { ... }`, with or without a `from`.
		const isTypeOnlyClause =
			peek()?.text === "type" && peek(1)?.kind === SyntaxKind.OpenBraceToken;
		if (isTypeOnlyClause) cursor++;
		if (peek()?.kind === SyntaxKind.OpenBraceToken) {
			cursor++;
			const specifiers: { name: string; typeOnly: boolean }[] = [];
			let pendingTypeOnly = isTypeOnlyClause;
			let lastIdentifier: string | undefined;
			let sawAs = false;

			while (
				cursor < tokens.length &&
				tokens[cursor]!.kind !== SyntaxKind.CloseBraceToken
			) {
				const element = tokens[cursor]!;
				if (element.kind === SyntaxKind.CommaToken) {
					if (lastIdentifier !== undefined) {
						specifiers.push({
							name: lastIdentifier,
							typeOnly: pendingTypeOnly,
						});
					}
					lastIdentifier = undefined;
					sawAs = false;
					pendingTypeOnly = isTypeOnlyClause;
				} else if (
					element.text === "type" &&
					!sawAs &&
					lastIdentifier === undefined
				) {
					pendingTypeOnly = true;
				} else if (element.text === "as") {
					sawAs = true;
					lastIdentifier = undefined;
				} else if (
					element.kind === SyntaxKind.Identifier ||
					element.kind === SyntaxKind.DefaultKeyword
				) {
					// The exported name is the one after `as`, or the only one present.
					if (sawAs || lastIdentifier === undefined)
						lastIdentifier = element.text;
				} else if (element.kind === SyntaxKind.StringLiteral) {
					// `export { x as "not-an-identifier" }` cannot be imported by name.
					if (sawAs) lastIdentifier = undefined;
				}
				cursor++;
			}
			if (lastIdentifier !== undefined)
				specifiers.push({ name: lastIdentifier, typeOnly: pendingTypeOnly });

			const isReExport = tokens[cursor + 1]?.text === "from";
			for (const specifier of specifiers) {
				// `export { default } from "./x"` adds no new named surface.
				if (isReExport && specifier.name === "default") continue;
				if (specifier.typeOnly) addType(specifier.name);
				else addValue(specifier.name);
			}
			continue;
		}

		// `export <modifiers> <declaration> <name>`
		while (
			peek() &&
			(peek()!.text === "declare" ||
				peek()!.text === "async" ||
				peek()!.text === "abstract")
		) {
			cursor++;
		}
		const keyword = peek();
		if (!keyword) continue;
		const nameToken = peek(1);

		switch (keyword.kind) {
			case SyntaxKind.FunctionKeyword:
			case SyntaxKind.ClassKeyword:
			case SyntaxKind.EnumKeyword: {
				// `function*` puts an asterisk between the keyword and the name.
				const name =
					nameToken?.kind === SyntaxKind.AsteriskToken ? peek(2) : nameToken;
				if (name?.kind === SyntaxKind.Identifier) addValue(name.text);
				break;
			}
			case SyntaxKind.InterfaceKeyword: {
				if (nameToken?.kind === SyntaxKind.Identifier) addType(nameToken.text);
				break;
			}
			case SyntaxKind.ConstKeyword:
			case SyntaxKind.VarKeyword:
			case SyntaxKind.LetKeyword: {
				collectBoundNames(tokens, cursor + 1, addValue);
				break;
			}
			default: {
				if (
					keyword.text === "type" &&
					nameToken?.kind === SyntaxKind.Identifier
				) {
					addType(nameToken.text);
				} else if (
					(keyword.text === "namespace" || keyword.text === "module") &&
					nameToken?.kind === SyntaxKind.Identifier
				) {
					addValue(nameToken.text);
				}
				break;
			}
		}
	}

	// A default export sharing a name with a named export must not be imported
	// twice (denoland/deno#26112).
	if (
		defaultName &&
		(valueNames.has(defaultName) || typeNames.has(defaultName))
	)
		defaultName = undefined;
	if (defaultName && !isImportableIdentifier(defaultName))
		defaultName = undefined;

	return { jsDocRanges, moduleExports: { valueNames, typeNames, defaultName } };
}

/**
 * Collects the names bound by a variable declaration starting at `start`,
 * including simple destructuring. A property key followed by `:` is a key, not
 * a binding, so the name after the colon is the one that counts.
 */
function collectBoundNames(
	tokens: readonly { kind: SyntaxKind; text: string }[],
	start: number,
	add: (name: string) => void,
): void {
	const first = tokens[start];
	if (!first) return;

	if (first.kind === SyntaxKind.Identifier) {
		add(first.text);
		return;
	}
	if (
		first.kind !== SyntaxKind.OpenBraceToken &&
		first.kind !== SyntaxKind.OpenBracketToken
	)
		return;

	let depth = 0;
	let expectBindingAfterColon = false;
	for (let index = start; index < tokens.length; index++) {
		const token = tokens[index]!;
		if (
			token.kind === SyntaxKind.OpenBraceToken ||
			token.kind === SyntaxKind.OpenBracketToken
		)
			depth++;
		else if (
			token.kind === SyntaxKind.CloseBraceToken ||
			token.kind === SyntaxKind.CloseBracketToken
		) {
			depth--;
			if (depth === 0) return;
		} else if (token.kind === SyntaxKind.ColonToken) {
			expectBindingAfterColon = true;
		} else if (token.kind === SyntaxKind.Identifier) {
			const next = tokens[index + 1];
			const isKey = next?.kind === SyntaxKind.ColonToken;
			if (!isKey || expectBindingAfterColon) {
				if (!isKey) add(token.text);
				expectBindingAfterColon = false;
			}
		}
	}
}

/* ========================================================================== */
/* Extraction                                                                 */
/* ========================================================================== */

/**
 * Turns a JSDoc comment into snippet lines, dropping the ` * ` decoration and
 * remembering its width so columns still line up with the original file.
 */
function jsDocToLines(
	fileText: string,
	range: { start: number; end: number },
	lineStarts: readonly number[],
): SnippetLine[] {
	const startLine = offsetToPosition(lineStarts, range.start).line;
	const rawLines = splitLines(fileText.slice(range.start, range.end));

	return rawLines.map((rawLine, offsetWithinComment) => {
		// The first line carries `/**` and the last one `*/`; neither can hold code
		// worth checking, and blanking them keeps the numbering aligned.
		const isEdgeLine =
			offsetWithinComment === 0 || offsetWithinComment === rawLines.length - 1;
		const decoration = /^([ \t]*\*[ \t]?)/.exec(rawLine);
		return {
			text: isEdgeLine
				? ""
				: decoration
					? rawLine.slice(decoration[1]!.length)
					: rawLine,
			originalLine: startLine + offsetWithinComment,
			columnDelta: isEdgeLine ? 0 : (decoration?.[1]?.length ?? 0),
		} satisfies SnippetLine;
	});
}

/**
 * Builds the path of the in-memory module for a snippet.
 *
 * It sits in the real directory of its source file, so a relative import in the
 * example resolves exactly as it would from that file. A `.d.` sequence is
 * defused because TypeScript treats any `*.d.*.ts` as a declaration file — the
 * same trap Deno works around in `mapped_specifier_for_tsc`.
 */
function buildVirtualPath(
	sourcePath: string,
	fenceLine: number,
	extension: string,
): string {
	const withoutExtension = sourcePath
		.replace(/\.[^.\\/]+$/, "")
		.replaceAll(".d.", ".d_.");
	return `${withoutExtension}.example-${fenceLine}${extension}`;
}

/** Pulls every checkable snippet out of one file. */
function extractSnippets(
	sourcePath: string,
	fileText: string,
): { snippets: Snippet[]; moduleExports: ModuleExports | undefined } {
	const lineStarts = computeLineStartOffsets(fileText);
	let lineGroups: SnippetLine[][];
	let moduleExports: ModuleExports | undefined;

	if (MARKDOWN_PATTERN.test(sourcePath)) {
		// A Markdown file has no export surface to inject; the whole file is one
		// stream of lines to scan for fences.
		lineGroups = [
			splitLines(fileText).map((text, index) => ({
				text,
				originalLine: index + 1,
				columnDelta: 0,
			})),
		];
	} else {
		const scanned = scanSource(fileText, /\.[jt]sx$/.test(sourcePath));
		moduleExports = scanned.moduleExports;
		lineGroups = scanned.jsDocRanges.map((range) =>
			jsDocToLines(fileText, range, lineStarts),
		);
	}

	const snippets: Snippet[] = [];
	for (const lineGroup of lineGroups) {
		for (const block of findFencedBlocks(lineGroup)) {
			const extension = LANGUAGE_EXTENSIONS.get(block.languageTag);
			if (extension === undefined) continue; // json, bash, output samples, ...
			if (
				block.attributes.includes("ignore") ||
				block.attributes.includes("no-check")
			)
				continue;

			// A leading `#!` is a Deno-ism with no meaning here. Blank the line rather
			// than removing it, so the numbering stays honest.
			const lines = block.lines.map((line, index) =>
				index === 0 && line.text.startsWith("#!")
					? { ...line, text: "" }
					: line,
			);
			if (lines.every((line) => line.text.trim() === "")) continue;

			snippets.push({
				sourcePath,
				virtualPath: buildVirtualPath(sourcePath, block.fenceLine, extension),
				fenceLine: block.fenceLine,
				lines,
				generatedText: "",
				preludeLineCount: 0,
				generatedLineStarts: [],
			});
		}
	}
	return { snippets, moduleExports };
}

/* ========================================================================== */
/* Snippet assembly                                                           */
/* ========================================================================== */

/**
 * Names the snippet binds at its own top level, and every identifier it
 * mentions.
 *
 * The bound names are subtracted from the injected imports, so an explicit
 * declaration or import in the example always wins and no duplicate identifier
 * can appear. The mentioned names are intersected with them, so only the names
 * an example actually uses are injected — Deno injects the module's whole
 * export surface, which is more work for the checker and more chances of a
 * collision.
 */
function analyseSnippet(
	snippetText: string,
	isJsx: boolean,
): {
	boundNames: Set<string>;
	mentionedNames: Set<string>;
} {
	const { tokens } = tokenize(snippetText, isJsx, /* collectJsDoc */ false);
	const boundNames = new Set<string>();
	const mentionedNames = new Set<string>();
	for (const token of tokens) {
		if (token.kind === SyntaxKind.Identifier) mentionedNames.add(token.text);
	}

	for (let index = 0; index < tokens.length; index++) {
		const token = tokens[index]!;
		if (token.braceDepth !== 0) continue;

		switch (token.kind) {
			case SyntaxKind.ImportKeyword: {
				// Every binding of an import declaration shadows an injected one.
				for (let scan = index + 1; scan < tokens.length; scan++) {
					const inner = tokens[scan]!;
					if (inner.text === "from" || inner.kind === SyntaxKind.SemicolonToken)
						break;
					if (inner.kind === SyntaxKind.StringLiteral) break;
					if (
						inner.kind === SyntaxKind.Identifier &&
						inner.text !== "type" &&
						inner.text !== "as"
					) {
						const next = tokens[scan + 1];
						if (next?.text !== "as") boundNames.add(inner.text);
					}
				}
				break;
			}
			case SyntaxKind.ConstKeyword:
			case SyntaxKind.LetKeyword:
			case SyntaxKind.VarKeyword: {
				collectBoundNames(tokens, index + 1, (name) => boundNames.add(name));
				break;
			}
			case SyntaxKind.FunctionKeyword:
			case SyntaxKind.ClassKeyword:
			case SyntaxKind.EnumKeyword:
			case SyntaxKind.InterfaceKeyword: {
				const nameToken =
					tokens[index + 1]?.kind === SyntaxKind.AsteriskToken
						? tokens[index + 2]
						: tokens[index + 1];
				if (nameToken?.kind === SyntaxKind.Identifier)
					boundNames.add(nameToken.text);
				break;
			}
			default: {
				if (
					token.text === "type" &&
					tokens[index + 1]?.kind === SyntaxKind.Identifier
				) {
					boundNames.add(tokens[index + 1]!.text);
				}
				break;
			}
		}
	}

	return { boundNames, mentionedNames };
}

/** Produces the text of the in-memory module for one snippet. */
function generateSnippetModule(
	snippet: Snippet,
	moduleExports: ModuleExports | undefined,
): void {
	const body = snippet.lines.map((line) => line.text).join("\n");
	const prelude: string[] = [];

	if (moduleExports) {
		const { boundNames, mentionedNames } = analyseSnippet(
			body,
			/\.[jt]sx$/.test(snippet.virtualPath),
		);
		const wanted = (name: string): boolean =>
			mentionedNames.has(name) && !boundNames.has(name);

		const valueSpecifiers = [...moduleExports.valueNames].filter(wanted).sort();
		const typeSpecifiers = [...moduleExports.typeNames].filter(wanted).sort();
		const defaultSpecifier =
			moduleExports.defaultName && wanted(moduleExports.defaultName)
				? moduleExports.defaultName
				: undefined;

		// The generated module lives in the same directory as its source, so a bare
		// "./name.ext" specifier is always the right way back to it.
		const moduleSpecifier = JSON.stringify(
			"./" + (snippet.sourcePath.split(/[\\/]/).pop() ?? ""),
		);

		if (defaultSpecifier && valueSpecifiers.length > 0) {
			prelude.push(
				`import ${defaultSpecifier}, { ${valueSpecifiers.join(", ")} } from ${moduleSpecifier};`,
			);
		} else if (defaultSpecifier) {
			prelude.push(`import ${defaultSpecifier} from ${moduleSpecifier};`);
		} else if (valueSpecifiers.length > 0) {
			prelude.push(
				`import { ${valueSpecifiers.join(", ")} } from ${moduleSpecifier};`,
			);
		}
		if (typeSpecifiers.length > 0) {
			prelude.push(
				`import type { ${typeSpecifiers.join(", ")} } from ${moduleSpecifier};`,
			);
		}
	}

	// `export {}` forces module scope. Without it a snippet that neither imports
	// nor exports is a global script, and its top-level `const` would collide
	// with every other snippet's.
	snippet.preludeLineCount = prelude.length;
	snippet.generatedText = [...prelude, body, "export {};"].join("\n");
	snippet.generatedLineStarts = computeLineStartOffsets(snippet.generatedText);
}

/**
 * Maps a position inside a generated module back to the original file. Falls
 * back to the opening fence when the position is on an injected line, so a
 * report always points somewhere a human can click.
 */
function mapPosition(
	snippet: Snippet,
	generatedOffset: number,
): {
	line: number;
	column: number;
	exact: boolean;
} {
	const generated = offsetToPosition(
		snippet.generatedLineStarts,
		generatedOffset,
	);
	const bodyIndex = generated.line - snippet.preludeLineCount - 1;
	const sourceLine = snippet.lines[bodyIndex];
	if (!sourceLine) return { line: snippet.fenceLine, column: 1, exact: false };
	return {
		line: sourceLine.originalLine,
		column: generated.column + sourceLine.columnDelta,
		exact: true,
	};
}

/* ========================================================================== */
/* Reporting                                                                  */
/* ========================================================================== */

const COLOR_ENABLED =
	Boolean(process.stdout.isTTY) && process.env["NO_COLOR"] === undefined;
const paint = (code: string, text: string): string =>
	COLOR_ENABLED ? `\u001B[${code}m${text}\u001B[0m` : text;
const red = (text: string): string => paint("31", text);
const dim = (text: string): string => paint("2", text);
const bold = (text: string): string => paint("1", text);

function printDiagnostic(
	projectRoot: string,
	diagnostic: ReportedDiagnostic,
	fileTexts: ReadonlyMap<string, string>,
): void {
	const location = `${displayPath(projectRoot, diagnostic.filePath)}:${diagnostic.line}:${diagnostic.column}`;
	console.log(
		`${bold(location)} ${diagnostic.isError ? red("error") : dim("warning")} ${dim(`TS${diagnostic.code}`)}`,
	);
	console.log(`  ${diagnostic.message.split("\n").join("\n  ")}`);

	const fileText = fileTexts.get(diagnostic.filePath);
	if (fileText && diagnostic.mappedExactly) {
		const sourceLine = splitLines(fileText)[diagnostic.line - 1];
		if (sourceLine !== undefined) {
			const gutter = `  ${diagnostic.line} | `;
			console.log(dim(gutter) + sourceLine);
			console.log(
				" ".repeat(gutter.length + Math.max(0, diagnostic.column - 1)) +
					red("^"),
			);
		}
	}
	console.log("");
}

/* ========================================================================== */
/* Freshness cache                                                            */
/* ========================================================================== */

interface CacheState {
	version: number;
	typescriptVersion: string;
	/** Absolute path to content hash, for every file the last good run read. */
	fileHashes: Record<string, string>;
}

function hashText(text: string): string {
	return new Bun.CryptoHasher("sha256").update(text).digest("hex").slice(0, 32);
}

function cacheDirectory(projectRoot: string): string {
	return join(projectRoot, "node_modules", ".cache", "doc-check");
}

/** A missing or unreadable cache is not an error, just a slower run. */
async function readCache(projectRoot: string): Promise<CacheState | undefined> {
	try {
		const file = Bun.file(join(cacheDirectory(projectRoot), "state.json"));
		return (await file.exists())
			? ((await file.json()) as CacheState)
			: undefined;
	} catch {
		return undefined;
	}
}

async function writeCache(
	projectRoot: string,
	state: CacheState,
): Promise<void> {
	try {
		await mkdir(cacheDirectory(projectRoot), { recursive: true });
		await Bun.write(
			join(cacheDirectory(projectRoot), "state.json"),
			JSON.stringify(state),
		);
	} catch {
		// A cache that cannot be written only costs time on the next run.
	}
}

/** True when every file the cached run depended on still has the same content. */
async function cacheIsFresh(
	cache: CacheState,
	alreadyRead: ReadonlyMap<string, string>,
): Promise<boolean> {
	const entries = Object.entries(cache.fileHashes);
	if (entries.length === 0) return false;

	// A newly added file is not in the cache at all, which invalidates it. This is
	// the cheap half of the test, so it runs first.
	for (const filePath of alreadyRead.keys()) {
		if (!(filePath in cache.fileHashes)) return false;
	}

	const results = await Promise.all(
		entries.map(async ([filePath, expectedHash]) => {
			const knownText = alreadyRead.get(filePath);
			if (knownText !== undefined) return hashText(knownText) === expectedHash;
			try {
				return hashText(await Bun.file(filePath).text()) === expectedHash;
			} catch {
				return false; // deleted or unreadable
			}
		}),
	);
	return results.every(Boolean);
}

/**
 * The ambient type packages TypeScript would have included automatically.
 *
 * Mirrors the compiler's own `typeRoots` walk: every `node_modules/@types`
 * directory from the project root upwards, nearest first, each package counted
 * once. A scoped package lives in a `foo__bar` directory and is named by that
 * directory, which is exactly what the `types` option expects.
 */
async function findAmbientTypePackages(projectRoot: string): Promise<string[]> {
	const packageNames: string[] = [];
	const seen = new Set<string>();
	let directory = projectRoot;

	for (;;) {
		const typesDirectory = join(directory, "node_modules", "@types");
		try {
			for (const entry of await readdir(typesDirectory, {
				withFileTypes: true,
			})) {
				if (!entry.isDirectory() && !entry.isSymbolicLink()) continue;
				if (entry.name.startsWith(".")) continue;
				if (seen.has(entry.name)) continue;
				seen.add(entry.name);
				packageNames.push(entry.name);
			}
		} catch {
			// No @types directory at this level, which is normal.
		}
		const parent = dirname(directory);
		if (parent === directory) break;
		directory = parent;
	}

	return packageNames.sort();
}

/* ========================================================================== */
/* Command line                                                               */
/* ========================================================================== */

interface Options {
	patterns: string[];
	tsconfigPath: string;
	projectRoot: string;
	json: boolean;
	quiet: boolean;
	useCache: boolean;
	listOnly: boolean;
	printPath: string | undefined;
}

function parseOptions(): Options {
	const { values, positionals } = parseArgs({
		args: process.argv.slice(2),
		allowPositionals: true,
		options: {
			tsconfig: { type: "string", default: "tsconfig.json" },
			root: { type: "string" },
			json: { type: "boolean", default: false },
			quiet: { type: "boolean", default: false },
			"no-cache": { type: "boolean", default: false },
			list: { type: "boolean", default: false },
			print: { type: "string" },
			help: { type: "boolean", default: false },
		},
	});

	if (values.help) {
		console.log(
			[
				"doc-check — type-check the code examples in JSDoc comments and Markdown.",
				"",
				"  bun scripts/doc-check.ts [globs...] [options]",
				"",
				"  --tsconfig <path>  tsconfig to inherit compiler options from (default: tsconfig.json)",
				"  --root <path>      project root (default: the current directory)",
				"  --json             emit diagnostics as JSON",
				"  --quiet            print nothing when everything passes",
				"  --no-cache         re-check even when nothing changed",
				"  --list             list the snippets that would be checked",
				"  --print <file>     print the generated module of each snippet in <file>",
				"",
				"Fence attributes: `ignore` and `no-check` skip a block.",
			].join("\n"),
		);
		process.exit(0);
	}

	const projectRoot = resolve(values.root ?? process.cwd());
	const tsconfigValue = values.tsconfig!;
	return {
		patterns: positionals.length > 0 ? positionals : DEFAULT_PATTERNS,
		tsconfigPath: isAbsolute(tsconfigValue)
			? tsconfigValue
			: join(projectRoot, tsconfigValue),
		projectRoot,
		json: values.json!,
		quiet: values.quiet!,
		useCache: !values["no-cache"],
		listOnly: values.list!,
		printPath: values.print,
	};
}

/** Expands the globs to absolute paths, skipping the usual noise directories. */
async function discoverFiles(options: Options): Promise<string[]> {
	const found = new Set<string>();
	for (const pattern of options.patterns) {
		// Bun's globs are always forward-slashed, including on Windows.
		const glob = new Glob(pattern.replaceAll("\\", "/"));
		for await (const match of glob.scan({
			cwd: options.projectRoot,
			onlyFiles: true,
			dot: false,
		})) {
			if (IGNORED_DIRECTORIES.test(match)) continue;
			found.add(resolve(options.projectRoot, match));
		}
	}
	return [...found].sort();
}

/* ========================================================================== */
/* Main                                                                       */
/* ========================================================================== */

async function main(): Promise<number> {
	const options = parseOptions();
	const startedAt = performance.now();

	const filePaths = await discoverFiles(options);

	// Read everything once: the text is needed for extraction, for the freshness
	// hash and for printing code frames. The reads are independent, so they go
	// out together.
	const fileTexts = new Map<string, string>();
	await Promise.all(
		filePaths.map(async (filePath) => {
			fileTexts.set(filePath, await Bun.file(filePath).text());
		}),
	);

	// A file with no fence in it cannot hold an example. Rejecting those before
	// any scanning keeps the common case — most of a codebase — close to free.
	const candidatePaths = filePaths.filter((filePath) => {
		const text = fileTexts.get(filePath)!;
		return text.includes("```") || text.includes("~~~");
	});

	// Fast path: if every file the last good run depended on still hashes the
	// same, nothing can have changed. This is what keeps a pre-push hook from
	// re-checking an untouched repository.
	if (
		options.useCache &&
		!options.listOnly &&
		options.printPath === undefined
	) {
		const previousCache = await readCache(options.projectRoot);
		if (
			previousCache &&
			previousCache.version === CACHE_VERSION &&
			previousCache.typescriptVersion === Bun.version &&
			(await cacheIsFresh(previousCache, fileTexts))
		) {
			if (!options.quiet && !options.json) {
				console.log(
					dim(
						`doc-check: up to date (${Math.round(performance.now() - startedAt)}ms)`,
					),
				);
			}
			return 0;
		}
	}

	const snippets: Snippet[] = [];
	for (const filePath of candidatePaths) {
		const extracted = extractSnippets(filePath, fileTexts.get(filePath)!);
		for (const snippet of extracted.snippets) {
			generateSnippetModule(snippet, extracted.moduleExports);
			snippets.push(snippet);
		}
	}

	if (options.printPath !== undefined) {
		const wanted = resolve(options.projectRoot, options.printPath);
		for (const snippet of snippets.filter(
			(candidate) => candidate.sourcePath === wanted,
		)) {
			console.log(
				dim(
					`// ${displayPath(options.projectRoot, snippet.sourcePath)}:${snippet.fenceLine}`,
				),
			);
			console.log(snippet.generatedText);
			console.log("");
		}
		return 0;
	}

	if (options.listOnly) {
		for (const snippet of snippets) {
			const where = `${displayPath(options.projectRoot, snippet.sourcePath)}:${snippet.fenceLine}`;
			console.log(`${where}  ${dim(`${snippet.lines.length} lines`)}`);
		}
		console.log(
			dim(`${snippets.length} snippet(s) in ${candidatePaths.length} file(s)`),
		);
		return 0;
	}

	if (snippets.length === 0) {
		if (!options.quiet && !options.json)
			console.log("doc-check: no examples found");
		return 0;
	}

	// ---------------------------------------------------------------------------
	// Hand the generated modules to the compiler.
	//
	// The snippets and a tsconfig that lists them are served from memory through
	// the API's file-system hook; returning `undefined` from a hook means "fall
	// back to the real disk", which is what lets an example import the project's
	// actual source. `include: []` is important: without it the base config's
	// `include` would drag the whole project in as roots and turn this into a
	// full `tsc` run.
	// ---------------------------------------------------------------------------
	const generatedConfigPath = join(
		options.projectRoot,
		"tsconfig.doc-check.generated.json",
	);
	const virtualFiles = new Map<string, string>(
		snippets.map((snippet) => [snippet.virtualPath, snippet.generatedText]),
	);

	// The overlay reads from the map above; returning `undefined` from a hook
	// means "fall back to the real disk", which is what lets an example import
	// the project's actual source. The map is filled in below, before the first
	// snapshot, so the compiler never sees a half-built project.
	const overlayFileSystem: FileSystem = {
		fileExists: (fileName) => (virtualFiles.has(fileName) ? true : undefined),
		readFile: (fileName) => virtualFiles.get(fileName),
	};

	const api = new API({ cwd: options.projectRoot, fs: overlayFileSystem });
	const reported: ReportedDiagnostic[] = [];
	let diagnosticsOutsideExamples = 0;

	try {
		// `include: []` keeps the base config's own `include` from dragging the
		// whole project in as roots — the examples' imports pull in exactly what
		// they need and nothing else. The catch is that TypeScript's automatic
		// `@types` inclusion goes away with it, so when the base config does not
		// pin `types` itself, the ambient type packages are listed explicitly.
		const baseConfig = await api.parseConfigFile(options.tsconfigPath);
		const baseTypes = (baseConfig.options as { types?: string[] }).types;
		const relativeBase = relative(
			dirname(generatedConfigPath),
			options.tsconfigPath,
		);

		virtualFiles.set(
			generatedConfigPath,
			JSON.stringify({
				extends: toConfigPath(
					relativeBase.startsWith(".") ? relativeBase : "./" + relativeBase,
				),
				compilerOptions: {
					noEmit: true,
					// Injected imports and example scaffolding are not code the author
					// wrote, so these two would only produce noise.
					noUnusedLocals: false,
					noUnusedParameters: false,
					// Examples are checked, never built.
					declaration: false,
					declarationMap: false,
					composite: false,
					incremental: false,
					sourceMap: false,
					...(baseTypes === undefined
						? { types: await findAmbientTypePackages(options.projectRoot) }
						: {}),
				},
				include: [],
				files: snippets.map((snippet) => toConfigPath(snippet.virtualPath)),
			}),
		);

		const snapshot = await api.updateSnapshot({
			openProjects: [generatedConfigPath],
		});
		const project =
			(await snapshot.getProject(generatedConfigPath)) ??
			(await snapshot.getProjects())[0];
		if (!project)
			throw new Error(
				"the TypeScript server did not open the generated project",
			);

		const snippetByVirtualPath = new Map(
			snippets.map((snippet) => [snippet.virtualPath, snippet]),
		);

		const collect = (
			diagnostics: readonly {
				fileName?: string;
				pos: number;
				code: number;
				category: number;
				text: string;
			}[],
		): void => {
			for (const diagnostic of diagnostics) {
				const snippet = diagnostic.fileName
					? snippetByVirtualPath.get(diagnostic.fileName)
					: undefined;
				if (!snippet) {
					// Either a project-wide diagnostic or an error in the project's own
					// source, reached through an example's import. The latter is `tsc`'s
					// job to report, not this script's.
					if (diagnostic.fileName) diagnosticsOutsideExamples++;
					else {
						reported.push({
							filePath: options.tsconfigPath,
							line: 1,
							column: 1,
							code: diagnostic.code,
							isError: diagnostic.category === 1,
							message: diagnostic.text,
							mappedExactly: false,
						});
					}
					continue;
				}
				const mapped = mapPosition(snippet, diagnostic.pos);
				reported.push({
					filePath: snippet.sourcePath,
					line: mapped.line,
					column: mapped.column,
					code: diagnostic.code,
					isError: diagnostic.category === 1,
					message: diagnostic.text,
					mappedExactly: mapped.exact,
				});
			}
		};

		collect(await project.program.getProgramDiagnostics());
		// Diagnostics are requested per snippet, never for the whole program, so
		// the checker only does the work the examples actually require.
		for (const snippet of snippets) {
			collect(
				await project.program.getSyntacticDiagnostics(snippet.virtualPath),
			);
			collect(
				await project.program.getSemanticDiagnostics(snippet.virtualPath),
			);
		}
	} finally {
		await api.close();
	}

	reported.sort(
		(left, right) =>
			left.filePath.localeCompare(right.filePath) ||
			left.line - right.line ||
			left.column - right.column,
	);

	const errorCount = reported.filter((diagnostic) => diagnostic.isError).length;
	if (errorCount === 0) {
		const fileHashes: Record<string, string> = {};
		for (const [filePath, text] of fileTexts)
			fileHashes[filePath] = hashText(text);
		await writeCache(options.projectRoot, {
			version: CACHE_VERSION,
			typescriptVersion: Bun.version,
			fileHashes,
		});
	}

	if (options.json) {
		console.log(
			JSON.stringify(
				{
					snippetCount: snippets.length,
					fileCount: candidatePaths.length,
					errorCount,
					diagnostics: reported.map((diagnostic) => ({
						...diagnostic,
						filePath: displayPath(options.projectRoot, diagnostic.filePath),
					})),
				},
				null,
				2,
			),
		);
		return errorCount > 0 ? 1 : 0;
	}

	for (const diagnostic of reported)
		printDiagnostic(options.projectRoot, diagnostic, fileTexts);

	const elapsedMilliseconds = Math.round(performance.now() - startedAt);
	if (errorCount > 0) {
		console.log(
			red(
				`doc-check: ${errorCount} error(s) in ${snippets.length} example(s) (${elapsedMilliseconds}ms)`,
			),
		);
		if (diagnosticsOutsideExamples > 0) {
			console.log(
				dim(
					`  ${diagnosticsOutsideExamples} further error(s) in project sources — run tsc for those`,
				),
			);
		}
		return 1;
	}

	if (!options.quiet) {
		console.log(
			dim(
				`doc-check: ${snippets.length} example(s) in ${candidatePaths.length} file(s) OK (${elapsedMilliseconds}ms)`,
			),
		);
	}
	return 0;
}

/**
 * The checking path needs TypeScript 7's compiler API. On an older TypeScript
 * the import above resolves to a package that does not have it, so fail with a
 * sentence someone can act on rather than a missing-export stack trace.
 */
if (typeof API !== "function") {
	console.error(
		"doc-check: this script needs TypeScript 7 or newer (the `typescript/unstable/async` API).",
	);
	process.exit(2);
}

process.exit(await main());
