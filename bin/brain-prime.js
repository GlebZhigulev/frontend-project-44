#!/usr/bin/env node

import runGame from '../src/index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const questionsAndAnswers = [];

const isPrime = (number) => {
    if (number <= 1) {
        return false; 
    }
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; 
        }
    }
    return true; 
}

for (let i = 0; i < 3; i += 1) {

    const number = Math.floor(Math.random() * 100) + 1;
    const question = String(number);
    const answer = isPrime(number) ? 'yes' : 'no';
    questionsAndAnswers.push([question, answer]);
}
runGame(description, questionsAndAnswers);
