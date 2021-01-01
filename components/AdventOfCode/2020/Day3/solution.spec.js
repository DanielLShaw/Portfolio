import { part1, part1Modified, part2 } from "./solution";

const rawToList = jest.spyOn(
  require("../../../../lib/rawFileUtils"),
  "rawToList"
);

const input = [
  "..##.......",
  "#...#...#..",
  ".#....#..#.",
  "..#.#...#.#",
  ".#...##..#.",
  "..#.##.....",
  ".#.#.#....#",
  ".#........#",
  "#.##...#...",
  "#...##....#",
  ".#..#...#.#",
];

rawToList.mockReturnValue(input);

describe("Day 3", () => {
  describe("Day 3 - Part 1", () => {
    it("should hit 7 trees", () => {
      expect(part1()).toBe(7);
    });
  });

  describe("Day 3 - Part 1 modified", () => {
    it("should still hit 7 trees", () => {
      expect(part1Modified(null, 3, 1)).toBe(7);
    });
  });

  describe("Day 3 - Part 2", () => {
    const slopeList = [
      [1, 1],
      [3, 1],
      [5, 1],
      [7, 1],
      [1, 2],
    ];

    it("should return correct answers", () => {
      expect(part2(null, slopeList)).toStrictEqual({
        treesHitList: [2, 7, 3, 4, 2],
        answer: 336,
      });
    });
  });
});
