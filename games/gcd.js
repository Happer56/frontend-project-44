#!/usr/bin/env node
import random from "../randomNum.js";

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const gameGcd = () => {
  const num1 = random(0, 100);
  const num2 = random(0, 100);
  const question = `${num1}  ${num2}`;
  const correctAnswer = String(gcd(num1, num2));
  return [question, correctAnswer];
};
export default gameGcd;
