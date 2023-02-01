import { getCars } from '../app';
import './garage.css';

const ROOT = document.querySelector('.root');

const renderGarageBtn = () => {
    const garage_btn = document.createElement('button');
    garage_btn.innerHTML = 'Garage';
    garage_btn.classList.add('btn');
    garage_btn.classList.add('btn_garage');
    document.body.prepend(garage_btn);
};

const renderWinnersBtn = () => {
    const winners_btn = document.createElement('button');
    winners_btn.innerHTML = 'Winners';
    winners_btn.classList.add('btn');
    winners_btn.classList.add('btn_winners');
    document.body.prepend(winners_btn);
};

const renderGarageInputsCreate = () => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('inputs_wrapper');
    const input_create_name = document.createElement('input');
    input_create_name.classList.add('input_add_new_car');
    const input_create_color = document.createElement('input');
    input_create_color.classList.add('input_add_new_color_car');
    input_create_color.type = 'color';
    wrapper.append(input_create_name);
    wrapper.append(input_create_color);
    ROOT?.append(wrapper);

    const create_car_btn = document.createElement('button');
    create_car_btn.innerHTML = 'Create car';
    create_car_btn.classList.add('btn');
    create_car_btn.classList.add('create_car_btn');
    wrapper.appendChild(create_car_btn);
};

const renderGarageInputsUpdate = () => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('inputs_wrapper');
    const input_update_name = document.createElement('input');
    const input_update_color = document.createElement('input');
    input_update_name.classList.add('input_update_name');
    input_update_color.classList.add('input_update_color');
    input_update_color.type = 'color';
    wrapper.append(input_update_name);
    wrapper.append(input_update_color);
    ROOT?.append(wrapper);

    const update_car_btn = document.createElement('button');
    update_car_btn.innerHTML = 'Update car';
    update_car_btn.classList.add('btn');
    update_car_btn.classList.add('update_btn');
    wrapper.appendChild(update_car_btn);
};

const renderRaceResetGenerateBtns = () => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('inputs_wrapper');

    const race_btn = document.createElement('button');
    race_btn.innerHTML = 'Race';
    race_btn.classList.add('btn');
    wrapper.appendChild(race_btn);

    const reset_btn = document.createElement('button');
    reset_btn.innerHTML = 'Reset';
    reset_btn.classList.add('btn');
    wrapper.appendChild(reset_btn);

    const generate_btn = document.createElement('button');
    generate_btn.innerHTML = 'Generate';
    generate_btn.classList.add('btn');
    wrapper.appendChild(generate_btn);

    ROOT?.append(wrapper);
};

export const showInfoAboutGarage = async () => {
    const amountOfCars = await getCars().then((res) => res.amount);
    const garage = document.createElement('h2');
    garage.classList.add('amount_cars');
    garage.innerHTML = `GARAGE ${amountOfCars}`;
    ROOT?.append(garage);

    const page = document.createElement('h2');
    page.innerHTML = `PAGE #1`;
    ROOT?.append(page);
};

export const renderCarSVG = (color: string) => {
    const container = document.createElement('div');
    container.classList.add('container');
    ROOT?.append(container);
    const car_svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const car_use = document.createElementNS('http://www.w3.org/2000/svg', 'use');

    car_svg.innerHTML = `
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

    car_svg.style.fill = color;
    car_svg.classList.add('car');

    car_svg.appendChild(car_use);
    container?.append(car_svg);

    const start_btn = document.createElement('button');
    start_btn.innerHTML = 'A';
    start_btn.classList.add('start_btn');
    start_btn.classList.add('a_b_btns');
    container.append(start_btn);

    const stop_btn = document.createElement('button');
    stop_btn.innerHTML = 'B';
    stop_btn.classList.add('stop_btn');
    stop_btn.classList.add('a_b_btns');
    container.append(stop_btn);

    container.append(renderFlagSVG());
};

export const renderSelectAndRemoveBtns = (carName: string) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper_for_btns');

    ROOT?.append(wrapper);

    const select_btn = document.createElement('button');
    select_btn.innerHTML = 'Select';
    select_btn.classList.add('btn');
    select_btn.classList.add('select_btn');
    wrapper.append(select_btn);

    const remove_btn = document.createElement('button');
    remove_btn.innerHTML = 'Remove';
    remove_btn.classList.add('btn');
    remove_btn.classList.add('remove_btn');
    wrapper.append(remove_btn);

    const car_name = document.createElement('h3');
    car_name.innerHTML = carName;
    wrapper.append(car_name);
};

const renderFlagSVG = () => {
    const flag_svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const flag_use = document.createElementNS('http://www.w3.org/2000/svg', 'use');

    flag_svg.innerHTML = `
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

    flag_svg.classList.add('flag');
    flag_svg.appendChild(flag_use);
    return flag_svg;
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
    const pagination_wrapper = document.createElement('div');
    pagination_wrapper.classList.add('pagination-wrapper');

    const left_btn = document.createElement('button');
    left_btn.classList.add('pagination-btn');
    left_btn.classList.add('left-btn');
    left_btn.innerHTML = '<-';
    pagination_wrapper.append(left_btn);

    const page_number = document.createElement('div');
    page_number.classList.add('page_number');
    page_number.innerHTML = '1';
    pagination_wrapper.append(page_number);

    const right_btn = document.createElement('button');
    right_btn.classList.add('pagination-btn');
    right_btn.classList.add('right-btn');
    right_btn.innerHTML = '->';
    pagination_wrapper.append(right_btn);

    ROOT?.append(pagination_wrapper);
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
