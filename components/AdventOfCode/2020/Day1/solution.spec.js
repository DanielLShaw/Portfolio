import { part1, part2 } from "./solution";

describe("Day 1", () => {
  const testCases = [
    [
      null,
      { firstExpense: undefined, secondExpense: undefined },
      {
        firstExpense: undefined,
        secondExpense: undefined,
        thirdExpense: undefined,
      },
    ],
    [
      [],
      { firstExpense: undefined, secondExpense: undefined },
      {
        firstExpense: undefined,
        secondExpense: undefined,
        thirdExpense: undefined,
      },
      [
        [2000],
        { firstExpense: undefined, secondExpense: undefined },
        {
          firstExpense: undefined,
          secondExpense: undefined,
          thirdExpense: undefined,
        },
      ],
      [
        [2020],
        { firstExpense: undefined, secondExpense: undefined },
        {
          firstExpense: undefined,
          secondExpense: undefined,
          thirdExpense: undefined,
        },
      ],
      [
        [2000, 20],
        { firstExpense: 2000, secondExpense: 20 },
        {
          firstExpense: undefined,
          secondExpense: undefined,
          thirdExpense: undefined,
        },
      ],
      [[20, 1010, 1010], { firstExpense: 1010, secondExpense: 1010 }],
      {
        firstExpense: undefined,
        secondExpense: undefined,
        thirdExpense: undefined,
      },
    ],
    [
      [1000, 1000, 1000],
      { firstExpense: undefined, secondExpense: undefined },
      {
        firstExpense: undefined,
        secondExpense: undefined,
        thirdExpense: undefined,
      },
    ],
    [
      [1000, 1000, 20],
      { firstExpense: undefined, secondExpense: undefined },
      {
        firstExpense: 1000,
        secondExpense: 1000,
        thirdExpense: 20,
      },
    ],
  ];
  describe("Part 1", () => {
    describe("from a list of numbers, it should return 2 numbers which sum to 2020", () => {
      test.each(testCases)("%s", (input, part1Expected) => {
        expect(part1(input)).toStrictEqual(part1Expected);
      });
    });
  });
  describe("Part 2", () => {
    describe("from a list of numbers, it should return 3 numbers which sum to 2020", () => {
      test.each(testCases)("%s", (input, part1Expected, part2Expected) => {
        expect(part2(input)).toStrictEqual(part2Expected);
      });
    });
  });
});
