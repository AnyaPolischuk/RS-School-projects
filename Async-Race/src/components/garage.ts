import { getCars } from './app';

const ROOT = document.querySelector('.root');

export const renderGarage = () => {
    const GARAGE_BTN = document.createElement('button');
    GARAGE_BTN.innerHTML = 'Garage';
    ROOT?.appendChild(GARAGE_BTN);
    GARAGE_BTN.addEventListener('click', () => alert(1));

    const WRAPPER = document.createElement('div');
    const INPUT_CREATE_NAME = document.createElement('input');
    const INPUT_CREATE_COLOR = document.createElement('input');
    INPUT_CREATE_COLOR.type = 'color';
    WRAPPER.append(INPUT_CREATE_NAME);
    WRAPPER.append(INPUT_CREATE_COLOR);
    ROOT?.append(WRAPPER);

    const CREATE_CAR_BTN = document.createElement('button');
    CREATE_CAR_BTN.innerHTML = 'Create car';
    WRAPPER.appendChild(CREATE_CAR_BTN);
    CREATE_CAR_BTN.addEventListener('click', () => alert(3));
};

export const showInfoAboutGarage = async () => {
    const amountOfCars = await getCars().then((res) => res.amount);
    const GARAGE = document.createElement('h2');
    GARAGE.innerHTML = `GARAGE (${amountOfCars})`;
    ROOT?.append(GARAGE);
};

export const renderWinners = () => {
    const WINNERS_BTN = document.createElement('button');
    WINNERS_BTN.innerHTML = 'Winners';
    ROOT?.appendChild(WINNERS_BTN);
    WINNERS_BTN.addEventListener('click', () => alert(2));
};
