import React, { useState } from "react";
import passportsRaw from "./input.txt";
import { part1, part2 } from "./solution";

export const Day4Part1 = () => {
  const [validPassports, setValidPassports] = useState(false);

  const passports = passportsRaw.split(/\r\n\r\n/);

  return (
    <>
      <p>
        Given a set of passports, find the number that have all 8 fields,
        ignoring Country ID
      </p>
      <button onClick={() => setValidPassports(part1(passports))}>
        Day 4 - Part 1
      </button>
      {validPassports && <p>Valid Passports: {validPassports}</p>}
    </>
  );
};

export const Day4Part2 = () => {
  const [validPassports, setValidPassports] = useState(false);

  const passports = passportsRaw.split(/\r\n\r\n/);

  return (
    <>
      <p>
        Given a set of passports, find the number that have{" "}
        <strong>valid data</strong> for the 8 fields, ignoring Country ID.
      </p>
      <button onClick={() => setValidPassports(part2(passports))}>
        Day 4 - Part 2
      </button>
      {validPassports && <p>Valid Passports: {validPassports}</p>}
    </>
  );
};
