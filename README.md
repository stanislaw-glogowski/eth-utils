# ETH Utils

[![NPM version][npm-image]][npm-url]
 
Ethereum Utils


**WARNING!** This is experimental library, don't use it on production.

## Installation

```bash
  $ npm i eth-utils
```

## Api

### Address

* `verifyAddress(value: string, caseSensitivity?: boolean): boolean`
* `prepareAddress(value: string, caseSensitivity?: boolean): string`
* `publicKeyToAddress(publicKey: Buffer, caseSensitivity: boolean = false): string`

### Buffer

* `anyToBuffer(value: any, options?: { size?: number; defaults?: Buffer;}): Buffer`


### Encryption

* `sha3(...data: Buffer[]): Buffer`;

### Hex

* `anyToHexValue(value: any, options?: { add0x?: boolean; defaults?: string;}): string`
* `prepareHexValue(value: any, add0x?: boolean): string`
* `verifyHexValue(value: any, prepare?: boolean): boolean`


### Key Pair

* `verifyPrivateKey(privateKey: Buffer): boolean`
* `verifyPublicKey(publicKey: Buffer): boolean`
* `preparePublicKey(publicKey: Buffer): Buffer`
* `randomPrivateKey(): Buffer`
* `privateToPublicKey(privateKey: Buffer): Buffer`



[npm-image]: https://badge.fury.io/js/eth-utils.svg
[npm-url]: https://npmjs.org/package/eth-utils

