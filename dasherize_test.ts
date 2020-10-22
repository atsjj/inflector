import { assertStrictEquals } from "https://deno.land/std@0.74.0/testing/asserts.ts";
import dasherize from "./dasherize.ts";

Deno.test("dasherize", function () {
  assertStrictEquals(
    dasherize("my favorite items"),
    "my-favorite-items",
    "dasherize normal string",
  );
  assertStrictEquals(
    dasherize("css-class-name"),
    "css-class-name",
    "does nothing with dasherized string",
  );
  assertStrictEquals(
    dasherize("action_name"),
    "action-name",
    "dasherize underscored string",
  );
  assertStrictEquals(
    dasherize("innerHTML"),
    "inner-html",
    "dasherize camelcased string",
  );
  assertStrictEquals(
    dasherize("toString"),
    "to-string",
    "dasherize string that is the property name of Object.prototype",
  );
  assertStrictEquals(
    dasherize("PrivateDocs/OwnerInvoice"),
    "private-docs/owner-invoice",
    "dasherize namespaced classified string",
  );
  assertStrictEquals(
    dasherize("privateDocs/ownerInvoice"),
    "private-docs/owner-invoice",
    "dasherize namespaced camelized string",
  );
  assertStrictEquals(
    dasherize("private_docs/owner_invoice"),
    "private-docs/owner-invoice",
    "dasherize namespaced underscored string",
  );
});
