// https://adventofcode.com/2020/day/1

export const part1 = (expenseList = []) => {
  let firstExpense;
  let secondExpense;
  expenseList?.some((a) => {
    return expenseList.some((b) => {
      if (a + b === 2020) {
        firstExpense = a;
        secondExpense = b;
        return true;
      }
    });
  });
  return {
    firstExpense,
    secondExpense,
  };
};

export const part2 = (expenseList = []) => {
  let firstExpense;
  let secondExpense;
  let thirdExpense;
  expenseList?.some((a) => {
    return expenseList.some((b) => {
      return expenseList.some((c) => {
        if (a + b + c === 2020) {
          firstExpense = a;
          secondExpense = b;
          thirdExpense = c;
          return true;
        }
      });
    });
  });

  return {
    firstExpense,
    secondExpense,
    thirdExpense,
  };
};
