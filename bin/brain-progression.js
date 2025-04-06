#!/usr/bin/env node
import beginGame from '../src/lib/index.js';
import startGameProgres from '../src/games/progression.js';

const rules = 'What number is missing in the progression?';
beginGame(rules, startGameProgres);
