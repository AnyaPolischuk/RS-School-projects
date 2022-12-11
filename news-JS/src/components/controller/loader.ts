import { NewsObj } from '../view/news/news';

interface Options {
    sources?: string;
    apiKey?: string;
}

type getRespOptions = {
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

//type Callback = <T>(data: T) => void;

enum HTTPStatusCode {
    unauthorized = 401,
    notFound = 404,
}
class Loader {
    private baseLink: string;
    private options: Options;
    constructor(baseLink: string, options: Options) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp(
        { endpoint, options = {} }: { endpoint: string; options?: Partial<getRespOptions> },
        callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load<LoadData>('GET', endpoint, callback, options);
    }

    private errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === HTTPStatusCode.unauthorized || res.status === HTTPStatusCode.notFound)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(options: Options, endpoint: string) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;
        //TODO: rename test
        const test = Object.keys(urlOptions) as Array<keyof typeof urlOptions>;
        test.forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    private load<T>(method: string, endpoint: string, callback: (data: T) => void, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => {
                //TODO: delete console.log
                //console.log('res', res);
                return res.json();
            })
            .then((data) => {
                //console.log('data', data);
                return callback(data);
            })
            .catch((err) => console.error(err));
    }
}

export default Loader;
