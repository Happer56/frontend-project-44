#!/usr/bin/env node
import beginGame from '../src/index.js';
import random from '../randomNum.js';

const isEven = (num) => num % 2 === 0;

const even = () => {
  const number = random();
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};
const startEven = () => beginGame('Answer "yes" if the number is even, otherwise answer "no".', even);
export default startEven;