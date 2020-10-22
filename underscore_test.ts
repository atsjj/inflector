import { assertStrictEquals } from "https://deno.land/std@0.74.0/testing/asserts.ts";
import underscore from "./underscore.ts";

Deno.test("underscore", function () {
  assertStrictEquals(
    underscore("my favorite items"),
    "my_favorite_items",
    "with normal string",
  );
  assertStrictEquals(
    underscore("css-class-name"),
    "css_class_name",
    "with dasherized string",
  );
  assertStrictEquals(
    underscore("action_name"),
    "action_name",
    "does nothing with underscored string",
  );
  assertStrictEquals(
    underscore("innerHTML"),
    "inner_html",
    "with camelcased string",
  );
  assertStrictEquals(
    underscore("PrivateDocs/OwnerInvoice"),
    "private_docs/owner_invoice",
    "underscore namespaced classified string",
  );
  assertStrictEquals(
    underscore("privateDocs/ownerInvoice"),
    "private_docs/owner_invoice",
    "underscore namespaced camelized string",
  );
  assertStrictEquals(
    underscore("private-docs/owner-invoice"),
    "private_docs/owner_invoice",
    "underscore namespaced dasherized string",
  );
});
