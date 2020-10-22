import { assertStrictEquals } from "https://deno.land/std@0.74.0/testing/asserts.ts";
import decamelize from "./decamelize.ts";

Deno.test("decamelize", function () {
  assertStrictEquals(
    decamelize("my favorite items"),
    "my favorite items",
    "does nothing with normal string",
  );
  assertStrictEquals(
    decamelize("css-class-name"),
    "css-class-name",
    "does nothing with dasherized string",
  );
  assertStrictEquals(
    decamelize("action_name"),
    "action_name",
    "does nothing with underscored string",
  );
  assertStrictEquals(
    decamelize("innerHTML"),
    "inner_html",
    "converts a camelized string into all lower case separated by underscores.",
  );
  assertStrictEquals(
    decamelize("size160Url"),
    "size160_url",
    "decamelizes strings with numbers",
  );
  assertStrictEquals(
    decamelize("PrivateDocs/OwnerInvoice"),
    "private_docs/owner_invoice",
    "decamelize namespaced classified string",
  );
  assertStrictEquals(
    decamelize("privateDocs/ownerInvoice"),
    "private_docs/owner_invoice",
    "decamelize namespaced camelized string",
  );
});
