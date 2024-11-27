import type { IMultiselectOption } from './interfaces';

export class MultiselectOption {
    private root: HTMLTemplateElement;

    private data: IMultiselectOption;

    constructor (data: IMultiselectOption) {
        this.root = document.querySelector('.multiselect-option-template') as HTMLTemplateElement;

        this.data = data;
    }

    render = () => {
        const optionContent = this.root.content.cloneNode(true) as DocumentFragment;

        const option = optionContent.querySelector('.multiselect-option') as HTMLLIElement;

        const input = option.querySelector('.multiselect-option__input') as HTMLInputElement;
        const label = option.querySelector('.multiselect-option__label') as HTMLSpanElement;

        input.name = this.data.name;
        input.value = this.data.value;
        label.textContent = this.data.label;

        return option;
    };
}
