import { Buffer } from "buffer";
import { BigNumber } from "bignumber.js";
import { verifyHexValue, prepareHexValue } from "./hex";

/**
 * converts any to buffer
 * @param value
 * @param {} options
 * @returns {Buffer}
 */
export function anyToBuffer(value: any, options: {
  size?: number;
  defaults?: Buffer;
} = {}): Buffer {
  const { size, defaults } = options;
  let result: Buffer = null;
  let hex: string;

  switch (typeof value) {
    case "string":
      if (verifyHexValue(value)) {
        hex = prepareHexValue(value, false);
      }
      break;

    case "number":
      hex = (value as number).toString(16);
      break;

    case "object":
      if (Buffer.isBuffer(value)) {
        result = value;
      } else if (BigNumber.isBigNumber(value)) {
        hex = (value as BigNumber).toString(16);
      }
      break;
  }

  if (hex) {
    result = Buffer.from(hex.length % 2 === 0 ? hex : `0${hex}`, "hex");
  } else if (
    result === null &&
    typeof defaults !== "undefined"
  ) {
    result = defaults;
  }

  if (result && size) {
    result = Buffer.concat([
      Buffer.alloc(size - result.length, 0),
      result,
    ]);
  }

  return result;
}