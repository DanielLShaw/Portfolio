import { allocateSeat, convertToBinary, part1 } from "./solution";

describe("Day 5", () => {
  describe("Part 1", () => {
    describe("convertToBinary", () => {
      const codes = [
        ["BFFFBBF", "1000110"],
        ["RRR", "111"],
        ["", ""],
      ];

      test.each(codes)("code %s binary %s", (code, value) => {
        expect(convertToBinary(code)).toBe(value);
      });
    });
    describe("allocateSeat", () => {
      const boardingPasses = [
        ["BFFFBBFRRR", 70, 7, 567],
        ["FFFBBBFRRR", 14, 7, 119],
        ["BBFFBBFRLL", 102, 4, 820],
        ["", false, false, false],
      ];

      test.each(boardingPasses)(
        "boarding pass %s should sit in row %s column %s and have seat ID %s",
        (boardingPass, row, column, seatId) => {
          expect(allocateSeat(boardingPass)).toStrictEqual([
            boardingPass,
            row,
            column,
            seatId,
          ]);
        }
      );
    });
    describe("answer", () => {
      it("should return the seat with the largest seatId", () => {
        const boardingPasses = ["BFFFBBFRRR", "FFFBBBFRRR", "BBFFBBFRLL"];
        expect(part1(boardingPasses)).toStrictEqual([
          "BBFFBBFRLL",
          102,
          4,
          820,
        ]);
      });
    });
  });
});
