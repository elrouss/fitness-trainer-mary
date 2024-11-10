import { InitComponent } from 'services/init-component/init-component';
import { BenefitCardImg } from 'components/benefit-card-img/components/benefit-card-img/benefit-card-img';
import { BenefitCardText } from 'components/benefit-card-text/components/benefit-card-text/benefit-card-text';

import { MOCK_BENEFITS } from '../mock/benefits';

import type {
    IBenefitCardImg,
    IBenefitCardText
} from 'types/benefit-card';

const classNames = {
    root: 'section-benefits__list'
} as const;

class SectionBenefits extends InitComponent {
    root: HTMLUListElement | null;
    textCardsCounter: number;

    constructor (root: HTMLUListElement | null) {
        super();

        this.root = root;
        this.textCardsCounter = 0;
    }

    renderSection = <T extends IBenefitCardImg | IBenefitCardText>(data: T[]) => {
        const fragment = document.createDocumentFragment();

        data.forEach((item) => {
            let benefitCard: HTMLElement | null = null;
            let benefitCardImgTemplate: BenefitCardImg | undefined;
            let benefitCardTextTemplate: BenefitCardText | undefined;

            if (item.theme === 'img') {
                benefitCardImgTemplate = new BenefitCardImg('.benefit-card-img-template');
            } else {
                benefitCardTextTemplate = new BenefitCardText('.benefit-card-text-template');
                this.incrementTextCardsCounter();
            }

            if (benefitCardImgTemplate) {
                benefitCard = benefitCardImgTemplate.render(item as IBenefitCardImg);
            } else if (benefitCardTextTemplate) {
                benefitCard = benefitCardTextTemplate.render(item as IBenefitCardText, this.textCardsCounter);
            }

            if (benefitCard) {
                const li = document.createElement('li');

                li.classList.add('section-benefits__list-item');
                li.append(benefitCard);

                fragment.append(li);
            }
        });

        this.root?.append(fragment);
    };

    private incrementTextCardsCounter = () => {
        this.textCardsCounter++;
    };

    static init = () => {
        InitComponent.init<HTMLUListElement>(`.${classNames.root}`, (root) => new SectionBenefits(root).renderSection(MOCK_BENEFITS));
    };
}

SectionBenefits.init();
