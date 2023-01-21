import { createCar, getCars, deleteCar } from './app';
import { renderCarSVG, renderSelectAndRemoveBtns, showInfoAboutGarage } from './garage_render';

export const createNewCar = async () => {
    const inputNewCarName: HTMLInputElement | null = document.querySelector('.input_add_new_car');
    const inputNewCarColor: HTMLInputElement | null = document.querySelector('.input_add_new_color_car');
    const amountOfCars: HTMLHeadingElement | null = document.querySelector('.amount_cars');

    if (inputNewCarName && inputNewCarColor) {
        const newCarName = inputNewCarName.value;
        const newCarColor = inputNewCarColor.value;
        renderSelectAndRemoveBtns(newCarName);
        renderCarSVG(newCarColor);
        await createCar({ name: newCarName, color: newCarColor });
        inputNewCarName.value = '';
    }
    const getAmountOfCars = await getCars().then((res) => res.amount);
    if (amountOfCars) {
        amountOfCars.innerHTML = `GARAGE (${getAmountOfCars})`;
    }
    deleteCarHandler();
};

const deleteCarHandler = () => {
    const removeCarBtn = document.querySelectorAll('.remove_btn');

    const addRemoveClickHandler = (btn: Element, id: number) => {
        btn.addEventListener('click', async () => {
            btn.parentElement?.nextElementSibling?.remove();
            btn.parentElement?.remove();
            const getAmountOfCars = await getCars().then((res) => res.amount);
            deleteCar(id);
        });
    };
    if (removeCarBtn) {
        for (let i = 0; i < removeCarBtn.length; i++) {
            addRemoveClickHandler(removeCarBtn[i], i);
        }
    }
};
