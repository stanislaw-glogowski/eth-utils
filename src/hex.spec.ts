import { prepareHexValue, verifyHexValue } from "./hex";

describe("hex", () => {

  describe("prepareHexValue()", () => {

    it("should add 0x prefix", () => {
      const hex = prepareHexValue("abc", true);

      expect(hex).toBe("0xabc");
    })
  });

  describe("verifyHexValue()", () => {

    it("should verify hex", () => {
      expect(verifyHexValue("abc")).toBe(true);
      expect(verifyHexValue("abcx")).toBe(false);
    })
  });
});