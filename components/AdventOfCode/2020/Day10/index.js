import React, { useState } from "react";
import inputRaw from "./input.txt";
import { part1 } from "./solution";

export const Day10Part1 = () => {
  const [answer, setAnswer] = useState(false);

  return (
    <>
      <p>
        For a list of joltage adapters find the amount of connections with a
        difference of 1 jolt and 3 jolts. Multiply those counts as the answer,
      </p>
      <button onClick={() => setAnswer(part1(inputRaw))}>
        Day 10 - Part 1
      </button>
      {answer && <p>{answer}</p>}
    </>
  );
};
