export const getRules = (rawRules) => {
  const rules = rawRules.trim().split("\n");
  const rulesRegex = /^(\d+):\s(?:"(\w)"|([\d\s|]+))$/;

  const rulesMap = new Map();

  rules.forEach((rule) => {
    const matches = rule.trim().match(rulesRegex);

    if (matches && matches.length > 0) {
      const [, index, letterMatch, ruleMatch] = matches;

      if (letterMatch) {
        rulesMap.set(parseInt(index), letterMatch);
      }

      if (ruleMatch) {
        const rulesList = ruleMatch.split("|").map((splitRule) => {
          const foundMatches = [...splitRule.matchAll(/\d+/g)];
          return foundMatches.map((match) => parseInt(match));
        });
        rulesMap.set(parseInt(index), rulesList);
      }
    }
  });
  return rulesMap;
};

export const rulesToRegex = (rulesMap, index = 0) => {
  const currentRule = rulesMap.get(index);

  if (typeof currentRule === "string") {
    return rulesMap.get(index);
  } else if (typeof currentRule === "object") {
    return currentRule
      .map((subrule) =>
        subrule
          .map((ruleIndex) => `(${rulesToRegex(rulesMap, ruleIndex)})`)
          .join("")
      )
      .join("|");
  } else {
    console.error(`Error Parsing Rules into Regex at: ${index}`);
  }
};

export const part1 = (rawInput) => {
  const [rawRules, rawMessages] = rawInput.split("\r\n\r\n");
  const rulesMap = getRules(rawRules);
  const regexInner = rulesToRegex(rulesMap);
  const regex = new RegExp(`^${regexInner}$`);

  const messages = rawMessages.trim().split("\n");

  const validMessages = messages.filter((message) =>
    regex.test(message.trim())
  );

  return validMessages;
};
