// Подсвечивание активной ссылки меню

const navLinks = document.querySelectorAll('.menu__link');
const footerLinks = document.querySelectorAll('.footer-menu__link');

navLinks.forEach(link => {
    if (link.getAttribute('href') === window.location.pathname) {
        link.classList.add('menu__link_active');
    }
})


footerLinks.forEach(link => {
    if (link.getAttribute('href') === window.location.pathname) {
        link.classList.add('footer-menu__link_active');
    }
})



// Бургер меню
const burgerMenu = document.querySelector('.menu-burger');
const menu = document.querySelector('.nav__list');
const logo = document.querySelector('.nav__logo_640');
const shadow = document.querySelector('.shadow');
const designedBy = document.querySelector('.nav__designedby');

function openAndCloseMenu() {
    menu.classList.toggle('nav__list_active');
    burgerMenu.classList.toggle('menu-burger_active');
    logo.classList.toggle('nav__logo_active');
    shadow.classList.toggle('shadow_active');
    designedBy.classList.toggle('nav__designedby_active');
}

burgerMenu.addEventListener('click', openAndCloseMenu);
shadow.addEventListener('click', openAndCloseMenu);



// Carousel
const petsWrapper = document.querySelector('.pets__wrapper');

let indexesOfArrays = [0, 1, 2, 3, 4, 5, 6]

//перемешиваем массив с индексами
function shuffleArray() {
    let newShuffledArray = [];
    let sortedArray = indexesOfArrays.sort(() => Math.random() - 0.5);
    newShuffledArray.push(...sortedArray);

    return newShuffledArray;
}

let shuffledArray = shuffleArray();

const petsCardsLeft = document.getElementById('pets__cards_left');
const petsCardsActive = document.getElementById('pets__cards_active');
const petsCardsRight = document.getElementById('pets__cards_right');

const petsCardsLeft2 = document.getElementById('pets__cards_left2');
const petsCardsActive2 = document.getElementById('pets__cards_active2');
const petsCardsRight2 = document.getElementById('pets__cards_right2');

const BTN_LEFT = document.querySelector('#btn-left');
const BTN_RIGHT = document.querySelector('#btn-right');

const BTN_LEFT1000 = document.querySelector('#bnt-left1000');
const BTN_RIGHT1000 = document.querySelector('#bnt-right1000');

const CAROUSEL = document.querySelector('.pets-carousel'); 
const CAROUSEL2 = document.querySelector('.pets-carousel2');

//  количество карточек в замисимости от размера экрана
function findAmountOfCards() {
    let amountOfCards;
    if (window.innerWidth <= 900) {
        amountOfCards = 2;
    } else {
        amountOfCards = 3;
    }
    
    return amountOfCards;
}


// Создаем карты с животными на странице
function createCard(pet) {
    let array = shuffleArray();
    let animalCards = [];
    let cardsOnPage = findAmountOfCards();

    for (let i = 0; i < cardsOnPage; i++) {
        let petCard = document.createElement('div');
        petCard.classList.add('pet-card');
        
        let petImg = document.createElement('img');
        petImg.classList.add('pet-card__photo');
        petImg.src = `${pet[array[i]].img}`;

        let petCardInfo = document.createElement('div');
        petCardInfo.classList.add('pet-card__info');

        petCard.append(petImg);
        petCard.append(petCardInfo);

        let petCardText = document.createElement('div');
        petCardText.classList.add('pet-card__text');
        petCardInfo.append(petCardText);

        let petCardTitle = document.createElement('h4');
        petCardTitle.classList.add('pet-card__title');
        petCardTitle.innerHTML = `${pet[array[i]].animal}`;
        petCardText.append(petCardTitle);

        let petCardNative = document.createElement('p');
        petCardNative.classList.add('pet-card__native');
        petCardNative.innerHTML = `${pet[array[i]].live}`;
        petCardText.append(petCardNative);

        let petCardIcon = document.createElement('img');
        petCardIcon.src = `${pet[array[i]].feedimg}`;
        petCardIcon.classList.add('pet-card__icon')
        petCardInfo.append(petCardIcon);

        let petShadow = document.createElement('div');
        petShadow.classList.add('pet-shadow');
        petCard.append(petShadow);

        let petShadowText = document.createElement('div');
        petShadowText.classList.add('pet-shadow__text');
        petShadow.append(petShadowText);

        let petShadowTitle = document.createElement('h4');
        petShadowTitle.classList.add('pet-shadow__title');
        petShadowTitle.innerHTML = `${pet[array[i]].animal}`;
        petShadowText.append(petShadowTitle);

        let petShadowNative = document.createElement('p');
        petShadowNative.classList.add('pet-shadow__native');
        petShadowNative.innerHTML = `${pet[array[i]].live}`;
        petShadowText.append(petShadowNative);


        animalCards.push(petCard);

    }
    return animalCards;
    //return array;
}

petsCardsLeft.append(...createCard(pets1));
petsCardsActive.append(...createCard(pets1));
petsCardsRight.append(...createCard(pets1));

petsCardsLeft2.append(...createCard(pets2));
petsCardsActive2.append(...createCard(pets2));
petsCardsRight2.append(...createCard(pets2));



const moveLeft = () => {  // функция перелистывания
    petsCardsLeft.innerHTML = '';
    petsCardsLeft2.innerHTML = '';
    petsCardsLeft.append(...createCard(pets1));
    petsCardsLeft2.append(...createCard(pets2));

    CAROUSEL.classList.add('transition-left');
    CAROUSEL2.classList.add('transition-left');

    if (window.innerWidth > 1350) {
        BTN_LEFT.removeEventListener('click', moveLeft); //убираем возможность перелистывать карусель во время анимации
        BTN_RIGHT.removeEventListener('click', moveRight);
    } else {
        BTN_LEFT1000.removeEventListener('click', moveLeft); //убираем возможность перелистывать карусель во время анимации
        BTN_RIGHT1000.removeEventListener('click', moveRight);
    }
}

const moveRight = () => {
    petsCardsRight.innerHTML = '';
    petsCardsRight2.innerHTML = '';
    petsCardsRight.append(...createCard(pets1));
    petsCardsRight2.append(...createCard(pets2));

    CAROUSEL.classList.add('transition-right');
    CAROUSEL2.classList.add('transition-right');

    if (window.innerWidth > 1350) {
        BTN_RIGHT.removeEventListener('click', moveRight);
        BTN_LEFT.removeEventListener('click', moveLeft);
    } else {
        BTN_RIGHT1000.removeEventListener('click', moveRight);
        BTN_LEFT1000.removeEventListener('click', moveLeft);
    }


}

BTN_LEFT.addEventListener('click', moveLeft);
BTN_RIGHT.addEventListener('click', moveRight);

BTN_LEFT1000.addEventListener('click', moveLeft);
BTN_RIGHT1000.addEventListener('click', moveRight);



CAROUSEL.addEventListener('animationend', (animationEvent) => { // конец анимации
    let currentActive = petsCardsActive.innerHTML;
    let currentActive2 = petsCardsActive2.innerHTML;

    if (window.innerWidth > 1350) {
        if (animationEvent.animationName === 'move-left') {
            CAROUSEL.classList.remove('transition-left');
            CAROUSEL2.classList.remove('transition-left');
    
            petsCardsActive.innerHTML = petsCardsLeft.innerHTML; // теперь активный элемент сменился
            petsCardsLeft.innerHTML = petsCardsRight.innerHTML;
            petsCardsRight.innerHTML = currentActive;
    
            petsCardsActive2.innerHTML = petsCardsLeft2.innerHTML; // теперь активный элемент сменился
            petsCardsLeft2.innerHTML = petsCardsRight2.innerHTML;
            petsCardsRight2.innerHTML = currentActive2;
    
         } else {
            CAROUSEL.classList.remove('transition-right');
            CAROUSEL2.classList.remove('transition-right');
    
            petsCardsActive.innerHTML = petsCardsRight.innerHTML;
            petsCardsRight.innerHTML = petsCardsLeft.innerHTML;
            petsCardsLeft.innerHTML = currentActive;
    
            petsCardsActive2.innerHTML = petsCardsRight2.innerHTML;
            petsCardsRight2.innerHTML = petsCardsLeft2.innerHTML;
            petsCardsLeft2.innerHTML = currentActive2;
        }
      
        BTN_LEFT.addEventListener('click', moveLeft); //возвращаем возможность тыкать на кнопку
        BTN_RIGHT.addEventListener('click', moveRight);
    } 
    else if (window.innerWidth > 900 && window.innerWidth < 1350) {
        if (animationEvent.animationName === 'move-left1000') {
            CAROUSEL.classList.remove('transition-left');
            CAROUSEL2.classList.remove('transition-left');
    
            petsCardsActive.innerHTML = petsCardsLeft.innerHTML; // теперь активный элемент сменился
            petsCardsLeft.innerHTML = petsCardsRight.innerHTML;
            petsCardsRight.innerHTML = currentActive;
    
            petsCardsActive2.innerHTML = petsCardsLeft2.innerHTML; // теперь активный элемент сменился
            petsCardsLeft2.innerHTML = petsCardsRight2.innerHTML;
            petsCardsRight2.innerHTML = currentActive2;
    
         } else {
            CAROUSEL.classList.remove('transition-right');
            CAROUSEL2.classList.remove('transition-right');
    
            petsCardsActive.innerHTML = petsCardsRight.innerHTML;
            petsCardsRight.innerHTML = petsCardsLeft.innerHTML;
            petsCardsLeft.innerHTML = currentActive;
    
            petsCardsActive2.innerHTML = petsCardsRight2.innerHTML;
            petsCardsRight2.innerHTML = petsCardsLeft2.innerHTML;
            petsCardsLeft2.innerHTML = currentActive2;
        }
        BTN_LEFT1000.addEventListener('click', moveLeft); //возвращаем возможность тыкать на кнопку
        BTN_RIGHT1000.addEventListener('click', moveRight);
    }

    else if (window.innerWidth <= 900) {
        if (animationEvent.animationName === 'move-left640') {
            CAROUSEL.classList.remove('transition-left');
            CAROUSEL2.classList.remove('transition-left');
    
            petsCardsActive.innerHTML = petsCardsLeft.innerHTML; // теперь активный элемент сменился
            petsCardsLeft.innerHTML = petsCardsRight.innerHTML;
            petsCardsRight.innerHTML = currentActive;
    
            petsCardsActive2.innerHTML = petsCardsLeft2.innerHTML; // теперь активный элемент сменился
            petsCardsLeft2.innerHTML = petsCardsRight2.innerHTML;
            petsCardsRight2.innerHTML = currentActive2;
    
         } else {
            CAROUSEL.classList.remove('transition-right');
            CAROUSEL2.classList.remove('transition-right');
    
            petsCardsActive.innerHTML = petsCardsRight.innerHTML;
            petsCardsRight.innerHTML = petsCardsLeft.innerHTML;
            petsCardsLeft.innerHTML = currentActive;
    
            petsCardsActive2.innerHTML = petsCardsRight2.innerHTML;
            petsCardsRight2.innerHTML = petsCardsLeft2.innerHTML;
            petsCardsLeft2.innerHTML = currentActive2;
        }
        BTN_LEFT1000.addEventListener('click', moveLeft); //возвращаем возможность тыкать на кнопку
        BTN_RIGHT1000.addEventListener('click', moveRight); 
    }
});




//карусель в блоке testimonials

// делаем 11 карточек с отзывами
let commentCardsWrapper = document.querySelector('.testim-content__cards');

function createCommentCards() {
    let arrayOfComments = [];

    for (let i = 0; i <= 10; i++) {
        let cardGradient = document.createElement('div');
        cardGradient.classList.add('testim-card-gradient');
        commentCardsWrapper.append(cardGradient);

        let testimCard = document.createElement('div');
        testimCard.classList.add('testim-card');
        cardGradient.append(testimCard);

        let testimCardInfo = document.createElement('div');
        testimCardInfo.classList.add('testim-card__info');
        testimCard.append(testimCardInfo);

        let testimCardIcon = document.createElement('img');
        testimCardIcon.src = `${comments[i].img}`;
        testimCardInfo.append(testimCardIcon);

        let testimCardUser = document.createElement('div');
        testimCardUser.classList.add('testim-card__user');
        testimCardInfo.append(testimCardUser);

        let testimCardName = document.createElement('p');
        testimCardName.classList.add('testim-card__name');
        testimCardName.innerHTML = `${comments[i].name}`;
        testimCardUser.append(testimCardName);

        let testimCardLocation = document.createElement('p');
        testimCardLocation.classList.add('testim-card__location');
        testimCardLocation.innerHTML = `${comments[i].place}`;
        testimCardUser.append(testimCardLocation);

        let testimCardWrapper = document.createElement('div');
        testimCardWrapper.classList.add('testim-card__wrapper');
        testimCard.append(testimCardWrapper);

        let testimCardText = document.createElement('p');
        testimCardText.classList.add('testim-card__text');
        testimCardText.innerHTML = `${comments[i].comment}`
        testimCardWrapper.append(testimCardText);

        arrayOfComments.push(cardGradient);

    }
    return arrayOfComments;
}

commentCardsWrapper.append(...createCommentCards());



//функция для работы с input range
let progress = document.querySelector('.testim__progress');

function changeRange() {
    let shiftLeft = -290;
    let shiftLeft1000 = -313.3;
    let newValue = progress.value;

    if (window.innerWidth > 1300) {
        commentCardsWrapper.style.left = shiftLeft * newValue + 'px';
    } else if (window.innerWidth <= 1300) {
        progress.max = '8';
        commentCardsWrapper.style.left = shiftLeft1000 * newValue + 'px';
    }
}

progress.addEventListener('input', changeRange);



