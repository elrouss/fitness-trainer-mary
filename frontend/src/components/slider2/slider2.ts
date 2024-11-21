import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import type {
    ISlide,
    TSlides
} from './interfaces';

export class Slider2 {
    root: HTMLDivElement;

    slidesWrapper: HTMLUListElement;
    slideTemplate: HTMLTemplateElement;

    data?: TSlides;

    constructor (data?: TSlides) {
        this.root = document.querySelector('.slider2') as HTMLDivElement;

        this.slidesWrapper = this.root.querySelector('.slider2__wrapper') as HTMLUListElement;
        this.slideTemplate = document.querySelector('.slider2-slide-template') as HTMLTemplateElement;

        this.data = data;

        this.init();
    }

    private init = () => {
        new Swiper('.slider2__slider', {
            spaceBetween: 16,
            slidesPerView: 'auto',
            modules: [Navigation],
            navigation: {
                prevEl: '.slider2__nav-button-prev',
                nextEl: '.slider2__nav-button-next'
            }
        });
    };

    private createSlide = (item: ISlide) => {
        const li = document.createElement('li');

        const templateContent = this.slideTemplate.content.cloneNode(true) as DocumentFragment;

        const card = templateContent.querySelector('.slider2-slide') as HTMLElement;
        const img = card.querySelector('.slider2-slide__img') as HTMLImageElement;
        const title = card.querySelector('.slider2-slide__title') as HTMLHeadingElement;
        const description = card.querySelector('.slider2-slide__description') as HTMLParagraphElement;

        li.classList.add('swiper-slide');

        title.textContent = item.age ? `${item.name}, ${item.age}` : item.name;
        description.textContent = item.description;
        img.src = item.img;

        li.append(card);

        return li;
    };

    render = () => {
        if (!this.data) {
            return;
        }

        const fragment = document.createDocumentFragment();

        this.data.forEach((item) => {
            const slide = this.createSlide(item);

            fragment.append(slide);
        });

        this.slidesWrapper.append(fragment);
    };
}
