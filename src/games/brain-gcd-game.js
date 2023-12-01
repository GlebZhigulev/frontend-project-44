import runGame from '../index.js';
import { randomToMax } from './randomizer.js';

const brainGcd = () => {
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
    const firstNum = randomToMax(100);
    const secondNum = randomToMax(100);

    const question = `${firstNum} ${secondNum}`;
    const answer = String(findCdg(firstNum, secondNum));

    questionsAndAnswers.push([question, answer]);
  }

  runGame(description, questionsAndAnswers);
};

export default { brainGcd };
