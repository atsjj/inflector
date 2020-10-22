import { internalUnderscoreCache } from "./-internals/mod.ts";

/**
 * More general than decamelize. Returns the lower\_case\_and\_underscored form of a string.
 *
 * ```ts
 * import { underscore } from 'https://deno.land/x/inflector/mod.ts';
 * underscore('innerHTML');                 // 'inner_html'
 * underscore('action_name');               // 'action_name'
 * underscore('css-class-name');            // 'css_class_name'
 * underscore('my favorite items');         // 'my_favorite_items'
 * underscore('privateDocs/ownerInvoice');  // 'private_docs/owner_invoice'
 * ```
 *
 * @param value The string to underscore.
 *
 * @returns The underscored string.
 */
export default function underscore(value: string): string {
  return internalUnderscoreCache.get(value);
}
