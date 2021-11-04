import { getRandom } from '../utilities.js';

const name = 'prime';

const hint = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const minNumber = 3;
const maxNumber = 100;
const getTask = () => {
  const question = getRandom(minNumber, maxNumber);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default { name, hint, getTask };
