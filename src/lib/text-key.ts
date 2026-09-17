/**
 * no i18next, we have this.
 * {@linkcode keys} is what we have.
 * All other types is there for to help you.
 *
 * @module
 */

/**
 * List of the keys
 */
export const keys = {
	yes: "yes",
} as const;

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
 * Value from {@linkcode keys}
 *
 * @example
 * ```ts
 * const value: TextKeyValue = getText("yes");
 * //    ^? "yes"
 * ```
 */
export type TextKeyValue = (typeof keys)[TextKey];

/**
 * {@linkcode TextKey} is always valid
 *
 * @example
 * ```ts
 * getText("yes"); // "yes"
 *
 * // @ts-expect-error "nope" is not assignable to TextKey
 * getText("nope");
 * ```
 */
export function getText(key: TextKey): TextKeyValue {
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
 * a
 * parseTextKey("yes"); // "yes"
 * parseTextKey("nope"); // undefined
 * parseTextKey("toString"); // undefined
 * ```
 */
export function parseTextKey(value: string): TextKey | undefined {
	return Object.hasOwn(keys, value) ? (value as TextKey) : undefined;
}
