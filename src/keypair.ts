import { randomBytes } from "crypto";
import { privateKeyVerify, publicKeyCreate, publicKeyVerify, publicKeyConvert } from "secp256k1";

/**
 * verifies private key
 * @param {Buffer} privateKey
 * @returns {boolean}
 */
export function verifyPrivateKey(privateKey: Buffer): boolean {
  return privateKeyVerify(privateKey);
}



/**
 * verifies public key
 * @param {Buffer} publicKey
 * @returns {boolean}
 */
export function verifyPublicKey(publicKey: Buffer): boolean {
  return publicKeyVerify(publicKey);
}

/**
 * prepares public key
 * @param {Buffer} publicKey
 * @returns {boolean}
 */
export function preparePublicKey(publicKey: Buffer): Buffer {
  return publicKeyConvert(publicKey, false);
}

/**
 * generates random private key
 * @returns {Buffer}
 */
export function randomPrivateKey(): Buffer {
  let result: Buffer;

  for (; ;) {
    result = randomBytes(32);
    if (verifyPrivateKey(result)) {
      break;
    }
  }

  return result;
}

/**
 * converts private to public key
 * @param {Buffer} privateKey
 * @returns {Buffer}
 */
export function privateToPublicKey(privateKey: Buffer): Buffer {
  return privateKeyVerify(privateKey) ? publicKeyCreate(privateKey, false) : null;
}
