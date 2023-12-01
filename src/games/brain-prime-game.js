import { randomToMax } from './randomizer.js';
import runGame from '../index.js';

const brainPrime = () => {
  const description =
'Answer "yes" if given number is prime. Otherwise answer "no".';
  const questionsAndAnswers = [];

  const isPrime = (number) => {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };

  for (let i = 0; i < 3; i += 1) {
    const number = randomToMax(100);
    const question = String(number);
    const answer = isPrime(number) ? 'yes' : 'no';
    questionsAndAnswers.push([question, answer]);
  }
  runGame(description, questionsAndAnswers);
};

export default { brainPrime };
