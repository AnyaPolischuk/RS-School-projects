import { createNewCar, updateCar, deleteCarHandler, changeStyleOnBtnUpdate, updateCarHandler } from './components/garage_btns';
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

firstRenderPage().then(() => {
    deleteCarHandler();
    // updateCar();
    changeStyleOnBtnUpdate();
    updateCarHandler();
});

const createCarBtn: HTMLInputElement | null = document.querySelector('.create_car_btn');
createCarBtn?.addEventListener('click', createNewCar);
