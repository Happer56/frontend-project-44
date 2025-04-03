#!/usr/bin/env node
import beginGame from '../src/index.js';
import gameEven from '../games/even.js';


const startEven = () => beginGame(rules, gameEven);
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
startEven();
