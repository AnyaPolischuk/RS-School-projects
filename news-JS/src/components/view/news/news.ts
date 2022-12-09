import './news.css';

interface NewsObj {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: { id: string; name: string };
    title: string;
    url: string;
    urlToImage: string;
}

class News {
    draw(data: NewsObj[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');

        news.forEach((item: NewsObj, idx: number) => {
            const newsClone = (newsItemTemp as HTMLTemplateElement).content.cloneNode(true) as DocumentFragment;

            if (idx % 2) (newsClone.querySelector('.news__item') as HTMLDivElement).classList.add('alt');

            (newsClone.querySelector('.news__meta-photo') as HTMLDivElement).style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            (newsClone.querySelector('.news__meta-author') as HTMLDivElement).textContent =
                item.author || item.source.name;
            (newsClone.querySelector('.news__meta-date') as HTMLDivElement).textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            (newsClone.querySelector('.news__description-title') as HTMLHeadingElement).textContent = item.title;
            (newsClone.querySelector('.news__description-source') as HTMLHeadingElement).textContent = item.source.name;
            (newsClone.querySelector('.news__description-content') as HTMLParagraphElement).textContent =
                item.description;
            (newsClone.querySelector('.news__read-more a') as HTMLAnchorElement).setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        (document.querySelector('.news') as HTMLDivElement).innerHTML = '';
        (document.querySelector('.news') as HTMLDivElement).appendChild(fragment);
    }
}

export default News;
