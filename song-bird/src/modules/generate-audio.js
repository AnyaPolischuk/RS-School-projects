import birdsData from './birdsdata';

let level = -1;
function increaseLevel() {
  return ++level;
}

export let currentLevel;
export let secondIndex;

export function generateRandomAudio() {
  currentLevel = increaseLevel();
  secondIndex = Math.round(Math.random() * 5);
  console.log(birdsData[currentLevel][secondIndex])
  return birdsData[currentLevel][secondIndex]
}

