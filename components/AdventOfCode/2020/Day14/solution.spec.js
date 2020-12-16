import { applyBitMask, part1, getPermuations, part2 } from "./solution";

describe("Day 14", () => {
  describe("part 1", () => {
    describe("applyBitMask", () => {
      const mask = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X";
      const cases = [
        [11, 73],
        [101, 101],
        [0, 64],
      ];

      test.each(cases)("input %s | output %s", (input, output) => {
        expect(applyBitMask(input, mask)).toBe(output);
      });
    });

    describe("answer", () => {
      const input =
        "mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X\nmem[8] = 11\nmem[7] = 101\nmem[8] = 0";

      it("should return ", () => {
        expect(part1(input)).toBe(165);
      });
    });
  });

  describe("part 2", () => {
    describe("getPermuations", () => {
      const input = ["00000000000000000000000000000001X0XX"];
      const output = [
        "000000000000000000000000000000011011",
        "000000000000000000000000000000011010",
        "000000000000000000000000000000011001",
        "000000000000000000000000000000011000",
        "000000000000000000000000000000010011",
        "000000000000000000000000000000010010",
        "000000000000000000000000000000010001",
        "000000000000000000000000000000010000",
      ];

      expect(getPermuations(input)).toStrictEqual(output);
    });

    describe("answer", () => {
      const input =
        "mask = 000000000000000000000000000000X1001X\nmem[42] = 100\nmask = 00000000000000000000000000000000X0XX\nmem[26] = 1";

      const input2 =
        "mask = 0XX000X1111001010X10XX1101XX00X00100\nmem[50596] = 1000\nmask = 0X000001111001010X1011100100001X0X0X\nmem[45713] = 1";

      expect(part2(input)).toBe(208);
      expect(part2(input2)).toBe(508032);
    });
  });
});
