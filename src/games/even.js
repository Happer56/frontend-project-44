import random from '../lib/randomNum.js';

const isEven = (num) => num % 2 === 0;
const startGameEven = () => {
  const question = random();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default startGameEven;
