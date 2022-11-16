import trueSound from '../sounds/true.mp3';
import falseSound from '../sounds/false.mp3';
import { randomAudio, newAudio, setNewAudio } from './audio';
import unknownPhoto from '../img/test-bird.jpg';
import birdsData from './birdsdata';
import { reloadProgressBar } from './audio';



export let answerOptions = document.querySelectorAll('.game-variants__item');
export let nextQuestionBtn = document.querySelector('.game-next-btn');
let mainNameOfBird = document.querySelector('.game-audio__bird');
let mainPhotoOfBird = document.querySelector('.game-question__img');
let infoAboutBird = document.querySelector('.about-bird');
let textAboutGame = document.querySelector('.game-about__text');
let textAboutGame2 = document.querySelector('.game-about__text2');
let photoOfBird = document.querySelector('.about-bird__img');


// функция показывает верные и неверные ответы
export function playMiniSound(answerOption) {
  answerOption.addEventListener('click', () => {
    let selectedBird = answerOption.querySelector('.game-variants__bird').innerHTML;
    let circle = answerOption.querySelector('.game-variants__circle');

    if (selectedBird === randomAudio.name) {
      circle.classList.add('game-variants__circle_green');
      let newAudioTrue = new Audio(trueSound);
      newAudioTrue.play();
      mainNameOfBird.innerHTML = randomAudio.name;
      mainPhotoOfBird.src = randomAudio.image;
      newAudio.pause(); // create new method 'pauseAudio'
      activateNextQuestion();
      showInfoAboutBird()
    } else {
      circle.classList.add('game-variants__circle_red');
      let newAudioFalse = new Audio(falseSound);
      newAudioFalse.play();
      showInfoAboutBird();

    }
  });
}

function activateNextQuestion() {
  nextQuestionBtn.disabled = false;
  nextQuestionBtn.classList.add('game-next-btn_active');
}

function showInfoAboutBird() {
  infoAboutBird.style.display = 'block';
  textAboutGame.style.display = 'none';
  textAboutGame2.style.display = 'none';
}

function showUnknownBird() {
  mainNameOfBird.innerHTML = '******';
  mainPhotoOfBird.src = unknownPhoto;
}

//нужно для перехода на новый уровень
let levelOfGroup = 0;
let groupOfQuestions = document.querySelectorAll('.game-level__item');

export function goNextLevel() {
  let currentGroupOfQuestions = document.querySelector('.game-level__item_active');
  levelOfGroup += 1;
  nextQuestionBtn.disabled = true;
  nextQuestionBtn.classList.remove('game-next-btn_active');
  currentGroupOfQuestions.classList.remove('game-level__item_active');
  
  for (let i = 0; i < groupOfQuestions.length; i++) {
    if (i === levelOfGroup) {
      groupOfQuestions[i].classList.add('game-level__item_active');
    }
  }

  setNewAudio();
  showUnknownBird();
  reloadProgressBar();
}











