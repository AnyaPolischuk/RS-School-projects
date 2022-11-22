import trueSound from '../sounds/true.mp3';
import falseSound from '../sounds/false.mp3';
import { randomAudio, newAudio, setNewAudio, progressBar } from './audio';
import unknownPhoto from '../img/test-bird.jpg';
import birdsData from './birdsdata';
import birdsDataEn from './birdsdata-en';
import { reloadProgressBar } from './audio';
import { reloadProgressBarAboutBird } from './audio-about-bird';
import { currentLevel, secondIndex } from './generate-audio'
import { showNewVariants, showInfoAboutBirdsLang, showRightInfoAboutBirdsLang, showMainName, changeLangInResultTable,  changeLangInResultTable2} from './change-lang';



export let answerOptions = document.querySelectorAll('.game-variants__item');
export let nextQuestionBtn = document.querySelector('.game-next-btn');
export let mainNameOfBird = document.querySelector('.game-audio__bird');
let mainPhotoOfBird = document.querySelector('.game-question__img');
export let infoAboutBird = document.querySelector('.about-bird');
let textAboutGame = document.querySelector('.game-about__text');
let textAboutGame2 = document.querySelector('.game-about__text2');
export let photoOfBird = document.querySelector('.about-bird__img');
export let nameOfBird = document.querySelector('.about-bird__name'); 
export let speciesOfBird = document.querySelector('.about-bird__species');
export let descriptionOfBird = document.querySelector('.about-bird__description');       
export let score = document.querySelector('.score');
let groupOfQuestions = document.querySelectorAll('.game-level__item');
export let gameField = document.querySelector('.game');
export let resultsField = document.querySelector('.results');
let allCircles = document.querySelectorAll('.game-variants__circle');
export let resultScore = document.querySelector('.results__score');
export let resultText = document.querySelector('.results__text');
let points = 0;     

function showResults() {
  
  gameField.style.display = 'none';
  resultsField.style.display = 'flex';
    if (score.innerHTML === '30') {
      changeLangInResultTable();
    } else {
      changeLangInResultTable2();
    }
}


export let selectedBird;

// функция показывает верные и неверные ответы
export function playMiniSound(answerOption) {
  answerOption.addEventListener('click', () => {
    selectedBird = answerOption.querySelector('.game-variants__bird').innerHTML;
    let circle = answerOption.querySelector('.game-variants__circle');
    if (selectedBird === randomAudio.name || selectedBird === birdsDataEn[currentLevel][secondIndex].name) {

       //подсчет очков, только если это первое нажатие на верный ответ
       if (!circle.classList.contains('game-variants__circle_green')) {
        if (points === 0) {
          score.innerHTML = +score.innerHTML + 5;
        } else if (points === 1) {
          score.innerHTML = +score.innerHTML + 4;
        } else if (points === 2) {
          score.innerHTML = +score.innerHTML + 3;
        } else if (points === 3) {
          score.innerHTML = +score.innerHTML + 2;
        } else if (points === 4) {
          score.innerHTML = +score.innerHTML + 1;
        } else if (points === 5) {
          score.innerHTML = +score.innerHTML + 0;
        }
        //выделение цветом и звуковое сопровождение при первом клике на верный вариант ответа
        reloadProgressBar();
        circle.classList.add('game-variants__circle_green');
        let newAudioTrue = new Audio(trueSound);
        newAudioTrue.play();
        showMainName();
        mainPhotoOfBird.src = randomAudio.image;
        activateNextQuestion();
        showInfoAboutBird();
        
        //Инфа о птице при клике на вариант ответа
        showRightInfoAboutBirdsLang();
      } else {
        //Инфа о птице при клике на вариант ответа, если ответ нажат не в первый раз
        showRightInfoAboutBirdsLang()
      }

      //вывод результатов в конце игры
      if (groupOfQuestions[5].classList.contains('game-level__item_active')) {
        nextQuestionBtn.addEventListener('click', showResults);
      }

    } else {
      //проверяем, нажимали ли мы несколько раз на вариант ответа, или это первый клик
      if (!circle.classList.contains('game-variants__circle_red')) {
        points = points + 1;
      }
      //если верный ответ еще не нажат, то используем цвет для кружочков и звук + инфа
      if (mainNameOfBird.innerHTML === '******') {
        circle.classList.add('game-variants__circle_red');
        let newAudioFalse = new Audio(falseSound);
        newAudioFalse.play();
        showInfoAboutBird();
        
        //Инфа о птице при клике на вариант ответа
        showInfoAboutBirdsLang();
      } else {
         // вывод информации о птице без цвета кружочков и звука клика 
         showInfoAboutBirdsLang();
      }
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

function showTextAboutName() {
  infoAboutBird.style.display = 'none';
  textAboutGame.style.display = 'block';
  textAboutGame2.style.display = 'block';
}

function showUnknownBird() {
  mainNameOfBird.innerHTML = '******';
  mainPhotoOfBird.src = unknownPhoto;
}


//при переходе на следующий уровень чтобы обновлялись варианты ответа
export let levelOfTheGame = 0;
function countLevel() {
 levelOfTheGame = levelOfTheGame + 1;
 return levelOfTheGame;
}

//чтобы кружочки становились вновь серыми при переходе на след 
function returnGreyColorToCircle() {
  allCircles.forEach(item => {
    item.classList.remove('game-variants__circle_red');
    item.classList.remove('game-variants__circle_green');
  })
}

//нужно для перехода на новый уровень
let levelOfGroup = 0;

export function goNextLevel() {
  progressBar.style.width = '0px';
  points = 0;
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
  reloadProgressBar();
  reloadProgressBarAboutBird();
  setNewAudio();
  showUnknownBird();
  showTextAboutName();
  countLevel();
  showNewVariants();
  returnGreyColorToCircle();
}











