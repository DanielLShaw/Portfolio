import React, { useState } from "react";
import bagRulesRaw from "./input.txt";
import { part1, part2 } from "./solution";

export const Day7Part1 = () => {
  const [answer, setAnswer] = useState(false);

  const bagRules = bagRulesRaw.split(/\r\n/);

  return (
    <>
      <p>
        Each bag has a set of bags it can contain. Find the amount of bags which
        can contain a shiny gold bag
      </p>
      <button onClick={() => setAnswer(part1(bagRules))}>Day 7 - Part 1</button>
      {answer && <p>{answer}</p>}
    </>
  );
};

export const Day7Part2 = () => {
  const [answer, setAnswer] = useState(false);

  const bagRules = bagRulesRaw.split(/\r\n/);

  return (
    <>
      <p>
        Each bag has a set of bags it can contain. Find the amount of bags which
        are contained within a gold bag.
      </p>
      <button onClick={() => setAnswer(part2(bagRules))}>Day 7 - Part 2</button>
      {answer && <p>{answer}</p>}
    </>
  );
};
