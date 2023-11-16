#!/usr/bin/env node

import runGame from '../src/index.js';

const description = 'Find the greatest common divisor of given numbers.';
const questionsAndAnswers = [];

const findCdg = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (b) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

for (let i = 0; i < 3; i += 1) {
  const firstNum = Math.floor(Math.random() * 100) + 1;
  const secondNum = Math.floor(Math.random() * 100) + 1;

  const question = `${firstNum} ${secondNum}`;
  const answer = String(findCdg(firstNum, secondNum));

  questionsAndAnswers.push([question, answer]);
}

runGame(description, questionsAndAnswers);
