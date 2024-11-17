import { Dialog } from 'components/dialog/components/dialog/dialog';

import { formatPrice } from 'helpers/formatPrice';

import type { IActivityCard } from 'components/activity-card/interfaces';
import type { TTabsPanelState } from 'pages/home/components/home/components/section-activities/interfaces';

export class ActivityDetails extends Dialog {
    container?: HTMLDivElement | null;

    img?: HTMLImageElement | null;
    title?: HTMLElement | null;
    description?: HTMLParagraphElement | null;
    price?: HTMLParagraphElement | null;
    address?: HTMLElement | null;
    people?: HTMLParagraphElement | null;
    dateStart?: HTMLSpanElement | null;
    dateEnd?: HTMLSpanElement | null;
    year?: HTMLSpanElement | null;
    signupButton?: HTMLButtonElement | null;

    type?: TTabsPanelState;

    constructor () {
        super();

        this.container = this.root?.querySelector('.activity-details__wrapper');

        if (!this.container) {
            return;
        }

        this.img = this.container.querySelector('.activity-details__img')?.querySelector('img');
        this.title = this.container.querySelector('.activity-details__title');
        this.description = this.container.querySelector('.activity-details__description');
        this.price = this.container.querySelector('.activity-details__price');
        this.address = this.container.querySelector('.activity-details__address');
        this.people = this.container.querySelector('.activity-details__people');
        this.dateStart = this.container.querySelector('.activity-details__date-start');
        this.dateEnd = this.container.querySelector('.activity-details__date-end');
        this.year = this.container.querySelector('.activity-details__year');
        this.signupButton = this.container.querySelector('.activity-details__signup-button');

        this.close = this.close.bind(this);

        this.closeButton?.addEventListener('click', this.close);
    }

    private render = (data: IActivityCard) => {
        if (
            !this.img
            || !this.title
            || !this.description
            || !this.address
            || !this.people
            || !this.dateStart
            || !this.dateEnd
            || !this.year
        ) {
            return;
        }

        this.img!.src = data?.img || '';
        this.img.alt = data?.title || '';
        this.title.textContent = data?.title || '';
        this.description.textContent = data?.description || '';
        this.address.textContent = data?.place || '';
        this.people.textContent = data?.people || '';
        this.dateStart.textContent = data?.dateStart || '';
        this.dateEnd.textContent = data?.dateEnd || '';
        this.year.textContent = data?.year || '';

        this.renderType(data);
    };

    private renderType = (data: IActivityCard) => {
        switch (this.type) {
            case 'past':
                this.signupButton?.classList.add('hidden');
                this.price!.parentElement!.classList.add('hidden');

                break;
            case 'future':
                this.price!.textContent = formatPrice(data?.price || 0);

                this.signupButton?.classList.remove('hidden');
                this.price!.parentElement!.classList.remove('hidden');

                break;
            default:
        }
    };

    openDialog (data: IActivityCard, type: TTabsPanelState) {
        super.open();

        this.type = type;

        this.render(data);
    }
}
