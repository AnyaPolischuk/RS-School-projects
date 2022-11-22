import './index.html';
import './style.scss';

import { generateRandomAudio } from './modules/generate-audio';

import {playBtn, playAudio} from './modules/audio';
import {newAudio, updateProgressBar, findLengthOfAudio} from './modules/audio';
import {containerOfProgressBar, setProgressBar} from './modules/audio';
import {volumeOfAudio, changeVolume} from './modules/audio';
import {iconOfVolume, hideAndShowVolumeIcon, createNewAudio} from './modules/audio';

import {aboutBtn, showStartPage} from './modules/header';
import {gameBtn, startGameBtn, showGamePage, galleryBtn, showGalleryPage} from './modules/header';

import {answerOptions, playMiniSound} from './modules/variants';
import {nextQuestionBtn, goNextLevel} from './modules/variants';

import {showAudioAboutBird} from './modules/audio-about-bird';
import {containerOfProgressBarAboutBird, setProgressBarAboutBird} from './modules/audio-about-bird';

import { changeLangBtn, changeUrlLang, changeLanguage, getLocalStorage, showNewVariants, checkLocalStorage } from './modules/change-lang';

import { changeLangGallery } from './modules/gallery';

//import {startGameAgainBtn, startGameAgain} from './modules/generate-audio';


playBtn.addEventListener('click', playAudio);
// TODO: another play button with event listener
containerOfProgressBar.addEventListener('click', setProgressBar);
volumeOfAudio.addEventListener('change', changeVolume);
iconOfVolume.addEventListener('click', hideAndShowVolumeIcon);

aboutBtn.addEventListener('click', showStartPage);
gameBtn.addEventListener('click', showGamePage);
startGameBtn.addEventListener('click', showGamePage);
galleryBtn.addEventListener('click', showGalleryPage);


containerOfProgressBarAboutBird.addEventListener('click', setProgressBarAboutBird);

for (let i = 0; i < answerOptions.length; i++) {
  playMiniSound(answerOptions[i]);
  showAudioAboutBird(answerOptions[i]);
}

nextQuestionBtn.addEventListener('click', goNextLevel);

//startGameAgainBtn.addEventListener('click', startGameAgain);

let startGameAgainBtn = document.querySelector('.results__btn');

startGameAgainBtn.addEventListener('click', () => {
  location.reload();
})

changeLangBtn.addEventListener('change', changeUrlLang);
changeLangBtn.addEventListener('change', changeLanguage);
changeLangBtn.addEventListener('change', changeLangGallery);

window.addEventListener('load', getLocalStorage);
window.addEventListener('load', showNewVariants);
window.addEventListener('load', changeLanguage);
window.addEventListener('load', changeLangGallery);
//window.addEventListener('load', createCards)






