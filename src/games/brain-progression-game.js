import { randomToMax } from './randomizer.js';
import runGame from '../index.js';
const brainProgression = () => {
  const description = 'What number is missing in the progression?';
  const questionsAndAnswers = [];

  for (let i = 0; i < 3; i += 1) {
    const progFirstElem = randomToMax(20);
    const progHiddenElem = randomToMax(9);

    const progression = [];

    for (let j = 1; j <= 10; j += 1) {
      progression.push(progFirstElem * j);
    }

    const answer = String(progression[progHiddenElem]);
    progression[progHiddenElem] = "..";
    const question = progression.join(" ");

    questionsAndAnswers.push([question, answer]);
  }

  runGame(description, questionsAndAnswers);
};

export default brainProgression;
