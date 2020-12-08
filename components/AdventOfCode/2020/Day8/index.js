import React, { useState } from "react";
import instructionsRaw from "./input.txt";
import { part1, part2 } from "./solution";

export const Day8Part1 = () => {
  const [answer, setAnswer] = useState(false);

  return (
    <>
      <p>
        Run the instructions until just before an infinite loop happens, then
        return the accumulators value
      </p>
      <button onClick={() => setAnswer(part1(instructionsRaw))}>
        Day 8 - Part 1
      </button>
      {answer && <p>{answer}</p>}
    </>
  );
};

export const Day8Part2 = () => {
  const [answer, setAnswer] = useState(false);

  return (
    <>
      <p>
        {`Find which instruction is corrupted, jmp <=> nop, fix it and then run the code. return the accumulators value`}
      </p>
      <button onClick={() => setAnswer(part2(instructionsRaw))}>
        Day 8 - Part 2
      </button>
      {answer && <p>{answer}</p>}
    </>
  );
};
