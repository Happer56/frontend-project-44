#!/usr/bin/env node
import random from '../randomNum.js';

const prime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const gamePrime = () => {
  const question = random(1, 100);
  const correctAnswer = prime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default gamePrime;
