const name = 'calc';

const hint = 'What is the result of the expression?';

const getRandom = (max) => Math.floor(Math.random() * max) + 1;

const operations = [
  ['+', (a, b) => a + b],
  ['-', (a, b) => a - b],
  ['*', (a, b) => a * b],
];

const maxNumber = 25;
const getTask = () => {
  const firstOperand = getRandom(maxNumber);
  const secondOperand = getRandom(maxNumber);
  const operation = operations[getRandom(operations.length) - 1];

  const [operationSign, operationFunction] = operation;
  const question = `${firstOperand} ${operationSign} ${secondOperand}`;
  const answer = String(operationFunction(firstOperand, secondOperand));

  return [question, answer];
};

export default { name, hint, getTask };
