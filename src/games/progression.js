/* eslint-disable no-param-reassign */
import random from '../lib/randomNum.js';

const createProgression = (startNum, stepNum) => {
  const masProg = [];

  for (let i = 0; i < 10; i += 1) {
    masProg.push(startNum);
    startNum += stepNum;
  }
  return masProg;
};

const startGameProgres = () => {
  const number1 = random(0, 100);
  const number2 = random(1, 10);

  const array = createProgression(number1, number2);

  const replacement = `${'..'}`;
  const element = random(0, 9);
  const correctAnswer = String(array[element]);
  array.splice(element, 1, replacement);
  const question = array.join(' ');

  return [question, correctAnswer];
};
export default startGameProgres;
