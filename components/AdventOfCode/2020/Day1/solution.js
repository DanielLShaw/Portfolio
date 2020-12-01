import data from "./input";

// https://adventofcode.com/2020/day/1

export const part1 = () => {
  console.time("Part 1");
  const { expenses } = data;
  let firstExpense;
  let secondExpense;
  expenses?.some((a) => {
    return expenses.some((b) => {
      if (a + b === 2020) {
        firstExpense = a;
        secondExpense = b;
        return true;
      }
    });
  });
  console.timeEnd("Part 1");
  return {
    firstExpense,
    secondExpense,
  };
};

export const part2 = () => {
  console.time("Part 2");
  const { expenses } = data;
  let firstExpense;
  let secondExpense;
  let thirdExpense;
  expenses?.some((a) => {
    return expenses.some((b) => {
      return expenses.some((c) => {
        if (a + b + c === 2020) {
          firstExpense = a;
          secondExpense = b;
          thirdExpense = c;
          return true;
        }
      });
    });
  });
  console.timeEnd("Part 2");

  return {
    firstExpense,
    secondExpense,
    thirdExpense,
  };
};
