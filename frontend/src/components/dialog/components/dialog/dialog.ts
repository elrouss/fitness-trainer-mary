export class Dialog {
    root: HTMLDialogElement | null;

    closeButton?: HTMLButtonElement | null;

    constructor () {
        this.root = document.querySelector('.dialog');

        this.closeButton = this.root?.querySelector('.dialog__close-button');

        this.root?.addEventListener('close', this.setScrollBack);
        this.root?.addEventListener('click', this.closeOnBackdrop);

        this.closeButton?.addEventListener('click', this.close);
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

        dialog.close();
    };

    open () {
        this.root?.showModal();
        document.body.classList.add('scroll-lock');
    }

    close () {
        this.root?.close();

        // this.root?.removeEventListener('close', this.setScrollBack);
        // this.root?.removeEventListener('click', this.closeOnBackdrop);
        // this.closeButton?.removeEventListener('click', this.close);
    }
}
