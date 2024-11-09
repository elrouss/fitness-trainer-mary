import { InitComponent } from 'services/init-component/init-component';
import { FlipCardPrimary } from 'components/flip-card-primary/components/flip-card-primary/flip-card-primary';
import { FlipCardSecondary } from 'components/flip-card-secondary/components/flip-card-secondary/flip-card-secondary';

import { MOCK_WORKOUT } from '../mock/workout';
import { IFlipCard } from 'types/flip-card';

const classNames = {
    root: 'section-workout__cards-list',
    primaryFlipCard: 'flip-card-primary-template',
    secondaryFlipCard: 'flip-card-secondary-template'
} as const;

class SectionWorkout extends InitComponent {
    root: HTMLUListElement | null;

    constructor (root: HTMLUListElement | null) {
        super();

        this.root = root;
    }

    renderSection = (data: IFlipCard[]) => {
        const fragment = document.createDocumentFragment();

        data.forEach((item) => {
            const flipCardTemplate = item.type === 'primary'
                ? new FlipCardPrimary('.flip-card-primary-template')
                : new FlipCardSecondary('.flip-card-secondary-template');

            const flipCard = flipCardTemplate.render(item);

            const li = document.createElement('li');

            if (flipCard) {
                li.classList.add('section-workout__cards-list-item');
                li.append(flipCard);

                fragment.prepend(li);
            }
        });

        this.root?.prepend(fragment);
    };

    static init = () => {
        InitComponent.init<HTMLUListElement>(`.${classNames.root}`, (root) => new SectionWorkout(root).renderSection(MOCK_WORKOUT));
    };
}

SectionWorkout.init();
