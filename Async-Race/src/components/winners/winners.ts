export const renderWinners = () => {
    const WINNER_WRAPPER = document.createElement('div');
    WINNER_WRAPPER.classList.add('winners');
    WINNER_WRAPPER.classList.add('winners-not-active');

    const AMOUNT_WINNERS = document.createElement('h2');
    AMOUNT_WINNERS.innerHTML = 'Winners 1';
    WINNER_WRAPPER.append(AMOUNT_WINNERS);

    const PAGE = document.createElement('h2');
    PAGE.innerHTML = 'Page 1';
    WINNER_WRAPPER.append(PAGE);

    document.body.append(WINNER_WRAPPER);
};

export const showWinners = () => {
    const WINNER_WRAPPER = document.querySelector('.winners');
    const ROOT = document.querySelector('.root');

    WINNER_WRAPPER?.classList.remove('winners-not-active');
    ROOT?.classList.add('root-not-active');
};

export const hideWinners = () => {
    const WINNER_WRAPPER = document.querySelector('.winners');
    const ROOT = document.querySelector('.root');

    ROOT?.classList.remove('root-not-active');
    WINNER_WRAPPER?.classList.add('winners-not-active');
};
