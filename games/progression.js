import random from "../randomNum.js";
import progres from "../addMassiv.js";

const gameProgres = () => {
  const num1 = random(0, 100);
  const num2 = random(1, 10);

  const array = progres(num1, num2);

  const replacement = `${".."}`;
  const element = random(0, 9);
  const correctAnswer = String(array[element]);
  array.splice(element, 1, replacement);
  const question = array;

  return [question, correctAnswer];
};
export default gameProgres;
