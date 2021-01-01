import React, { useState } from "react";

import { part1, part2 } from "./solution";
import data from "./input";

export const Day1Part1 = () => {
  const [solution, setSolution] = useState({
    firstExpense: false,
    secondExpense: false,
  });
  return (
    <>
      <button onClick={() => setSolution(part1(data?.expenses))}>
        Get Part 1 Answer
      </button>
      {solution.firstExpense && (
        <p>
          First Expense: {solution.firstExpense} <br />
          Second Expense: {solution.secondExpense} <br />
          Answer: {solution.firstExpense * solution.secondExpense}
        </p>
      )}
    </>
  );
};

export const Day1Part2 = () => {
  const [solution, setSolution] = useState({
    firstExpense: false,
    secondExpense: false,
    thirdExpense: false,
  });

  return (
    <>
      <button onClick={() => setSolution(part2(data?.expenses))}>
        Get Part 2 Answer
      </button>
      {solution.firstExpense && (
        <p>
          First Expense: {solution.firstExpense} <br />
          Second Expense: {solution.secondExpense} <br />
          Third Expense: {solution.thirdExpense} <br />
          Answer:
          {solution.firstExpense *
            solution.secondExpense *
            solution.thirdExpense}
        </p>
      )}
    </>
  );
};
