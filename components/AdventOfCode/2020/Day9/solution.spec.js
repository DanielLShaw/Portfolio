const {
  findAttackPoint,
  findxMasSum,
  part1,
  findWeakness,
  part2,
} = require("./solution");

describe("Day 9", () => {
  const input = [
    35,
    20,
    15,
    25,
    47,
    40,
    62,
    55,
    65,
    95,
    102,
    117,
    150,
    182,
    127,
    219,
    299,
    277,
    309,
    576,
  ];
  describe("findAttackPoint", () => {
    it("should return first number which doesnt have 2 numbers in preceeding set of numbers that sum to it", () => {
      expect(findAttackPoint(input, 5)).toBe(127);
    });
  });

  describe("findWeakness", () => {
    it("should return sum of smallest and largest numbers in a contiguous list that sum to input", () => {
      expect(findWeakness(input, 127)).toBe(62);
    });
  });

  describe("findxMasSum", () => {
    const cases = [
      [40, [35, 20, 15, 25, 47], [15, 25]],
      [62, [20, 15, 25, 47, 40], [15, 47]],
      [127, [95, 102, 117, 150, 182], [null, null]],
    ];

    test.each(cases)(
      "target: %s | preamble %s | expected %s",
      (target, preamble, expected) => {
        expect(findxMasSum(target, preamble)).toStrictEqual(expected);
      }
    );
  });

  describe("answers", () => {
    const raw =
      "35\n20\n15\n25\n47\n40\n62\n55\n65\n95\n102\n117\n150\n182\n127\n219\n299\n277\n309\n576";
    describe("part 1", () => {
      it("should return first number which doesn't have 2 numbers in preceding set of numbers that sum to it", () => {
        expect(part1(raw, 5)).toBe(127);
      });
    });
    describe("part 2", () => {
      it("should return sum of smallest and largest numbers in a contiguous list that sum to input", () => {
        expect(part2(raw, 5)).toBe(62);
      });
    });
  });
});
