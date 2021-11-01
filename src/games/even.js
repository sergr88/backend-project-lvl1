import { getRandom } from '../utilities.js';

const name = 'even';

const hint = 'Answer "yes" if the number is even, otherwise answer "no".';

const maxNumber = 100;
const getTask = () => {
  const question = getRandom(maxNumber);
  const answer = (question % 2 === 0) ? 'yes' : 'no';
  return [question, answer];
};

export default { name, hint, getTask };
