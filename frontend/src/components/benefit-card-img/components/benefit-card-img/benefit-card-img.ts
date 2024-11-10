import { InitComponent } from 'services/init-component/init-component';

import type { IBenefitCardImg } from 'types/benefit-card';

export class BenefitCardImg extends InitComponent {
    rootClassName: string;

    constructor (rootClassName: string) {
        super();

        this.rootClassName = rootClassName;
    }

    render = (data: IBenefitCardImg): HTMLElement | null => {
        try {
            const template = document.querySelector(this.rootClassName);

            if (!(template instanceof HTMLTemplateElement)) {
                throw new Error('Не найден шаблон карточки');
            }

            const templateContent = template.content.cloneNode(true) as DocumentFragment;

            const card = templateContent.querySelector('.benefit-card-img') as HTMLElement;

            const img = card.querySelector('.benefit-card-img__img') as HTMLImageElement;

            img.src = data.img;
            img.alt = data.alt;

            return card;
        } catch (error) {
            console.error(error as string);

            return null;
        }
    };
}
