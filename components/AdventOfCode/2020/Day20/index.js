import React, { useState } from "react";
import input from "./input.txt";
import { part1 } from "./solution";

export const Day20Part1 = () => {
  const [answer, setAnswer] = useState(false);

  return (
    <>
      <p>Find the corners and times the IDs together</p>
      <button onClick={() => setAnswer(part1(input))}>Day 20 - Part 1</button>
      {answer && <p>Answer: {answer}</p>}
    </>
  );
};
