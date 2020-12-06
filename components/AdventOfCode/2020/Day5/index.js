import React, { useState } from "react";
import boardingPassesRaw from "./input.txt";
import { part1, part2 } from "./solution";

export const Day5Part1 = () => {
  const [highestSeat, setHighestSeat] = useState(false);

  const boardingPasses = boardingPassesRaw.split(/\n/);

  return (
    <>
      <p>
        Given a list of boarding passes, find the one with the highest seat ID
      </p>
      <button onClick={() => setHighestSeat(part1(boardingPasses))}>
        Day 5 - Part 1
      </button>
      {highestSeat && (
        <p>
          {`Highest Seat - Pass:${highestSeat[0]} Row: ${highestSeat[1]} Column: ${highestSeat[2]} ID: ${highestSeat[3]}`}
        </p>
      )}
    </>
  );
};

export const Day5Part2 = () => {
  const [mySeat, setMySeat] = useState(false);

  const boardingPasses = boardingPassesRaw.split(/\n/);

  return (
    <>
      <p>
        Given a list of boarding passes, find the seat ID that is missing, thats
        my seat
      </p>
      <button onClick={() => setMySeat(part2(boardingPasses))}>
        Day 5 - Part 2
      </button>
      {mySeat && <p>Missing Seat ID: {mySeat}</p>}
    </>
  );
};
