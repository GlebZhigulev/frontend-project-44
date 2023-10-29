#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let success = true;
const min = 1;
const max = 100;
for (let i = 0; i < 3; i += 1) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const isEven = randomNumber % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === isEven) {
        console.log('Correct!');
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven}'`);
        console.log(`Let's try again, ${name}!`);
        success = false;
        break; 
    }
}
if (success) {
    console.log(`Congratulations, ${name}!`);
}
