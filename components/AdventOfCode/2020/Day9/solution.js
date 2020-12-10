export const findxMasSum = (target, preamble) => {
  // find two numbers in array that add to target
  for (let i = 0; i < preamble.length; i++) {
    const a = preamble[i];
    const b = target - a;

    if (preamble.includes(b) && a != b) {
      return [a, b];
    }
  }

  return [null, null];
};

export const findAttackPoint = (input, preambleLength) => {
  for (let i = preambleLength; i < input.length; i++) {
    const target = input[i];
    const preamble = input.slice(i - preambleLength, i);

    // find two numbers in previous preamble that sum to target
    const [a, b] = findxMasSum(target, preamble);

    // if there are no matches, return target
    if (!a && !b) {
      return target;
    }
  }
};

export const part1 = (inputRaw, preamble) => {
  const input = inputRaw.split("\n");
  const intInput = input.map((str) => parseInt(str));
  return findAttackPoint(intInput, preamble);
};

export const findWeakness = (input, attackPoint) => {
  //find contiguous numbers in input that add up to attackpoint

  for (let i = 0; i < input.length; i++) {
    for (let sliceLength = 1; sliceLength < input.length - i; sliceLength++) {
      const numbersToSum = input.slice(i, i + sliceLength);
      const sum = numbersToSum.reduce((acc, a) => acc + a);
      if (sum === attackPoint) {
        const sorted = numbersToSum.sort((a, b) => a - b);

        // once found, return first and last numbers in list summed
        return sorted[0] + sorted[sorted.length - 1];
      }
    }
  }

  return null;
};

export const part2 = (inputRaw, preamble) => {
  const input = inputRaw.split("\n");
  const intInput = input.map((str) => parseInt(str));
  const attackPoint = findAttackPoint(intInput, preamble);
  return findWeakness(intInput, attackPoint);
};
