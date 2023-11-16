#!/usr/bin/env node

import runGame from '../src/index.js';

const description = 'What number is missing in the progression?';
const questionsAndAnswers = [];

for (let i = 0; i < 3; i += 1) {
  const progFirstElem = Math.floor(Math.random() * 20) + 1;
  const progHiddenElem = Math.floor(Math.random() * 10);

  const progression = [];

  for (let j = 1; j <= 10; j += 1) {
    progression.push(progFirstElem * j);
  }

  const answer = String(progression[progHiddenElem]);
  progression[progHiddenElem] = '..';
  const question = progression.join(' ');

  questionsAndAnswers.push([question, answer]);
}

runGame(description, questionsAndAnswers);
