import { internalCamelizeCache } from "./-internals/mod.ts";

/**
 * Returns the lowerCamelCase form of a string.
 *
 * ```ts
 * import { camelize } from 'https://deno.land/x/inflector/mod.ts';
 * camelize('innerHTML');                   // 'innerHTML'
 * camelize('action_name');                 // 'actionName'
 * camelize('css-class-name');              // 'cssClassName'
 * camelize('my favorite items');           // 'myFavoriteItems'
 * camelize('My Favorite Items');           // 'myFavoriteItems'
 * camelize('private-docs/owner-invoice');  // 'privateDocs/ownerInvoice'
 * ```
 *
 * @param value The string to camelize.
 *
 * @returns The camelized string.
 */
export default function camelize(value: string): string {
  return internalCamelizeCache.get(value);
}
