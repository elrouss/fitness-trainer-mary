const sectionsIds = [
    '#about',
    '#workout',
    '#results',
    '#activities'
] as const;

export class NavBar {
    root: HTMLElement;

    sections: Array<HTMLElement>;
    links: NodeListOf<HTMLAnchorElement>;

    constructor () {
        this.root = document.querySelector('.nav-bar') as HTMLElement;

        this.sections = sectionsIds.map((id) => document.querySelector(id) as HTMLElement);
        this.links = this.root.querySelectorAll('.nav-bar-link') as NodeListOf<HTMLAnchorElement>;

        window.addEventListener('scroll', this.highlightNavLink);
    }

    private highlightNavLink = () => {
        let current = '';

        this.sections.forEach((section) => {
            const {
                offsetTop,
                clientHeight
            } = section;

            if (window.scrollY >= offsetTop - (clientHeight / 3)) {
                current = section.getAttribute('id') as string;
            }
        });

        this.links.forEach((link) => {
            link.classList.remove('nav-bar-link_active');

            if (link.hash === `#${current}`) {
                link.classList.add('nav-bar-link_active');
            }
        });
    };
}

new NavBar();
