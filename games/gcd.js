import random from '../randomNum.js';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const gameGcd = () => {
  const number1 = random(1, 100);
  const number2 = random(1, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(gcd(number1, number2));
  return [question, correctAnswer];
};
export default gameGcd;
