import { BREAKPOINTS } from 'constants/breakpoints';

export class Burger {
    private root: HTMLButtonElement;

    private header: HTMLElement;
    private navBar: HTMLDivElement;
    private navBarList: HTMLUListElement;

    constructor () {
        this.root = document.querySelector('.burger') as HTMLButtonElement;

        this.header = document.querySelector('.header') as HTMLElement;
        this.navBar = this.header.querySelector('.header__nav-bar') as HTMLDivElement;
        this.navBarList = this.navBar.querySelector('.nav-bar__list') as HTMLUListElement;

        this.root.addEventListener('click', this.toggle);
        this.navBarList.addEventListener('click', this.onNavLinkHandler);
    }

    private onResizeHandler = () => {
        if (window.innerWidth > BREAKPOINTS.lg) {
            this.onCloseHandler();
        }
    };

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

        this.header.classList.add('header_height');
        this.navBar.classList.add('header__nav-bar_height');
        this.navBar.classList.remove('visually-hidden');
        document.body.classList.add('scroll-lock');

        window.addEventListener('resize', this.onResizeHandler);
    };

    private onCloseHandler = () => {
        this.root.classList.remove('burger_open');

        this.header.classList.remove('header_height');
        this.navBar.classList.remove('header__nav-bar_height');
        this.navBar.classList.add('visually-hidden');
        document.body.classList.remove('scroll-lock');

        window.removeEventListener('resize', this.onResizeHandler);
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
