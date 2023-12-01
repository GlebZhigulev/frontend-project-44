import getRandomNumber from './randomizer.js';
import runGame from '../index.js';

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

const getQuestionAndAnswer = () => {
  const number = getRandomNumber(100);
  const question = String(number);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [question, answer];
};

const brainPrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(description, getQuestionAndAnswer);
};

export default brainPrime;
