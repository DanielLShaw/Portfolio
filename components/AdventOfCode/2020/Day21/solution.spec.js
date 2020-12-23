const {
  parseFoodData,
  findIngredientsWithoutAllergens,
  part1,
  part2,
} = require("./solution");

const foodMap = new Map([
  [
    "dairy",
    [
      ["mxmxvkd", "kfcds", "sqjhc", "nhms"],
      ["trh", "fvjkl", "sbzzf", "mxmxvkd"],
    ],
  ],
  [
    "fish",
    [
      ["mxmxvkd", "kfcds", "sqjhc", "nhms"],
      ["sqjhc", "mxmxvkd", "sbzzf"],
    ],
  ],
  ["soy", [["sqjhc", "fvjkl"]]],
]);

const ingredientMap = new Map([
  ["mxmxvkd", 3],
  ["kfcds", 1],
  ["sqjhc", 3],
  ["nhms", 1],
  ["trh", 1],
  ["fvjkl", 2],
  ["sbzzf", 2],
]);

const withAllergens = new Map([
  ["kfcds", 1],
  ["nhms", 1],
  ["trh", 1],
  ["sbzzf", 2],
]);

const withoutAllergens = new Map([
  ["dairy", ["mxmxvkd"]],
  ["fish", ["mxmxvkd", "sqjhc"]],
  ["soy", ["sqjhc", "fvjkl"]],
]);

const rawData =
  "mxmxvkd kfcds sqjhc nhms (contains dairy, fish)\ntrh fvjkl sbzzf mxmxvkd (contains dairy)\nsqjhc fvjkl (contains soy)\nsqjhc mxmxvkd sbzzf (contains fish)";

describe("Day 21", () => {
  describe("Part 1", () => {
    describe("parseIngredientData", () => {
      it("should return map of alergens and ingredients", () => {
        expect(parseFoodData(rawData)).toStrictEqual([foodMap, ingredientMap]);
      });
    });
    describe("findIngredientsWithoutAllergens", () => {
      it("should return ingredients with allergens and without", () => {
        expect(
          findIngredientsWithoutAllergens(foodMap, ingredientMap)
        ).toStrictEqual([withAllergens, withoutAllergens]);
      });
    });
    describe("answer", () => {
      it("should be 5", () => {
        expect(part1(rawData)).toBe(5);
      });
    });
  });
  describe("Part 2", () => {
    describe("answer", () => {
      it("should be mxmxvkd,sqjhc,fvjkl", () => {
        expect(part2(rawData)).toBe("mxmxvkd,sqjhc,fvjkl");
      });
    });
  });
});
