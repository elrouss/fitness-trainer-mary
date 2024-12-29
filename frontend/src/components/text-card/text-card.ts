import { DiplomasDialog } from 'modules/diplomas-dialog/diplomas-dialog';

import type { ITextCard } from './interfaces';

export class TextCard {
    root: HTMLTemplateElement | null;

    dialog: DiplomasDialog | null;

    data: ITextCard | null;

    constructor (data: ITextCard | null) {
        this.root = document.querySelector('.text-card-template');

        this.dialog = null;

        this.data = data;
    }

    private onDiplomasDialogHandler = () => {
        this.dialog!.open();
    };

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

            if (this.data.portfolio) {
                this.dialog = new DiplomasDialog(this.data.portfolio);

                const button = document.createElement('button');

                button.classList.add('p2');
                button.textContent = 'Дипломы и сертификаты';

                button.addEventListener('click', this.onDiplomasDialogHandler);

                card.append(button);
            }

            return card;
        } catch (error) {
            console.error(error as string);

            return null;
        }
    };
}
