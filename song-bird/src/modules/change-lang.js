import { translateOfFunctionality } from './translate-functional';
import { levelOfTheGame } from './variants';
import birdsData from './birdsdata';
import birdsDataEn from './birdsdata-en';
import { selectedBird, nameOfBird, photoOfBird, speciesOfBird, descriptionOfBird, mainNameOfBird, infoAboutBird, resultText, score } from './variants';
import { currentLevel, secondIndex } from './generate-audio';


export let changeLangBtn = document.querySelector('select');

export function changeUrlLang() {
  let lang = changeLangBtn.value;
  location.href = window.location.pathname + '#' + lang;
}

export function changeLanguage() {
  let hash = window.location.hash;
  if (hash === '#ru' || hash === '#en') {
    hash = hash.substr(1);
    changeLangBtn.value = hash;

    for (let key in translateOfFunctionality) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = translateOfFunctionality[key][hash];
        }
    }
  } else if (!changeLangBtn.value) {
    changeLangBtn.value = 'ru';
  }

  showNewVariants();
  displayCurrentInfo();
  changeMainNameAnswer()
  setLocalStorage();
}

export function showNewVariants() {
  let variantsOfBird = document.querySelectorAll('.game-variants__bird');

  variantsOfBird.forEach((item, index) => {
    if (changeLangBtn.value === 'en') {
      item.innerHTML = birdsDataEn[levelOfTheGame][index].name;
    } else if (changeLangBtn.value === 'ru') {
      item.innerHTML = birdsData[levelOfTheGame][index].name;
    }
  })
} 

export function showInfoAboutBirdsLang() {
  for (let i = 0; i < birdsData.length; i++) {
    for (let j = 0; j < birdsData[i].length; j++) {
      if (birdsData[i][j].name === selectedBird && changeLangBtn.value === 'ru') {
        nameOfBird.innerHTML = birdsData[i][j].name;
        photoOfBird.src = birdsData[i][j].image;
        speciesOfBird.innerHTML = birdsData[i][j].species;
        descriptionOfBird.innerHTML = birdsData[i][j].description;
      } else if (birdsDataEn[i][j].name === selectedBird && changeLangBtn.value === 'en') {
        nameOfBird.innerHTML = birdsDataEn[i][j].name;
        photoOfBird.src = birdsDataEn[i][j].image;
        speciesOfBird.innerHTML = birdsDataEn[i][j].species;
        descriptionOfBird.innerHTML = birdsDataEn[i][j].description;
      }
    }
  }
}

export function showRightInfoAboutBirdsLang() { 
  if (changeLangBtn.value === 'ru') {
    nameOfBird.innerHTML = birdsData[currentLevel][secondIndex].name;
    photoOfBird.src = birdsData[currentLevel][secondIndex].image;
    speciesOfBird.innerHTML = birdsData[currentLevel][secondIndex].species;
    descriptionOfBird.innerHTML = birdsData[currentLevel][secondIndex].description;
  } else if (changeLangBtn.value === 'en') {
    nameOfBird.innerHTML = birdsDataEn[currentLevel][secondIndex].name;
    photoOfBird.src = birdsDataEn[currentLevel][secondIndex].image;
    speciesOfBird.innerHTML = birdsDataEn[currentLevel][secondIndex].species;
    descriptionOfBird.innerHTML = birdsDataEn[currentLevel][secondIndex].description;
  }
}

export function showMainName() {
  if (changeLangBtn.value === 'ru') {
    mainNameOfBird.innerHTML = birdsData[currentLevel][secondIndex].name;
  } else if (changeLangBtn.value === 'en') {
    mainNameOfBird.innerHTML = birdsDataEn[currentLevel][secondIndex].name;
  }
}

//если инфа о птице уже есть, чтобы сразу язык сменился без доп нажатия на варианты ответа
function displayCurrentInfo() {
  if (infoAboutBird.style.display === 'block') {
    let currentBird = document.querySelector('.about-bird__name').innerHTML;
    if (changeLangBtn.value === 'ru') {
      
      for (let i = 0; i < birdsData[currentLevel].length; i++) {

        if (birdsDataEn[currentLevel][i].name === currentBird) {
          nameOfBird.innerHTML = birdsData[currentLevel][i].name;
          photoOfBird.src = birdsData[currentLevel][i].image;
          speciesOfBird.innerHTML = birdsData[currentLevel][i].species;
          descriptionOfBird.innerHTML = birdsData[currentLevel][i].description;
        }
      }
   
    } else if (changeLangBtn.value === 'en') {
      
      for (let i = 0; i < birdsData[currentLevel].length; i++) {

        if (birdsData[currentLevel][i].name === currentBird) {
          nameOfBird.innerHTML = birdsDataEn[currentLevel][i].name;
          photoOfBird.src = birdsDataEn[currentLevel][i].image;
          speciesOfBird.innerHTML = birdsDataEn[currentLevel][i].species;
          descriptionOfBird.innerHTML = birdsDataEn[currentLevel][i].description;
        }
      }
    }
   
  }
}


//чтобы правильный ответ сверху менял язык при каждом нажании смены языка
function changeMainNameAnswer() {
  let birdNameAnswer = document.querySelector('.game-audio__bird');

  if (birdNameAnswer.innerHTML !== '******') {
    if (changeLangBtn.value === 'ru') {
      birdNameAnswer.innerHTML = birdsData[currentLevel][secondIndex].name;
    } else if (changeLangBtn.value === 'en') {
      birdNameAnswer.innerHTML = birdsDataEn[currentLevel][secondIndex].name;
    }
  }
}

//смена языка в окне результатов
export function changeLangInResultTable() {
  if (changeLangBtn.value === 'ru') {
    resultText.innerHTML = 'Вы прошли игру и набрали максимальный балл!';
  } else if (changeLangBtn.value === 'en') {
    resultText.innerHTML = 'You completed the game and scored the maximum score!';
  }
}

export function changeLangInResultTable2() {
  if (changeLangBtn.value === 'ru') {
    resultText.innerHTML = `Вы прошли игру и набрали ${score.innerHTML} из 30 баллов`;
  } else if (changeLangBtn.value === 'en') {
    resultText.innerHTML = `You completed the game and scored ${score.innerHTML} out of 30 points`;
  }
 }

export function setLocalStorage() {
  localStorage.setItem('key', changeLangBtn.value);
}

export function getLocalStorage() {
  let lang = localStorage.getItem('key');
  if (lang !== 'ru' && lang !== 'en') {
    changeLangBtn.value = 'ru';
  } else {
    changeLangBtn.value = lang;
  }
}
