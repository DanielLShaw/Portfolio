import React, { useState } from "react";
import inputRaw from "./input.txt";
import { part1, part2 } from "./solution";

export const Day14Part1 = () => {
  const [answer, setAnswer] = useState(false);

  return (
    <>
      <p>
        Apply a bit mask to a series of memory operations, then sum the values
        stored in memory
      </p>
      <button onClick={() => setAnswer(part1(inputRaw))}>
        Day 14 - Part 1
      </button>
      {answer && <p>Answer: {answer}</p>}
    </>
  );
};

export const Day14Part2 = () => {
  const [answer, setAnswer] = useState(false);

  return (
    <>
      <p>
        Apply a bit mask to a series of memory operations, then sum the values
        stored in memory
      </p>
      <button onClick={() => setAnswer(part2(inputRaw))}>
        Day 14 - Part 2
      </button>
      {answer && <p>Answer: {answer}</p>}
    </>
  );
};
