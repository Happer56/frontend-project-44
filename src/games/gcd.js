import random from '../lib/randomNum.js';

const gcdRecursive = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcdRecursive(b, a % b);
};

const startGameGcd = () => {
  const number1 = random(1, 100);
  const number2 = random(1, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(gcdRecursive(number1, number2));
  return [question, correctAnswer];
};
export default startGameGcd;
