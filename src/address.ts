import { prepareHexValue, verifyHexValue } from "./hex";
import { sha3 } from "./encryption";

/**
 * verifies address
 * @param {string} value
 * @param {boolean} caseSensitivity
 * @returns {boolean}
 */
export function verifyAddress(value: string, caseSensitivity: boolean = false): boolean {
  let result = false;

  if (
    value &&
    value.startsWith("0x") &&
    verifyHexValue(value) &&
    value.length === 42
  ) {
    if (caseSensitivity) {
      result = prepareAddress(value, true) === value
    } else {
      result = true;
    }
  }

  return result;
}

/**
 * prepares address
 * @param {string} value
 * @param {boolean} caseSensitivity
 * @returns {string}
 */
export function prepareAddress(value: string, caseSensitivity: boolean = false): string {
  let result: string = null;

  value = prepareHexValue(value, false);

  if (
    verifyHexValue(value, false) &&
    value.length === 40
  ) {
    if (caseSensitivity) {
      const hash = sha3(Buffer.from(value, "hex")).toString("hex");

      value = value
        .split("")
        .map((char, index) => parseInt(hash[index], 16) < 8 ? char.toLowerCase() : char.toUpperCase())
        .join("");
    }

    result = `0x${value}`;
  }

  return result;
}