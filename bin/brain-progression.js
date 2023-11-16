#!/usr/bin/env node

import runGame from '../src/index.js';

const description = 'What number is missing in the progression?';
const questionsAndAnswers = [];

for (let i = 0; i < 3; i += 1) {
  const progGap = Math.floor(Math.random() * 5) + 1;
  const progFirstElem = Math.floor(Math.random() * 20) + 1;
  const progHiddenElem = Math.floor(Math.random() * 10);

  const progression = [];

  for (let i = 1; i <= 10; i++) {
    progression.push(progFirstElem * i);
  }

  const answer = String(progression[progHiddenElem]);
  progression[progHiddenElem] = '..';
  const question = progression.join(' ');

  questionsAndAnswers.push([question, answer]);
}

runGame(description, questionsAndAnswers);
