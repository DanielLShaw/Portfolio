const {
  pilotFerry,
  getDirection,
  executeDirection,
  part1,
  rotateCoords,
} = require("./solution");

describe("Day 12", () => {
  describe("part1", () => {
    describe("answer", () => {
      const input = "F10\nN3\nF7\nR90\nF11";
      expect(part1(input)).toBe(25);
    });

    describe("pilotFerry", () => {
      const input = ["F10", "N3", "F7", "R90", "F11"];
      expect(pilotFerry(input)).toStrictEqual([17, -8]);
    });

    describe("getDirection", () => {
      const cases = [
        [90, 90, "L", 0],
        [90, 90, "R", 180],
        [0, 90, "R", 90],
        [0, 90, "L", 270],
        [270, 180, "R", 90],
        [270, 180, "L", 90],
        [90, 270, "R", 0],
        [90, 270, "L", 180],
      ];

      test.each(
        cases
      )(
        "test currentAngle: %s rotationAngle: %s rotationDirection: %s expected: %s",
        (currentAngle, rotationAngle, rotationDirection, newAngle) =>
          expect(
            getDirection(currentAngle, rotationAngle, rotationDirection)
          ).toBe(newAngle)
      );
    });
    describe("executeDirection", () => {
      const cases = [
        ["N", 10, 0, 0, 0, [0, 10, 0]],
        ["S", 10, 0, 0, 0, [0, -10, 0]],
        ["E", 10, 0, 0, 0, [10, 0, 0]],
        ["W", 10, 0, 0, 0, [-10, 0, 0]],
        ["L", 90, 0, 0, 0, [0, 0, 270]],
        ["R", 90, 0, 0, 0, [0, 0, 90]],
        ["F", 10, 0, 0, 0, [0, 10, 0]], // F => N
        ["F", 10, 0, 0, 90, [10, 0, 90]], // F => E
        ["F", 10, 0, 0, 180, [0, -10, 180]], // F => S
        ["F", 10, 0, 0, 270, [-10, 0, 270]], // F => W
      ];
      test.each(
        cases
      )(
        "action: %s value: %s x: %s y: %s, currentRot: %s, expected: %s",
        (action, value, x, y, currentRotation, expected) =>
          expect(
            executeDirection(action, value, x, y, currentRotation)
          ).toStrictEqual(expected)
      );
    });
  });
  describe("Part2", () => {
    describe("rotateCoords", () => {
      const cases = [
        [{ x: 1, y: 0 }, 90, { x: 0, y: 1 }],
        [{ x: 1, y: 0 }, -90, { x: 0, y: -1 }],
        [{ x: 1, y: 0 }, 180, { x: -1, y: 0 }],
      ];

      test.each(cases)(
        "start: %s rotation: %s finish: %s",
        (coords, rotation, output) => {
          expect(rotateCoords(coords, rotation)).toStrictEqual(output);
        }
      );
    });
  });
});
