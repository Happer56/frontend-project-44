#!/usr/bin/env node
import beginGame from '../src/lib/index.js';
import startGameEven from '../src/games/even.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
beginGame(rules, startGameEven);
