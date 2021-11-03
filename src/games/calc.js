import { getRandom } from '../utilities.js';

const name = 'calc';

const hint = 'What is the result of the expression?';

const operations = [
  ['+', (a, b) => a + b],
  ['-', (a, b) => a - b],
  ['*', (a, b) => a * b],
];

const maxNumber = 25;
const getTask = () => {
  const firstOperand = getRandom(1, maxNumber);
  const secondOperand = getRandom(1, maxNumber);
  const operation = operations[getRandom(0, operations.length - 1)];

  const [operationSign, operationFunction] = operation;
  const question = `${firstOperand} ${operationSign} ${secondOperand}`;
  const answer = String(operationFunction(firstOperand, secondOperand));

  return [question, answer];
};

export default { name, hint, getTask };
