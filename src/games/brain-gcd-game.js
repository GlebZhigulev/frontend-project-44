import runGame from '../index.js';
import getRandomNumber from './randomizer.js';

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

const getQuestionAndAnswer = () => {
  const firstNum = getRandomNumber(100);
  const secondNum = getRandomNumber(100);

  const question = `${firstNum} ${secondNum}`;
  const answer = String(findCdg(firstNum, secondNum));

  return [question, answer];
};

const brainGcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  runGame(description, getQuestionAndAnswer);
};

export default brainGcd;
