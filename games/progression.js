import random from "../randomNum.js";
import progres from "../addMassiv.js";

const gameProgres = () => {
  const num1 = random(0, 100);
  const num2 = random(1, 10);

  const massiv = progres(num1, num2);

  const qwe = `${".."}`;
  const elem = random(0, 9);
  const correctAnswer = String(massiv[elem]);
  massiv.splice(elem, 1, qwe);
  const question = massiv;

  return [question, correctAnswer];
};
export default gameProgres;
