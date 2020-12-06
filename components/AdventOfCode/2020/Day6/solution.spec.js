import {
  groupAnswerChecker,
  part1,
  groupAnswerCheckerPart2,
  part2,
} from "./solution";

describe("Day 6", () => {
  describe("part 1", () => {
    describe("groupAnswerChecker", () => {
      const groups = [
        ["abc", 3],
        ["a\nb\nc", 3],
        ["ab\nac", 3],
        ["a\na\na\na\n", 1],
        ["b", 1],
      ];
      test.each(groups)(
        "group %s answers %s",
        (group, answer) => {
          expect(groupAnswerChecker(group)).toBe(answer);
        },
        500
      );
    });
    describe("answer", () => {
      it("should sum the answers", () => {
        const groups = ["abc", "a\nb\nc", "ab\nac", "a\na\na\na\n", "b"];
        expect(part1(groups)).toBe(11);
      });
    });
  });

  describe("part 2", () => {
    describe("groupAnswerCheckerPart2", () => {
      const groups = [
        ["abc", 3],
        ["a\nb\nc", 0],
        ["ab\nac", 1],
        ["a\na\na\na\n", 1],
        ["b", 1],
      ];
      test.each(groups)(
        "group %s answers %s",
        (group, answer) => {
          expect(groupAnswerCheckerPart2(group)).toBe(answer);
        },
        500
      );
    });
    describe("answer", () => {
      it("should sum the answers", () => {
        const groups = ["abc", "a\nb\nc", "ab\nac", "a\na\na\na\n", "b"];
        expect(part2(groups)).toBe(6);
      });
    });
  });
});
