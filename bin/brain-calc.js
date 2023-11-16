#!/usr/bin/env node

import runGame from '../src/index.js';

const description = 'What is the result of the expression?';
const questionsAndAnswers = [];

for (let i = 0; i < 3; i += 1) {
  const firstNum = Math.floor(Math.random() * 100) + 1;
  const secondNum = Math.floor(Math.random() * 100) + 1;
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  let question; let
    answer;

  switch (randomNumber) {
    case 1:
      question = `${firstNum} + ${secondNum}`;
      answer = String(firstNum + secondNum);
      break;
    case 2:
      question = `${firstNum} - ${secondNum}`;
      answer = String(firstNum - secondNum);
      break;
    case 3:
      question = `${firstNum} * ${secondNum}`;
      answer = String(firstNum * secondNum);
      break;
    default:
      break;
  }

  questionsAndAnswers.push([question, answer]);
}

runGame(description, questionsAndAnswers);
