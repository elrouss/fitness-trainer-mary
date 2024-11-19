import type { ITextCard } from './interfaces';

export class TextCard {
    root: HTMLTemplateElement | null;

    data: ITextCard | null;

    constructor (data: ITextCard | null) {
        this.root = document.querySelector('.text-card-template');

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

            const card = templateContent.querySelector('.text-card') as HTMLElement;

            const title = card.querySelector('.text-card__title') as HTMLHeadingElement;
            const description = card.querySelector('.text-card__description') as HTMLParagraphElement;

            description.textContent = this.data.description;

            if (this.data.title) {
                title.textContent = this.data.title;
            } else {
                title.classList.add('hidden');
            }

            if (this.data.accentDescription) {
                const accentDescription = document.createElement('strong');

                accentDescription.classList.add('text-card__description_accent', 'p1');
                accentDescription.textContent = this.data.accentDescription;

                description.appendChild(accentDescription);
            }

            return card;
        } catch (error) {
            console.error(error as string);

            return null;
        }
    };
}
