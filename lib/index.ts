import {
  format8BitHex,
  hexToDecimal,
  validate16BitHex,
  validate8BitHex,
} from './utils';
import type { Register } from './utils';

const Flags = {
  Carry: false, // It indicates overflow condition for arithmetic operation
  Auxillary: false, // When an arithmetic operation results in a carry/borrow from lower nibble(D0 - D3) to higher nibble(D4 - D7)
  Parity: false, // When the lower order 8 bits of result contain even number of 1's then this flag is set
  Zero: false, // When an operation result in zero
  Sign: false, // Stores sign of the result
  //TODO: Add more flags
};
Object.seal(Flags);

const Registers = {
  AH: '00',
  AL: '00',
  BH: '00',
  BL: '00',
  CH: '00',
  CL: '00',
  DH: '00',
  DL: '00',
  setData(register: Register, data: string) {
    validate8BitHex(data);
    this[register] = format8BitHex(data);
  },
  reset() {
    this.AH = '00';
    this.AL = '00';
    this.BH = '00';
    this.BL = '00';
    this.CH = '00';
    this.CL = '00';
    this.DH = '00';
    this.DL = '00';
  },
};
Object.seal(Registers);

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

export { Flags, Registers };
