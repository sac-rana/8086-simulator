import internal from 'stream';
import create from 'zustand';
import { format8BitHex, hexToDecimal, Register } from './utils';

type RegistersState = {
  registers: {
    AH: string;
    BH: string;
    AL: string;
    BL: string;
    CH: string;
    CL: string;
    DH: string;
    DL: string;
    AX: string;
    BX: string;
    CX: string;
    DX: string;
  };
  setData: (register: Register, data: string) => void;
  reset: () => void;
};

type Flags = 'Carry' | 'Auxiliary' | 'Parity' | 'Zero' | 'Sign';

type FlagsState = {
  flags: {
    [index in Flags]: boolean;
  };
  setFlag: (flag: Flags) => void;
  resetFlag: (flag: Flags) => void;
  flipFlag: (flag: Flags) => void;
  reset: () => void;
};

type MemoryState = {
  memory: Array<string>;
  setMemory: (address: string, data: string) => void;
};

const useRegisters = create<RegistersState>(set => ({
  registers: {
    AH: '00',
    AL: '00',
    BH: '00',
    BL: '00',
    CH: '00',
    CL: '00',
    DH: '00',
    DL: '00',
    get AX() {
      return this.AH + ' ' + this.AL;
    },
    get BX() {
      return this.BH + ' ' + this.BL;
    },
    get CX() {
      return this.CH + ' ' + this.CL;
    },
    get DX() {
      return this.DH + ' ' + this.DL;
    },
  },
  setData(register, data) {
    set(state => ({
      registers: { ...state.registers, [register]: format8BitHex(data) },
    }));
  },
  reset() {
    set(_ => ({
      registers: {
        AH: '00',
        AL: '00',
        BH: '00',
        BL: '00',
        CH: '00',
        CL: '00',
        DH: '00',
        DL: '00',
        AX: '',
        BX: '',
        CX: '',
        DX: '',
      },
    }));
  },
}));

const useFlags = create<FlagsState>(set => ({
  flags: {
    Carry: false,
    Auxiliary: false,
    Parity: false,
    Zero: false,
    Sign: false,
  },
  setFlag(flag) {
    set(state => ({
      flags: { ...state.flags, [flag]: true },
    }));
  },
  resetFlag(flag) {
    set(state => ({
      flags: { ...state.flags, [flag]: false },
    }));
  },
  flipFlag(flag) {
    set(state => ({
      flags: { ...state.flags, [flag]: !state.flags[flag] },
    }));
  },
  reset() {
    set(_ => ({
      flags: {
        Carry: false,
        Auxiliary: false,
        Parity: false,
        Zero: false,
        Sign: false,
      },
    }));
  },
}));

const MAX_MEMORY_ADDRESS = 'FFFF';

const useMemory = create<MemoryState>(set => ({
  memory: new Array(hexToDecimal(MAX_MEMORY_ADDRESS) + 1).fill('00'),
  setMemory(address: string, data: string) {
    set(state => {
      state.memory[hexToDecimal(address)] = format8BitHex(data);
      return {
        memory: [...state.memory],
      };
    });
  },
}));

export { useRegisters, useFlags, useMemory };
