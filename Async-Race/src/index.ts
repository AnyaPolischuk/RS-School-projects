import { createNewCar } from './components/garage_btns';
import { firstRenderPage } from './components/garage_render';

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

firstRenderPage();

const createCarBtn: HTMLInputElement | null = document.querySelector('.create_car_btn');
const removeCarBtn: HTMLInputElement | null = document.querySelector('.remove_btn');

createCarBtn?.addEventListener('click', createNewCar);
// removeCarBtn?.addEventListener('click', () => {
//     console.log('kek');
// });
