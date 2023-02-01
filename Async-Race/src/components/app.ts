import { IBody, IBodyUpdateWinner, IBodyWinner, IURL } from './interfaces';

const URLs: IURL = {
    GARAGE: 'http://127.0.0.1:3000/garage',
    ENGINE: 'http://127.0.0.1:3000/engine',
    WINNERS: 'http://127.0.0.1:3000/winners',
};

export const getCars = async (page?: number, limit = 7) => {
    const response = await fetch(`${URLs.GARAGE}?_page=${page}&_limit=${limit}`);

    return {
        cars: await response.json(),
        amount: response.headers.get('X-Total-Count'),
    };
};

export const getCar = async (id: number) => {
    const response = await fetch(`${URLs.GARAGE}/${id}`);
    return await response.json();
};

export const createCar = async (body: IBody) => {
    const response = await fetch(`${URLs.GARAGE}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    });
    return await response.json();
};

export const deleteCar = async (id: number) => {
    const response = await fetch(`${URLs.GARAGE}/${id}`, {
        method: 'DELETE',
    });
    return await response.json();
};

export const updateCar = async (id: number, body: IBody) => {
    const response = await fetch(`${URLs.GARAGE}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    });
    return await response.json();
};

export const startCarEngine = async (id: number) => {
    const response = await fetch(`${URLs.ENGINE}?id=${id}&status=started`, {
        method: 'PATCH',
    });
    return await response.json();
};

export const stopCarEngine = async (id: number) => {
    const response = await fetch(`${URLs.ENGINE}?id=${id}&status=stopped`, {
        method: 'PATCH',
    });
    return await response.json();
};

export const switchCarsEngine = async (id: number) => {
    const response = await fetch(`${URLs.ENGINE}?id=${id}&status=drive`, {
        method: 'PATCH',
    });
    return await response.json();
};

const getSortBy = (sort?: 'id' | 'wins' | 'time', order?: 'ASC' | 'DESC') => {
    if (sort && order) {
        return `&_sort=${sort}&_order=${order}`;
    } else return '';
};

/* export const getWinners = async (
    page?: number,
    limit?: number,
    sort?: 'id' | 'wins' | 'time',
    order?: 'ASC' | 'DESC'
) => {
    if (limit) {
        const response = await fetch(`${variables.WINNERS}?_page=${page}&_limit=${limit}${getSortBy(sort, order)}`);
        const items = await response.json();

        return {
            items: await Promise.all(
                items.map(async (winner: { id: number }) => ({ ...winner, car: await getCar(winner.id) }))),
            ),
            count: response.headers.get('X-Total-Count'),
        };
    }
};
*/

const getWinner = async (id: number) => {
    const response = await fetch(`${URLs.WINNERS}/${id}`);
    return await response.json;
};

const createWinner = async (body: IBodyWinner) => {
    const response = await fetch(`${URLs.WINNERS}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    });
    return await response.json();
};

const deleteWinner = async (id: number) => {
    const response = await fetch(`${URLs.WINNERS}/${id}`, {
        method: 'DELETE',
    });
    return await response.json();
};

const updateWinner = async (id: number, body: IBodyUpdateWinner) => {
    const response = await fetch(`${URLs.WINNERS}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    });
    return await response.json();
};
