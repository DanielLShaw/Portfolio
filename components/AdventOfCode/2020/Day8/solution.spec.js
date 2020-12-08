import {
  part1,
  part2,
  runInstructions,
  runInstructionsPart2,
} from "./solution";

describe("Day 8", () => {
  describe("runInstructions", () => {
    const input = [
      "nop +0",
      "acc +1",
      "jmp +4",
      "acc +3",
      "jmp -3",
      "acc -99",
      "acc +1",
      "jmp -4",
      "acc +6",
    ];
    it("should return 5", () => {
      expect(runInstructions(input)).toBe(5);
    });
  });
  describe("part 1", () => {
    const input =
      "nop +0\nacc +1\njmp +4\nacc +3\njmp -3\nacc -99\nacc +1\njmp -4\nacc +6";

    it("should return 5", () => {
      expect(part1(input)).toBe(5);
    });
  });

  describe("runInstructionsPart2", () => {
    const input = [
      "nop +0",
      "acc +1",
      "jmp +4",
      "acc +3",
      "jmp -3",
      "acc -99",
      "acc +1",
      "jmp -4",
      "acc +6",
    ];
    it("should return 5 and infinite", () => {
      expect(runInstructionsPart2(input)).toStrictEqual({
        accumulator: 5,
        infinite: true,
        timedOut: false,
      });
    });
  });

  describe("part 2", () => {
    const input =
      "nop +0\nacc +1\njmp +4\nacc +3\njmp -3\nacc -99\nacc +1\njmp -4\nacc +6";

    it("should return 8", () => {
      expect(part2(input)).toBe(8);
    });
  });
});
