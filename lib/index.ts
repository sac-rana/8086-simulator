const Flags = {
  Carry: false, // It indicates overflow condition for arithmetic operation
  Auxillary: false, // When an arithmetic operation results in a carry/borrow from lower nibble(D0 - D3) to higher nibble(D4 - D7)
  Parity: false, // When the lower order 8 bits of result contain even number of 1's then this flag is set
  Zero: false, // When an operation result in zero
  Sign: false, // Stores sign of the result
  //TODO: Add more flags
};
Object.seal(Flags);

const Regex = {
  '8-bit-data': /^[0-9A-Fa-f]{1,2}$/,
  '16-bit-data': /^[0-9A-Fa-f]{1,4}$/,
};

const Registers = {
  _registers: {
    AH: '00',
    AL: '00',
    BH: '00',
    BL: '00',
    CL: '00',
    CH: '00',
    DH: '00',
    DL: '00',
  },
  setRegister(
    register: 'AH' | 'AL' | 'BH' | 'BL' | 'CH' | 'CL' | 'DH' | 'DL',
    data: string,
  ) {
    if (Regex['8-bit-data'].test(data)) {
      data = data.padStart(2, '0').toUpperCase();
      this._registers[register] = data;
    } else {
      throw new Error('Invalid 8 bit hexadecimal number');
    }
  },
  setRegisterPair(registerPair: 'AX' | 'BX' | 'CX' | 'DX', data: string) {
    if (Regex['16-bit-data'].test(data)) {
      data = data.padStart(4, '0').toUpperCase();
      const upperHalf = data.substring(0, 2);
      const lowerHalf = data.substring(2);
      if (registerPair === 'AX') {
        this._registers['AH'] = upperHalf;
        this._registers['AL'] = lowerHalf;
      } else if (registerPair === 'BX') {
        this._registers['BH'] = upperHalf;
        this._registers['BL'] = lowerHalf;
      } else if (registerPair === 'CX') {
        this._registers['CH'] = upperHalf;
        this._registers['CL'] = lowerHalf;
      } else if (registerPair === 'DX') {
        this._registers['DH'] = upperHalf;
        this._registers['DL'] = lowerHalf;
      }
    } else {
      throw new Error('Invalid 16 bit hexadecimal number');
    }
  },
  reset() {
    this._registers = {
      AH: '00',
      AL: '00',
      BH: '00',
      BL: '00',
      CL: '00',
      CH: '00',
      DH: '00',
      DL: '00',
    };
  },
};

export { Flags, Registers, Regex };
