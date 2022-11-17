import './index.html';
import './style.scss';

import { generateRandomAudio } from './modules/generate-audio';

import {playBtn, playAudio} from './modules/audio';
import {newAudio, updateProgressBar, findLengthOfAudio} from './modules/audio';
import {containerOfProgressBar, setProgressBar} from './modules/audio';
import {volumeOfAudio, changeVolume} from './modules/audio';
import {iconOfVolume, hideAndShowVolumeIcon, createNewAudio} from './modules/audio';

import {aboutBtn, showStartPage} from './modules/header';
import {gameBtn, startGameBtn, showGamePage} from './modules/header';

import {answerOptions, playMiniSound} from './modules/variants';
import {nextQuestionBtn, goNextLevel} from './modules/variants';

playBtn.addEventListener('click', playAudio);
// TODO: another play buttom with event listener
containerOfProgressBar.addEventListener('click', setProgressBar);
volumeOfAudio.addEventListener('change', changeVolume);
iconOfVolume.addEventListener('click', hideAndShowVolumeIcon);

aboutBtn.addEventListener('click', showStartPage);
gameBtn.addEventListener('click', showGamePage);
startGameBtn.addEventListener('click', showGamePage);



for (let i = 0; i < answerOptions.length; i++) {
  playMiniSound(answerOptions[i]);
}

nextQuestionBtn.addEventListener('click', goNextLevel);




