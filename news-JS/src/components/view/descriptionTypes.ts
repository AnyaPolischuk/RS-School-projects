export interface NewsObj {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: { id: string; name: string };
    title: string;
    url: string;
    urlToImage: string;
}

export interface Options {
    sources?: string;
    apiKey?: string;
}

export type getRespOptions = {
    sources: string;
    apiKey: string;
};

export type sourceData = {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
};

export interface LoadData {
    sources: sourceData[];
    status: string;
}

export interface ArticleData {
    articles: NewsObj[];
}

export enum HTTPStatusCode {
    unauthorized = 401,
    notFound = 404,
}
