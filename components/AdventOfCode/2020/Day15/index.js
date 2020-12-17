import React, { useState } from "react";
import { part1, part1And2 } from "./solution";

export const Day15Part1 = () => {
  const [answer, setAnswer] = useState(false);
  const [input, setInput] = useState("8,11,0,19,1,2");

  const handleClick = () => {
    if (/^\d+(,\d+)+$/.test(input)) {
      const inputList = input.split(",").map((str) => parseInt(str));
      setAnswer(part1And2(inputList, 2020));
    } else {
      alert("Invalid input, please write a comma separated list of integers");
    }
  };

  return (
    <>
      <p>Find the 2020th number spoken in the elves number game</p>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => handleClick()}>Day 15 - Part 1</button>
      {answer && <p>Answer: {answer}</p>}
    </>
  );
};

export const Day15Part2 = () => {
  const [answer, setAnswer] = useState(false);
  const [input, setInput] = useState("8,11,0,19,1,2");

  const handleClick = () => {
    if (/^\d+(,\d+)+$/.test(input)) {
      const inputList = input.split(",").map((str) => parseInt(str));
      setAnswer(part1And2(inputList, 30000000));
    } else {
      alert("Invalid input, please write a comma separated list of integers");
    }
  };

  return (
    <>
      <p>Find the 30000000th number spoken in the elves number game</p>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => handleClick()}>Day 15 - Part 1</button>
      {answer && <p>Answer: {answer}</p>}
    </>
  );
};
