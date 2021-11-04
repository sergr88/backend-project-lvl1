import { getRandom, play } from '../engine.js';

const hint = 'What number is missing in the progression?';

const length = 10;
const minStart = 10;
const maxStart = 50;
const minInterval = 2;
const maxInterval = 10;
const getTask = () => {
  const start = getRandom(minStart, maxStart);
  const interval = getRandom(minInterval, maxInterval);

  const progression = [];
  for (let index = 0; index < length; index += 1) {
    progression.push(start + index * interval);
  }

  const gapIndex = getRandom(0, length - 1);
  const answer = String(progression[gapIndex]);
  progression[gapIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

play(hint, getTask);
