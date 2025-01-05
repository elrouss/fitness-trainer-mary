import { Form } from 'modules/form';
import { Multiselect } from 'ui/multiselect/multiselect';

import { MOCK_FEEDBACK } from 'pages/home/components/home/components/mock/feedback';

class FeedbackForm extends Form {
    private feedbackForm: HTMLDivElement;

    private photoCover: HTMLImageElement;

    data: string;

    constructor (data: string) {
        super('feedback-form__form');

        this.feedbackForm = document.querySelector('.feedback-form') as HTMLDivElement;

        this.photoCover = this.feedbackForm.querySelector('.feedback-form__img') as HTMLImageElement;

        this.data = data;

        this.setPhotoCover();
    }

    setPhotoCover = () => {
        if (!this.data) {
            return;
        }

        this.photoCover.src = this.data;
    };
}

new FeedbackForm(MOCK_FEEDBACK.photoCover);
new Multiselect(MOCK_FEEDBACK.multiselect);
