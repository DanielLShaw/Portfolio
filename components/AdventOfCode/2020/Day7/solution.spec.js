import { bagParser, childBags, parentBags, part1, part2 } from "./solution";
describe("Day 7", () => {
  describe("bagParser", () => {
    const bagCases = [
      [
        "light red bags contain 1 bright white bag, 2 muted yellow bags.",
        [
          "light_red",
          [
            { colour: "bright_white", quantity: 1 },
            { colour: "muted_yellow", quantity: 2 },
          ],
        ],
      ],
      [
        "dark orange bags contain 3 bright white bags, 4 muted yellow bags.",

        [
          "dark_orange",
          [
            { colour: "bright_white", quantity: 3 },
            { colour: "muted_yellow", quantity: 4 },
          ],
        ],
      ],
      [
        "bright white bags contain 1 shiny gold bag.",

        ["bright_white", [{ colour: "shiny_gold", quantity: 1 }]],
      ],
      [
        "muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.",
        [
          "muted_yellow",
          [
            { colour: "shiny_gold", quantity: 2 },
            { colour: "faded_blue", quantity: 9 },
          ],
        ],
      ],

      [
        "shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.",
        [
          "shiny_gold",
          [
            { colour: "dark_olive", quantity: 1 },
            { colour: "vibrant_plum", quantity: 2 },
          ],
        ],
      ],
      [
        "dark olive bags contain 3 faded blue bags, 4 dotted black bags.",
        [
          "dark_olive",
          [
            { colour: "faded_blue", quantity: 3 },
            { colour: "dotted_black", quantity: 4 },
          ],
        ],
      ],
      [
        "vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.",
        [
          "vibrant_plum",
          [
            { colour: "faded_blue", quantity: 5 },
            { colour: "dotted_black", quantity: 6 },
          ],
        ],
      ],
      ["faded blue bags contain no other bags.", ["faded_blue", []]],
      ["dotted black bags contain no other bags.", ["dotted_black", []]],
    ];

    test.each(bagCases)("bag %s", (bag, expected) =>
      expect(bagParser(bag)).toStrictEqual(expected)
    );
  });
  describe("parentBags", () => {
    const bagKey = {
      light_red: [
        { colour: "bright_white", quantity: 1 },
        { colour: "muted_yellow", quantity: 2 },
      ],
      dark_orange: [
        { colour: "bright_white", quantity: 3 },
        { colour: "muted_yellow", quantity: 4 },
      ],
      bright_white: [{ colour: "shiny_gold", quantity: 1 }],
      muted_yellow: [
        { colour: "shiny_gold", quantity: 2 },
        { colour: "faded_blue", quantity: 9 },
      ],
      shiny_gold: [
        { colour: "dark_olive", quantity: 1 },
        { colour: "vibrant_plum", quantity: 2 },
      ],
      dark_olive: [
        { colour: "faded_blue", quantity: 3 },
        { colour: "dotted_black", quantity: 4 },
      ],
      vibrant_plum: [
        { colour: "faded_blue", quantity: 5 },
        { colour: "dotted_black", quantity: 6 },
      ],
      faded_blue: [],
      dotted_black: [],
    };

    expect(parentBags(bagKey, "shiny_gold")).toStrictEqual([
      "bright_white",
      "light_red",
      "dark_orange",
      "muted_yellow",
    ]);
    expect(parentBags(bagKey, "bright_white")).toStrictEqual([
      "light_red",
      "dark_orange",
    ]);
    expect(parentBags(bagKey, "dark_orange")).toStrictEqual([]);
    expect(parentBags(bagKey, "dotted_black")).toStrictEqual([
      "dark_olive",
      "shiny_gold",
      "bright_white",
      "light_red",
      "dark_orange",
      "muted_yellow",
      "vibrant_plum",
    ]);
  });

  describe("part1", () => {
    const bagCases = [
      "light red bags contain 1 bright white bag, 2 muted yellow bags.",
      "dark orange bags contain 3 bright white bags, 4 muted yellow bags.",
      "bright white bags contain 1 shiny gold bag.",
      "muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.",
      "shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.",
      "dark olive bags contain 3 faded blue bags, 4 dotted black bags.",
      "vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.",
      "faded blue bags contain no other bags.",
      "dotted black bags contain no other bags.",
    ];
    expect(part1(bagCases)).toBe(4);
  });

  describe("childBags", () => {
    const bagKey = {
      light_red: [
        { colour: "bright_white", quantity: 1 },
        { colour: "muted_yellow", quantity: 2 },
      ],
      dark_orange: [
        { colour: "bright_white", quantity: 3 },
        { colour: "muted_yellow", quantity: 4 },
      ],
      bright_white: [{ colour: "shiny_gold", quantity: 1 }],
      muted_yellow: [
        { colour: "shiny_gold", quantity: 2 },
        { colour: "faded_blue", quantity: 9 },
      ],
      shiny_gold: [
        { colour: "dark_olive", quantity: 1 },
        { colour: "vibrant_plum", quantity: 2 },
      ],
      dark_olive: [
        { colour: "faded_blue", quantity: 3 },
        { colour: "dotted_black", quantity: 4 },
      ],
      vibrant_plum: [
        { colour: "faded_blue", quantity: 5 },
        { colour: "dotted_black", quantity: 6 },
      ],
      faded_blue: [],
      dotted_black: [],
    };

    const part2BagKey = {
      shiny_gold: [{ colour: "dark_red", quantity: 2 }],
      dark_red: [{ colour: "dark_orange", quantity: 2 }],
      dark_orange: [{ colour: "dark_yellow", quantity: 2 }],
      dark_yellow: [{ colour: "dark_green", quantity: 2 }],
      dark_green: [{ colour: "dark_blue", quantity: 2 }],
      dark_blue: [{ colour: "dark_violet", quantity: 2 }],
      dark_violet: [],
    };

    expect(childBags(bagKey, "shiny_gold")).toStrictEqual({
      dark_olive: 1,
      dotted_black: 16,
      faded_blue: 13,
      vibrant_plum: 2,
    });
    expect(childBags(bagKey, "bright_white")).toStrictEqual({
      shiny_gold: 1,
      dark_olive: 1,
      dotted_black: 16,
      faded_blue: 13,
      vibrant_plum: 2,
    });
    expect(childBags(bagKey, "dark_orange")).toStrictEqual({
      bright_white: 3,
      dark_olive: 11,
      dotted_black: 176,
      faded_blue: 179,
      muted_yellow: 4,
      shiny_gold: 11,
      vibrant_plum: 22,
    });
    expect(childBags(bagKey, "dotted_black")).toStrictEqual({});

    expect(childBags(part2BagKey, "shiny_gold")).toStrictEqual({
      dark_red: 2,
      dark_orange: 4,
      dark_yellow: 8,
      dark_green: 16,
      dark_blue: 32,
      dark_violet: 64,
    });
  });

  describe("part1", () => {
    const bagCases = [
      "light red bags contain 1 bright white bag, 2 muted yellow bags.",
      "dark orange bags contain 3 bright white bags, 4 muted yellow bags.",
      "bright white bags contain 1 shiny gold bag.",
      "muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.",
      "shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.",
      "dark olive bags contain 3 faded blue bags, 4 dotted black bags.",
      "vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.",
      "faded blue bags contain no other bags.",
      "dotted black bags contain no other bags.",
    ];

    const bagCasesPart2 = [
      "shiny gold bags contain 2 dark red bags.",
      "dark red bags contain 2 dark orange bags.",
      "dark orange bags contain 2 dark yellow bags.",
      "dark yellow bags contain 2 dark green bags.",
      "dark green bags contain 2 dark blue bags.",
      "dark blue bags contain 2 dark violet bags.",
      "dark violet bags contain no other bags.",
    ];
    expect(part2(bagCases)).toBe(32);
    expect(part2(bagCasesPart2)).toBe(126);
  });
});
