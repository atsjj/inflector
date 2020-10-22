import { assertEquals } from "https://deno.land/std@0.74.0/testing/asserts.ts";
import w from "./w.ts";

Deno.test("w", function () {
  assertEquals(
    w("one two three"),
    ["one", "two", "three"],
    `w('one two three') => ['one','two','three']`,
  );
  assertEquals(
    w("one   two  three"),
    ["one", "two", "three"],
    `w('one    two    three') with extra spaces between words => ['one','two','three']`,
  );
  assertEquals(
    w("one\ttwo  three"),
    ["one", "two", "three"],
    `w('one two three') with tabs`,
  );
});
