import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { ILoadData, IArticleData } from '../descriptionTypes';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start() {
        (document.querySelector('.sources') as HTMLDivElement).addEventListener('click', (e) =>
            this.controller.getNews<IArticleData>(e, (data) => data && this.view.drawNews(data))
        );
        this.controller.getSources<ILoadData>((data) => data && this.view.drawSources(data));
    }
}

export default App;
