import { createNewCar } from './components/garage_btns';
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
// let removeCarBtn: void | NodeListOf<Element> | PromiseLike<void>;
// firstRenderPage().then(() => {
//     removeCarBtn = document.querySelectorAll('.remove_btn');
//     console.log('1', removeCarBtn);
//     return new Promise<void>((resolve) => {
//         resolve(removeCarBtn);
//     });
// });

firstRenderPage().then(() => {
    const removeCarBtn = document.querySelectorAll('.remove_btn');

    const addRemoveClickHandler = (btn: Element, id: number) => {
        btn.addEventListener('click', () => {
            btn.parentElement?.nextElementSibling?.remove();
            btn.parentElement?.remove();
            deleteCar(id);
        });
    };
    if (removeCarBtn) {
        for (let i = 0; i < removeCarBtn.length; i++) {
            addRemoveClickHandler(removeCarBtn[i], i);
        }
    }
});

// (async () => {
//     console.log('1');
//     const renderPromise = firstRenderPage();
//     await renderPromise;

//     const removeCarBtn = await document.querySelectorAll('.remove_btn');

//     removeCarBtn.forEach((btn) => {
//         btn.addEventListener('click', () => alert(54));
//     });
// })();
const createCarBtn: HTMLInputElement | null = document.querySelector('.create_car_btn');

// const getRemoveBtn = async () => {
//     removeCarBtn = await document.querySelectorAll('.btn');
//     console.log(removeCarBtn);
//     return removeCarBtn;
// };

// getRemoveBtn();

createCarBtn?.addEventListener('click', createNewCar);

// const addRemoveClickHandler = (btn: Element) => {
//     btn.addEventListener('click', () => alert('kek'));
// };

// for (let i = 0; i < removeCarBtn.length; i++) {
//     addRemoveClickHandler(removeCarBtn[i]);
// }
// removeCarBtn.forEach((btn) => {
//     btn.addEventListener('click', () => alert(54));
// });
