import type { IMultiselectTab } from './interfaces';

export class MultiselectTab {
    private root: HTMLTemplateElement;

    private data: IMultiselectTab;

    constructor (data: IMultiselectTab) {
        this.root = document.querySelector('.multiselect-tab-template') as HTMLTemplateElement;

        this.data = data;
    }

    render = () => {
        const tabContent = this.root.content.cloneNode(true) as DocumentFragment;

        const tab = tabContent.querySelector('.multiselect-tab') as HTMLSpanElement;
        const label = tab.querySelector('.multiselect-tab__label') as HTMLSpanElement;

        tab.setAttribute('data-value', this.data.value);
        label.textContent = this.data.label;

        return tab;
    };
}
