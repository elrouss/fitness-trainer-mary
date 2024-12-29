export class Burger {
    private root: HTMLButtonElement;

    private navBar: HTMLDivElement;
    private navBarList: HTMLUListElement;

    constructor () {
        this.root = document.querySelector('.burger') as HTMLButtonElement;

        this.navBar = document.querySelector('.header__nav-bar') as HTMLDivElement;
        this.navBarList = this.navBar.querySelector('.nav-bar__list') as HTMLUListElement;

        this.root.addEventListener('click', this.toggle);
        this.navBarList.addEventListener('click', this.onNavLinkHandler);
    }

    private onNavLinkHandler = (event: Event) => {
        event.stopPropagation();

        const { target } = event;

        if (!(target instanceof HTMLElement)) {
            return;
        }

        if (target.classList.contains('nav-bar-link')) {
            this.onCloseHandler();
        }
    };

    private onOpenHandler = () => {
        this.root.classList.add('burger_open');

        this.navBar.classList.remove('visually-hidden');
        document.body.classList.add('scroll-lock');
    };

    private onCloseHandler = () => {
        this.root.classList.remove('burger_open');

        this.navBar.classList.add('visually-hidden');
        document.body.classList.remove('scroll-lock');
    };

    private toggle = () => {
        if (this.root.classList.contains('burger_open')) {
            this.onCloseHandler();
        } else {
            this.onOpenHandler();
        }
    };
}

new Burger();
