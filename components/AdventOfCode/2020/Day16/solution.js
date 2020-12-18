export const parseTicketFieldRule = (input) => {
  const ruleRegex = /([\w\s]+):\s(\d+)-(\d+)\sor\s(\d+)-(\d+)/;
  const matches = input.trim().match(ruleRegex);

  if (matches && matches.length > 0) {
    const [, field, minA, maxA, minB, maxB] = matches;
    return [
      field,
      parseInt(minA),
      parseInt(maxA),
      parseInt(minB),
      parseInt(maxB),
    ];
  }

  return false;
};

export const inRange = (min, max, value) => {
  return value >= min && value <= max;
};

export const checkRule = (rule, input) => {
  const [, minA, maxA, minB, maxB] = rule;
  // rules are valid if the input is between either range.
  const valid = inRange(minA, maxA, input) || inRange(minB, maxB, input);

  return valid;
};

export const part1 = (rawInput) => {
  const [rulesRaw, , otherTicketsRaw] = rawInput.trim().split("\r\n\r\n");

  const rulesList = rulesRaw
    .trim()
    .split("\n")
    .map((rule) => parseTicketFieldRule(rule));

  const otherTickets = otherTicketsRaw.split("\n");

  otherTickets.shift(); // remove other tickets:

  const invalidTicketFields = otherTickets.map((ticket) => {
    const fields = ticket.split(",").map((str) => parseInt(str));
    const invalidFields = fields.filter((field) => {
      const matchesRule = rulesList.find((rule) => {
        return checkRule(rule, field);
      });
      return matchesRule ? false : true;
    });
    return invalidFields.length === 0 ? false : invalidFields;
  });

  const justInvalidFields = invalidTicketFields.filter((fields) => fields);
  const justInvalidFieldsSum = justInvalidFields.map((fields) => {
    return fields.reduce((acc, field) => acc + field);
  });
  return justInvalidFieldsSum.reduce((acc, sum) => acc + sum);
};

export const part2 = (rawInput) => {
  const [rulesRaw, myTicketRaw, otherTicketsRaw] = rawInput
    .trim()
    .split("\r\n\r\n");

  const rulesList = rulesRaw
    .trim()
    .split("\n")
    .map((rule) => parseTicketFieldRule(rule));

  const otherTickets = otherTicketsRaw.split("\n");

  otherTickets.shift(); // remove other tickets:

  const otherTicketsInt = otherTickets.map((ticket) => {
    const fields = ticket.split(",").map((str) => parseInt(str));
    return fields;
  });

  const myTicket = myTicketRaw
    .split("\n")[1]
    .split(",")
    .map((str) => parseInt(str));

  // altered part 1, this time removing the invalid tickets.
  const validTickets = otherTicketsInt.filter((ticket) => {
    const invalidFields = ticket.filter((field) => {
      const matchesRule = rulesList.find((rule) => {
        return checkRule(rule, field);
      });
      return matchesRule ? false : true;
    });
    return invalidFields.length === 0 ? true : false;
  });

  // check every ticket (field index) for if it matches the rule. If it does add it to a list of possible solutions
  const rulesMap = new Map();
  rulesList.forEach((rule) => {
    const validIndexes = [];
    for (let i = 0; i < validTickets[0].length; i++) {
      const ruleMatch = validTickets.every((ticket) => {
        return checkRule(rule, ticket[i]);
      });
      if (ruleMatch) {
        validIndexes.push(i);
      }
    }
    rulesMap.set(rule[0], validIndexes);
  });

  // rules have multiple possible answers, solve it like a sudoku!
  let sieving = true;
  while (sieving) {
    let stillSieving = false;
    rulesMap.forEach((possibleIndexes, fieldName) => {
      if (typeof possibleIndexes === "object" && possibleIndexes.length === 1) {
        stillSieving = true;
        const foundIndex = possibleIndexes[0];
        // once an solution for a field is found, set its value to an int, rather than an array.
        rulesMap.set(fieldName, foundIndex);

        //remove that possible solution from all other rules
        rulesMap.forEach((value, key) => {
          if (typeof value === "object") {
            const indexToRemove = value.indexOf(foundIndex);
            if (indexToRemove > -1) {
              value.splice(indexToRemove, 1);
              rulesMap.set(key, value);
            }
          }
        });
      }
    });
    // keep sieving until all fields are ints
    sieving = stillSieving;
  }

  // apply the freshly solved sudoku to my ticket
  const myTicketMap = new Map();
  rulesMap.forEach((value, key) => {
    myTicketMap.set(key, myTicket[value]);
  });

  // get the answer for part 2 ( multiply values of departure fields)
  let answer = 1;
  myTicketMap.forEach((value, key) => {
    if (key.indexOf("departure") >= 0) {
      answer *= value;
    }
  });

  return answer;
};
