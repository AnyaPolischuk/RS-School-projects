import {
    createNewCar,
    deleteCarHandler,
    changeStyleOnBtnUpdate,
    updateCarHandler,
    animateCarHandler,
    stopBtnHandler,
} from './components/garage_btns';
import { firstRenderPage } from './components/garage_render';
import { getCar, deleteCar, getCars } from './components/app';

// updateCar(1, {
//     name: 'KEK',
//     color: '#ff0000',
// })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
alert('Добрый день! Проверье, пожалуйста, работу в четверг, если будет такая возможность. Не всё успела сделать(');
firstRenderPage().then(() => {
    deleteCarHandler();
    changeStyleOnBtnUpdate();
    updateCarHandler();
    animateCarHandler();
    stopBtnHandler();
});

const createCarBtn: HTMLInputElement | null = document.querySelector('.create_car_btn');
createCarBtn?.addEventListener('click', createNewCar);
