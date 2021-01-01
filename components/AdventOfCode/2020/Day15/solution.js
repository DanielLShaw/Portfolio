// In this game, the players take turns saying numbers.
//They begin by taking turns reading from a list of starting numbers (your puzzle input).
// Then, each turn consists of considering the most recently spoken number:

export const part1And2 = (input = [], turns) => {
  const spokenNumberMap = new Map();
  let previousSpoken;

  //for each number record the turn which it was spoken last.
  for (let turn = 1; turn <= turns; turn++) {
    if (turn <= input.length) {
      //initial setup
      previousSpoken = input[turn - 1];
      spokenNumberMap.set(previousSpoken, [turn]);
    } else {
      const previousSpokenBefore = spokenNumberMap.get(previousSpoken);
      if (previousSpokenBefore && previousSpokenBefore.length >= 2) {
        // Otherwise, the number had been spoken before; the current player announces how many turns apart the number is from when it was previously spoken.
        const age =
          previousSpokenBefore[previousSpokenBefore.length - 1] -
          previousSpokenBefore[previousSpokenBefore.length - 2];
        previousSpoken = age;
      } else {
        // If that was the first time the number has been spoken, the current player says 0.
        previousSpoken = 0;
      }

      const previousSpokenAfter = spokenNumberMap.get(previousSpoken);

      // save last 2 occurances into set (added in part 2 for speed)
      spokenNumberMap.set(
        previousSpoken,
        previousSpokenAfter
          ? [previousSpokenAfter[previousSpokenAfter.length - 1], turn]
          : [turn]
      );
    }
  }
  return previousSpoken;
};
