import { InitComponent } from 'services/init-component/init-component';

const classNames = {
    accordion: 'accordion',
    accordionItem: 'accordion__item',
    accordionItemPanel: 'accordion-item__panel',
    accordionItemPanelHidden: 'accordion-item__panel_hidden',
    accordionItemPanelAnimation: 'accordion-item__panel_animation',
    accordionItemIconButton: 'accordion-item__icon-button',
    accordionItemIconButtonAnimation: 'accordion-item__icon-button_animation'
} as const;

export class Accordion extends InitComponent {
    root: Element | null;

    constructor (root: Element | null) {
        super();

        this.root = root;

        this.root?.addEventListener('click', this.onAccordionHandler);
        this.root?.addEventListener('keydown', this.onAccordionHandler);
    }

    private onAccordionHandler = (event: Event): void => {
        event.stopPropagation();

        if (event instanceof KeyboardEvent && !['Space, Enter'].includes(event.key)) {
            return;
        }

        const { target } = event;

        if (!(target instanceof HTMLElement || target instanceof SVGElement)) {
            return;
        }

        const item: HTMLLIElement | null = target.closest(`.${classNames.accordionItem}`);

        if (!item) {
            return;
        }

        const panel = item.querySelector(`.${classNames.accordionItemPanel}`) as HTMLSpanElement;
        const iconButton = item.querySelector(`.${classNames.accordionItemIconButton}`) as HTMLSpanElement;

        iconButton.classList.toggle(classNames.accordionItemIconButtonAnimation);

        if (panel.classList.contains(classNames.accordionItemPanelHidden)) {
            panel.classList.remove(classNames.accordionItemPanelHidden);
            panel.classList.add(classNames.accordionItemPanelAnimation);
        } else {
            panel.classList.remove(classNames.accordionItemPanelAnimation);
            setTimeout(() => panel.classList.add(classNames.accordionItemPanelHidden), 300);
        }
    };

    static init = () => {
        InitComponent.init(`.${classNames.accordion}`, (root) => new Accordion(root));
    };
}

Accordion.init();
