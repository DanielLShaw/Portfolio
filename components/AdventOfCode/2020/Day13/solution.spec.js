const {
  findNextBus,
  part1,
  findNiceBusDeparturePattern,
} = require("./solution");

describe("Day 13", () => {
  describe("Part 1", () => {
    describe("answer", () => {
      const input = "939\n7,13,x,x,59,x,31,19";
      it("should be 295", () => {
        expect(part1(input)).toBe(295);
      });
    });
    describe("findNextBus", () => {
      it("should return 59 , 5", () => {
        expect(findNextBus(939, [7, 13, 59, 31, 19])).toStrictEqual({
          busId: 59,
          wait: 5,
        });
      });
    });
  });

  describe("Part 2", () => {
    // describe.skip("answer", () => {
    //   const input = "939\n7,13,x,x,59,x,31,19";
    //   it("should be 1068781", () => {
    //     expect(part2(input)).toBe(1068781);
    //   });
    // });
    describe("findNiceBusDeparturePattern", () => {
      // The earliest timestamp that matches the list 17,x,13,19 is 3417.
      // 67,7,59,61 first occurs at timestamp 754018.
      // 67,x,7,59,61 first occurs at timestamp 779210.
      // 67,7,x,59,61 first occurs at timestamp 1261476.
      // 1789,37,47,1889 first occurs at timestamp 1202161486.

      const cases = [
        [["7", "13", "x", "x", "59", "x", "31", "19"], 1068781],
        [["17", "x", "13", "19"], 3417],
        [["67", "7", "59", "61"], 754018],
        [["67", "x", "7", "59", "61"], 779210],
        [["67", "7", "x", "59", "61"], 1261476],
        [["1789", "37", "47", "1889"], 1202161486],
      ];

      test.each(cases)("test: %s answer: %s", (input, answer) => {
        expect(findNiceBusDeparturePattern(input)).toBe(answer);
      });
    });
  });
});
