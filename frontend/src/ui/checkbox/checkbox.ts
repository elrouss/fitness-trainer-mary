export class Checkbox {
    private input: HTMLInputElement;

    isValid: boolean;

    constructor (input: HTMLInputElement) {
        this.input = input;

        this.isValid = this.input.validity.valid;

        input.addEventListener('change', this.onCheckboxChangeHandler);
    }

    private onCheckboxChangeHandler = () => {
        const checkbox = this.input.closest('.checkbox') as HTMLLabelElement;

        this.isValid = this.input.validity.valid;

        if (!this.isValid) {
            checkbox.classList.add('checkbox_error');
        } else {
            checkbox.classList.remove('checkbox_error');
        }
    };
}
