import { createCar, getCars, deleteCar, updateCar, startCarEngine, switchCarsEngine, stopCarEngine } from './app';
import { renderCarSVG, renderSelectAndRemoveBtns, showInfoAboutGarage } from './garage_render';

export const createNewCar = async () => {
    const inputNewCarName: HTMLInputElement | null = document.querySelector('.input_add_new_car');
    const inputNewCarColor: HTMLInputElement | null = document.querySelector('.input_add_new_color_car');

    if (inputNewCarName && inputNewCarColor) {
        const newCarName = inputNewCarName.value;
        const newCarColor = inputNewCarColor.value;
        renderSelectAndRemoveBtns(newCarName);
        renderCarSVG(newCarColor);
        await createCar({ name: newCarName, color: newCarColor });
        inputNewCarName.value = '';
    }
    getAmountOfCars();
    deleteCarHandler();
    changeStyleOnBtnUpdate();
    updateCarHandler();
    animateCarHandler();
};

export const deleteCarHandler = async () => {
    const removeCarBtn = document.querySelectorAll('.remove_btn');

    const addRemoveClickHandler = (btn: Element) => {
        btn.addEventListener('click', () => {
            getCars().then((res) => {
                const currentCar = res.cars.filter(
                    (item: { name: string | undefined }) => item.name === btn.nextElementSibling?.innerHTML
                );
                const ID = currentCar[0].id;
                deleteCar(ID);
            });
            btn.parentElement?.nextElementSibling?.remove();
            btn.parentElement?.remove();
            getAmountOfCars().then((res) => res);
        });
    };
    if (removeCarBtn) {
        for (let i = 0; i < removeCarBtn.length; i++) {
            addRemoveClickHandler(removeCarBtn[i]);
        }
    }
};

export const changeStyleOnBtnUpdate = () => {
    const selectCarBtn = document.querySelectorAll('.select_btn');
    selectCarBtn.forEach((btn) => {
        btn.addEventListener('click', () => btn.classList.add('btn_active'));
    });
};

export const updateCarHandler = () => {
    const updateCarBtn = document.querySelector<HTMLElement>('.update_btn');
    const selectCarBtn = document.querySelectorAll('.select_btn');
    const inputUpdateName: HTMLInputElement | null = document.querySelector('.input_update_name');
    const inputUpdateColor: HTMLInputElement | null = document.querySelector('.input_update_color');
    updateCarBtn?.addEventListener('click', () => {
        const btn = Array.from(selectCarBtn).filter((btn) => btn.classList.contains('btn_active'))[0];
        const nameOfCar = btn.nextElementSibling?.nextElementSibling;
        const colorOfCar = btn.parentElement?.nextElementSibling?.firstElementChild as HTMLElement | null;

        getCars().then((res) => {
            const currentCar = res.cars.filter(
                (item: { name: string | undefined }) =>
                    item.name === btn.nextElementSibling?.nextElementSibling?.innerHTML
            );
            console.log(currentCar[0]);

            if (nameOfCar && inputUpdateName && inputUpdateColor && colorOfCar) {
                nameOfCar.innerHTML = inputUpdateName?.value;
                colorOfCar.style.fill = inputUpdateColor.value;
                btn.classList.remove('btn_active');
            }

            const ID = currentCar[0].id;
            if (inputUpdateName && inputUpdateColor) {
                updateCar(ID, { name: inputUpdateName?.value, color: inputUpdateColor.value });
            }
        });
    });
};

export const animateCarHandler = () => {
    const startCarBtn = document.querySelectorAll('.start_btn');

    const animationHandler = (btn: Element) => {
        btn.addEventListener('click', () => {
            getCars().then((res) => {
                const currentCar = res.cars.filter(
                    (item: { name: string | undefined }) =>
                        item.name === btn.parentElement?.previousElementSibling?.lastElementChild?.innerHTML
                );
                const ID = currentCar[0].id;
                const carSVG = btn.previousElementSibling as HTMLElement | null;
                startCarEngine(ID).then((res) => {
                    const duration = res.distance / res.velocity;
                    const distance = res.distance;
                    let startAnimation: number | null = null;

                    switchCarsEngine(ID);
                    requestAnimationFrame(function measure(time: number) {
                        if (!startAnimation) {
                            startAnimation = time;
                        }
                        const progress = (time - startAnimation) / duration;
                        const translate = (progress * distance) / 300;
                        if (carSVG) {
                            carSVG.style.transform = `translateX(${translate}px)`;
                        }
                        if (progress < 1) {
                            requestAnimationFrame(measure);
                        }
                        switchCarsEngine(ID).then((res) => {
                            if (res.status === 500) {
                                cancelAnimationFrame(requestAnimationFrame(measure));
                            }
                        });
                    });
                });
            });
        });
    };
    if (startCarBtn) {
        for (let i = 0; i < startCarBtn.length; i++) {
            animationHandler(startCarBtn[i]);
        }
    }
};

export const stopBtnHandler = () => {
    const stopCarBtn = document.querySelectorAll('.stop_btn');

    const stopHandler = (btn: Element) => {
        btn.addEventListener('click', () => {
            getCars().then((res) => {
                const currentCar = res.cars.filter(
                    (item: { name: string | undefined }) =>
                        item.name === btn.parentElement?.previousElementSibling?.lastElementChild?.innerHTML
                );
                const ID = currentCar[0].id;
                const carSVG = btn.previousElementSibling?.previousElementSibling as HTMLElement | null;
                stopCarEngine(ID).then(() => {
                    if (carSVG) {
                        console.log('sfsf');
                        carSVG.style.left = 90 + 'px';
                    }
                });
            });
        });
    };
    if (stopCarBtn) {
        for (let i = 0; i < stopCarBtn.length; i++) {
            stopHandler(stopCarBtn[i]);
        }
    }
};

const getAmountOfCars = async () => {
    const amountOfCars: HTMLHeadingElement | null = document.querySelector('.amount_cars');
    const getAmountOfCars = await getCars().then((res) => res.cars.length);
    if (amountOfCars) {
        amountOfCars.innerHTML = `GARAGE (${getAmountOfCars})`;
    }
};
