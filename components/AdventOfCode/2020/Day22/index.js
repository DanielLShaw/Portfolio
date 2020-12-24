import React, { useState } from "react";
import input from "./input.txt";
import { part1, part2 } from "./solution";

export const Day22Part1 = () => {
  const [answer, setAnswer] = useState(false);

  return (
    <>
      <p>Play a card game with a crab and find the winning score</p>
      <button onClick={() => setAnswer(part1(input))}>Day 22 - Part 1</button>
      {answer && <p>Answer: {answer}</p>}
    </>
  );
};

export const Day22Part2 = () => {
  const [answer, setAnswer] = useState(false);

  return (
    <>
      <p>Play a recursive card game with a crab and find the winning score</p>
      <button onClick={() => setAnswer(part2(input))}>Day 22 - Part 1</button>
      {answer && <p>Answer: {answer}</p>}
    </>
  );
};
