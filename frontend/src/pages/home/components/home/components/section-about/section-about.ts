import { InitComponent } from 'services/init-component/init-component';
import { FactCard } from 'components/fact-card/fact-card';
import { TextCard } from 'components/text-card/text-card';
import { Slider } from 'modules/slider/slider';

import { MOCK_ABOUT } from '../mock/about';

import type {
    ISectionAbout,
    IRenderTextCardParams
} from './interfaces';

const classNames = {
    root: 'section-about'
} as const;

class SectionAbout extends InitComponent {
    root: HTMLElement | null;
    rootWrapper?: HTMLDivElement | null;

    facts?: HTMLDivElement | null;
    img1?: HTMLImageElement | null;
    img2?: HTMLImageElement | null;

    data?: ISectionAbout | null;

    constructor (root: HTMLElement | null, data?: ISectionAbout | null) {
        super();

        this.root = root;
        this.rootWrapper = this.root?.querySelector('.section-about__wrapper');

        this.facts = this.root?.querySelector('.section-about__facts');
        this.img1 = this.root?.querySelector('.section-about__img_left')?.querySelector('img');
        this.img2 = this.root?.querySelector('.section-about__img_right')?.querySelector('img');

        this.data = data;

        this.renderTextCard({
            data: this.data?.text1,
            container: this.rootWrapper,
            action: 'prepend',
            className: 'section-about__text-card-about'
        });
        this.renderSlider();
        this.renderFacts();
        this.renderImgs();
        this.renderTextCard({
            data: this.data?.text2,
            container: this.facts,
            action: 'after',
            className: 'section-about__text-card-fact'
        });
    }

    private renderTextCard = ({
        className,
        data,
        container,
        action
    }: IRenderTextCardParams) => {
        try {
            if (!container) {
                throw new Error('Не найден контейнер для вставки контента');
            }

            if (!data) {
                throw new Error('Нет данных для отрисовки');
            }
            const card = new TextCard(data).render();

            if (!card) {
                throw new Error('Не удалось создание карточки');
            }

            if (className) {
                card.classList.add(className);
            }

            container[action](card);
        } catch (error) {
            console.error(error as string);
        }
    };

    private renderFacts = () => {
        if (!this.facts || !this.data?.facts) {
            return;
        }

        const fragment = document.createDocumentFragment();

        this.data.facts.forEach((fact) => {
            const card = new FactCard(fact).render();

            if (card) {
                fragment.append(card);
            }
        });

        this.facts.append(fragment);
    };

    private renderSlider = () => {
        if (!this.data?.slider) {
            return;
        }

        new Slider(this.data.slider).render();
    };

    private renderImgs = () => {
        if (!this.data?.img1 || !this.data?.img2) {
            return;
        }

        this.img1!.src = this.data.img1;
        this.img2!.src = this.data.img2;
    };

    static init = () => {
        InitComponent.init<HTMLElement>(`.${classNames.root}`, (root) => new SectionAbout(root, MOCK_ABOUT));
    };
}

SectionAbout.init();
