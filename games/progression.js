#!/usr/bin/env node
import random from "../randomNum.js";

const progres = (start, step) => {
    const masProg = [];
    for (let i = 0; i < 10; i += 1) {
      masProg.push(start);
      start += step;
   
    }
    return  masProg;
  };


const gameProgres = () => {
  const num1 = random(0, 100);
  const num2 = random(1, 10);
  const question = String(progres(num1, num2));
  const correctAnswer = `${num1}`;
  return [question, correctAnswer];
};
export default gameProgres


