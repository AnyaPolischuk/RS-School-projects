const navLinks = document.querySelectorAll('.menu__link');
const footerLinks = document.querySelectorAll('.footer-menu__link');

// Подсвечивание активной ссылки меню
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

console.log(pets[0].animal);

let indexesOfArrays = [0, 1, 2, 3, 4, 5, 6, 7]

//перемешиваем массив с индексами
function shuffleArray() {
    let newShuffledArray = [];
    let sortedArray = indexesOfArrays.sort(() => Math.random() - 0.5);
    newShuffledArray.push(...sortedArray);

    return newShuffledArray;
}

let shuffledArray = shuffleArray();

//console.log(shuffleArray());
//console.log(shuffleArray());
//console.log(shuffleArray()[1]);

// Создаем карты с животными на странице

const petsCards = document.querySelector('.pets__cards');
// сделать аналогично для left и right


function createCard() {
    let array = shuffleArray();
    let animalCards = [];

    for (let i = 0; i < 6; i++) {
        let petCard = document.createElement('div');
        petCard.classList.add('pet-card');
        
        let petImg = document.createElement('img');
        petImg.classList.add('pet-card__photo');
        petImg.src = `${pets[array[i]].img}`;

        let petCardInfo = document.createElement('div');
        petCardInfo.classList.add('pet-card__info');

        petCard.append(petImg);
        petCard.append(petCardInfo);

        let petCardText = document.createElement('div');
        petCardText.classList.add('pet-card__text');
        petCardInfo.append(petCardText);

        let petCardTitle = document.createElement('h4');
        petCardTitle.classList.add('pet-card__title');
        petCardTitle.innerHTML = `${pets[array[i]].animal}`;
        petCardText.append(petCardTitle);

        let petCardNative = document.createElement('p');
        petCardNative.classList.add('pet-card__native');
        petCardNative.innerHTML = `${pets[array[i]].live}`;
        petCardText.append(petCardNative);

        let petCardIcon = document.createElement('img');
        petCardIcon.src = `${pets[array[i]].feedimg}`;
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
        petShadowTitle.innerHTML = `${pets[array[i]].animal}`;
        petShadowText.append(petShadowTitle);

        let petShadowNative = document.createElement('p');
        petShadowNative.classList.add('pet-shadow__native');
        petShadowNative.innerHTML = `${pets[array[i]].live}`;
        petShadowText.append(petShadowNative);


        animalCards.push(petCard)

    }
    return animalCards
    //return array;
}

petsCards.append(...createCard());

//console.log(createCard());
//console.log(createCard());


