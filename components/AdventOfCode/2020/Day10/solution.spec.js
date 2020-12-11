const { useAllJoltageAdapters } = require("./solution");

describe("useAllJoltageAdapters", () => {
  const cases = [
    [
      [
        28,
        33,
        18,
        42,
        31,
        14,
        46,
        20,
        48,
        47,
        24,
        23,
        49,
        45,
        19,
        38,
        39,
        11,
        1,
        32,
        25,
        35,
        8,
        17,
        7,
        9,
        4,
        2,
        34,
        10,
        3,
      ],
      [22, 0, 10],
    ],
    [
      [16, 10, 15, 5, 1, 11, 7, 19, 6, 12, 4],
      [7, 0, 5],
    ],
  ];

  test.each(cases)(
    "should return the counts of adapters with 1, 2 and 3 differences - %s",
    (input, expected) => {
      expect(useAllJoltageAdapters(input)).toStrictEqual(expected);
    }
  );
});
