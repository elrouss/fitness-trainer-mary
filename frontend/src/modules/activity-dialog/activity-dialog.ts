import { Dialog } from 'components/dialog/components/dialog/dialog';
import { ActivityDetails } from './components/activity-details/activity-details';
import { ActivityForm } from './components/activity-form/activity-form';

import type {
    IActivityDialog,
    TActivityDialogState
} from './interfaces/interfaces';

export class ActivityDialog extends Dialog {
    wrapper: HTMLDivElement;

    details: HTMLDivElement;
    signup: HTMLDivElement;

    img: HTMLImageElement;

    detailsButton: HTMLButtonElement;
    signupButton?: HTMLButtonElement | null;

    constructor () {
        super('activity-dialog');

        this.wrapper = this.root!.querySelector('.activity-dialog__wrapper') as HTMLDivElement;

        this.details = this.wrapper.querySelector('.activity-details') as HTMLDivElement;
        this.signup = this.wrapper.querySelector('.activity-form') as HTMLDivElement;

        this.img = this.wrapper.querySelector('.activity-dialog__img')!.querySelector('img') as HTMLImageElement;

        this.detailsButton = this.signup.querySelector('.back-button') as HTMLButtonElement;
        this.signupButton = this.details.querySelector('.activity-details__signup-button');

        // TODO: тут переключать hidden?
        this.closeButton?.addEventListener('click', this.close);

        this.detailsButton.addEventListener('click', this.onDetailsHandler);
        this.signupButton?.addEventListener('click', this.onSignupHandler);
    }

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

        new ActivityDetails(this.details, type).render({ title, ...rest });
        new ActivityForm(this.signup).render(title);

        this.toggleDialogState(state);
    }
}
