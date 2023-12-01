import getRandomNumber from './randomizer.js';
import runGame from '../index.js';

const getQuestionAndAnswer = () => {
  const progFirstElem = getRandomNumber(20);
  const progHiddenElem = getRandomNumber(9, 0);

  const progression = [];

  for (let j = 1; j <= 10; j += 1) {
    progression.push(progFirstElem * j);
  }

  const answer = String(progression[progHiddenElem]);
  progression[progHiddenElem] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

const brainProgression = () => {
  const description = 'What number is missing in the progression?';
  runGame(description, getQuestionAndAnswer);
};

export default brainProgression;
