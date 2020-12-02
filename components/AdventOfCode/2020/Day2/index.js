import React, { useState } from "react";
import { part1, part2 } from "./solution";
import data from "./input";

export const Day2Part1 = () => {
  const [validPasswords, setValidPasswords] = useState(false);

  return (
    <>
      <p>Number of passwords that match their policies</p>
      <p>Policy: Characters must occur within a range of values</p>
      <button onClick={() => setValidPasswords(part1(data?.policies))}>
        Day 2 - Part 1
      </button>
      {validPasswords && <p>Valid Passwords: {validPasswords}</p>}
    </>
  );
};

export const Day2Part2 = () => {
  const [validPasswords, setValidPasswords] = useState(false);

  return (
    <>
      <p>Number of passwords that match their policies</p>
      <p>
        Policy: Characters must occur in specific locations, but only once per
        password
      </p>
      <button onClick={() => setValidPasswords(part2(data?.policies))}>
        Day 2 - Part 2
      </button>
      {validPasswords && <p>Valid Passwords: {validPasswords}</p>}
    </>
  );
};
