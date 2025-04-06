#!/usr/bin/env node
import beginGame from '../src/lib/index.js';
import startGameCalc from '../src/games/calc.js';

const rules = 'What is the result of the expression?';
beginGame(rules, startGameCalc);
