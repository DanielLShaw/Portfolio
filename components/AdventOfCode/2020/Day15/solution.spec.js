const { part1, part1And2 } = require("./solution");

describe("Day 15", () => {
  describe("part1", () => {
    const cases = [
      [[0, 3, 6], 436],
      [[1, 3, 2], 1],
      [[2, 1, 3], 10],
      [[1, 2, 3], 27],
      [[2, 3, 1], 78],
      [[3, 2, 1], 438],
      [[3, 1, 2], 1836],
    ];

    test.each(cases)("%s => %s", (input, output) => {
      expect(part1And2(input, 2020)).toBe(output);
    });
  });

  // tests pass, but take 90s in total.. ;)
  describe.skip("part2", () => {
    const cases = [
      [[0, 3, 6], 175594],
      [[1, 3, 2], 2578],
      [[2, 1, 3], 3544142],
      [[1, 2, 3], 261214],
      [[2, 3, 1], 6895259],
      [[3, 2, 1], 18],
      [[3, 1, 2], 362],
    ];

    test.each(cases)("%s => %s", (input, output) => {
      expect(part1And2(input, 30000000)).toBe(output);
    });
  });
});
