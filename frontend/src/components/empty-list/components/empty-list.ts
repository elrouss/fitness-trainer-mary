export class EmptyList {
    root: HTMLTemplateElement | null;

    constructor () {
        this.root = document.querySelector('.empty-list-template');
    }

    render = (title: string, paragraph: string): HTMLElement | null => {
        try {
            if (!(this.root instanceof HTMLTemplateElement)) {
                throw new Error('Не найден шаблон карточки');
            }

            const templateContent = this.root.content.cloneNode(true) as DocumentFragment;

            const element = templateContent.querySelector('.empty-list') as HTMLElement;

            const titleElement = element?.querySelector('.empty-list__title') as HTMLHeadingElement;
            const paragraphElement = element?.querySelector('.empty-list__paragraph') as HTMLParagraphElement;

            titleElement.textContent = title;
            paragraphElement.textContent = paragraph;

            return element;
        } catch (error) {
            console.error(error as string);

            return null;
        }
    };
}
