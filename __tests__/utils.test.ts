import '@testing-library/jest-dom';
import {
  validate16BitHex,
  REGEX,
  hexToDecimal,
  validate8BitHex,
} from '../lib/utils';

test('validate16BitHex function', () => {
  expect(validate16BitHex('2f3')).toBe('02F3');
  expect(validate16BitHex('ad')).toBe('00AD');
});

test('validate8BitHex function', () => {
  expect(validate8BitHex('f3')).toBe('F3');
  expect(validate8BitHex('d')).toBe('0D');
});

test('regular expressions for hexadecimal numbers', () => {
  expect(REGEX['16-bit-data'].test('2df')).toBe(true);
  expect(REGEX['8-bit-data'].test('6f')).toBe(true);
});

test('hexToDecimal function', () => {
  expect(hexToDecimal('34d')).toBe(parseInt('34d', 16));
});
