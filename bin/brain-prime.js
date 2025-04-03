#!/usr/bin/env node
import beginGame from '../src/index.js';
import gamePrime from '../games/prime.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const startPrime = () => beginGame(rules, gamePrime);
startPrime();
