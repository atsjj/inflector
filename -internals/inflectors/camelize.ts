import { Cache } from "../mod.ts";

const camelizeRegexp1 = /(-|_|\.|\s)+(.)?/g;
const camelizeRegexp2 = /(^|\/)([A-Z])/g;
const internalCamelizeCache = new Cache<string, string>(1000, internalCamelize);

function camelizeReplace1(_: string, __: string, char?: string): string {
  return char ? char.toUpperCase() : "";
}

function camelizeReplace2(match: string): string {
  return match.toLowerCase();
}

export function internalCamelize(value: string): string {
  return value
    .replace(camelizeRegexp1, camelizeReplace1)
    .replace(camelizeRegexp2, camelizeReplace2);
}

export default internalCamelizeCache;
