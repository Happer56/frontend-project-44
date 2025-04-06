#!/usr/bin/env node
import beginGame from '../src/lib/index.js';
import startGameGcd from '../src/games/gcd.js';

const rules = 'Find the greatest common divisor of given numbers.';
beginGame(rules, startGameGcd);
