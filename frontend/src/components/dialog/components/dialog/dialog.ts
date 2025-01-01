export class Dialog {
    root: HTMLDivElement;

    closeButton: HTMLButtonElement;

    constructor (className: string) {
        this.root = document.querySelector(`.${className}`) as HTMLDivElement;

        this.closeButton = this.root.querySelector('.dialog__close-button') as HTMLButtonElement;

        this.close = this.close.bind(this);

        this.root.addEventListener('click', this.closeOnBackdrop);

        this.closeButton.addEventListener('click', this.close);
    }

    private closeOnBackdrop = ({ target, currentTarget }: Event) => {
        const dialog = currentTarget;
        const isClickedOnBackdrop = target === dialog;

        if (!(dialog instanceof HTMLDivElement) || !isClickedOnBackdrop) {
            return;
        }

        this.close();
    };

    private closeOnEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            this.close();
        }
    };

    open () {
        this.root.classList.add('dialog_open');
        document.body.classList.add('scroll-lock');

        document.addEventListener('keydown', this.closeOnEscape);
    }

    close () {
        this.root.classList.remove('dialog_open');
        document.body.classList.remove('scroll-lock');

        document.removeEventListener('keydown', this.closeOnEscape);
    }
}
