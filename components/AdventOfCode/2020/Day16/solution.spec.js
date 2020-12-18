import { parseTicketFieldRule, checkRule, inRange } from "./solution";

describe("Day 16", () => {
  describe("Part 1", () => {
    describe("parseTicketFieldRule", () => {
      const cases = [
        [
          "departure location: 49-848 or 871-949",
          ["departure location", 49, 848, 871, 949],
        ],
        [
          "departure station: 33-670 or 687-969",
          ["departure station", 33, 670, 687, 969],
        ],

        ["class: 26-820 or 828-967", ["class", 26, 820, 828, 967]],
        ["duration: 31-901 or 910-958", ["duration", 31, 901, 910, 958]],
      ];

      test.each(cases)("%s", (input, output) =>
        expect(parseTicketFieldRule(input)).toStrictEqual(output)
      );
    });

    describe("inRange", () => {
      const cases = [
        [49, 848, 48, false],
        [49, 848, 49, true],
        [49, 848, 848, true],
        [49, 848, 849, false],
      ];

      test.each(cases)("%s", (min, max, value, output) => {
        expect(inRange(min, max, value)).toBe(output);
      });
    });

    describe("checkRule", () => {
      const rule = ["departure location", 49, 848, 871, 949];
      const cases = [
        [rule, 12, false],
        [rule, 49, true],
        [rule, 849, false],
        [rule, 871, true],
        [rule, 949, true],
        [rule, 950, false],
      ];

      test.each(cases)("%s", (rule, input, output) => {
        expect(checkRule(rule, input)).toBe(output);
      });
    });
  });
});
