import Swiper from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';

import type {
    TSlide,
    TSlides
} from './interfaces';

export class Slider {
    root: HTMLDivElement;
    slidesWrapper: HTMLUListElement;

    data?: TSlides;

    constructor (data?: TSlides) {
        this.root = document.querySelector('.slider') as HTMLDivElement;
        this.slidesWrapper = this.root.querySelector('.slider__wrapper') as HTMLUListElement;

        this.data = data;

        this.init();
    }

    private init = () => {
        new Swiper('.slider', {
            spaceBetween: 16,
            loop: true,
            modules: [Autoplay, Navigation],
            autoplay: {
                delay: 2500
            },
            navigation: {
                prevEl: '.slider__nav-button-prev',
                nextEl: '.slider__nav-button-next'
            }
        });
    };

    private createSlide = (item: TSlide) => {
        const li = document.createElement('li');
        const img = document.createElement('img');

        li.classList.add('swiper-slide');
        img.classList.add('img__img');

        img.src = item;
        img.alt = ' ';

        li.append(img);

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
