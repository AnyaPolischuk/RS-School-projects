interface IVariables {
    GARAGE: string;
    ENGINE: string;
    WINNERS: string;
}

interface IBody {
    name: string;
    color: string;
}

interface IBodyWinner {
    id: number;
    wins: number;
    time: number;
}

interface IBodyUpdateWinner {
    wins: number;
    time: number;
}

const variables: IVariables = {
    GARAGE: 'http://127.0.0.1:3000/garage',
    ENGINE: 'http://127.0.0.1:3000/engine',
    WINNERS: 'http://127.0.0.1:3000/winners',
};

export const getCars = async (page?: number, limit = 8) => {
    const response = await fetch(`${variables.GARAGE}?_page=${page}&_limit=${limit}`);

    return {
        cars: await response.json(),
        amount: response.headers.get('X-Total-Count'),
    };
};

export const getCar = async (id: number) => {
    const response = await fetch(`${variables.GARAGE}/${id}`);
    return await response.json();
};

export const createCar = async (body: IBody) => {
    const response = await fetch(`${variables.GARAGE}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    });
    return await response.json();
};

export const deleteCar = async (id: number) => {
    const response = await fetch(`${variables.GARAGE}/${id}`, {
        method: 'DELETE',
    });
    return await response.json();
};

export const updateCar = async (id: number, body: IBody) => {
    const response = await fetch(`${variables.GARAGE}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    });
    return await response.json();
};

export const startCarEngine = async (id: number) => {
    const response = await fetch(`${variables.ENGINE}?id=${id}&status=started`, {
        method: 'PATCH',
    });
    return await response.json();
};

export const stopCarEngine = async (id: number) => {
    const response = await fetch(`${variables.ENGINE}?id=${id}&status=stopped`, {
        method: 'PATCH',
    });
    return await response.json();
};

export const switchCarsEngine = async (id: number) => {
    const response = await fetch(`${variables.ENGINE}?id=${id}&status=drive`, {
        method: 'PATCH',
    });
    if (response.status === 200) {
        return await response.json();
    } else if (response.status === 404) {
        return 'Engine parameters for car with such id was not found in the garage. Have you tried to set engine status to "started" before?';
    } else if (response.status === 429) {
        return 'Drive already in progress. You can not run drive for the same car twice while it is not stopped.';
    } else if (response.status === 500) {
        return 'Car has been stopped suddenly. It is engine was broken down.';
    }
};

const getSortBy = (sort?: 'id' | 'wins' | 'time', order?: 'ASC' | 'DESC') => {
    if (sort && order) {
        return `&_sort=${sort}&_order=${order}`;
    } else return '';
};

//разобраться с Promise.all
// export const getWinners = async (
//     page?: number,
//     limit?: number,
//     sort?: 'id' | 'wins' | 'time',
//     order?: 'ASC' | 'DESC'
// ) => {
//     if (limit) {
//       const response = await fetch(`${variables.WINNERS}?_page=${page}&_limit=${limit}${getSortBy(sort, order)}`);
//     }
// };

const getWinner = async (id: number) => {
    const response = await fetch(`${variables.WINNERS}/${id}`);
    return await response.json;
};

const createWinner = async (body: IBodyWinner) => {
    const response = await fetch(`${variables.WINNERS}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    });
    return await response.json();
};

const deleteWinner = async (id: number) => {
    const response = await fetch(`${variables.WINNERS}/${id}`, {
        method: 'DELETE',
    });
    return await response.json();
};

const updateWinner = async (id: number, body: IBodyUpdateWinner) => {
    const response = await fetch(`${variables.WINNERS}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    });
    return await response.json();
};
