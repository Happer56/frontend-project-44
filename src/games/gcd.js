import random from '../lib/randomNum.js';

const findGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGCD(b, a % b);
};

const startGameGcd = () => {
  const number1 = random(1, 100);
  const number2 = random(1, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(findGCD(number1, number2));
  return [question, correctAnswer];
};
export default startGameGcd;
