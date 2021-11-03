import readlineSync from 'readline-sync';

import even from './games/even.js';
import calc from './games/calc.js';
import gcd from './games/gcd.js';

const games = [even, calc, gcd];

const gameCount = 3;

const playGame = (gameName) => {
  const currentGame = games.find((game) => game.name === gameName);

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(currentGame.hint);

  for (let i = 1; i <= gameCount; i += 1) {
    const [question, correctAnswer] = currentGame.getTask();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
