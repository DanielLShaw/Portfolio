import React, { useState } from "react";
import input from "./input.txt";
import { part1, part2 } from "./solution";

export const Day16Part1 = () => {
  const [answer, setAnswer] = useState(false);

  return (
    <>
      <p>Find the amount of tickets which are invalid</p>
      <button onClick={() => setAnswer(part1(input))}>Day 16 - Part 1</button>
      {answer && <p>Answer: {answer}</p>}
    </>
  );
};

export const Day16Part2 = () => {
  const [answer, setAnswer] = useState(false);

  return (
    <>
      <p>Find the amount of tickets which are invalid</p>
      <button onClick={() => setAnswer(part2(input))}>Day 16 - Part 2</button>
      {answer && <p>Answer: {answer}</p>}
    </>
  );
};
