#!/usr/bin/env node
import beginGame from '../src/index.js';
import gameProgres from '../games/progression.js';

const rules = 'What number is missing in the progression?';
const startProgres = () => beginGame(rules, gameProgres);
startProgres();
