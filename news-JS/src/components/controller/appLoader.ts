import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '36f7599ad4ca4382b47aa75a0dc638d5', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
