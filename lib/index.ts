import {
  format8BitHex,
  hexToDecimal,
  validate16BitHex,
  validate8BitHex,
} from './utils';

const MAX_MEMORY_ADDRESS = '10FF';
const Memory = {
  _memory: new Array(hexToDecimal(MAX_MEMORY_ADDRESS) + 1).fill('00'),
  setData(address: string, data: string) {
    validate16BitHex(address);
    const addressInDecimal = hexToDecimal(address);
    if (addressInDecimal > hexToDecimal(MAX_MEMORY_ADDRESS)) {
      throw new Error(
        `Invalid memory address: Address cannot be more than 0x${MAX_MEMORY_ADDRESS}`,
      );
    }
    validate8BitHex(data);
    this._memory[addressInDecimal] = format8BitHex(data);
  },
  getData(address: string) {
    const addressInDecimal = hexToDecimal(address);
    if (addressInDecimal > hexToDecimal(MAX_MEMORY_ADDRESS)) {
      throw new Error(
        'Invalid memory address: Address cannot be more than 0x10FF',
      );
    }
    return this._memory[addressInDecimal];
  },
};
Object.seal(Memory._memory);

export { Memory };
