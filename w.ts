/**
 * Splits a string into separate units separated by spaces, eliminating any
 * empty strings in the process. This is a convenience method for split that
 * is mostly useful when applied to the `String.prototype`.
 *
 * ```ts
 * import { w } from 'https://deno.land/x/inflector/mod.ts';
 * w("alpha beta gamma").forEach(function(key) {
 *   console.log(key);
 * });
 * // > alpha
 * // > beta
 * // > gamma
 * ```
 *
 * @param value The string to split.
 *
 * @returns The split string.
 */
export default function w(value: string): string[] {
  return value.split(/\s+/);
}
