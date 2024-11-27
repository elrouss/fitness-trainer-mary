import { MultiselectOption } from './components/multiselect-option/multiselect-option';
import { MultiselectTab } from './components/multiselect-tab/multiselect-tab';

import type { IMultiselect } from './interfaces';

export class Multiselect {
    private root: HTMLDivElement;

    private label: HTMLSpanElement;

    private inputContainer: HTMLDivElement;
    private inputPlaceholder: HTMLSpanElement;
    private inputIcon: HTMLSpanElement;
    private select: HTMLUListElement;

    private isSelectOpen: boolean;

    private data: IMultiselect;

    constructor (data: IMultiselect) {
        this.root = document.querySelector('.multiselect') as HTMLDivElement;

        this.label = this.root.querySelector('.multiselect__label') as HTMLSpanElement;

        this.inputContainer = this.root.querySelector('.multiselect__input-container') as HTMLDivElement;
        this.inputPlaceholder = this.inputContainer.querySelector('.multiselect__input-placeholder') as HTMLSpanElement;
        this.inputIcon = this.inputContainer.querySelector('.multiselect__input-icon-wrapper') as HTMLSpanElement;
        this.select = this.root.querySelector('.multiselect__select') as HTMLUListElement;

        this.isSelectOpen = false;

        this.data = data;

        this.renderOptions();

        this.label.addEventListener('click', this.onLabelHandler);
        this.inputContainer.addEventListener('click', this.onSelectStateHandler);
        this.inputContainer.addEventListener('click', this.onUncheckOptionHandler);
        this.select.addEventListener('change', this.onOptionHandler);
    }

    private renderOptions = () => {
        const fragment = document.createDocumentFragment();

        this.data.options.forEach((option) => {
            const opt = new MultiselectOption(option).render();

            fragment.append(opt);
        });

        this.select.append(fragment);
    };

    private onLabelHandler = (event: Event) => {
        this.onSelectStateHandler(event);
    };

    private onSelectStateHandler = (event: Event) => {
        event.stopPropagation();

        const { target } = event;

        if (!(target instanceof HTMLElement || target instanceof SVGElement) || target.closest('.multiselect-tab')) {
            return;
        }

        if (this.isSelectOpen) {
            this.onSelectCloseHandler();
        } else {
            this.onSelectOpenHandler();
        }
    };

    private onSelectOpenHandler = () => {
        this.select.classList.remove('visually-hidden');
        this.inputIcon.classList.add('multiselect__input-icon-wrapper_open');

        document.addEventListener('click', this.onBackdropSelectCloseHandler);

        this.isSelectOpen = true;
    };

    private onSelectCloseHandler = () => {
        this.select.classList.add('visually-hidden');
        this.inputIcon.classList.remove('multiselect__input-icon-wrapper_open');

        document.removeEventListener('click', this.onBackdropSelectCloseHandler);

        this.isSelectOpen = false;
    };

    private onBackdropSelectCloseHandler = (event: Event) => {
        const { target } = event;

        if (!(target instanceof HTMLElement) || target.closest('.multiselect__wrapper')) {
            return;
        }

        this.onSelectCloseHandler();
    };

    private onOptionHandler = (event: Event) => {
        event.stopPropagation();

        const { target } = event;

        if (!(target instanceof HTMLElement)) {
            return;
        }

        const option = target.closest('.multiselect-option') as HTMLLIElement;
        const checkbox = option.querySelector('.multiselect-option__input') as HTMLInputElement;
        const label = ((checkbox.nextElementSibling as HTMLSpanElement).textContent) as string;

        if (checkbox.checked) {
            this.onAddOptionHandler(label, checkbox.value);
        } else {
            this.onRemoveOptionHandler(checkbox.value);
        }
    };

    private onAddOptionHandler = (label: string, value: string) => {
        const tab = new MultiselectTab({ label, value }).render();

        this.inputContainer.append(tab);

        this.togglePlaceholderVisiblity();
    };

    private onRemoveOptionHandler = (value: string) => {
        const tab: HTMLSpanElement | null = this.inputContainer.querySelector(`.multiselect-tab[data-value=${value}]`);

        tab?.remove();

        this.togglePlaceholderVisiblity();
    };

    private onUncheckOptionHandler = (event: Event) => {
        event.stopPropagation();

        const { target } = event;

        if (!(target instanceof HTMLElement || target instanceof SVGElement) || !target.closest('.multiselect-tab__button')) {
            return;
        }

        const tab = target.closest('.multiselect-tab') as HTMLSpanElement;
        const v = tab.dataset.value as string;
        const checkbox = this.select.querySelector(`.multiselect-option__input[value=${v}]`) as HTMLInputElement;

        tab.remove();
        checkbox.checked = false;

        this.togglePlaceholderVisiblity();
    };

    private togglePlaceholderVisiblity = () => {
        const { length } = this.inputContainer.querySelectorAll('.multiselect-tab');

        this.inputPlaceholder.classList[length > 0 ? 'add' : 'remove']('hidden');
    };
}
