/**
 * Yakıt bütçeli mini ifade dili.
 *
 * CTCP'de süre/koşul formülleri kod olarak taşınabilir (Wasm, TS, Lua...).
 * Bu demoda çok küçük bir dil var, ama önemli olan dilin kendisi değil:
 * her çağrının **deterministik bir yakıt bütçesi** olması. Özyineleme serbest;
 * sonlanma garantisi dilden değil bütçeden gelir. Bütçe bittiğinde çözücü
 * formülü bırakıp kutucuğun `envelope` değerine düşer — cevap yanlış olmaz,
 * yalnızca genişler.
 */

export class FuelExhausted extends Error {
	constructor(public readonly used: number) {
		super("yakıt bitti");
	}
}

export type Ast =
	| { n: "num"; v: number }
	| { n: "var"; name: string }
	| { n: "call"; name: string; args: Ast[] }
	| { n: "bin"; op: string; l: Ast; r: Ast }
	| { n: "neg"; e: Ast }
	| { n: "if"; c: Ast; a: Ast; b: Ast };

interface Tok {
	t: "num" | "id" | "op";
	v: string;
}

const TWO_CHAR = ["<=", ">=", "==", "!="];

function lex(src: string): Tok[] {
	const out: Tok[] = [];
	let i = 0;
	while (i < src.length) {
		const c = src.charAt(i);
		if (/\s/.test(c)) {
			i++;
			continue;
		}
		if (/[0-9]/.test(c) || (c === "." && /[0-9]/.test(src[i + 1] ?? ""))) {
			let j = i;
			while (j < src.length && /[0-9.]/.test(src.charAt(j))) j++;
			out.push({ t: "num", v: src.slice(i, j) });
			i = j;
			continue;
		}
		if (/[A-Za-z_]/.test(c)) {
			let j = i;
			while (j < src.length && /[A-Za-z0-9_]/.test(src.charAt(j))) j++;
			out.push({ t: "id", v: src.slice(i, j) });
			i = j;
			continue;
		}
		const two = src.slice(i, i + 2);
		if (TWO_CHAR.includes(two)) {
			out.push({ t: "op", v: two });
			i += 2;
			continue;
		}
		if ("+-*/(),<>?:".includes(c)) {
			out.push({ t: "op", v: c });
			i++;
			continue;
		}
		throw new Error(`formül: beklenmeyen karakter '${c}'`);
	}
	return out;
}

class Parser {
	private i = 0;
	constructor(private readonly toks: Tok[]) {}

	private peek(): Tok | undefined {
		return this.toks[this.i];
	}

	private eat(op: string): boolean {
		const t = this.peek();
		if (t && t.t === "op" && t.v === op) {
			this.i++;
			return true;
		}
		return false;
	}

	private expect(op: string): void {
		if (!this.eat(op)) throw new Error(`formül: '${op}' beklendi`);
	}

	parse(): Ast {
		const e = this.ternary();
		if (this.i !== this.toks.length) throw new Error("formül: artık token");
		return e;
	}

	private ternary(): Ast {
		const c = this.compare();
		if (this.eat("?")) {
			const a = this.ternary();
			this.expect(":");
			const b = this.ternary();
			return { n: "if", c, a, b };
		}
		return c;
	}

	private compare(): Ast {
		let l = this.add();
		const t = this.peek();
		if (t && t.t === "op" && ["<", ">", "<=", ">=", "==", "!="].includes(t.v)) {
			this.i++;
			const r = this.add();
			l = { n: "bin", op: t.v, l, r };
		}
		return l;
	}

	private add(): Ast {
		let l = this.mul();
		for (;;) {
			const t = this.peek();
			if (t && t.t === "op" && (t.v === "+" || t.v === "-")) {
				this.i++;
				l = { n: "bin", op: t.v, l, r: this.mul() };
			} else return l;
		}
	}

	private mul(): Ast {
		let l = this.unary();
		for (;;) {
			const t = this.peek();
			if (t && t.t === "op" && (t.v === "*" || t.v === "/")) {
				this.i++;
				l = { n: "bin", op: t.v, l, r: this.unary() };
			} else return l;
		}
	}

	private unary(): Ast {
		if (this.eat("-")) return { n: "neg", e: this.unary() };
		return this.primary();
	}

	private primary(): Ast {
		const t = this.peek();
		if (!t) throw new Error("formül: beklenmeyen son");
		if (t.t === "num") {
			this.i++;
			return { n: "num", v: Number(t.v) };
		}
		if (t.t === "id") {
			this.i++;
			if (this.eat("(")) {
				const args: Ast[] = [];
				if (!this.eat(")")) {
					do {
						args.push(this.ternary());
					} while (this.eat(","));
					this.expect(")");
				}
				return { n: "call", name: t.v, args };
			}
			return { n: "var", name: t.v };
		}
		if (this.eat("(")) {
			const e = this.ternary();
			this.expect(")");
			return e;
		}
		throw new Error(`formül: beklenmeyen '${t.v}'`);
	}
}

export function parse(src: string): Ast {
	return new Parser(lex(src)).parse();
}

export interface FnDef {
	params: string[];
	body: Ast;
}

export interface Fuel {
	left: number;
	used: number;
}

const BUILTINS: Record<string, (a: number[]) => number> = {
	min: (a) => Math.min(...a),
	max: (a) => Math.max(...a),
	abs: (a) => Math.abs(a[0] ?? 0),
	floor: (a) => Math.floor(a[0] ?? 0),
	ceil: (a) => Math.ceil(a[0] ?? 0),
	round: (a) => Math.round(a[0] ?? 0),
};

/** JS yığınını korumak için sert derinlik tavanı; bütçe gibi davranır. */
const MAX_DEPTH = 1500;

export function evaluate(
	ast: Ast,
	env: Record<string, number>,
	defs: Record<string, FnDef>,
	fuel: Fuel,
	depth = 0,
): number {
	if (fuel.left <= 0) throw new FuelExhausted(fuel.used);
	if (depth > MAX_DEPTH) throw new FuelExhausted(fuel.used);
	fuel.left--;
	fuel.used++;

	switch (ast.n) {
		case "num":
			return ast.v;
		case "var": {
			const v = env[ast.name];
			if (v === undefined)
				throw new Error(`formül: tanımsız değişken '${ast.name}'`);
			return v;
		}
		case "neg":
			return -evaluate(ast.e, env, defs, fuel, depth + 1);
		case "if":
			return evaluate(ast.c, env, defs, fuel, depth + 1) !== 0
				? evaluate(ast.a, env, defs, fuel, depth + 1)
				: evaluate(ast.b, env, defs, fuel, depth + 1);
		case "bin": {
			const l = evaluate(ast.l, env, defs, fuel, depth + 1);
			const r = evaluate(ast.r, env, defs, fuel, depth + 1);
			switch (ast.op) {
				case "+":
					return l + r;
				case "-":
					return l - r;
				case "*":
					return l * r;
				case "/":
					return r === 0 ? 0 : l / r;
				case "<":
					return l < r ? 1 : 0;
				case ">":
					return l > r ? 1 : 0;
				case "<=":
					return l <= r ? 1 : 0;
				case ">=":
					return l >= r ? 1 : 0;
				case "==":
					return l === r ? 1 : 0;
				case "!=":
					return l !== r ? 1 : 0;
				default:
					throw new Error(`formül: bilinmeyen işleç ${ast.op}`);
			}
		}
		case "call": {
			const args = ast.args.map((a) => evaluate(a, env, defs, fuel, depth + 1));
			const builtin = BUILTINS[ast.name];
			if (builtin) return builtin(args);
			const def = defs[ast.name];
			if (!def) throw new Error(`formül: tanımsız fonksiyon '${ast.name}'`);
			const local: Record<string, number> = { ...env };
			def.params.forEach((p, i) => {
				local[p] = args[i] ?? 0;
			});
			return evaluate(def.body, local, defs, fuel, depth + 1);
		}
	}
}

export function defineFns(
	src: Record<string, { params: string[]; body: string }>,
): Record<string, FnDef> {
	const out: Record<string, FnDef> = {};
	for (const [name, d] of Object.entries(src)) {
		out[name] = { params: d.params, body: parse(d.body) };
	}
	return out;
}
