import { getRandom, play } from '../engine.js';

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
  const operationIndex = getRandom(0, operations.length - 1);
  const operation = operations[operationIndex];

  const [operationSign, operationFunction] = operation;
  const question = `${firstOperand} ${operationSign} ${secondOperand}`;
  const answer = String(operationFunction(firstOperand, secondOperand));

  return [question, answer];
};

play(hint, getTask);
