// byr (Birth Year)
// iyr (Issue Year)
// eyr (Expiration Year)
// hgt (Height)
// hcl (Hair Color)
// ecl (Eye Color)
// pid (Passport ID)
// cid (Country ID)

//    // ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\nbyr:1937 iyr:2017 cid:147 hgt:183cm

export const passportChecker = (passport) => {
  const passportFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

  let validPassport = true;

  passportFields.forEach((field) => {
    const fieldRegex = new RegExp(`${field}:([\\w#]+)[\\s\\n]*`);

    const fieldPresent = fieldRegex.test(passport);

    if (!fieldPresent) {
      validPassport = false;
    }
  });

  return validPassport;
};

export const part1 = (passports = []) => {
  const validPassports = passports.filter((passport) => {
    return passportChecker(passport);
  });

  return validPassports.length;
};

export const checkYear = (year, min, max) => {
  const yearInt = parseInt(year);
  return yearInt >= min && yearInt <= max && year?.length === 4;
};

export const checkHeight = (height) => {
  const heightRegex = new RegExp("(\\d+)(cm|in)");
  const [, number, unit] = height?.match(heightRegex) ?? [];
  const numberInt = parseInt(number, 10) || false;

  if (unit === "cm") {
    return numberInt >= 150 && numberInt <= 193;
  } else if (unit === "in") {
    return numberInt >= 59 && numberInt <= 76;
  } else {
    return false;
  }
};

export const checkHair = (hair) => {
  const hairRegex = new RegExp("#[0-9a-f]{6}");
  return hairRegex.test(hair);
};

export const checkEye = (eye) => {
  const eyeRegex = new RegExp("amb|blu|brn|gry|grn|hzl|oth");
  return eyeRegex.test(eye);
};

export const checkPassportId = (pid) => {
  const passportIdRegex = new RegExp("^\\d{9}$");
  return passportIdRegex.test(pid);
};

export const strictPassportChecker = (passport) => {
  const passportFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

  let validPassport = true;

  passportFields.forEach((field) => {
    const fieldRegex = new RegExp(`${field}:([\\w#]+)[\\s\\n]*`);

    const [, value] = passport.match(fieldRegex) ?? [];

    let validValue;
    switch (field) {
      case "byr":
        // byr (Birth Year) - four digits; at least 1920 and at most 2002.
        validValue = checkYear(value, 1920, 2002);
        break;
      case "iyr":
        // iyr (Issue Year) - four digits; at least 2010 and at most 2020.
        validValue = checkYear(value, 2010, 2020);
        break;
      case "eyr":
        // eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
        validValue = checkYear(value, 2020, 2030);
        break;
      case "hgt":
        // hgt (Height) - a number followed by either cm or in:
        // If cm, the number must be at least 150 and at most 193.
        // If in, the number must be at least 59 and at most 76.
        validValue = checkHeight(value);
        break;
      case "hcl":
        // hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
        validValue = checkHair(value);
        break;
      case "ecl":
        // ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
        validValue = checkEye(value);
        break;
      case "pid":
        // pid (Passport ID) - a nine-digit number, including leading zeroes.
        validValue = checkPassportId(value);
        break;
      default:
        validValue = false;
    }

    if (!validValue) {
      validPassport = false;
    }
  });

  return validPassport;
};

export const part2 = (passports) => {
  const validPassports = passports.filter((passport) => {
    return strictPassportChecker(passport);
  });

  return validPassports.length;
};
