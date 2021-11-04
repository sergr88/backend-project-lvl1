import { getRandom, play } from '../engine.js';

const hint = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const maxNumber = 100;
const getTask = () => {
  const question = getRandom(1, maxNumber);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

play(hint, getTask);
