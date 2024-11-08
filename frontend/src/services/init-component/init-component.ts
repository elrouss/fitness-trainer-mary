export class InitComponent {
    static init = (className: string, createComponent: (root: Element | null) => void) => {
        const nodes = document.querySelectorAll(className);

        if (!nodes.length) {
            return;
        }

        nodes.forEach((node) => createComponent(node));
    };
}
