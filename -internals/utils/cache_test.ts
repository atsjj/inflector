import { assertStrictEquals } from "https://deno.land/std@0.74.0/testing/asserts.ts";
import Cache from "./cache.ts";

Deno.test("cache basic", function () {
  const cache = new Cache<string, string>(100, (key) => key.toUpperCase());

  assertStrictEquals(cache.get("foo"), "FOO");
  assertStrictEquals(cache.get("bar"), "BAR");
  assertStrictEquals(cache.get("foo"), "FOO");
});

Deno.test("cache explicit sets", function () {
  const cache = new Cache<string, string | undefined>(
    100,
    (key) => key.toUpperCase(),
  );

  assertStrictEquals(cache.get("foo"), "FOO");
  assertStrictEquals(cache.set("foo", "FOO!!!"), "FOO!!!");
  assertStrictEquals(cache.get("foo"), "FOO!!!");
  assertStrictEquals(cache.set("foo", undefined), undefined);
  assertStrictEquals(cache.get("foo"), undefined);
});

Deno.test("cache caches computation correctly", function () {
  let count = 0;

  const cache = new Cache<string, string>(100, (key) => {
    count++;
    return key.toUpperCase();
  });

  assertStrictEquals(count, 0);
  cache.get("foo");
  assertStrictEquals(count, 1);
  cache.get("bar");
  assertStrictEquals(count, 2);
  cache.get("bar");
  assertStrictEquals(count, 2);
  cache.get("foo");
  assertStrictEquals(count, 2);
});

Deno.test("cache handles undefined value correctly", function () {
  let count = 0;

  const cache = new Cache<string, void>(100, () => {
    count++;
  });

  assertStrictEquals(count, 0);
  assertStrictEquals(cache.get("foo"), undefined);
  assertStrictEquals(count, 1);
  assertStrictEquals(cache.get("bar"), undefined);
  assertStrictEquals(count, 2);
  assertStrictEquals(cache.get("bar"), undefined);
  assertStrictEquals(count, 2);
  assertStrictEquals(cache.get("foo"), undefined);
  assertStrictEquals(count, 2);
});

Deno.test("cache continues working after reaching cache limit", function () {
  const cache = new Cache<string, string>(3, (key) => key.toUpperCase());

  cache.get("a");
  cache.get("b");
  cache.get("c");

  assertStrictEquals(cache.get("d"), "D");
  assertStrictEquals(cache.get("a"), "A");
  assertStrictEquals(cache.get("b"), "B");
  assertStrictEquals(cache.get("c"), "C");
});
