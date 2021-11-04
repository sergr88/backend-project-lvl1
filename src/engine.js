import readlineSync from 'readline-sync';

const getRandom = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

const play = (hint, getTask) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(hint);

  const gameCount = 3;
  for (let i = 1; i <= gameCount; i += 1) {
    const [question, correctAnswer] = getTask();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export { getRandom, play };
