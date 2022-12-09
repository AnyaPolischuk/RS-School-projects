import { NewsObj } from '../view/news/news';

interface Options {
    sources?: string;
    apiKey?: string;
}
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
class Loader {
    baseLink: string;
    options: Options;
    constructor(baseLink: string, options: Options) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: { endpoint: string; options?: Options },
        callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: Options, endpoint: string) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;
        const test = Object.keys(urlOptions) as Array<keyof typeof urlOptions>;
        test.forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: string, endpoint: string, callback: (data: LoadData) => void, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => {
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
