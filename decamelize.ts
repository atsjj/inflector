import { internalDecamelizeCache } from "./-internals/mod.ts";

/**
 * Converts a camelized string into all lower case separated by underscores.
 *
 * ```ts
 * import { decamelize } from 'https://deno.land/x/inflector/mod.ts';
 * decamelize('innerHTML');          // 'inner_html'
 * decamelize('action_name');        // 'action_name'
 * decamelize('css-class-name');     // 'css-class-name'
 * decamelize('my favorite items');  // 'my favorite items'
 * ```
 *
 * @param value The string to decamelize.
 *
 * @returns The decamelized string.
 */
export default function decamelize(value: string): string {
  return internalDecamelizeCache.get(value);
}
