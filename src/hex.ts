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
 * @returns {boolean}
 */
export function verifyHexValue(value: any): boolean {
  let result = false;

  value = prepareHexValue(value, false);

  if (value !== null) {
    const charCodes = (value as string).split("").map((char) => char.charCodeAt(0));
    result = charCodes.every((value) => (
      (value >= 97 && value <= 102) || // [a-z]
      (value >= 48 && value <= 57)     // [0-9]
    ));
  }

  return result;
}