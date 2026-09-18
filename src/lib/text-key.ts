/**
 * no i18next, we have this.
 * {@linkcode keys} is what we have.
 * All other types is there for to help you.
 *
 * @module
 */

/**
 * List of the keys
 *
 * `as const` keeps each value as its own literal,
 * which is what lets {@linkcode getText} hand back the text itself.
 * `satisfies` then checks the shape without widening it
 * The order matters; `as const` first, `satisfies` second.
 */
export const keys = {
	yes: "yes",
	siteTitle: "CTCP",
	backLink: "back",
	notFoundTitle: "Not found",
	notFoundBody: "No container there.",
} as const satisfies Record<string, string>;

/**
 * Text key from {@linkcode keys}
 *
 * @example
 * ```ts
 * const key: TextKey = "yes";
 *
 * // @ts-expect-error "nope" is not a key of `keys`
 * const typo: TextKey = "nope";
 * ```
 */
export type TextKey = keyof typeof keys;

/**
 * Every value in {@linkcode keys}, as one union.
 *
 * This is the union of *all* texts, not the text of one key.
 * See {@linkcode getText}, keeps the key's literals.
 *
 * @example
 * ```ts
 * const value: TextKeyValue = getText("yes");
 * ```
 */
export type TextKeyValue = (typeof keys)[TextKey];

/**
 * {@linkcode TextKey} is always valid
 *
 * Generic over the key so the return type stays that key's own literal
 * instead of widening to {@linkcode TextKeyValue}
 *
 * @example
 * ```ts
 * getText("yes");
 * // ^? "yes"
 *
 * // @ts-expect-error "nope" is not assignable to TextKey
 * getText("nope");
 * ```
 */
export function getText<Key extends TextKey>(key: Key): (typeof keys)[Key] {
	return keys[key];
}

/**
 * Parses an untrusted string,
 * the only place a runtime check is owed.
 *
 * Uses {@linkcode Object.hasOwn} and not `in`, because `in` walks the
 * prototype chain: `"toString" in keys` is `true`, which would hand back a
 * {@linkcode TextKey} whose {@linkcode getText} returns a function.
 *
 * @example
 * ```ts
 * parseTextKey("yes"); // "yes"
 * parseTextKey("nope"); // undefined
 * parseTextKey("toString"); // undefined
 * ```
 */
export function parseTextKey(value: string): TextKey | undefined {
	return Object.hasOwn(keys, value) ? (value as TextKey) : undefined;
}
