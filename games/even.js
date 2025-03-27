#!/usr/bin/env node
import random from '../randomNum.js';

const even = (num) => num % 2 === 0;

const gameEven = () => {  
  const number = random();
  const correctAnswer = even(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

export default gameEven;