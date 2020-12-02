import { part1, part2 } from "./solution";

describe("Day 2", () => {
  const testCases = [
    [null, 0, 0],
    [[], 0, 0],
    [["invalid policy"], 0, 0],
    [["1-2 a: a"], 1, 1],
    [["1-2 a: aa"], 1, 0],
    [["1-2 a: ab"], 1, 1],
    [["1-2 a: bb"], 0, 0],
    [["1-2 a: aaa"], 0, 0],
  ];

  describe("Part 1", () => {
    describe("from a list of passwords, should return the amount which are valid according to their policy", () => {
      test.each(testCases)("%s", (input, part1Expected) => {
        expect(part1(input)).toStrictEqual(part1Expected);
      });
    });
  });
  describe("Part 2", () => {
    describe("from a list of passwords, should return the amount which are valid according to their policy", () => {
      test.each(testCases)("%s", (input, part1Expected, part2Expected) => {
        expect(part2(input)).toStrictEqual(part2Expected);
      });
    });
  });
});
