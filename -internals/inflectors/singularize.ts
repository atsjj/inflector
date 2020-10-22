import capitalize from "../../capitalize.ts";
import { Cache } from "../mod.ts";
import inverseIrregulars from "./inverse_irregulars.ts";
import singulars from "./singulars.ts";
import uncountables from "./uncountables.ts";

const blankRegexp = /^\s*$/;
const camelizedRegex = /[A-Z][a-z\d]*$/;
const lastWordCamelizedRegex = /([\w/\s-]+)([A-Z][a-z\d]*$)/;
const lastWordDashedRegex = /([\w/-]+[_/\s-])([a-z\d]+$)/;
const internalSingularizeCache = new Cache<string, string>(
  1000,
  internalSingularize,
);

export function internalSingularize(value: string): string {
  if (blankRegexp.test(value)) {
    return value;
  }

  const lowerCase = value.toLowerCase();
  const wordSplit = lastWordDashedRegex.exec(value) ||
    lastWordCamelizedRegex.exec(value);
  const lastWord = wordSplit ? wordSplit[2].toLowerCase() : undefined;

  if (uncountables.has(lowerCase) || (lastWord && uncountables.has(lastWord))) {
    return value;
  }

  for (const [rule, substitution] of inverseIrregulars.entries()) {
    if (lowerCase.match(`${rule}$`)) {
      if (
        camelizedRegex.test(value) && lastWord &&
        inverseIrregulars.has(lastWord)
      ) {
        return value.replace(
          new RegExp(capitalize(rule), "i"),
          capitalize(substitution),
        );
      }

      return value.replace(new RegExp(rule, "i"), substitution);
    }
  }

  let inflection: [RegExp, string] | null = null;

  for (let i = singulars.length, min = 0; i > min; i--) {
    inflection = singulars[i - 1];

    if (inflection[0].test(value)) {
      break;
    }
  }

  const [searchValue, replaceValue] = inflection ?? ["", ""];

  return value.replace(searchValue, replaceValue);
}

export default internalSingularizeCache;
