import type { IFactCard } from './interfaces';

export class FactCard {
    root: HTMLTemplateElement | null;

    data: IFactCard | null;

    constructor (data: IFactCard | null) {
        this.root = document.querySelector('.fact-card-template');

        this.data = data;
    }

    render = () => {
        try {
            if (!(this.root instanceof HTMLTemplateElement)) {
                throw new Error('Не найден шаблон карточки');
            }

            if (!this.data) {
                throw new Error('Нет данных для отрисовки');
            }

            const templateContent = this.root.content.cloneNode(true) as DocumentFragment;

            const card = templateContent.querySelector('.fact-card') as HTMLElement;

            const title = card.querySelector('.fact-card__title') as HTMLHeadingElement;
            const subtitle = card.querySelector('.fact-card__subtitle') as HTMLParagraphElement;

            title.textContent = this.data.title;
            subtitle.textContent = this.data.subtitle;

            return card;
        } catch (error) {
            console.error(error as string);

            return null;
        }
    };
}
