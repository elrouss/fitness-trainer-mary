import Masonry from 'masonry-layout';

import type { TReviewsList } from './interfaces';

export class ReviewsList {
    private root: HTMLUListElement | null;
    private listItem: HTMLTemplateElement | null;

    private data: TReviewsList;

    constructor (data: TReviewsList) {
        this.root = document.querySelector('.reviews-list');
        this.listItem = document.querySelector('.reviews-list-item-template');

        this.data = data;

        window.addEventListener('load', this.createMasonryLayout);
    }

    private createMasonryLayout = () => {
        new Masonry('.reviews-list', {
            itemSelector: '.reviews-list-item',
            columnWidth: '.reviews-list__list-item-sizer',
            gutter: 16,
            percentPosition: true
        });
    };

    private createListItem = (item: string) => {
        try {
            if (!(this.listItem instanceof HTMLTemplateElement)) {
                throw new Error('Не найден шаблон элемента списка');
            }

            const listItemTemplateContent = this.listItem.content.cloneNode(true) as DocumentFragment;

            const listItem = listItemTemplateContent.querySelector('.reviews-list-item') as HTMLLIElement;
            const img = listItem.querySelector('img') as HTMLImageElement;

            img.src = item;

            return listItem;
        } catch (error) {
            console.error(error as string);

            return null;
        }
    };

    render = () => {
        if (this.root) {
            const fragment = document.createDocumentFragment();

            this.data.forEach((item) => {
                const listItem = this.createListItem(item);

                if (listItem) {
                    fragment.append(listItem);
                }
            });

            this.root.append(fragment);
        }
    };
}
