import type { IActivityCard } from 'components/activity-card/interfaces';
import type { TTabsPanelState } from 'pages/home/components/home/components/section-activities/interfaces';

export class ActivityCard {
    root: HTMLTemplateElement | null;

    type: TTabsPanelState;

    constructor (type: TTabsPanelState) {
        this.root = document.querySelector(`.activity-card-template_type_${type}`);

        this.type = type;
    }

    private renderPastTimeTemplate = (data: IActivityCard) => {
        const documentFragment = this.root!.content.cloneNode(true) as DocumentFragment;

        const card = documentFragment.querySelector('.activity-card') as HTMLElement;

        const title = card.querySelector('.activity-card__title') as HTMLHeadingElement;
        const img = card.querySelector('.activity-card__img') as HTMLImageElement;
        const description = card.querySelector('.activity-card__description') as HTMLParagraphElement;

        title.textContent = data.title;
        img.src = data.img;
        description.textContent = data.description;

        return card;
    };

    private renderFutureTimeTemplate = (data: IActivityCard) => {
        const documentFragment = this.root!.content.cloneNode(true) as DocumentFragment;

        const card = documentFragment.querySelector('.activity-card') as HTMLElement;

        const title = card.querySelector('.activity-card__title') as HTMLHeadingElement;
        const img = card.querySelector('.activity-card__img') as HTMLImageElement;
        const people = card.querySelector('.activity-card__people') as HTMLParagraphElement;
        const date = card.querySelector('.activity-card__date') as HTMLTimeElement;
        const dateStart = date.querySelector('.activity-card__date-start') as HTMLSpanElement;
        const dateEnd = date.querySelector('.activity-card__date-end') as HTMLSpanElement;
        const year = date.querySelector('.activity-card__year') as HTMLSpanElement;
        const place = card.querySelector('.activity-card__place') as HTMLElement;

        title.textContent = data.title;
        img.src = data.img;
        people.textContent = data.people;
        dateStart.textContent = data.dateStart;
        dateEnd.textContent = data.dateEnd;
        year.textContent = data.year;
        place.textContent = data.place;

        return card;
    };

    render = (data: IActivityCard): HTMLElement | null => {
        try {
            if (!(this.root instanceof HTMLTemplateElement)) {
                throw new Error('Не найден шаблон карточки');
            }

            switch (this.type) {
                case 'past':
                    return this.renderPastTimeTemplate(data);
                case 'future':
                    return this.renderFutureTimeTemplate(data);
                default:
                    throw new Error('Передан неправильный ключ для отрисовки шаблона карточки');
            }
        } catch (error) {
            console.error(error as string);

            return null;
        }
    };
}
