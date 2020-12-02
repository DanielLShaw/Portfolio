export const part1 = (policies = []) => {
  const policyRegex = new RegExp(/(\d+)-(\d+)\W(\w):\W(\w+)/);

  const validPasswords = policies?.filter((policy) => {
    const match = policy.match(policyRegex);
    if (match) {
      const [, min, max, char, password] = match;

      const numberOfChars = password.match(new RegExp(char, "g"))?.length ?? 0;

      if (numberOfChars >= min && numberOfChars <= max) {
        return true;
      }
    }
  });

  return validPasswords?.length ?? 0;
};

export const part2 = (policies = []) => {
  const policyRegex = new RegExp(/(\d+)-(\d+)\W(\w):\W(\w+)/);

  const validPasswords = policies?.filter((policy) => {
    const match = policy.match(policyRegex);
    if (match) {
      const [, pos1, pos2, char, password] = match;
      const validFirst = password.charAt(pos1 - 1) === char;
      const validSecond = password.charAt(pos2 - 1) === char;
      return validFirst != validSecond;
    }
  });

  return validPasswords?.length ?? 0;
};
