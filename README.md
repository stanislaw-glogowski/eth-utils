# ETH Utils

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

### Buffer

* `anyToBuffer(value: any, options?: { size?: number; defaults?: Buffer;}): Buffer`


### Encryption

* `sha3(...data: Buffer[]): Buffer`;

### Hex

* `anyToHexValue(value: any, options?: { add0x?: boolean; defaults?: string;}): string`
* `prepareHexValue(value: any, add0x?: boolean): string`
* `verifyHexValue(value: any, prepare?: boolean): boolean`
