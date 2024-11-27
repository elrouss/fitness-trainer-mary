import { Multiselect } from 'ui/multiselect/multiselect';

import { MOCK_FEEDBACK } from 'pages/home/components/home/components/mock/feedback';

class FeedbackFrom {
    private root: HTMLDivElement;

    private photoCover: HTMLImageElement;

    data: string;

    constructor (data: string) {
        this.root = document.querySelector('.feedback-form') as HTMLDivElement;

        this.photoCover = this.root.querySelector('.feedback-form__img') as HTMLImageElement;

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

new FeedbackFrom(MOCK_FEEDBACK.photoCover);
new Multiselect(MOCK_FEEDBACK.multiselect);
