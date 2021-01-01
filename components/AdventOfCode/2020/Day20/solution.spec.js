import {
  findCorners,
  getBottomEdge,
  getLeftEdge,
  getRightEdge,
  getTopEdge,
  parseTileData,
  reverseString,
} from "./solution";
const exampleInput = require("./example.txt");

const tile = [
  "..##.#..#.",
  "##..#.....",
  "#...##..#.",
  "####.#...#",
  "##.##.###.",
  "##...#.###",
  ".#.#.#..##",
  "..#....#..",
  "###...#.#.",
  "..###..###",
];

const top = "..##.#..#.";
const bottom = "..###..###";
const right = "...#.##..#";
const left = ".#####..#.";

describe("Day 20", () => {
  describe("Part 1", () => {
    describe("getTopEdge", () => {
      it("should return top edge data", () => {
        expect(getTopEdge(tile)).toBe(top);
      });
    });
    describe("getBottomEdge", () => {
      it("should return top edge data", () => {
        expect(getBottomEdge(tile)).toBe(bottom);
      });
    });
    describe("getLeftEdge", () => {
      it("should return top edge data", () => {
        expect(getLeftEdge(tile)).toBe(left);
      });
    });
    describe("getRightEdge", () => {
      it("should return top edge data", () => {
        expect(getRightEdge(tile)).toBe(right);
      });
    });

    describe("reverseString", () => {
      it("should turn hello into olleh", () => {
        expect(reverseString("hello")).toBe("olleh");
      });
    });

    describe("parseTileData", () => {
      const tileData = `Tile 1234:\r\n${tile.join("\r\n")}`;
      expect(parseTileData(tileData)).toStrictEqual(
        new Map([[1234, { tile, top, right, bottom, left }]])
      );
    });

    describe("findCorners", () => {
      it("should find the tiles which only have 2 matching edges", () => {
        expect(findCorners(parseTileData(exampleInput))).toStrictEqual([
          1951,
          1171,
          2971,
          3079,
        ]);
      });
    });
  });
});
