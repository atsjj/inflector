import { Cache } from "../mod.ts";

const underscoreRegexp1 = /([a-z\d])([A-Z]+)/g;
const underscoreRegexp2 = /-|\s+/g;
const internalUnderscoreCache = new Cache<string, string>(
  1000,
  internalUnderscore,
);

export function internalUnderscore(value: string): string {
  return value
    .replace(underscoreRegexp1, "$1_$2")
    .replace(underscoreRegexp2, "_")
    .toLowerCase();
}

export default internalUnderscoreCache;
