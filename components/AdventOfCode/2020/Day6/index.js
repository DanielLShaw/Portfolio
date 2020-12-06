import React, { useState } from "react";
import answerGroupsRaw from "./input.txt";
import { part1, part2 } from "./solution";

export const Day6Part1 = () => {
  const [answerSum, setAnswerSum] = useState(false);

  const answerGroups = answerGroupsRaw.split(/\r\n\r\n/);

  return (
    <>
      <p>
        Each group has questions a-z. Find the number of questions answered
        atleast once per group. Sum those values for the whole flight
      </p>
      <button onClick={() => setAnswerSum(part1(answerGroups))}>
        Day 6 - Part 1
      </button>
      {answerSum && <p>{answerSum}</p>}
    </>
  );
};

export const Day6Part2 = () => {
  const [answerSum, setAnswerSum] = useState(false);

  const answerGroups = answerGroupsRaw.split(/\r\n\r\n/);

  return (
    <>
      <p>
        Each group has questions a-z. Find the number of questions answered by
        everyone in the group. Sum those values for the whole flight
      </p>
      <button onClick={() => setAnswerSum(part2(answerGroups))}>
        Day 6 - Part 2
      </button>
      {answerSum && <p>{answerSum}</p>}
    </>
  );
};
