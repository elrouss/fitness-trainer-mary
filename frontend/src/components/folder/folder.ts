import type {
    IFolderPanelList,
    TFolderTab
} from './interfaces';

export class Folder {
    private root: HTMLDivElement;

    private tabsList: HTMLUListElement;
    private panelList: HTMLUListElement;

    private panelListItems: NodeListOf<HTMLLIElement>;

    private data?: IFolderPanelList;

    constructor (data?: IFolderPanelList) {
        this.root = document.querySelector('.folder') as HTMLDivElement;

        this.tabsList = this.root.querySelector('.folder__tabs-list') as HTMLUListElement;
        this.panelList = this.root.querySelector('.folder__panel-list') as HTMLUListElement;

        this.panelListItems = this.panelList.querySelectorAll('.folder__panel-list-item');

        this.data = data;

        this.render();

        this.tabsList.addEventListener('change', this.onTabHandler);
    }

    private onTabHandler = (event: Event) => {
        event.stopPropagation();

        const { target } = event;

        if (!(target instanceof HTMLElement)) {
            return;
        }

        const li = target.closest('.folder__tabs-list-item');

        if (!li) {
            return;
        }

        const tabLabel = (li.querySelector('.folder-tab__input') as HTMLInputElement).dataset.label as TFolderTab;

        this.panelListItems.forEach((panelListItem) => {
            if (panelListItem.dataset.label as TFolderTab === tabLabel) {
                panelListItem.classList.remove('hidden');
            } else {
                panelListItem.classList.add('hidden');
            }
        });
    };

    private renderImg = (src: string) => {
        const img = document.createElement('img');

        img.classList.add('folder__img');

        img.src = src;
        img.alt = ' ';

        return img;
    };

    private render = () => {
        if (!this.data) {
            return;
        }

        const panelListItems = Array.from(this.panelListItems);

        Object.keys(this.data).forEach((key) => {
            const k = key as TFolderTab;

            panelListItems.forEach((li) => {
                const documentFragment = document.createDocumentFragment();

                const { label } = li.dataset;
                const l = label as TFolderTab;

                if (k === l) {
                    this.data![k].forEach((item) => {
                        const img = this.renderImg(item);

                        documentFragment.append(img);
                    });

                    li.append(documentFragment);
                }
            });
        });
    };
}
