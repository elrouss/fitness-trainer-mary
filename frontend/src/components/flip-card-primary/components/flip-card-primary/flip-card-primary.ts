import { InitComponent } from 'services/init-component/init-component';
import { OutlineButton } from 'ui/outline-button/outline-button';

import { formatPrice } from 'helpers/formatPrice';

import type { IFlipCard } from 'types/flip-card';

export class FlipCardPrimary extends InitComponent {
    rootClassName: string;

    constructor (rootClassName: string) {
        super();

        this.rootClassName = rootClassName;
    }

    render = ({
        theme,
        title,
        img,
        services,
        icon
    }: IFlipCard): HTMLElement | null => {
        try {
            const template = document.querySelector(this.rootClassName);

            if (!(template instanceof HTMLTemplateElement)) {
                throw new Error('Не найден шаблон карточки');
            }
            const templateContent = template.content.cloneNode(true) as DocumentFragment;

            const card = templateContent.querySelector('.flip-card-primary') as HTMLElement;

            const frontSide = card.querySelector('.flip-card-primary__front') as HTMLDivElement;
            const frontSideTitle = frontSide.querySelector('.flip-card-primary__title') as HTMLHeadingElement;
            const frontSideImg = frontSide.querySelector('.flip-card-primary__img') as HTMLImageElement;
            const frontSideServices = frontSide.querySelector('.flip-card-primary__services-list') as HTMLUListElement;

            const backSide = card.querySelector('.flip-card-primary__back') as HTMLDivElement;
            const backSideTitle = backSide.querySelector('.flip-card-primary__title-back') as HTMLHeadingElement;
            const backSideServices = backSide.querySelector('.flip-card-primary__price-list') as HTMLUListElement;

            card.classList.add(`flip-card-primary_theme_${theme}`);

            frontSideTitle.textContent = title;
            frontSideImg.src = img;
            frontSideImg.alt = title;
            frontSideServices.append(this.renderFrontSideServices(services));

            backSideTitle.textContent = title;
            backSideServices.append(this.renderBackSideServices(services, theme));

            this.hideIcon(frontSide, icon);

            return card;
        } catch (error) {
            console.error(error as string);

            return null;
        }
    };

    private renderFrontSideServices = (services: IFlipCard['services']) => {
        const fragment = document.createDocumentFragment();

        services.forEach((service) => {
            const li = document.createElement('li');

            li.classList.add('flip-card-primary__services-item');
            li.textContent = service.title;

            fragment.append(li);
        });

        return fragment;
    };

    private renderBackSideServices = (services: IFlipCard['services'], theme: IFlipCard['theme']) => {
        const fragment = document.createDocumentFragment();

        services.forEach((service) => {
            const li = document.createElement('li');
            const title = document.createElement('h4');
            const price = document.createElement('p');
            const buttonTemplate = new OutlineButton('.outline-button-template');
            const button = buttonTemplate.render({ text: 'Выбрать', theme: theme === 'brand' ? 'light' : 'dark' }) as HTMLButtonElement;

            li.classList.add('flip-card-primary__price-list-item');
            title.classList.add('flip-card-primary__price-list-item-title', 't1');
            price.classList.add('flip-card-primary__price', 'h2');

            title.textContent = service.title;
            price.textContent = formatPrice(service.price);

            li.append(title, price, button);

            fragment.append(li);
        });

        return fragment;
    };

    // Костыль
    private hideIcon = (frontSide: HTMLDivElement, icon: string) => {
        frontSide.querySelectorAll('svg').forEach((ico) => {
            if (!ico.classList.contains(`flip-card-primary__icon_${icon}`)) {
                ico.style.display = 'none';
            }
        });
    };
}
