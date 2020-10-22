import { internalCapitalizeCache } from "./-internals/mod.ts";

/**
 * Returns the Capitalized form of a string
 *
 * ```ts
 * import { capitalize } from 'https://deno.land/x/inflector/mod.ts';
 * capitalize('innerHTML')                 // 'InnerHTML'
 * capitalize('action_name')               // 'Action_name'
 * capitalize('css-class-name')            // 'Css-class-name'
 * capitalize('my favorite items')         // 'My favorite items'
 * capitalize('privateDocs/ownerInvoice'); // 'PrivateDocs/ownerInvoice'
 * ```
 *
 * @param value The string to capitalize.
 *
 * @returns The capitalized string.
 */
export default function capitalize(value: string): string {
  return internalCapitalizeCache.get(value);
}
