export interface IVariables {
    GARAGE: string;
    ENGINE: string;
    WINNERS: string;
}

export interface IBody {
    name: string;
    color: string;
}

export interface IBodyWinner {
    id: number;
    wins: number;
    time: number;
}

export interface IBodyUpdateWinner {
    wins: number;
    time: number;
}
