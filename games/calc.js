import random from "../randomNum.js";

const calc = (num1, oper, num2) => {
  switch (oper) {
    case '*':
      return num1 * num2;
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
  }
};

const gameCalc = () => {
  const numb1 = random(1, 100);
  const numb2 = random(1, 100);
  const operator = ['+', '-', '*'];
  const oper = operator[random(0, 2)];
  const question = `${numb1} ${oper} ${numb2}`;
  const correctAnswer = String(calc(numb1, oper, numb2));
  return [question, correctAnswer];
};

export default gameCalc;
