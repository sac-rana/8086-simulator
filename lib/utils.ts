const REGEX = {
  '8-bit-data': /^[0-9A-Fa-f]{1,2}$/,
  '16-bit-data': /^[0-9A-Fa-f]{1,4}$/,
};

const validate8BitHex = (hex: string) => {
  if (!REGEX['8-bit-data'].test(hex)) {
    throw new Error('Invalid 8 bit hexadecimal number');
  }
  return hex.padStart(2, '0').toUpperCase();
};

const validate16BitHex = (hex: string) => {
  if (!REGEX['16-bit-data'].test(hex)) {
    throw new Error('Invalid 16 bit hexadecimal number');
  }
  return hex.padStart(4, '0').toUpperCase();
};

const hexToDecimal = (hex: string) => {
  if (!REGEX['16-bit-data'].test(hex)) {
    throw new Error('Invalid hexadecimal number');
  }
  return parseInt(hex, 16);
};

export { validate16BitHex, validate8BitHex, hexToDecimal, REGEX };
