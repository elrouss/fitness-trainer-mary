import { formatPrice } from 'helpers/formatPrice';

import type { TTabsPanelState } from 'pages/home/components/home/components/section-activities/interfaces';
import type { TActivityDetails } from 'modules/activity-dialog/interfaces/interfaces';

export class ActivityDetails {
    private wrapper: HTMLDivElement;

    private title: HTMLHeadingElement;
    private description: HTMLParagraphElement;
    private price?: HTMLParagraphElement;
    private address: HTMLElement;
    private people: HTMLParagraphElement;
    private dateStart: HTMLSpanElement;
    private dateEnd: HTMLSpanElement;
    private year: HTMLSpanElement;
    private signupButton: HTMLButtonElement;

    private type?: TTabsPanelState;

    constructor (wrapper: HTMLDivElement) {
        this.wrapper = wrapper;

        this.title = this.wrapper.querySelector('.activity-details__title') as HTMLHeadingElement;
        this.description = this.wrapper.querySelector('.activity-details__description') as HTMLParagraphElement;
        this.price = this.wrapper.querySelector('.activity-details__price') as HTMLParagraphElement;
        this.address = this.wrapper.querySelector('.activity-details__address') as HTMLElement;
        this.people = this.wrapper.querySelector('.activity-details__people') as HTMLParagraphElement;
        this.dateStart = this.wrapper.querySelector('.activity-details__date-start') as HTMLSpanElement;
        this.dateEnd = this.wrapper.querySelector('.activity-details__date-end') as HTMLSpanElement;
        this.year = this.wrapper.querySelector('.activity-details__year') as HTMLSpanElement;
        this.signupButton = this.wrapper.querySelector('.activity-details__signup-button') as HTMLButtonElement;
    }

    private renderType = (data: TActivityDetails) => {
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

    render = (data: TActivityDetails, type: TTabsPanelState) => {
        this.type = type;

        this.title.textContent = data?.title || '';
        this.description.textContent = data?.description || '';
        this.address.textContent = data?.place || '';
        this.people.textContent = data?.people || '';
        this.dateStart.textContent = data?.dateStart || '';
        this.dateEnd.textContent = data?.dateEnd || '';
        this.year.textContent = data?.year || '';

        this.renderType(data);
    };
}
