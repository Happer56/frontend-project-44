import random from '../randomNum.js';

const even = (num) =>
  num % 2 === 0;

const gameEven = () => {
  const question = random();
  const correctAnswer = even(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default gameEven;
