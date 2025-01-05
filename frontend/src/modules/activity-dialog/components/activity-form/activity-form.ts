import { Form } from 'modules/form';

export class ActivityForm extends Form {
    private activityFormRoot: HTMLDivElement;

    private title: HTMLSpanElement;
    private activityFormBackButton: HTMLButtonElement;

    constructor (activityFormRoot: HTMLDivElement) {
        super('activity-form__form');

        this.activityFormRoot = activityFormRoot;

        this.title = this.activityFormRoot.querySelector('.activity-form__title-name') as HTMLSpanElement;
        this.activityFormBackButton = this.activityFormRoot.querySelector('.activity-form__back-button') as HTMLButtonElement;
    }

    onBackButtonHandler () {
        super.onBackButtonHandler();

        this.activityFormBackButton.classList.remove('hidden');
    }

    onSubmitFail () {
        super.onSubmitFail();

        this.activityFormBackButton.classList.add('hidden');
    }

    render = (title: string) => {
        this.title.textContent = title;
    };
}
