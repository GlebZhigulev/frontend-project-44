import readlineSync from 'readline-sync';

const game = (description, questionsAndAnswers) => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    let success = true;

    console.log(description);

    for (let i = 0; i < questionsAndAnswers.length; i += 1) {
        const [question, answer] = questionsAndAnswers[i];
        console.log(`Question: ${question}`);
        const yourAnswer = readlineSync.question('Your answer: ');

        if (answer === yourAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
            console.log(`Let's try again, ${name}!`);
            success = false;
            break;
        }
    }

    if (success) {
        console.log(`Congratulations, ${name}!`);
    }
}

export default game;
