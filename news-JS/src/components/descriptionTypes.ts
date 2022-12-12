export interface INewsObj {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: { id: string; name: string };
    title: string;
    url: string;
    urlToImage: string;
}

export interface IOptions {
    sources?: string;
    apiKey?: string;
}

export type GetRespOptions = {
    sources: string;
    apiKey: string;
};

export type SourceData = {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
};

export interface ILoadData {
    sources: SourceData[];
    status: string;
}

export interface IArticleData {
    articles: INewsObj[];
}

export enum HTTPStatusCode {
    UNAUTHORIZED = 401,
    NOTFOUND = 404,
}
