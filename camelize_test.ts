import { assertStrictEquals } from "https://deno.land/std@0.74.0/testing/asserts.ts";
import camelize from "./camelize.ts";

Deno.test("camelize", function () {
  assertStrictEquals(
    camelize("my favorite items"),
    "myFavoriteItems",
    "camelize normal string",
  );
  assertStrictEquals(
    camelize("I Love Ramen"),
    "iLoveRamen",
    "camelize capitalized string",
  );
  assertStrictEquals(
    camelize("css-class-name"),
    "cssClassName",
    "camelize dasherized string",
  );
  assertStrictEquals(
    camelize("action_name"),
    "actionName",
    "camelize underscored string",
  );
  assertStrictEquals(
    camelize("action.name"),
    "actionName",
    "camelize dot notation string",
  );
  assertStrictEquals(
    camelize("innerHTML"),
    "innerHTML",
    "does nothing with camelcased string",
  );
  assertStrictEquals(
    camelize("PrivateDocs/OwnerInvoice"),
    "privateDocs/ownerInvoice",
    "camelize namespaced classified string",
  );
  assertStrictEquals(
    camelize("private_docs/owner_invoice"),
    "privateDocs/ownerInvoice",
    "camelize namespaced underscored string",
  );
  assertStrictEquals(
    camelize("private-docs/owner-invoice"),
    "privateDocs/ownerInvoice",
    "camelize namespaced dasherized string",
  );
});
