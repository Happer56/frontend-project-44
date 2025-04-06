import random from '../lib/randomNum.js';

const isItEven = (num) => num % 2 === 0;
const startGameEven = () => {
  const question = random();
  const correctAnswer = isItEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default startGameEven;
