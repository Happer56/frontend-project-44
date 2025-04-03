#!/usr/bin/env node
import beginGame from '../src/index.js'
import gameGcd from '../games/gcd.js';
 
const rules = "Find the greatest common divisor of given numbers.";
const startGcd = () => beginGame(rules, gameGcd);
startGcd();
