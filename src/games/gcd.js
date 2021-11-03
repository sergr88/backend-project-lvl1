import { getRandom } from '../utilities.js';

const name = 'gcd';

const hint = 'Find the greatest common divisor of given numbers.';

// Algorithm: https://en.wikipedia.org/wiki/Euclidean_algorithm
const getGcd = (a, b) => (b === 0 ? a : getGcd(b, a % b));

const maxNumber = 100;
const getTask = () => {
  let firstNumber;
  let secondNumber;
  let gcd;
  do {
    firstNumber = getRandom(1, maxNumber);
    secondNumber = getRandom(1, maxNumber);
    gcd = getGcd(firstNumber, secondNumber);
  } while (gcd < 2);

  const question = `${firstNumber} ${secondNumber}`;
  const answer = String(gcd);
  return [question, answer];
};

export default { name, hint, getTask };
