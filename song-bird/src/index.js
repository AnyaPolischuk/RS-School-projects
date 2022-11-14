import './index.html';
import './style.scss';
import {playAudio} from './modules/audio';


let playBtn = document.querySelector('.game-audio__btn');
playBtn.addEventListener('click', playAudio);
