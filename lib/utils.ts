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
  return hex.padStart(2, '0').toUpperCase();
};

const validate16BitHex = (hex: string) => {
  if (!REGEX['16-bit-data'].test(hex)) {
    throw new Error('Invalid 16 bit hexadecimal number');
  }
  return hex.padStart(4, '0').toUpperCase();
};

const hexToDecimal = (hex: string) => {
  return parseInt(hex, 16);
};

const decimalToHex8Bit = (dec: number) => {
  return dec.toString(16).padStart(2, '0').toUpperCase();
};

const decimalToHex16Bit = (dec: number) => {
  return dec.toString(16).padStart(4, '0').toUpperCase();
};

const beautifyInput = (code: string) => {
  return code.replace(/^\s*$(?:\r\n?|\n)/gm, '');
};

const countLines = (text: string) => {
  return text.split(/\r\n|\n/).length;
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
};

export type { Register, RegisterPair };
