import { Cache } from "../mod.ts";

const capitalizeRegexp = /(^|\/)([a-z\u00C0-\u024F])/g;
const internalCapitalizeCache = new Cache<string, string>(
  1000,
  internalCapitalize,
);

function capitalizeReplace(match: string): string {
  return match.toUpperCase();
}

export function internalCapitalize(value: string): string {
  return value.replace(capitalizeRegexp, capitalizeReplace);
}

export default internalCapitalizeCache;
