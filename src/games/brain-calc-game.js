import runGame from '../index.js';
import getRandomNumber from './randomizer.js';

const getQuestionAndAnswer = () => {
  const firstNum = getRandomNumber(100);
  const secondNum = getRandomNumber(100);
  const randomNumber = getRandomNumber(3);
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
  return [question, answer];
};

const brainCalc = () => {
  const description = 'What is the result of the expression?';
  runGame(description, getQuestionAndAnswer);
};

export default brainCalc;
