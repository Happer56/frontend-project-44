#!/usr/bin/env node
import beginGame from '../src/index.js';
import gameCalc from '../games/calc.js';

const rules = 'What is the result of the expression?';
const startCalc = () => beginGame(rules, gameCalc);
startCalc();
