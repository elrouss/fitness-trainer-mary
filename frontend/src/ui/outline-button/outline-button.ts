import { InitComponent } from 'services/init-component/init-component';

interface IOutlineButtonProps {
    text: string;
    theme: 'light' | 'dark';
}

export class OutlineButton extends InitComponent {
    rootClassName: string;

    constructor (rootClassName: string) {
        super();

        this.rootClassName = rootClassName;
    }

    render = ({
        text,
        theme
    }: IOutlineButtonProps) => {
        try {
            const template = document.querySelector(this.rootClassName);

            if (!(template instanceof HTMLTemplateElement)) {
                throw new Error('Не найден шаблон кнопки');
            }

            const templateContent = template.content.cloneNode(true) as DocumentFragment;

            const button = templateContent.querySelector('.outline-button') as HTMLButtonElement;
            const buttonText = button.querySelector('.outline-button__text') as HTMLSpanElement;

            button.classList.add(`outline-button_theme_${theme}`);
            buttonText.textContent = text;

            return button;
        } catch (error) {
            console.error(error as string);

            return null;
        }
    };
}
