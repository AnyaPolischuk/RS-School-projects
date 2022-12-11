import { Options, getRespOptions, LoadData, HTTPStatusCode } from '../view/descriptionTypes';
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
        const urlOptionsArr = Object.keys(urlOptions) as Array<keyof typeof urlOptions>;
        urlOptionsArr.forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    private load<T>(method: string, endpoint: string, callback: (data: T) => void, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
