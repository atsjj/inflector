import { assertStrictEquals } from "https://deno.land/std@0.74.0/testing/asserts.ts";
import classify from "./classify.ts";

Deno.test("classify", function () {
  assertStrictEquals(
    classify("my favorite items"),
    "MyFavoriteItems",
    "classify normal string",
  );
  assertStrictEquals(
    classify("css-class-name"),
    "CssClassName",
    "classify dasherized string",
  );
  assertStrictEquals(
    classify("action_name"),
    "ActionName",
    "classify underscored string",
  );
  assertStrictEquals(
    classify("privateDocs/ownerInvoice"),
    "PrivateDocs/OwnerInvoice",
    "classify namespaced camelized string",
  );
  assertStrictEquals(
    classify("private_docs/owner_invoice"),
    "PrivateDocs/OwnerInvoice",
    "classify namespaced underscored string",
  );
  assertStrictEquals(
    classify("private-docs/owner-invoice"),
    "PrivateDocs/OwnerInvoice",
    "classify namespaced dasherized string",
  );
  assertStrictEquals(
    classify("-view-registry"),
    "_ViewRegistry",
    "classify prefixed dasherized string",
  );
  assertStrictEquals(
    classify("components/-text-field"),
    "Components/_TextField",
    "classify namespaced prefixed dasherized string",
  );
  assertStrictEquals(
    classify("_Foo_Bar"),
    "_FooBar",
    "classify underscore-prefixed underscored string",
  );
  assertStrictEquals(
    classify("_Foo-Bar"),
    "_FooBar",
    "classify underscore-prefixed dasherized string",
  );
  assertStrictEquals(
    classify("_foo/_bar"),
    "_Foo/_Bar",
    "classify underscore-prefixed-namespaced underscore-prefixed string",
  );
  assertStrictEquals(
    classify("-foo/_bar"),
    "_Foo/_Bar",
    "classify dash-prefixed-namespaced underscore-prefixed string",
  );
  assertStrictEquals(
    classify("-foo/-bar"),
    "_Foo/_Bar",
    "classify dash-prefixed-namespaced dash-prefixed string",
  );
  assertStrictEquals(
    classify("InnerHTML"),
    "InnerHTML",
    "does nothing with classified string",
  );
  assertStrictEquals(
    classify("_FooBar"),
    "_FooBar",
    "does nothing with classified prefixed string",
  );
});
