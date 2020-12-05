import { rawToList } from "./rawFileUtils";
const testRaw = "abc\ndef\nghi";

describe("rawToList", () => {
  it("should split raw into list based on new lines", () => {
    expect(rawToList(testRaw)).toStrictEqual(["abc", "def", "ghi"]);
  });
});
