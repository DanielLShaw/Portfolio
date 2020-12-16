export const applyBitMask = (decValue, mask) => {
  const binaryValue = Math.abs(decValue).toString(2).padStart(mask.length, "0");
  const maskedBinary = [];
  mask
    .trim()
    .split("")
    .forEach((bit, index) => {
      switch (bit) {
        case "0":
          // bitwise AND
          maskedBinary[index] = binaryValue.charAt(index) & mask.charAt(index);
          break;
        case "1":
          // bitwise OR
          maskedBinary[index] = binaryValue.charAt(index) | mask.charAt(index);
          break;
        default:
          maskedBinary[index] = binaryValue.charAt(index);
          break;
      }
    });
  return parseInt(maskedBinary.join(""), 2);
};

export const part1 = (rawInput) => {
  const input = rawInput.split("\n");
  let mask;
  const maskRegex = /^mask\s=\s([X01]+)/;
  const memRegex = /^mem\[(\d+)\]\s=\s(\d+)/;

  let output = {};

  input.forEach((line) => {
    const maskMatches = line.match(maskRegex);
    const memMatches = line.match(memRegex);
    if (maskMatches) {
      mask = maskMatches?.[1];
    } else if (memMatches) {
      const [, index, value] = memMatches;
      const maskedValue = applyBitMask(value, mask);
      output = { ...output, [index]: maskedValue };
    }
  });

  return Object.values(output).reduce((acc, value) => acc + value);
};

export const applyBitMaskV2 = (decValue, mask) => {
  const binaryValue = Math.abs(decValue).toString(2).padStart(mask.length, "0");
  const maskedBinary = [];
  mask
    .trim()
    .split("")
    .forEach((bit, index) => {
      switch (bit) {
        case "X":
          // bitwise AND
          maskedBinary[index] = "X";
          break;
        case "1":
          // Overwritten with a 1
          maskedBinary[index] = 1;
          break;
        default:
          maskedBinary[index] = binaryValue.charAt(index);
          break;
      }
    });
  return maskedBinary.join("");
};

export const getPermuations = (value) => {
  const output = [];
  value.map((bit) => {
    const index = bit.indexOf("X");

    if (index > -1) {
      const bit1Perm = replaceAt(bit, index, "1");
      const bit0Perm = replaceAt(bit, index, "0");

      output.push(bit1Perm);
      output.push(bit0Perm);
    }
  });

  if (output.some((bit) => bit.indexOf("X") > 0)) {
    return getPermuations(output);
  }

  return output;
};

export const part2 = (rawInput) => {
  const input = rawInput.split("\n");
  let mask;
  const maskRegex = /^mask\s=\s([X01]+)/;
  const memRegex = /^mem\[(\d+)\]\s=\s(\d+)/;

  const resultMap = new Map();

  input.forEach((line) => {
    const maskMatches = line.match(maskRegex);
    const memMatches = line.match(memRegex);
    if (maskMatches) {
      mask = maskMatches?.[1];
    } else if (memMatches) {
      const [, index, value] = memMatches;
      const maskedValue = applyBitMaskV2(index, mask);
      const addressPurmuations = getPermuations([maskedValue]);

      addressPurmuations.forEach((address) => {
        resultMap.set(parseInt(address, 2), parseInt(value));
      });
    }
  });

  let output = 0;

  for (const v of resultMap.values()) {
    output += v;
  }

  return output;
};

export const replaceAt = (input, index, replacement) => {
  return (
    input.substr(0, index) +
    replacement +
    input.substr(index + replacement.length)
  );
};
