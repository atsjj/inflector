import { internalDasherizeCache } from "./-internals/mod.ts";

/**
 * Replaces underscores, spaces, or camelCase with dashes.
 *
 * ```ts
 * import { dasherize } from 'https://deno.land/x/inflector/mod.ts';
 * dasherize('innerHTML');                // 'inner-html'
 * dasherize('action_name');              // 'action-name'
 * dasherize('css-class-name');           // 'css-class-name'
 * dasherize('my favorite items');        // 'my-favorite-items'
 * dasherize('privateDocs/ownerInvoice';  // 'private-docs/owner-invoice'
 * ```
 *
 * @param value The string to dasherize.
 *
 * @returns The dasherized string.
 */
export default function dasherize(value: string): string {
  return internalDasherizeCache.get(value);
}
