import { BigNumber } from "bignumber.js";

export enum NumberSizes {
  UInt256 = 32,
}

export function numberToBuffer(value: any, size: NumberSizes = null): Buffer {
  let result: Buffer = null;
  let hex: string = null;

  switch (typeof value) {
    case "number":
      hex = (value as number).toString(16);
      break;

    case "object":
      if (BigNumber.isBigNumber(value)) {
        hex = (value as BigNumber).toString(16);
      }
      break;
  }

  if (hex) {
    if (size) {
      hex = `${("0").repeat((size * 2) - hex.length)}${hex}`;
    }

    result = Buffer.from(hex, "hex");
  }

  return result;
}