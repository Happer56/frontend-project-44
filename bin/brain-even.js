#!/usr/bin/env node
import name from '../src/cli.js';
import readlineSync from 'readline-sync';

console.log('Answer "yes" if number even otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
const min = 0;
const max = 100;
const randomNumber = Math.floor(min + Math.random() * (max + 1 - min));
const res = (a) => a % 2 === 0;
const correctAnswer = res(randomNumber) ? 'yes' : 'no';

console.log('Question: ' + randomNumber);

const userAnswer = readlineSync.question('Your answer: ');
if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
break;
} 
else if (randomNumber % 2 === 0 & userAnswer === 'yes') {
  console.log('Correct!')
}
  else if (randomNumber % 2 !== 0 & userAnswer === 'no') {
    console.log('Correct!')
} 
    
};console.log('Congratulations, ' + name + "!")

  
 


