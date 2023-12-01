import runGame from '../index.js';
import { getRandomNumberUpToMax } from './randomizer.js';

const brainCalc = () => {
  const description = 'What is the result of the expression?';
  const questionsAndAnswers = [];

  for (let i = 0; i < 3; i += 1) {
    const firstNum = getRandomNumberUpToMax(100);
    const secondNum = getRandomNumberUpToMax(100);
    const randomNumber = getRandomNumberUpToMax(3);
    let question;
    let answer;

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
};

export default brainCalc;
