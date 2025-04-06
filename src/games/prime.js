#!/usr/bin/env node
import random from '../lib/randomNum.js';

const isItPrime = (number) => {
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

const startGamePrime = () => {
  const question = random(1, 100);
  const correctAnswer = isItPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default startGamePrime;
