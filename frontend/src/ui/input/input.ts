import Inputmask from 'inputmask';

import { validationSettings } from './constants';

export class Input {
    private input: HTMLInputElement;
    private inputWrapper: HTMLDivElement;
    private inputMask: Inputmask.Instance | null;

    isValid: boolean;

    // Изначальная установка на обработчик change
    // для корректной работы поля с маской при автоподстановке
    private eventListeners: {
        input: boolean;
        change: boolean;
    };

    constructor (input: HTMLInputElement) {
        this.input = input;
        this.inputWrapper = this.input.closest('.input__input-wrapper') as HTMLDivElement;
        this.inputMask = null;

        this.isValid = false;

        this.eventListeners = {
            input: false,
            change: true
        };

        this.input.addEventListener('change', this.onInputHandler);
        this.input.addEventListener('blur', this.onInputBlurHandler);

        this.handleMask();
        this.onInputHandler();
    }

    private handleEventListeners = () => {
        if (this.eventListeners.change) {
            this.input.removeEventListener('change', this.onInputHandler);
            this.input.addEventListener('input', this.onInputHandler);

            this.eventListeners = {
                input: true,
                change: false
            };
        }
    };

    private handleMask = () => {
        if (this.input.type === 'tel') {
            this.inputMask = new Inputmask('+7 (999) 999-99-99', {
                inputmode: 'tel',
                showMaskOnHover: false
            });

            this.inputMask.mask(this.input);
        }
    };

    private onInputHandler = () => {
        const {
            type,
            name,
            dataset,
            value
        } = this.input;

        if (type === 'text') {
            if (name === 'name') {
                const formatValue = value.trim().replace(/[\s+]/gi, '');

                this.onInputValidation(name, formatValue);
            }
        }

        if (type === 'tel') {
            this.handleEventListeners();

            const formatValue = value.replace(/[\s]/g, '');

            this.onInputValidation(name, formatValue);
        }

        if (dataset.hasBlur) {
            this.onInputIconStatus();
        }
    };

    private onInputIconStatus = () => {
        const icon = this.inputWrapper.querySelector('.input__icon-status') as HTMLButtonElement;

        icon.classList.remove('hidden');

        if (this.isValid) {
            this.input.classList.remove('input__input_error');
            this.input.classList.add('input__input_success');

            icon.setAttribute('disabled', 'true');
            icon.classList.remove('input__icon-status_error');
            icon.classList.add('input__icon-status_success');
        } else {
            this.input.classList.remove('input__input_success');
            this.input.classList.add('input__input_error');

            icon.removeAttribute('disabled');
            icon.classList.remove('input__icon-status_success');
            icon.classList.add('input__icon-status_error');
        }
    };

    private onInputValidation = (key: string, value: string) => {
        let errorText = '';

        const {
            errors,
            messages
        } = validationSettings[key];

        if (errors.required && value.length < 1) {
            this.isValid = false;

            errorText = messages.required || '';
        } else if (errors.minLength && value.length < errors.minLength) {
            this.isValid = false;

            errorText = messages.minLength || '';
        } else if (errors.maxLength && value.length > errors.maxLength) {
            this.isValid = false;

            errorText = messages.maxLength || '';
        } else if (!errors.pattern.test(value)) {
            this.isValid = false;

            errorText = messages.pattern;
        } else {
            this.isValid = true;
        }

        this.onInputValidationMessage(errorText);
    };

    private onInputValidationMessage = (text: string) => {
        const tooltip = this.inputWrapper.querySelector('.input__tooltip') as HTMLDivElement;
        const tooltipText = tooltip.querySelector('.tooltip__text') as HTMLParagraphElement;

        tooltipText.textContent = text;
    };

    private onInputBlurHandler = () => {
        if (this.input.dataset.hasBlur) {
            return;
        }

        this.handleEventListeners();

        this.input.setAttribute('data-has-blur', 'true');
        this.onInputIconStatus();
    };
}
