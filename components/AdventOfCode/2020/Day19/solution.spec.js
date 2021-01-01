import { getRules, part1, rulesToRegex } from "./solution";

const rawRules =
  '0: 4 1 5\n1: 2 3 | 3 2\n2: 4 4 | 5 5\n3: 4 5 | 5 4\n4: "a"\n5: "b"\n';

const rawInput = `${rawRules}\r\n\r\nababbb\nbababa\nabbbab\naaabbb\naaaabbb`;

const rulesMap = new Map([
  [0, [[4, 1, 5]]],
  [
    1,
    [
      [2, 3],
      [3, 2],
    ],
  ],
  [
    2,
    [
      [4, 4],
      [5, 5],
    ],
  ],
  [
    3,
    [
      [4, 5],
      [5, 4],
    ],
  ],
  [4, "a"],
  [5, "b"],
]);

describe("Day 19", () => {
  describe("Part 1", () => {
    describe("getRules", () => {
      it("should convert raw into a map", () => {
        expect(getRules(rawRules)).toStrictEqual(rulesMap);
      });
    });

    describe("rulesToRegex", () => {
      it("should convert map into regexp string", () => {
        expect(rulesToRegex(rulesMap)).toBe(
          "(a)(((a)(a)|(b)(b))((a)(b)|(b)(a))|((a)(b)|(b)(a))((a)(a)|(b)(b)))(b)"
        );
      });
    });

    describe("answer", () => {
      it("should return list of correct strings", () => {
        const validMessages = ["ababbb", "abbbab"];
        expect(part1(rawInput)).toStrictEqual(validMessages);
      });
    });

    // describe("checkRules", () => {
    //   const cases = [
    //     ["ababbb", true],
    //     ["bababa", false],
    //     ["abbbab", true],
    //     ["aaabbb", false],
    //     ["aaaabbb", false],
    //   ];

    //   test.each(cases)("%s %s", (input, output) => {
    //     expect(checkRules(input, rulesMap)).toBe(output);
    //   });
    // });
  });
});
