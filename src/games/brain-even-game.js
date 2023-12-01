import { randomNumFromMinToMax } from './randomizer.js';
import runGame from '../index.js';
const brainEven = () => {
  const description = 
  'Answer "yes" if the number is even, otherwise answer "no".';
  const questionsAndAnswers = [];
  const max = 100;
  const min = 1;
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = randomNumFromMinToMax(min, max);
    const isEven = randomNumber % 2 === 0 ? "yes" : "no";
    questionsAndAnswers.push([String(randomNumber), isEven]);
  }
  runGame(description, questionsAndAnswers);
};
export default { brainEven };
