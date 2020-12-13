import React, { useState } from "react";
import inputRaw from "./input.txt";
import { part1, part2 } from "./solution";

export const Day13Part1 = () => {
  const [answer, setAnswer] = useState(false);

  return (
    <>
      <p>
        Given a list of bus schedules find the next bus which you can get on
        with the shortest wait
      </p>
      <button onClick={() => setAnswer(part1(inputRaw))}>
        Day 13 - Part 1
      </button>
      {answer && <p>Answer: {answer}</p>}
    </>
  );
};

export const Day13Part2 = () => {
  const [answer, setAnswer] = useState(false);

  return (
    <>
      <p>
        Given a list of bus schedules find the first timestamp where each bus
        leaves 1 minute after the last
      </p>
      <button onClick={() => setAnswer(part2(inputRaw))}>
        Day 13 - Part 2
      </button>
      {answer && <p>Answer: {answer}</p>}
    </>
  );
};
