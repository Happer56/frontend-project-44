#!/usr/bin/env node
import random from "../randomNum.js";

const gcd = (a, b) => ((a % b) ? gcd(b, a % b) : Math.abs(b));

const gameGcd = () => {
  const num1 = random(0, 100);
  const num2 = random(0, 100);
  const question = `${num1}  ${num2}`;
  const correctAnswer = String(gcd(num1, num2));
  return [question, correctAnswer];
};
export default gameGcd;
