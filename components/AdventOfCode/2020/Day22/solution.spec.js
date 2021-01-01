import { parseDecks, part1, part2, playGame, playRound } from "./solution";

const rawData =
  "Player 1:\r\n9\r\n2\r\n6\r\n3\r\n1\r\n\r\nPlayer 2:\r\n5\r\n8\r\n4\r\n7\r\n10";

const rawDataPart2 = "Player 1:\r\n43\r\n19\r\n\r\nPlayer 2:\r\n2\r\n29\r\n14";

const player1Deck = [9, 2, 6, 3, 1];
const player2Deck = [5, 8, 4, 7, 10];

describe("Day 22", () => {
  describe("part 1", () => {
    describe("parseDecks", () => {
      it("should parse raw into into decks", () => {
        expect(parseDecks(rawData)).toStrictEqual([player1Deck, player2Deck]);
      });
    });

    describe("playRound", () => {
      it("should give cards to winner in correct order", () => {
        expect(playRound(player1Deck, player2Deck)).toStrictEqual([
          [2, 6, 3, 1, 9, 5],
          [8, 4, 7, 10],
        ]);
      });
    });

    describe("playGame", () => {
      it("should return winner", () => {
        expect(playGame(player1Deck, player2Deck)).toStrictEqual([
          3,
          2,
          10,
          6,
          8,
          5,
          9,
          4,
          7,
          1,
        ]);
      });
    });

    describe("answer", () => {
      it("should return score", () => {
        expect(part1(rawData)).toBe(306);
      });
    });
  });
  describe("Part2", () => {
    describe("answer", () => {
      it("should be 291", () => {
        expect(part2(rawData)).toBe(291);
      });
    });
  });
});
