import { hideWinners, showWinners } from './../winners/winners';
import { getCars } from '../app';
import './garage.css';
import car from '../../img/sprite.svg';
import finishFlag from '../../img/flag_sprite.svg';

const ROOT = document.querySelector('.root');

const renderGarageBtn = () => {
    const GARAGE_BTN = document.createElement('button');
    GARAGE_BTN.innerHTML = 'Garage';
    GARAGE_BTN.classList.add('btn');
    GARAGE_BTN.classList.add('btn_garage');
    document.body.prepend(GARAGE_BTN);
};

const renderWinnersBtn = () => {
    const WINNERS_BTN = document.createElement('button');
    WINNERS_BTN.innerHTML = 'Winners';
    WINNERS_BTN.classList.add('btn');
    WINNERS_BTN.classList.add('btn_winners');
    document.body.prepend(WINNERS_BTN);
};

const renderGarageInputsCreate = () => {
    const WRAPPER = document.createElement('div');
    WRAPPER.classList.add('inputs_wrapper');
    const INPUT_CREATE_NAME = document.createElement('input');
    INPUT_CREATE_NAME.classList.add('input_add_new_car');
    const INPUT_CREATE_COLOR = document.createElement('input');
    INPUT_CREATE_COLOR.classList.add('input_add_new_color_car');
    INPUT_CREATE_COLOR.type = 'color';
    WRAPPER.append(INPUT_CREATE_NAME);
    WRAPPER.append(INPUT_CREATE_COLOR);
    ROOT?.append(WRAPPER);

    const CREATE_CAR_BTN = document.createElement('button');
    CREATE_CAR_BTN.innerHTML = 'Create car';
    CREATE_CAR_BTN.classList.add('btn');
    CREATE_CAR_BTN.classList.add('create_car_btn');
    WRAPPER.appendChild(CREATE_CAR_BTN);
};

const renderGarageInputsUpdate = () => {
    const WRAPPER = document.createElement('div');
    WRAPPER.classList.add('inputs_wrapper');
    const INPUT_UPDATE_NAME = document.createElement('input');
    const INPUT_UPDATE_COLOR = document.createElement('input');
    INPUT_UPDATE_NAME.classList.add('input_update_name');
    INPUT_UPDATE_COLOR.classList.add('input_update_color');
    INPUT_UPDATE_COLOR.type = 'color';
    WRAPPER.append(INPUT_UPDATE_NAME);
    WRAPPER.append(INPUT_UPDATE_COLOR);
    ROOT?.append(WRAPPER);

    const UPDATE_CAR_BTN = document.createElement('button');
    UPDATE_CAR_BTN.innerHTML = 'Update car';
    UPDATE_CAR_BTN.classList.add('btn');
    UPDATE_CAR_BTN.classList.add('update_btn');
    WRAPPER.appendChild(UPDATE_CAR_BTN);
};

const renderRaceResetGenerateBtns = () => {
    const WRAPPER = document.createElement('div');
    WRAPPER.classList.add('inputs_wrapper');

    const RACE_BTN = document.createElement('button');
    RACE_BTN.innerHTML = 'Race';
    RACE_BTN.classList.add('btn');
    WRAPPER.appendChild(RACE_BTN);

    const RESET_BTN = document.createElement('button');
    RESET_BTN.innerHTML = 'Reset';
    RESET_BTN.classList.add('btn');
    WRAPPER.appendChild(RESET_BTN);

    const GENERATE_BTN = document.createElement('button');
    GENERATE_BTN.innerHTML = 'Generate';
    GENERATE_BTN.classList.add('btn');
    WRAPPER.appendChild(GENERATE_BTN);

    ROOT?.append(WRAPPER);
};

export const showInfoAboutGarage = async () => {
    const amountOfCars = await getCars().then((res) => res.amount);
    const GARAGE = document.createElement('h2');
    GARAGE.classList.add('amount_cars');
    GARAGE.innerHTML = `GARAGE ${amountOfCars}`;
    ROOT?.append(GARAGE);

    const PAGE = document.createElement('h2');
    PAGE.innerHTML = `PAGE #1`;
    ROOT?.append(PAGE);
};

export const renderCarSVG = (color: string) => {
    const CONTAINER = document.createElement('div');
    CONTAINER.classList.add('container');
    ROOT?.append(CONTAINER);
    const CAR_SVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const CAR_USE = document.createElementNS('http://www.w3.org/2000/svg', 'use');

    CAR_SVG.innerHTML = `
    <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)" stroke="none">
      <path d="M480 825 c-57 -15 -271 -48 -345 -53 l-90 -7 -24 -70 c-16 -46 -22
        -80 -18 -97 8 -32 62 -88 85 -88 9 0 29 -12 45 -27 41 -40 113 -40 154 0 l29
        27 283 0 283 0 35 -30 c49 -43 103 -40 158 11 16 14 40 19 110 21 l90 3 3 36
        c2 24 -4 43 -18 61 -25 33 -125 81 -211 103 -35 9 -116 37 -179 62 -113 45
        -117 46 -245 49 -71 2 -137 1 -145 -1z m60 -30 c0 -2 -5 -16 -12 -30 -10 -22
        -17 -26 -42 -21 -17 3 -60 8 -96 12 -50 6 -59 9 -42 15 40 15 192 34 192 24z
        m299 -36 c83 -33 83 -33 51 -42 -24 -6 -35 -4 -43 6 -7 8 -22 18 -35 22 -19 5
        -25 2 -29 -15 -5 -19 -11 -21 -47 -16 -23 3 -74 8 -113 12 -40 4 -73 11 -73
        16 0 5 8 20 17 34 16 26 19 26 102 22 67 -4 105 -13 170 -39z m-561 -135 c31
        -36 29 -79 -7 -115 -69 -68 -177 3 -140 93 25 60 103 72 147 22z m766 1 c55
        -51 19 -145 -56 -145 -37 1 -59 14 -76 47 -19 35 -14 63 17 94 37 37 78 38
        115 4z"></path>
            <path d="M165 596 c-31 -47 23 -104 73 -77 29 16 37 48 18 76 -22 34 -70 34
        -91 1z"></path>
            <path d="M947 602 c-22 -24 -21 -55 1 -75 37 -34 92 -11 92 38 0 50 -60 73
        -93 37z"></path>
    </g>`;

    CAR_SVG.style.fill = color;
    CAR_SVG.classList.add('car');

    CAR_SVG.appendChild(CAR_USE);
    CONTAINER?.append(CAR_SVG);

    const START_BTN = document.createElement('button');
    START_BTN.innerHTML = 'A';
    START_BTN.classList.add('start_btn');
    START_BTN.classList.add('a_b_btns');
    CONTAINER.append(START_BTN);

    const STOP_BTN = document.createElement('button');
    STOP_BTN.innerHTML = 'B';
    STOP_BTN.classList.add('stop_btn');
    STOP_BTN.classList.add('a_b_btns');
    CONTAINER.append(STOP_BTN);

    CONTAINER.append(renderFlagSVG());
};

export const renderSelectAndRemoveBtns = (carName: string) => {
    const WRAPPER = document.createElement('div');
    WRAPPER.classList.add('wrapper_for_btns');

    ROOT?.append(WRAPPER);

    const SELECT_BTN = document.createElement('button');
    SELECT_BTN.innerHTML = 'Select';
    SELECT_BTN.classList.add('btn');
    SELECT_BTN.classList.add('select_btn');
    WRAPPER.append(SELECT_BTN);

    const REMOVE_BTN = document.createElement('button');
    REMOVE_BTN.innerHTML = 'Remove';
    REMOVE_BTN.classList.add('btn');
    REMOVE_BTN.classList.add('remove_btn');
    WRAPPER.append(REMOVE_BTN);

    const CAR_NAME = document.createElement('h3');
    CAR_NAME.innerHTML = carName;
    WRAPPER.append(CAR_NAME);
};

const renderFlagSVG = () => {
    const FLAG_SVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const FLAG_USE = document.createElementNS('http://www.w3.org/2000/svg', 'use');

    FLAG_SVG.innerHTML = `
    <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
      <path d="M6 614 c-4 -10 1 -25 11 -36 10 -11 77 -142 148 -291 118 -246 155
        -308 155 -263 0 9 -27 70 -60 136 l-60 120 32 20 c54 33 114 36 183 11 33 -13
        74 -26 92 -31 36 -9 109 2 125 18 8 8 -6 48 -52 144 -34 73 -64 135 -67 138
        -2 2 -35 3 -73 2 -54 -3 -80 2 -122 20 -71 31 -157 31 -215 1 l-42 -22 -3 22
        c-4 27 -43 36 -52 11z m157 -58 l16 -35 -36 -21 c-19 -11 -37 -20 -38 -18 -1
        2 -10 18 -19 35 l-17 33 33 20 c18 11 36 20 39 20 3 0 13 -15 22 -34z m140 19
        c33 -13 65 -50 54 -61 -2 -2 -18 1 -36 7 -18 6 -34 9 -37 7 -2 -3 3 -22 11
        -43 9 -20 15 -38 13 -40 -2 -1 -22 -5 -44 -8 -41 -5 -42 -4 -60 35 -20 45 -12
        58 40 58 21 0 27 4 22 15 -3 8 -9 22 -12 30 -8 19 4 19 49 0z m202 -45 c21
        -41 19 -50 -15 -50 -23 0 -33 7 -45 30 -12 24 -13 31 -3 34 11 4 38 13 45 15
        1 1 9 -12 18 -29z m-58 -55 c7 -2 21 -22 33 -45 22 -44 16 -49 -34 -30 -30 11
        -33 2 -12 -39 l15 -27 -49 15 c-41 12 -51 20 -63 53 -17 42 -12 45 38 24 38
        -16 41 -13 20 24 -8 14 -14 28 -15 33 0 6 31 3 67 -8z m-204 -90 l17 -35 -30
        -15 c-40 -21 -44 -20 -63 19 -15 33 -15 35 6 50 34 24 52 19 70 -19z m342 -25
        c21 -40 19 -47 -14 -52 -25 -4 -31 1 -45 29 -22 46 -20 53 14 53 23 0 33 -7
        45 -30z"></path>
    </g>`;

    FLAG_SVG.classList.add('flag');
    FLAG_SVG.appendChild(FLAG_USE);
    return FLAG_SVG;
};

const renderAllCarsFirst = async () => {
    const allCars = await getCars().then((res) => res.cars);
    for (let i = 0; i < allCars.length; i++) {
        renderSelectAndRemoveBtns(allCars[i].name);
        renderCarSVG(allCars[i].color);
        renderFlagSVG();
    }
};

const renderPagination = () => {
    const PAGINATION_WRAPPER = document.createElement('div');
    PAGINATION_WRAPPER.classList.add('pagination-wrapper');

    const LEFT_BTN = document.createElement('button');
    LEFT_BTN.classList.add('pagination-btn');
    LEFT_BTN.classList.add('left-btn');
    LEFT_BTN.innerHTML = '<-';
    PAGINATION_WRAPPER.append(LEFT_BTN);

    const PAGE_NUMBER = document.createElement('div');
    PAGE_NUMBER.classList.add('page_number');
    PAGE_NUMBER.innerHTML = '1';
    PAGINATION_WRAPPER.append(PAGE_NUMBER);

    const RIGHT_BTN = document.createElement('button');
    RIGHT_BTN.classList.add('pagination-btn');
    RIGHT_BTN.classList.add('right-btn');
    RIGHT_BTN.innerHTML = '->';
    PAGINATION_WRAPPER.append(RIGHT_BTN);

    ROOT?.append(PAGINATION_WRAPPER);
};

export const firstRenderPage = async () => {
    renderWinnersBtn();
    renderGarageBtn();
    renderGarageInputsCreate();
    renderGarageInputsUpdate();
    renderRaceResetGenerateBtns();
    await showInfoAboutGarage();
    await renderAllCarsFirst();
};
