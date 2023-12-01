import readlineSync from 'readline-sync';

const game = (description, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  let success = true;

  console.log(description);

  const roundCount = 3;

  for (let i = 0; i < roundCount; i += 1) {
    const [question, answer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const yourAnswer = readlineSync.question('Your answer: ');

    if (answer === yourAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${yourAnswer}' is wrong answer ;(. Correct answer was '${answer}'`,
      );
      console.log(`Let's try again, ${name}!`);
      success = false;
      break;
    }
  }

  if (success) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default game;
