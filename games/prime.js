#!/usr/bin/env node
import random from "../randomNum.js";

const prime = (number) => {
  if (number <= 1)  {
    return false;
  } else if (number % i === 0) {
    for (let i = 2; i * i <= n; i++) {
      return false;
        break;
        }
    } else {
     return true; }
};

const gamePrime = () => {
  const question = random(1, 100);
  const correctAnswer = prime(question) ? "yes" : "no";
  return [question, correctAnswer];
};

export default gamePrime;
