import React, { useState } from "react";
import input from "./input.txt";
import { part1, part2 } from "./solution";

export const Day21Part1 = () => {
  const [answer, setAnswer] = useState(false);

  return (
    <>
      <p>
        Find the amount of ingredients occurances which don't have allergens
      </p>
      <button onClick={() => setAnswer(part1(input))}>Day 21 - Part 1</button>
      {answer && <p>Answer: {answer}</p>}
    </>
  );
};

export const Day21Part2 = () => {
  const [answer, setAnswer] = useState(false);

  return (
    <>
      <p>Create a list of alphabetically sorted ingredients with allergens</p>
      <button onClick={() => setAnswer(part2(input))}>Day 21 - Part 2</button>
      {answer && <p>Answer: {answer}</p>}
    </>
  );
};
