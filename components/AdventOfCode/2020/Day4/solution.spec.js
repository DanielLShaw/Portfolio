import {
  part1,
  passportChecker,
  strictPassportChecker,
  checkHeight,
  checkYear,
  checkEye,
  checkHair,
  checkPassportId,
} from "./solution";

const completePassport =
  "ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\nbyr:1937 iyr:2017 cid:147 hgt:183cm\n"; //valid

const missingHgt =
  "iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884\nhcl:#cfa07d byr:1929\n";

const missingCid =
  "hcl:#ae17e1 iyr:2013\neyr:2024\necl:brn pid:760753108 byr:1931\nhgt:179cm\n"; // valid

const missingCidAndByr =
  "hcl:#cfa07d eyr:2025 pid:166559648\niyr:2011 ecl:brn hgt:59in\n";

describe("Day 4", () => {
  describe("Part 1 - passwordChecker", () => {
    it("if all 8 fields are present, password is valid", () => {
      expect(passportChecker(completePassport)).toBe(true);
    });

    it("if 1 fields is missing and its cid its valid", () => {
      expect(passportChecker(missingCid)).toBe(true);
    });

    it("if 2 fields are missing its invalid", () => {
      expect(passportChecker(missingCidAndByr)).toBe(false);
    });

    it("if 1 fields is missing and its not cid its invalid", () => {
      expect(passportChecker(missingHgt)).toBe(false);
    });
  });

  describe("Part 1", () => {
    it("it should return 2", () => {
      expect(
        part1([completePassport, missingCid, missingCidAndByr, missingHgt])
      ).toBe(2);
    });
  });

  describe("Part 2 - strictpassportChecker", () => {
    describe("checkHeight", () => {
      const heights = [
        ["149cm", false],
        ["150cm", true],
        ["193cm", true],
        ["194cm", false],
        ["58in", false],
        ["59in", true],
        ["76in", true],
        ["77in", false],
        ["77", false],
        ["77.7in", false],
        [undefined, false],
      ];

      test.each(heights)("heights %s", (height, expected) => {
        expect(checkHeight(height)).toBe(expected);
      });
    });
    describe("checkYear", () => {
      const years = [
        ["2000", 1000, 1500, false],
        ["2000", 1999, 2001, true],
        ["2000", 2000, 2001, true],
        ["123", 120, 130, false],
        [undefined, undefined, undefined, false],
      ];

      test.each(years)("year %s min %s max %s", (year, min, max, expected) => {
        expect(checkYear(year, min, max)).toBe(expected);
      });
    });

    describe("checkHair", () => {
      const hairs = [
        ["#123456", true],
        ["#11111", false],
        ["111111", false],
        ["#abcdef", true],
        ["#abcdeg", false],
        [undefined, false],
      ];

      test.each(hairs)("hair %s", (hair, expected) => {
        expect(checkHair(hair)).toBe(expected);
      });
    });

    describe("checkEye", () => {
      const eyes = [
        ["amb", true],
        ["oth", true],
        ["not", false],
        [undefined, false],
      ];

      test.each(eyes)("eye %s", (eye, expected) => {
        expect(checkEye(eye)).toBe(expected);
      });
    });

    describe("checkPassportId", () => {
      const pids = [
        ["123456789", true],
        ["000000000", true],
        ["88888888", false],
        ["abcdefghi", false],
        ["1010101010", false],
        [undefined, false],
      ];

      test.each(pids)("pid %s", (pid, expected) => {
        expect(checkPassportId(pid)).toBe(expected);
      });
    });

    describe("invalid", () => {
      const invalidPassports = [
        "eyr:1972 cid:100\nhcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926",

        "iyr:2019\nhcl:#602927 eyr:1967 hgt:170cm\necl:grn pid:012533040 byr:1946",

        "hcl:dab227 iyr:2012\necl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277",

        "hgt:59cm ecl:zzz\neyr:2038 hcl:74454a iyr:2023\npid:3556412378 byr:2007",
      ];

      test.each(invalidPassports)("invalid passport %s", (passport) => {
        expect(strictPassportChecker(passport)).toBe(false);
      });
    });
    describe("valid", () => {
      const validPassports = [
        "pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980\nhcl:#623a2f",

        "eyr:2029 ecl:blu cid:129 byr:1989\niyr:2014 pid:896056539 hcl:#a97842 hgt:165cm",

        "hcl:#888785\nhgt:164cm byr:2001 iyr:2015 cid:88\npid:545766238 ecl:hzl\neyr:2022",

        "iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719",
      ];

      test.each(validPassports)("valid passport %s", (passport) => {
        expect(strictPassportChecker(passport)).toBe(true);
      });
    });
  });
});
