export class ActivityForm {
    root: HTMLDivElement;

    title: HTMLSpanElement;

    constructor (root: HTMLDivElement) {
        this.root = root;

        this.title = this.root.querySelector('.activity-form__title-name') as HTMLSpanElement;
    }

    render = (title: string) => {
        this.title.textContent = title;
    };
}
