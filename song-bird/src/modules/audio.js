import birdsData from './birdsdata';
import pauseBtnIcon from '../img/pause-btn.png';
import playBtnIcon from '../img/play-btn.png';

import {generateRandomAudio} from './generate-audio';


export let progressBar = document.querySelector('.game-audio__bar');
export let containerOfProgressBar = document.querySelector('.game-audio__progress');
let currentTimes = document.querySelector('.audio-time__start');
let durationTimes = document.querySelector('.audio-time__finish');
export let volumeOfAudio = document.querySelector('.game-audio__volume');
export let iconOfVolume = document.querySelector('.game-audio__sound');
export let playBtn = document.querySelector('.game-audio__btn');
playBtn.src = playBtnIcon;


//радномные аудио
export let randomAudio;
export let newAudio;

setNewAudio();

//меняет треки при следующих уровнях
export function setNewAudio() {
  randomAudio = generateRandomAudio();
  newAudio = new Audio(randomAudio.audio);

  newAudio.addEventListener('timeupdate', updateProgressBar);
  newAudio.addEventListener('loadeddata' , findLengthOfAudio);
}

export function playAudio() {
  let gameAudio = document.querySelector('.game-audio__treck');
  
  gameAudio.prepend(newAudio);

  if (!newAudio.paused) {
    newAudio.pause();
    playBtn.src = playBtnIcon;
  } else {
    newAudio.play();
    playBtn.src = pauseBtnIcon;
  }
}


export function updateProgressBar(event) {
  const {duration, currentTime} = event.target;
    let progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
    
    let minutes = Math.floor(newAudio.currentTime / 60);
    if (minutes < 10) {
        minutes = String(minutes);
    }

    let seconds = Math.floor(newAudio.currentTime % 60);
    if (seconds < 10) {
        seconds = '0' + String(seconds);
    }

    currentTimes.innerHTML = `${minutes}:${seconds}`;
}

export function setProgressBar(event) {
  let width = this.clientWidth;
  let clickX = event.offsetX;
  let duration = newAudio.duration;

  newAudio.currentTime = (clickX / width) * duration;
}

export function findLengthOfAudio() {
  let minutes = Math.floor(this.duration / 60);
  let seconds = Math.floor(this.duration % 60);

    if (minutes < 10) {
        minutes = String(minutes);
    }
    if (seconds < 10) {
        seconds = '0' + String(seconds);
    }

    durationTimes.innerHTML = `${minutes}:${seconds}`;
}

export function changeVolume() {
  newAudio.volume = this.value / 100;
}

export function hideAndShowVolumeIcon() {
  volumeOfAudio.classList.toggle('game-audio__volume_active');
}

export function reloadProgressBar() {
  progressBar.style.width = '0px';
  newAudio.pause();
  playBtn.src = playBtnIcon;
  currentTimes.innerHTML = '0:00';
}









