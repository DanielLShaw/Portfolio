import React, { useState } from "react";
import inputRaw from "./input.txt";
import { part1, part2 } from "./solution";

export const Day12Part1 = () => {
  const [answer, setAnswer] = useState(false);

  return (
    <>
      <p>
        Given a list of directions, find where a ferry ends up and calculate the
        Manhattan distance
      </p>
      <button onClick={() => setAnswer(part1(inputRaw))}>
        Day 12 - Part 1
      </button>
      {answer && <p>Answer: {answer}</p>}
    </>
  );
};

export const Day12Part2 = () => {
  const [answer, setAnswer] = useState(false);

  return (
    <>
      <p>
        Given a list of directions, find where a ferry ends up and calculate the
        Manhattan distance. This time using the correct instructions that
        utilise a waypoint
      </p>
      <button onClick={() => setAnswer(part2(inputRaw))}>
        Day 12 - Part 2
      </button>
      {answer && <p>Answer: {answer}</p>}
    </>
  );
};
