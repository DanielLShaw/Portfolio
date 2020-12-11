export const useAllJoltageAdapters = (input) => {
  const output = [0, 0, 0];

  const adapters = input.sort((a, b) => a - b);

  adapters.unshift(0); // source
  adapters.push(input[input.length - 1] + 3); // device

  adapters.forEach((adapter, index) => {
    if (index !== 0) {
      const prevAdapter = adapters?.[index - 1];
      output[adapter - prevAdapter - 1]++;
    }
  });

  return output;
};

export const part1 = (rawInput) => {
  const input = rawInput.split("\n");

  const intInput = input.map((number) => parseInt(number));

  const difList = useAllJoltageAdapters(intInput);

  return difList[0] * difList[2];
};
