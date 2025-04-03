#!/usr/bin/env node
import random from "../randomNum.js";

const prime = (number) => {
  if (number === 2 || number % 2 !== 0 || number % 3 !== 0 || number % 5 !== 0 || number % 7 !== 0) {
    return true;
  } else return false;
};

const gamePrime = () => {
  const question = random(1, 100);
  const correctAnswer = prime(question) ? "yes" : "no";
  return [question, correctAnswer];
};

export default gamePrime;
