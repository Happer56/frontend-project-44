#!/usr/bin/env node
import beginGame from '../src/lib/index.js';
import startGamePrime from '../src/games/prime.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
beginGame(rules, startGamePrime);
