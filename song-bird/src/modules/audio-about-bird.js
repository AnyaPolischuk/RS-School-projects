import { answerOptions  } from "./variants";
import birdsData from "./birdsdata";
import birdsDataEn from "./birdsdata-en";
import playBtnIcon from '../img/play-btn.png';
import pauseBtnIcon from '../img/pause-btn.png';

let playBtnAboutBird = document.querySelector('.about-bird__btn');
let newAudioAboutBird;
let progressBarAboutBird = document.querySelector('.about-bird__bar');
let currentTimesAboutBird = document.querySelector('.about-bird-time__start');
export let containerOfProgressBarAboutBird = document.querySelector('.about-bird__progress');
let durationTimesAboutBird = document.querySelector('.about-bird-time__finish');

export function showAudioAboutBird(answerOption) {
  
  
  answerOption.addEventListener('click', () => {
    let selectedBirdName = answerOption.querySelector('.game-variants__bird');
    stopAudio();
    
    
    for (let i = 0; i < birdsData.length; i++) {
      for (let j = 0; j < birdsData[i].length; j++) {
        if (birdsData[i][j].name === selectedBirdName.innerHTML || birdsDataEn[i][j].name === selectedBirdName.innerHTML) {

          newAudioAboutBird = new Audio(birdsData[i][j].audio);
          playBtnAboutBird.src = playBtnIcon;    

          newAudioAboutBird.addEventListener('timeupdate', updateProgressBarAboutBird);
          newAudioAboutBird.addEventListener('loadeddata', findLengthOfAudioAboutBird);
    } 
   }
   }       
 })

 

}

function stopAudio() {
  if (newAudioAboutBird) {
    newAudioAboutBird.pause();
  }
}


function playAudioAboutBird() {
  if (!newAudioAboutBird.paused) {
    newAudioAboutBird.pause();
    playBtnAboutBird.src = playBtnIcon;
  } else {
    newAudioAboutBird.play();
    playBtnAboutBird.src = pauseBtnIcon;
  }
}

playBtnAboutBird.addEventListener('click', playAudioAboutBird);


function updateProgressBarAboutBird(event) {
  const {duration, currentTime} = event.target;
    let progressPercent = (currentTime / duration) * 100;
    progressBarAboutBird.style.width = `${progressPercent}%`;
    
    let minutes = Math.floor(newAudioAboutBird.currentTime / 60);
    if (minutes < 10) {
        minutes = String(minutes);
    }

    let seconds = Math.floor(newAudioAboutBird.currentTime % 60);
    if (seconds < 10) {
        seconds = '0' + String(seconds);
    }

    currentTimesAboutBird.innerHTML = `${minutes}:${seconds}`;
}

export function setProgressBarAboutBird(event) {
  let width = this.clientWidth;
  let clickX = event.offsetX;
  let duration = newAudioAboutBird.duration;

  newAudioAboutBird.currentTime = (clickX / width) * duration;
}

export function findLengthOfAudioAboutBird() {
  let minutes = Math.floor(this.duration / 60);
  let seconds = Math.floor(this.duration % 60);

    if (minutes < 10) {
        minutes = String(minutes);
    }
    if (seconds < 10) {
        seconds = '0' + String(seconds);
    }

    durationTimesAboutBird.innerHTML = `${minutes}:${seconds}`;
}

export function reloadProgressBarAboutBird() {
  progressBarAboutBird.style.width = '0px';
  newAudioAboutBird.pause();
  playBtnAboutBird.src = playBtnIcon;
  currentTimesAboutBird.innerHTML = '0:00';
}