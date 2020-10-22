import { internalClassifyCache } from "./-internals/mod.ts";

/**
 * Returns the UpperCamelCase form of a string.
 *
 * ```ts
 * import { classify } from 'https://deno.land/x/inflector/mod.ts';
 * classify('innerHTML');                   // 'InnerHTML'
 * classify('action_name');                 // 'ActionName'
 * classify('css-class-name');              // 'CssClassName'
 * classify('my favorite items');           // 'MyFavoriteItems'
 * classify('private-docs/owner-invoice');  // 'PrivateDocs/OwnerInvoice'
 * ```
 *
 * @param value The string to classify.
 *
 * @returns The classified string.
 */
export default function classify(value: string): string {
  return internalClassifyCache.get(value);
}
