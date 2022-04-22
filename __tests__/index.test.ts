import '@testing-library/jest-dom';
import { Registers } from '../lib';

test('manipulating registers', () => {
  Registers.setRegisterPair('BX', '3d');
  expect(Registers['BX']).toBe('003D');
});
