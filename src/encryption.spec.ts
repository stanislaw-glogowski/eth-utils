import { sha3 } from "./encryption";

describe("encryption", () => {

  describe("sha3()", () => {

    it("should create proper hash", () => {
      const value = sha3(Buffer.from([ 0, 1, 2 ]));
      expect(value.toString("hex")).toBe("f84a97f1f0a956e738abd85c2e0a5026f8874e3ec09c8f012159dfeeaab2b156");
    });
  });
});