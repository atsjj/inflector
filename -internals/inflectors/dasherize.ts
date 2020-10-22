import decamelize from "../../decamelize.ts";
import { Cache } from "../mod.ts";

const dasherizeRegexp = /[ _]/g;
const internalDasherizeCache = new Cache<string, string>(
  1000,
  internalDasherize,
);

export function internalDasherize(value: string): string {
  return decamelize(value)
    .replace(dasherizeRegexp, "-");
}

export default internalDasherizeCache;
