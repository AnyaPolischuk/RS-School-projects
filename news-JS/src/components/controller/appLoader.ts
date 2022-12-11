import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.up.railway.app/', {
            apiKey: '36f7599ad4ca4382b47aa75a0dc638d5', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
