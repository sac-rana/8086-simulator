import '@testing-library/jest-dom';
import { Registers } from '../lib';

test('manipulating registers', () => {
  Registers.setData('BH', '3d');
  expect(Registers['BH']).toBe('3D');
});
