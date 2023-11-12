#!/usr/bin/env node

import runGame from '../src/index.js';

const description = 'Find the greatest common divisor of given numbers.';
const questionsAndAnswers = [];

const findCdg = (num1, num2) => {
    while (num2) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1;
};

for (let i = 0; i < 3; i += 1) {
    const firstNum = Math.floor(Math.random() * 100) + 1;
    const secondNum = Math.floor(Math.random() * 100) + 1;
    
    const question = `${firstNum} ${secondNum}`;
    const answer = String(findCdg(firstNum, secondNum));

    questionsAndAnswers.push([question, answer]);
};

runGame(description, questionsAndAnswers);