export const renderWinners = () => {
    const winner_wrapper = document.createElement('div');
    winner_wrapper.classList.add('winners');
    winner_wrapper.classList.add('winners-not-active');

    const amount_winners = document.createElement('h2');
    amount_winners.innerHTML = 'Winners 1';
    winner_wrapper.append(amount_winners);

    const page = document.createElement('h2');
    page.innerHTML = 'Page 1';
    winner_wrapper.append(page);

    document.body.append(winner_wrapper);
};

export const showWinners = () => {
    const winner_wrapper = document.querySelector('.winners');
    const root = document.querySelector('.root');

    winner_wrapper?.classList.remove('winners-not-active');
    root?.classList.add('root-not-active');
};

export const hideWinners = () => {
    const winner_wrapper = document.querySelector('.winners');
    const root = document.querySelector('.root');

    root?.classList.remove('root-not-active');
    winner_wrapper?.classList.add('winners-not-active');
};
