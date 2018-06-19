import { prepareAddress } from "./address";

describe("address", () => {

  describe("prepareAddress()", () => {

    it("should prepare case sensitive address", () => {
      const address = prepareAddress("0x2a96e87e968c85a13987bc4b868330d2754db8bb", true);
      expect(address).toBe("0x2A96E87E968C85a13987BC4b868330D2754dB8BB");
    });
  });
});