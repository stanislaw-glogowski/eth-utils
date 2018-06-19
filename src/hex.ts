import { Buffer } from "buffer";
import { BigNumber } from "bignumber.js";

/**
 * converts any to hex value
 * @param value
 * @param {} options
 * @returns {string}
 */
export function anyToHexValue(value: any, options: {
  add0x?: boolean;
  defaults?: string;
} = {}): string {
  const { add0x, defaults } = options;
  let result: string = null;

  switch (typeof value) {
    case "string":
      value = prepareHexValue(value, false);
      if (verifyHexValue(result)) {
        result = value;
      }
      break;

    case "number":
      result = (value as number).toString(16);
      break;

    case "object":
      if (Buffer.isBuffer(value)) {
        result = (value as Buffer).toString("hex");
      } else if (BigNumber.isBigNumber(value)) {
        result = (value as BigNumber).toString(16);
      }
      break;
  }

  if (result === null && typeof defaults !== "undefined") {
    result = defaults;
  }

  if (result && add0x) {
    result = `0x${result}`;
  }

  return result;
}

/**
 * prepares hex value
 * @param value
 * @param {boolean} add0x
 * @returns {string}
 */
export function prepareHexValue(value: any, add0x: boolean = false): string {
  let result: string = null;

  if (
    typeof value === "string" &&
    value.length
  ) {
    if (value.startsWith("0x")) {
      value = value.slice(2);
    }

    result = value.toLowerCase();

    if (add0x) {
      result = `0x${result}`;
    }
  }

  return result;
}

/**
 * verifies hex value
 * @param value
 * @param prepare
 * @returns {boolean}
 */
export function verifyHexValue(value: any, prepare = true): boolean {
  let result = false;

  if (prepare) {
    value = prepareHexValue(value, false);
  }

  if (value !== null) {
    const charCodes = (value as string).split("").map((char) => char.charCodeAt(0));
    result = charCodes.every((value) => (
      (value >= 97 && value <= 102) || // [a-z]
      (value >= 48 && value <= 57)     // [0-9]
    ));
  }

  return result;
}
