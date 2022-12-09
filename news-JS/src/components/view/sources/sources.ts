import './sources.css';
import { sourceData } from '../../controller/loader';

class Sources {
    draw(data: sourceData[]) {
        console.log('data', data);
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            const sourceClone = (sourceItemTemp as HTMLTemplateElement).content.cloneNode(true) as DocumentFragment;

            (sourceClone.querySelector('.source__item-name') as HTMLDivElement).textContent = item.name;
            (sourceClone.querySelector('.source__item') as HTMLDivElement).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        (document.querySelector('.sources') as HTMLDivElement).append(fragment);
    }
}

export default Sources;
