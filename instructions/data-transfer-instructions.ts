// Data Transfer Instructions

import { Registers } from '../lib';
import type { Register } from '../lib/utils';

// Used to copy the byte or word from the provided source to the provided destination
const MOV = (destination: Register, source: Register) => {
  Registers[destination] = Registers[source];
};

export {};
