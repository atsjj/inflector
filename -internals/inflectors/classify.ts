import { Cache } from "../mod.ts";

const classifyRegexp1 = /^(-|_)+(.)?/;
const classifyRegexp2 = /(.)(-|_|\.|\s)+(.)?/g;
const classifyRegexp3 = /(^|\/|\.)([a-z])/g;
const internalClassifyCache = new Cache<string, string>(1000, internalClassify);

function classifyReplace1(_: string, __: string, char?: string): string {
  return char ? `_${char.toUpperCase()}` : "";
}

function classifyReplace2(
  _: string,
  initialChar: string,
  __: string,
  char?: string,
): string {
  return initialChar + (char ? char.toUpperCase() : "");
}

function classifyReplace3(match: string): string {
  return match.toUpperCase();
}

export function internalClassify(value: string): string {
  const parts = value.split("/");

  for (let i = 0; i < parts.length; i++) {
    parts[i] = parts[i]
      .replace(classifyRegexp1, classifyReplace1)
      .replace(classifyRegexp2, classifyReplace2);
  }

  return parts
    .join("/")
    .replace(classifyRegexp3, classifyReplace3);
}

export default internalClassifyCache;
