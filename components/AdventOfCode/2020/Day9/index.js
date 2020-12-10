import React, { useState } from "react";
import inputRaw from "./input.txt";
import { part1, part2 } from "./solution";

export const Day9Part1 = () => {
  const [answer, setAnswer] = useState(false);

  return (
    <>
      <p>
        Find the first number which doesnt have two numbers which sum to in in
        the previous 25 lines of input.
      </p>
      <button onClick={() => setAnswer(part1(inputRaw, 25))}>
        Day 9 - Part 1
      </button>
      {answer && <p>{answer}</p>}
    </>
  );
};

export const Day9Part2 = () => {
  const [answer, setAnswer] = useState(false);

  return (
    <>
      <p>
        Find a list of contiguous numbers which sum to the value found in part1.
        The answer is the smallest and largest number summed.
      </p>
      <button onClick={() => setAnswer(part2(inputRaw, 25))}>
        Day 9 - Part 2
      </button>
      {answer && <p>{answer}</p>}
    </>
  );
};
