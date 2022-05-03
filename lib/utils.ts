type Register = 'AH' | 'AL' | 'BH' | 'BL' | 'CH' | 'CL' | 'DH' | 'DL';
type RegisterPair = 'AX' | 'BX' | 'CX' | 'DX';

const REGEX = {
  '8-bit-data': /^[0-9A-Fa-f]{1,2}$/,
  '16-bit-data': /^[0-9A-Fa-f]{1,4}$/,
};

const validate8BitHex = (hex: string) => {
  if (!REGEX['8-bit-data'].test(hex)) {
    throw new Error('Invalid 8 bit hexadecimal number');
  }
};

const validate16BitHex = (hex: string) => {
  if (!REGEX['16-bit-data'].test(hex)) {
    throw new Error('Invalid 16 bit hexadecimal number');
  }
};

const hexToDecimal = (hex: string) => {
  return parseInt(hex, 16);
};

const decimalToHex8Bit = (dec: number) => {
  return format8BitHex(dec.toString(16));
};

const decimalToHex16Bit = (dec: number) => {
  return format16BitHex(dec.toString(16));
};

const beautifyInput = (code: string) => {
  return code.replace(/^\s*$(?:\r\n?|\n)/gm, '');
};

const countLines = (text: string) => {
  return text.split(/\r\n|\n/).length;
};

const format8BitHex = (hex: string) => {
  try {
    validate8BitHex(hex);
    return hex.padStart(2, '0').toUpperCase();
  } catch (err) {
    return '00';
  }
};
const format16BitHex = (hex: string) => {
  try {
    validate16BitHex(hex);
    return hex.padStart(4, '0').toUpperCase();
  } catch (err) {
    return '0000';
  }
};

export {
  validate16BitHex,
  validate8BitHex,
  hexToDecimal,
  REGEX,
  beautifyInput,
  countLines,
  decimalToHex8Bit,
  decimalToHex16Bit,
  format16BitHex,
  format8BitHex,
};

export type { Register, RegisterPair };
