import React, { useState } from "react";
import input from "./input.txt";
import { part1 } from "./solution";

export const Day19Part1 = () => {
  const [answer, setAnswer] = useState(false);

  return (
    <>
      <p>Using a set of rules, find the valid messages</p>
      <button onClick={() => setAnswer(part1(input))}>Day 19 - Part 1</button>
      {answer && <p>Answer: {answer}</p>}
    </>
  );
};
