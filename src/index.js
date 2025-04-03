#!/usr/bin/env node  
import readlineSync from 'readline-sync';
import nameUser from './cli.js';


const beginGame = (rules, repeat) => {
  console.log(rules);
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = repeat();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${nameUser}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${nameUser}!`);
};

export default beginGame; 