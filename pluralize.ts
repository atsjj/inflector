import { internalPluralizeCache } from "./-internals/mod.ts";

interface PluralizeOptions {
  withoutCount?: boolean;
}

/**
 * Returns the plural form of the word in the string.
 *
 * ```ts
 * import { pluralize } from 'https://deno.land/x/inflector/mod.ts';
 * pluralize('cat');                             // 'cats'
 * pluralize(1, 'cat');                          // '1 cat'
 * pluralize(2, 'cats');                         // '2 cats'
 * pluralize(3 'cats', { withoutCount: true });  // 'cats'
 * ```
 *
 * @param value The string to pluralize.
 *
 * @returns The pluralized string.
 */
function pluralize(value: string): string;

/**
 * Returns the plural form of the word in the string.
 *
 * ```ts
 * import { pluralize } from 'https://deno.land/x/inflector/mod.ts';
 * pluralize('cat');                             // 'cats'
 * pluralize(1, 'cat');                          // '1 cat'
 * pluralize(2, 'cats');                         // '2 cats'
 * pluralize(3 'cats', { withoutCount: true });  // 'cats'
 * ```
 *
 * @param count Accumulator that describes the pluralized word.
 * @param value The string to pluralize.
 *
 * @returns The pluralized string.
 */
function pluralize(count: number, value: string): string;

/**
 * Returns the plural form of the word in the string.
 *
 * ```ts
 * import { pluralize } from 'https://deno.land/x/inflector/mod.ts';
 * pluralize('cat');                             // 'cats'
 * pluralize(1, 'cat');                          // '1 cat'
 * pluralize(2, 'cats');                         // '2 cats'
 * pluralize(3 'cats', { withoutCount: true });  // 'cats'
 * ```
 *
 * @param value The string to pluralize.
 * @param count Accumulator that describes the pluralized word.
 * @param options Pluralization options.
 *
 * @returns The pluralized string.
 */
function pluralize(
  count: number,
  value: string,
  options: PluralizeOptions,
): string;

function pluralize(
  count: number | string,
  value?: string,
  options?: PluralizeOptions,
): string {
  if (value === undefined && typeof count === "string") {
    return internalPluralizeCache.get(count);
  }

  if (value === undefined) {
    throw new Error("pluralize expects value to be a string");
  }

  const pluralized = parseFloat(`${count}`) !== 1
    ? internalPluralizeCache.get(value)
    : value;

  return options?.withoutCount ? pluralized : `${count} ${pluralized}`;
}

export default pluralize;
