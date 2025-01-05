import { Checkbox } from 'ui/checkbox/checkbox';
import { Input } from 'ui/input/input';

import type { TFormCustomEvent } from './interfaces';

export class Form {
    private root: HTMLDivElement;

    private form: HTMLFormElement;
    private formElements: Array<Input | Checkbox>;

    private formSuccessResult: HTMLDivElement;
    private formFailResult: HTMLDivElement;
    backButton: HTMLButtonElement;

    private submitButton: HTMLButtonElement;

    private isFormValid: boolean;

    constructor (className: string) {
        this.root = document.querySelector(`.${className}`) as HTMLDivElement;

        this.form = this.root.querySelector('.form__form') as HTMLFormElement;

        this.formElements = [];

        this.formSuccessResult = this.root.querySelector('.form-result_success') as HTMLDivElement;
        this.formFailResult = this.root.querySelector('.form-result_fail') as HTMLDivElement;
        this.backButton = this.formFailResult.querySelector('.form-result__back-button') as HTMLButtonElement;

        this.submitButton = this.form.querySelector('button[type="submit"]') as HTMLButtonElement;

        this.isFormValid = false;

        this.onBackButtonHandler = this.onBackButtonHandler.bind(this);
        this.onSubmitFail = this.onSubmitFail.bind(this);

        this.onFormValidation();

        this.form.addEventListener('input', this.onSubmitButtonDisability);
        this.form.addEventListener('change', this.onSubmitButtonDisability);

        this.form.addEventListener('submit', this.onSubmitHandler);

        this.backButton.addEventListener('click', this.onBackButtonHandler);
    }

    private reset = () => {
        this.form.classList.remove('hidden');
        this.formSuccessResult.classList.add('hidden');
        this.formFailResult.classList.add('hidden');
    };

    private onSubmitButtonDisability = () => {
        this.isFormValid = !this.formElements.some((formElement) => formElement.isValid === false);

        if (this.isFormValid) {
            this.submitButton.removeAttribute('disabled');
        } else {
            this.submitButton.setAttribute('disabled', 'true');
        }
    };

    private onFormValidation = () => {
        const inputs = this.form.querySelectorAll('input');

        inputs.forEach((input) => {
            if (['text', 'tel'].includes(input.type)) {
                this.formElements.push(new Input(input));
            }

            if (input.type === 'checkbox') {
                this.formElements.push(new Checkbox(input));
            }
        });

        this.onSubmitButtonDisability();
    };

    onBackButtonHandler () {
        this.formFailResult.classList.add('hidden');
        this.form.classList.remove('hidden');
    }

    private onSubmitPending = () => {
        this.submitButton.setAttribute('disabled', 'true');
        this.submitButton.classList.add('button_pending');
    };

    private onSubmitSuccess = () => {
        this.form.classList.add('hidden');
        this.formSuccessResult.classList.remove('hidden');
        this.submitButton.removeAttribute('disabled');
        this.submitButton.classList.remove('button_pending');
    };

    onSubmitFail () {
        this.form.classList.add('hidden');
        this.formFailResult.classList.remove('hidden');
        this.submitButton.removeAttribute('disabled');
        this.submitButton.classList.remove('button_pending');
    }

    onSubmitHandler = async (event: Event) => {
        event.preventDefault();

        if (!this.isFormValid) {
            return;
        }

        try {
            this.onSubmitPending();

            // Мок для успешного ответа
            setTimeout(() => {
                const customEvent: TFormCustomEvent = new CustomEvent('customEventFormReset', { detail: { reset: this.reset }, bubbles: true });

                this.onSubmitSuccess();

                this.form.dispatchEvent(customEvent);
            }, 3000);
        } catch (error) {
            this.onSubmitFail();

            console.error(error);
        }

        const formData = new FormData(this.form);

        console.log(formData.getAll('trainingType'));

        for (const [name, value] of formData) {
            console.log(name, value);
        }
    };
}
