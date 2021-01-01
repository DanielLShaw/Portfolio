export const runInstructions = (instructions) => {
  const instructionRegExp = new RegExp("(acc|jmp|nop)\\s([+-]\\d+)");
  let accumulator = 0;
  const instructionsExecuted = [];
  let currentInstruction = 0;

  let aboutToGoInfinite = false;

  while (!aboutToGoInfinite) {
    const [, operation, value] = instructions?.[currentInstruction]?.match(
      instructionRegExp
    );

    switch (operation) {
      case "acc":
        accumulator += parseInt(value);
        currentInstruction++;
        break;
      case "jmp":
        currentInstruction += parseInt(value);
        break;
      case "nop":
        currentInstruction++;
        break;
      default:
        break;
    }

    aboutToGoInfinite = instructionsExecuted.includes(currentInstruction);
    instructionsExecuted.push(currentInstruction);
  }

  return accumulator;
};

export const part1 = (instructionsRaw) => {
  const instructions = instructionsRaw.split("\n");
  return runInstructions(instructions);
};

// tweaked version of part1 which handles infinity and end of input.
export const runInstructionsPart2 = (instructions) => {
  const instructionRegExp = new RegExp("(acc|jmp|nop)\\s([+-]\\d+)");
  let accumulator = 0;
  const instructionsExecuted = [];
  let currentInstruction = 0;

  let aboutToGoInfinite = false;
  let endOfInstructions = false;
  let finished = false;
  let timedOut = false;

  // protection just incase it does go infinite
  setTimeout(() => {
    timedOut = true;
  }, 3000);

  while (!timedOut && !finished) {
    const [, operation, value] = instructions?.[currentInstruction]?.match(
      instructionRegExp
    );

    instructionsExecuted.push(currentInstruction);

    switch (operation) {
      case "acc":
        accumulator += parseInt(value);
        currentInstruction++;
        break;
      case "jmp":
        currentInstruction += parseInt(value);
        break;
      case "nop":
        currentInstruction++;
        break;
      default:
        break;
    }

    aboutToGoInfinite = instructionsExecuted.includes(currentInstruction);
    endOfInstructions = currentInstruction === instructions.length;
    finished = aboutToGoInfinite || endOfInstructions;
  }

  return { accumulator, infinite: aboutToGoInfinite, timedOut };
};

export const part2 = (instructionsRaw) => {
  const instructions = instructionsRaw.split("\n");
  let solution;

  for (let i = 0; i < instructions.length; i++) {
    // make copy of instructions
    const currentInstructions = [...instructions];
    if (currentInstructions[i].indexOf("jmp") > -1) {
      currentInstructions[i] = currentInstructions[i].replace("jmp", "nop");
    } else if (currentInstructions[i].indexOf("nop") > -1) {
      currentInstructions[i] = currentInstructions[i].replace("nop", "jmp");
    } else {
      // nothing changed from original instructions
      continue;
    }

    const { accumulator, infinite, timedOut } = runInstructionsPart2(
      currentInstructions
    );
    if (!infinite && !timedOut) {
      solution = accumulator;
      break;
    }
  }

  return solution;
};
