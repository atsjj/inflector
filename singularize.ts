import { internalSingularizeCache } from "./-internals/mod.ts";

/**
 * Returns the singular form of the word in the string.
 *
 * ```ts
 * import { singularize } from 'https://deno.land/x/inflector/mod.ts';
 * singularize('cats');               // 'cat'
 * singularize('searches');           // 'search'
 * singularize('people');             // 'person'
 * singularize('cars');               // 'car'
 * ```
 *
 * @param value The string to singularize.
 *
 * @returns The singularized string.
 */
export default function singularize(value: string): string {
  return internalSingularizeCache.get(value);
}
