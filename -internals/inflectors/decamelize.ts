import { Cache } from "../mod.ts";

const decamelizeRegexp = /([a-z\d])([A-Z])/g;
const internalDecamelizeCache = new Cache<string, string>(
  1000,
  internalDecamelize,
);

export function internalDecamelize(value: string): string {
  return value
    .replace(decamelizeRegexp, "$1_$2")
    .toLowerCase();
}

export default internalDecamelizeCache;
