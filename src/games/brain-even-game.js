import getRandomNumber from './randomizer.js';
import runGame from '../index.js';

const getQuestionAndAnswer = () => {
  const max = 100;
  const min = 1;
  const randomNumber = getRandomNumber(max, min);
  const isEven = randomNumber % 2 === 0 ? 'yes' : 'no';
  return [String(randomNumber), isEven];
};

const brainEven = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(description, getQuestionAndAnswer);
};

export default brainEven;
