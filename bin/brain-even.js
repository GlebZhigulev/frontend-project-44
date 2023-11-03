#!/usr/bin/env node

import runGame from '../src/index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const questionsAndAnswers = [];
const max = 100;
const min = 1;
for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const isEven = randomNumber % 2 === 0 ? 'yes' : 'no';
    questionsAndAnswers.push([String(randomNumber), isEven]);
}

runGame(description, questionsAndAnswers);
