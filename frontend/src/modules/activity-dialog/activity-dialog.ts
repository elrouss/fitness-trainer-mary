import { Dialog } from 'components/dialog/components/dialog/dialog';
import { ActivityDetails } from './components/activity-details/activity-details';
import { ActivityForm } from './components/activity-form/activity-form';

import type {
    TFormCustomEventDetail,
    TFormCustomEvent
} from 'modules/form/components/form/interfaces';
import type {
    IActivityDialog,
    TActivityDialogState
} from './interfaces/interfaces';

export class ActivityDialog extends Dialog {
    private wrapper: HTMLDivElement;

    private details: HTMLDivElement;
    private signup: HTMLDivElement;

    private img: HTMLImageElement;

    private detailsButton: HTMLButtonElement;
    private signupButton?: HTMLButtonElement | null;

    private resetForm: TFormCustomEventDetail['reset'] | null;

    private activityDetailsInstance: ActivityDetails;
    private activityFormInstance: ActivityForm;

    constructor () {
        super('activity-dialog');

        this.wrapper = this.root!.querySelector('.activity-dialog__wrapper') as HTMLDivElement;

        this.details = this.wrapper.querySelector('.activity-details') as HTMLDivElement;
        this.signup = this.wrapper.querySelector('.activity-form') as HTMLDivElement;

        this.img = this.wrapper.querySelector('.activity-dialog__img')!.querySelector('img') as HTMLImageElement;

        this.detailsButton = this.signup.querySelector('.back-button') as HTMLButtonElement;
        this.signupButton = this.details.querySelector('.activity-details__signup-button');

        this.resetForm = null;

        this.activityDetailsInstance = new ActivityDetails(this.details);
        this.activityFormInstance = new ActivityForm(this.signup);

        this.wrapper.addEventListener('customEventFormReset', ((event: CustomEvent) => this.setResetFormFunc(event)) as EventListener);

        this.detailsButton.addEventListener('click', this.onDetailsHandler);
        this.signupButton?.addEventListener('click', this.onSignupHandler);
    }

    private setResetFormFunc = (event: TFormCustomEvent) => {
        this.resetForm = event.detail.reset;
    };

    private toggleDialogState = (state: TActivityDialogState) => {
        switch (state) {
            case 'details':
                this.details.classList.remove('hidden');
                this.signup.classList.add('hidden');

                break;
            case 'signup':
                this.signup.classList.remove('hidden');
                this.details.classList.add('hidden');

                break;
            default:
                this.details.classList.add('hidden');
                this.signup.classList.add('hidden');
        }
    };

    private onDetailsHandler = () => {
        this.toggleDialogState('details');
    };

    private onSignupHandler = () => {
        this.toggleDialogState('signup');
    };

    openDialog ({
        data: {
            img,
            title,
            ...rest
        },
        type,
        state
    }: IActivityDialog) {
        super.open();

        this.img.src = img;
        this.img.title = title;

        this.activityDetailsInstance.render({ title, ...rest }, type);
        this.activityFormInstance.render(title);

        this.toggleDialogState(state);
    }

    close () {
        super.close();

        if (this.resetForm) {
            this.resetForm();

            this.resetForm = null;
        }
    }
}
