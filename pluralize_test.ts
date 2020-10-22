import { assertStrictEquals } from "https://deno.land/std@0.74.0/testing/asserts.ts";
import pluralize from "./pluralize.ts";

Deno.test("pluralize ability to include counts", function () {
  assertStrictEquals(pluralize(1, "cat"), "1 cat", "pluralize 1");
  assertStrictEquals(pluralize(5, "cat"), "5 cats", "pluralize 5");
  assertStrictEquals(
    pluralize(5, "cat", { withoutCount: true }),
    "cats",
    "without count",
  );
});

Deno.test("pluralize words containing irregular and uncountable words can be pluralized", function () {
  assertStrictEquals(pluralize("woman"), "women");
  assertStrictEquals(pluralize("salesperson"), "salespeople");
});

Deno.test("pluralize partial words containing uncountable words can be pluralized", function () {
  assertStrictEquals(pluralize("price"), "prices");
});

Deno.test("pluralize CamelCase and UpperCamelCase is preserved for irregular and uncountable pluralizations", function () {
  assertStrictEquals(pluralize("SuperWoman"), "SuperWomen");
  assertStrictEquals(pluralize("superWoman"), "superWomen");
  assertStrictEquals(pluralize("SuperMan"), "SuperMen");
  assertStrictEquals(pluralize("superMan"), "superMen");
  assertStrictEquals(pluralize("FriedRice"), "FriedRice");
  assertStrictEquals(pluralize("friedRice"), "friedRice");
});

Deno.test("pluralize passes same test cases as ActiveSupport::Inflector#pluralize", function () {
  assertStrictEquals(pluralize("search"), "searches");
  assertStrictEquals(pluralize("switch"), "switches");
  assertStrictEquals(pluralize("fix"), "fixes");
  assertStrictEquals(pluralize("box"), "boxes");
  assertStrictEquals(pluralize("process"), "processes");
  assertStrictEquals(pluralize("address"), "addresses");
  assertStrictEquals(pluralize("case"), "cases");
  assertStrictEquals(pluralize("stack"), "stacks");
  assertStrictEquals(pluralize("wish"), "wishes");
  assertStrictEquals(pluralize("fish"), "fish");
  assertStrictEquals(pluralize("jeans"), "jeans");
  assertStrictEquals(pluralize("funky jeans"), "funky jeans");
  assertStrictEquals(pluralize("my money"), "my money");
  assertStrictEquals(pluralize("category"), "categories");
  assertStrictEquals(pluralize("query"), "queries");
  assertStrictEquals(pluralize("ability"), "abilities");
  assertStrictEquals(pluralize("agency"), "agencies");
  assertStrictEquals(pluralize("movie"), "movies");
  assertStrictEquals(pluralize("archive"), "archives");
  assertStrictEquals(pluralize("index"), "indices");
  assertStrictEquals(pluralize("wife"), "wives");
  assertStrictEquals(pluralize("safe"), "saves");
  assertStrictEquals(pluralize("half"), "halves");
  assertStrictEquals(pluralize("move"), "moves");
  assertStrictEquals(pluralize("salesperson"), "salespeople");
  assertStrictEquals(pluralize("person"), "people");
  assertStrictEquals(pluralize("spokesman"), "spokesmen");
  assertStrictEquals(pluralize("man"), "men");
  assertStrictEquals(pluralize("woman"), "women");
  assertStrictEquals(pluralize("basis"), "bases");
  assertStrictEquals(pluralize("diagnosis"), "diagnoses");
  assertStrictEquals(pluralize("diagnosis_a"), "diagnosis_as");
  assertStrictEquals(pluralize("datum"), "data");
  assertStrictEquals(pluralize("medium"), "media");
  assertStrictEquals(pluralize("stadium"), "stadia");
  assertStrictEquals(pluralize("analysis"), "analyses");
  assertStrictEquals(pluralize("my_analysis"), "my_analyses");
  assertStrictEquals(pluralize("node_child"), "node_children");
  assertStrictEquals(pluralize("child"), "children");
  assertStrictEquals(pluralize("experience"), "experiences");
  assertStrictEquals(pluralize("day"), "days");
  assertStrictEquals(pluralize("comment"), "comments");
  assertStrictEquals(pluralize("foobar"), "foobars");
  assertStrictEquals(pluralize("newsletter"), "newsletters");
  assertStrictEquals(pluralize("old_news"), "old_news");
  assertStrictEquals(pluralize("news"), "news");
  assertStrictEquals(pluralize("series"), "series");
  assertStrictEquals(pluralize("miniseries"), "miniseries");
  assertStrictEquals(pluralize("species"), "species");
  assertStrictEquals(pluralize("quiz"), "quizzes");
  assertStrictEquals(pluralize("perspective"), "perspectives");
  assertStrictEquals(pluralize("ox"), "oxen");
  assertStrictEquals(pluralize("photo"), "photos");
  assertStrictEquals(pluralize("buffalo"), "buffaloes");
  assertStrictEquals(pluralize("tomato"), "tomatoes");
  assertStrictEquals(pluralize("dwarf"), "dwarves");
  assertStrictEquals(pluralize("elf"), "elves");
  assertStrictEquals(pluralize("information"), "information");
  assertStrictEquals(pluralize("equipment"), "equipment");
  assertStrictEquals(pluralize("bus"), "buses");
  assertStrictEquals(pluralize("status"), "statuses");
  assertStrictEquals(pluralize("status_code"), "status_codes");
  assertStrictEquals(pluralize("mouse"), "mice");
  assertStrictEquals(pluralize("louse"), "lice");
  assertStrictEquals(pluralize("house"), "houses");
  assertStrictEquals(pluralize("octopus"), "octopi");
  assertStrictEquals(pluralize("virus"), "viri");
  assertStrictEquals(pluralize("alias"), "aliases");
  assertStrictEquals(pluralize("portfolio"), "portfolios");
  assertStrictEquals(pluralize("vertex"), "vertices");
  assertStrictEquals(pluralize("matrix"), "matrices");
  assertStrictEquals(pluralize("matrix_fu"), "matrix_fus");
  assertStrictEquals(pluralize("axis"), "axes");
  assertStrictEquals(pluralize("taxi"), "taxis");
  assertStrictEquals(pluralize("testis"), "testes");
  assertStrictEquals(pluralize("crisis"), "crises");
  assertStrictEquals(pluralize("rice"), "rice");
  assertStrictEquals(pluralize("shoe"), "shoes");
  assertStrictEquals(pluralize("horse"), "horses");
  assertStrictEquals(pluralize("prize"), "prizes");
  assertStrictEquals(pluralize("edge"), "edges");
  assertStrictEquals(pluralize("database"), "databases");
  assertStrictEquals(pluralize("|ice"), "|ices");
  assertStrictEquals(pluralize("|ouse"), "|ouses");
  assertStrictEquals(pluralize("slice"), "slices");
  assertStrictEquals(pluralize("police"), "police");
});
