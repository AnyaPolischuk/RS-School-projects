import birdsData from './birdsdata';
import pauseBtnIcon from '../img/pause-btn.png';
import playBtnIcon from '../img/play-btn.png';

let isPlay = false;
let newAudio =  new Audio(birdsData[0][0].audio); // заменять треки
let playBtn = document.querySelector('.game-audio__btn');
playBtn.src = playBtnIcon;

export function playAudio() {
  let gameAudio = document.querySelector('.game-audio__treck');
  
  gameAudio.prepend(newAudio);
  if (isPlay) {
    newAudio.pause();
    playBtn.src = playBtnIcon;
    isPlay = false;
  } else {
    newAudio.play();
    playBtn.src = pauseBtnIcon;
    isPlay = true;
  }
}




