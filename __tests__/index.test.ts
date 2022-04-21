import '@testing-library/jest-dom';
import { Registers, Regex } from '../lib';

test('testing regular expressions for 8 and 16 bit data', () => {
  expect('7').toMatch(Regex['8-bit-data']);
  expect('34fa').toMatch(Regex['16-bit-data']);
  expect('8hs1').not.toMatch(Regex['16-bit-data']);
});

test('manipulating registers', () => {
  Registers.setRegister('AH', '4');
  expect(Registers._registers['AH']).toBe('04');
  Registers.setRegisterPair('CX', 'f32');
  expect(Registers._registers['CH']).toBe('0F');
  expect(Registers._registers['CL']).toBe('32');
  Registers.reset();
  expect(Registers._registers.CH).toBe('00');
});
