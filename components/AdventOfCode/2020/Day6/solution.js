export const groupAnswerChecker = (group) => {
  let remainingAnswers = group.replace(/\W/g, "").split("");
  let totalAnswered = 0;

  while (remainingAnswers.length > 0) {
    totalAnswered++;

    remainingAnswers = remainingAnswers.filter(
      (answer) => answer != remainingAnswers[0]
    );
  }

  return totalAnswered;
};

export const part1 = (groups) => {
  const answers = groups.map((group) => groupAnswerChecker(group));

  return answers.reduce(
    (runningTotal, currentValue) => runningTotal + currentValue
  );
};

export const groupAnswerCheckerPart2 = (group) => {
  const people = group.replace(/\n$/, "").split(/\n/g);

  //find member with most answers;
  const sortedPeople = people.sort((a, b) => a.length - b.length);
  const mostAnsweredPerson = sortedPeople.shift();

  let mostAnsweredPersonAnswers = mostAnsweredPerson
    .replace(/\W/g, "")
    .split("");

  let totalGroupAnswered = 0;

  while (mostAnsweredPersonAnswers.length > 0) {
    const allHaveAnswered = sortedPeople.every(
      (person) => person.indexOf(mostAnsweredPersonAnswers[0]) > -1
    );
    if (allHaveAnswered) {
      totalGroupAnswered++;
    }

    mostAnsweredPersonAnswers = mostAnsweredPersonAnswers.filter(
      (answer) => answer != mostAnsweredPersonAnswers[0]
    );
  }

  return totalGroupAnswered;
};

export const part2 = (groups) => {
  const answers = groups.map((group) => groupAnswerCheckerPart2(group));

  return answers.reduce(
    (runningTotal, currentValue) => runningTotal + currentValue
  );
};
