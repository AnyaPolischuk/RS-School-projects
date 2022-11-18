import birdsData from './birdsdata';

let level = -1;
function increaseLevel() {
  return ++level;
}

export function generateRandomAudio() {
  let currentLevel = increaseLevel();
  let secondIndex = Math.round(Math.random() * 5);
  console.log(birdsData[currentLevel][secondIndex])
  return birdsData[currentLevel][secondIndex]
}

