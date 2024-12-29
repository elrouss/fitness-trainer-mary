export class Dialog {
    root: HTMLDialogElement;

    closeButton: HTMLButtonElement;

    constructor (className: string) {
        this.root = document.querySelector(`.${className}`) as HTMLDialogElement;

        this.closeButton = this.root.querySelector('.dialog__close-button') as HTMLButtonElement;

        this.close = this.close.bind(this);

        this.root.addEventListener('close', this.setScrollBack);
        this.root.addEventListener('click', this.closeOnBackdrop);

        this.closeButton.addEventListener('click', this.close);
    }

    private setScrollBack = () => {
        document.body.classList.remove('scroll-lock');
    };

    private closeOnBackdrop = ({ target, currentTarget }: Event) => {
        const dialog = currentTarget;
        const isClickedOnBackdrop = target === dialog;

        if (!(dialog instanceof HTMLDialogElement) || !isClickedOnBackdrop) {
            return;
        }

        this.close();
    };

    open () {
        this.root.showModal();

        document.body.classList.add('scroll-lock');
    }

    close () {
        this.root.close();

        // this.root?.removeEventListener('close', this.setScrollBack);
        // this.root?.removeEventListener('click', this.closeOnBackdrop);
        // this.closeButton?.removeEventListener('click', this.close);
    }
}
