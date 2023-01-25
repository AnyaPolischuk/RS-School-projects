import { renderWinners, hideWinners, showWinners } from './components/winners/winners';
import {
    createNewCar,
    deleteCarHandler,
    changeStyleOnBtnUpdate,
    updateCarHandler,
    animateCarHandler,
    stopBtnHandler,
} from './components/garage/garage_btns';
import { firstRenderPage } from './components/garage/garage_render';

firstRenderPage().then(() => {
    deleteCarHandler();
    changeStyleOnBtnUpdate();
    updateCarHandler();
    animateCarHandler();
    stopBtnHandler();
    renderWinners();
});

const createCarBtn: HTMLInputElement | null = document.querySelector('.create_car_btn');
const garage_btn = document.querySelector('.btn_garage');
const winners_btn = document.querySelector('.btn_winners');

garage_btn?.addEventListener('click', hideWinners);
winners_btn?.addEventListener('click', showWinners);
createCarBtn?.addEventListener('click', createNewCar);
