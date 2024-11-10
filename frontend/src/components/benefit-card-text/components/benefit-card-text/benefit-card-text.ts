import { InitComponent } from 'services/init-component/init-component';

import { IBenefitCardText } from 'types/benefit-card';

export class BenefitCardText extends InitComponent {
    rootClassName: string;

    constructor (rootClassName: string) {
        super();

        this.rootClassName = rootClassName;
    }

    render = (data: IBenefitCardText, cardsCounter: number): HTMLElement | null => {
        try {
            const template = document.querySelector(this.rootClassName);

            if (!(template instanceof HTMLTemplateElement)) {
                throw new Error('Не найден шаблон карточки');
            }

            const templateContent = template.content.cloneNode(true) as DocumentFragment;

            const card = templateContent.querySelector('.benefit-card-text') as HTMLElement;

            const counter = card.querySelector('.benefit-card-text__counter') as HTMLSpanElement;
            const title = card.querySelector('.benefit-card-text__title') as HTMLHeadingElement;
            const description = card.querySelector('.benefit-card-text__description') as HTMLParagraphElement;

            card.classList.add(`benefit-card-text_theme_${data.theme}`);

            counter.textContent = `${cardsCounter}.`;
            title.textContent = data.title;
            description.textContent = data.description;

            return card;
        } catch (error) {
            console.error(error as string);

            return null;
        }
    };
}
