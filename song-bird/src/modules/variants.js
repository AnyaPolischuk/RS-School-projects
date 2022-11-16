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
let nameOfBird = document.querySelector('.about-bird__name'); 
let speciesOfBird = document.querySelector('.about-bird__species');
let descriptionOfBird = document.querySelector('.about-bird__description');       
let score = document.querySelector('.score');
let groupOfQuestions = document.querySelectorAll('.game-level__item');
let gameField = document.querySelector('.game');
let resultsField = document.querySelector('.results');
let points = 0;     

function showResults() {
  let resultScore = document.querySelector('.results__score');
  let resultText = document.querySelector('.results__text');
  gameField.style.display = 'none';
  resultsField.style.display = 'flex';
    if (score.innerHTML === '30') {
      resultText.innerHTML = 'Вы прошли игру и набрали максимальный балл!'
    } else {
      resultScore.innerHTML = score.innerHTML;
    }
}


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
      showInfoAboutBird();

      //Инфа о птице при клике на вариант ответа
      nameOfBird.innerHTML = selectedBird;
      photoOfBird.src = randomAudio.image;
      speciesOfBird.innerHTML = randomAudio.species;
      descriptionOfBird.innerHTML = randomAudio.description;
      //TODO: добавить аудио трек


      //подсчет очков
      if (points === 0) {
        score.innerHTML = +score.innerHTML + 5;
      } else if (points === 1) {
        score.innerHTML = +score.innerHTML + 4;
      } else if (points=== 2) {
        score.innerHTML = +score.innerHTML + 3;
      } else if (points === 3) {
        score.innerHTML = +score.innerHTML + 2;
      } else if (points === 4) {
        score.innerHTML = +score.innerHTML + 1;
      } else if (points === 5) {
        score.innerHTML = +score.innerHTML + 0;
      }

      //вывод результатов в конце игры
      if (groupOfQuestions[5].classList.contains('game-level__item_active')) {
        nextQuestionBtn.addEventListener('click', showResults)
      }

    } else {
      circle.classList.add('game-variants__circle_red');
      let newAudioFalse = new Audio(falseSound);
      newAudioFalse.play();
      showInfoAboutBird();
      points = points + 1;
      console.log(points);
      

      //Инфа о птице при клике на вариант ответа
      for (let i = 0; i < birdsData.length; i++) {
        for (let j = 0; j < birdsData[i].length; j++) {
          if (birdsData[i][j].name === selectedBird) {
            nameOfBird.innerHTML = birdsData[i][j].name;
            photoOfBird.src = birdsData[i][j].image;
            speciesOfBird.innerHTML = birdsData[i][j].species;
            descriptionOfBird.innerHTML = birdsData[i][j].description;
           
          } 
        }
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
let levelOfTheGame = 0;
function countLevel() {
 levelOfTheGame = levelOfTheGame + 1;
 return levelOfTheGame;
}

function addNewVariantsOfAnswers() {
  let variantsBirds = document.querySelectorAll('.game-variants__bird');
  variantsBirds.forEach((item, index) => {
    item.innerHTML = birdsData[levelOfTheGame][index].name;
  })
}

//чтобы кружочки становились вновь серыми при переходе на след уровень
function returnGreyColorToCircle() {
  let allCircles = document.querySelectorAll('.game-variants__circle');
  allCircles.forEach(item => {
    item.classList.remove('game-variants__circle_red');
    item.classList.remove('game-variants__circle_green');
  })
}



//нужно для перехода на новый уровень
let levelOfGroup = 0;


export function goNextLevel() {
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

  setNewAudio();
  showUnknownBird();
  reloadProgressBar();
  showTextAboutName();
  countLevel();
  addNewVariantsOfAnswers();
  returnGreyColorToCircle();
}











