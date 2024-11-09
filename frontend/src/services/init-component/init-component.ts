export class InitComponent {
    static init<T extends Element>(className: string, createComponent: (root: T | null) => void) {
        const nodes = document.querySelectorAll(className);

        if (!nodes.length) {
            return;
        }

        nodes.forEach((node) => createComponent(node as T));
    }
}
