import { assertStrictEquals } from "https://deno.land/std@0.74.0/testing/asserts.ts";
import capitalize from "./capitalize.ts";

Deno.test("capitalize", function () {
  assertStrictEquals(
    capitalize("my favorite items"),
    "My favorite items",
    "capitalize normal string",
  );
  assertStrictEquals(
    capitalize("css-class-name"),
    "Css-class-name",
    "capitalize dasherized string",
  );
  assertStrictEquals(
    capitalize("action_name"),
    "Action_name",
    "capitalize underscored string",
  );
  assertStrictEquals(
    capitalize("innerHTML"),
    "InnerHTML",
    "capitalize camelcased string",
  );
  assertStrictEquals(
    capitalize("Capitalized string"),
    "Capitalized string",
    "does nothing with capitalized string",
  );
  assertStrictEquals(
    capitalize("privateDocs/ownerInvoice"),
    "PrivateDocs/OwnerInvoice",
    "capitalize namespaced camelized string",
  );
  assertStrictEquals(
    capitalize("private_docs/owner_invoice"),
    "Private_docs/Owner_invoice",
    "capitalize namespaced underscored string",
  );
  assertStrictEquals(
    capitalize("private-docs/owner-invoice"),
    "Private-docs/Owner-invoice",
    "capitalize namespaced dasherized string",
  );
  assertStrictEquals(
    capitalize("šabc"),
    "Šabc",
    "capitalize string with accent character",
  );
});
