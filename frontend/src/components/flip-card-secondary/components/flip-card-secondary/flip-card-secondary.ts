import { InitComponent } from 'services/init-component/init-component';
import { OutlineButton } from 'ui/outline-button/outline-button';

import { formatPrice } from 'helpers/formatPrice';

import type { IFlipCard } from 'types/flip-card';

export class FlipCardSecondary extends InitComponent {
    rootClassName: string;

    constructor (rootClassName: string) {
        super();

        this.rootClassName = rootClassName;
    }

    render = ({
        theme,
        title,
        details,
        img,
        services
    }: IFlipCard): HTMLElement | null => {
        try {
            const template = document.querySelector(this.rootClassName);

            if (!(template instanceof HTMLTemplateElement)) {
                throw new Error('Не найден шаблон карточки');
            }

            const templateContent = template.content.cloneNode(true) as DocumentFragment;

            const card = templateContent.querySelector('.flip-card-secondary') as HTMLElement;

            const frontSide = card.querySelector('.flip-card-secondary__front') as HTMLDivElement;
            const frontSideTitle = frontSide.querySelector('.flip-card-secondary__title') as HTMLHeadingElement;
            const frontSideImg = frontSide.querySelector('.flip-card-secondary__img')?.querySelector('img') as HTMLImageElement;
            const frontSideAdditionalInfo = frontSide.querySelector('.flip-card-secondary__details') as HTMLParagraphElement;

            const backSide = card.querySelector('.flip-card-secondary__back') as HTMLDivElement;
            const backSideTitle = backSide.querySelector('.flip-card-secondary__title-back') as HTMLHeadingElement;
            const backSidePrice = backSide.querySelector('.flip-card-secondary__price') as HTMLParagraphElement;

            const buttonTemplate = new OutlineButton('.outline-button-template');
            const button = buttonTemplate.render({ text: 'Выбрать', theme: theme === 'brand' ? 'light' : 'dark' }) as HTMLButtonElement;

            card.classList.add(`flip-card-secondary_theme_${theme}`);

            frontSideTitle.textContent = title;
            frontSideAdditionalInfo.textContent = details || '';
            frontSideImg.src = img;
            frontSideImg.alt = title;
            backSideTitle.textContent = title;
            backSidePrice.textContent = formatPrice(services[0].price);
            backSide.append(button);

            return card;
        } catch (error) {
            console.error(error as string);

            return null;
        }
    };
}
