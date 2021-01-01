const { combineObjects } = require("./objectUtils");

describe("objectUtils", () => {
  describe("combineObjects", () => {
    const cases = [
      [
        [
          { a: 1, b: 1 },
          { a: 1, b: 1 },
        ],
        { a: 2, b: 2 },
      ],
      [[{ a: 1 }, { b: 1 }], { a: 1, b: 1 }],
    ];
    test.each(cases)("object", (input, output) =>
      expect(combineObjects(input)).toStrictEqual(output)
    );
  });
});
