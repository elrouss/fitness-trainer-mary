import { InitComponent } from 'services/init-component/init-component';

import { ActivityCard } from 'components/activity-card/components/activity-card/activity-card';
import { ActivityDialog } from 'modules/activity-dialog/activity-dialog';
import { EmptyList } from 'components/empty-list/components/empty-list';

import { MOCK_ACTIVITIES } from '../mock/activities';
import { emptyListData } from './constants';

import type {
    TTabsPanelState,
    TActivities
} from './interfaces';
import type { IActivityCard } from 'components/activity-card/interfaces';

const classNames = {
    root: 'section-activities'
} as const;

class SectionActivities extends InitComponent {
    root: HTMLElement | null;

    tabs?: HTMLUListElement | null;
    tabsPanel?: HTMLUListElement | null;
    moreButton?: HTMLButtonElement | null;

    tabsPanelState: 'past' | 'future';
    tabsPanelData: TActivities;
    tabsPanelShowedItemsQuantity: number;

    dialog: ActivityDialog | null;

    constructor (root: HTMLElement | null, data: TActivities) {
        super();

        this.root = root;

        this.tabs = this.root?.querySelector('.section-activities__tabs');
        this.tabsPanel = this.root?.querySelector('.section-activities__list');
        this.moreButton = this.root?.querySelector('.section-activities__more-button');

        this.tabsPanelState = 'future';
        this.tabsPanelData = data;
        this.tabsPanelShowedItemsQuantity = 2;

        this.dialog = new ActivityDialog();

        this.renderList(this.tabsPanelData);
        this.toggleMoreButtonState();

        this.tabs?.addEventListener('change', this.onToggleTabsHandler);
        this.moreButton?.addEventListener('click', this.onMoreButtonHandler);

        this.tabsPanel?.addEventListener('click', this.openDialog);
    }

    private setTabsPanelInitialQuantity = (quantity = 2) => {
        this.tabsPanelShowedItemsQuantity = quantity;
    };

    private onToggleTabsHandler = (event: Event) => {
        if (!this.tabs) {
            return;
        }

        event.stopPropagation();

        const { target } = event;

        if (!(target instanceof HTMLElement)) {
            return;
        }

        const tab = target.closest('.section-activities__tab') as HTMLLabelElement;
        const tabInput = tab.querySelector('input') as HTMLInputElement;
        const tabValue = tabInput.value as TTabsPanelState;

        this.toggleTabPanelsState(tabValue);
    };

    private toggleTabPanelsState = (newState: TTabsPanelState) => {
        this.tabsPanelState = newState;

        this.clearTabsPanel();
        this.setTabsPanelInitialQuantity();
        this.renderList(this.tabsPanelData);
    };

    private clearTabsPanel = () => {
        if (!this.tabsPanel) {
            return;
        }

        this.tabsPanel.innerHTML = '';
    };

    private renderList = (data: TActivities) => {
        const selectedData = data[this.tabsPanelState];
        let fragment: DocumentFragment | null = null;

        if (selectedData.length) {
            fragment = this.renderFullList(selectedData);

            this.tabsPanel?.classList.remove('section-activities__list_empty');
        } else {
            fragment = this.renderEmptyList();

            this.tabsPanel?.classList.add('section-activities__list_empty');
        }

        this.tabsPanel?.append(fragment);

        this.toggleMoreButtonState();
    };

    private renderFullList = (data: IActivityCard[]) => {
        const fragment = document.createDocumentFragment();

        data
            .slice(0, this.tabsPanelShowedItemsQuantity)
            .forEach((item, i) => {
                const activityCard = new ActivityCard(this.tabsPanelState).render(item);

                if (activityCard) {
                    const li = document.createElement('li');

                    li.classList.add('section-activities__list-item');
                    li.setAttribute('data-index', String(i));
                    li.append(activityCard);

                    fragment.append(li);
                }
            });

        return fragment;
    };

    private renderEmptyList = () => {
        const emptyList = new EmptyList().render(emptyListData.title, emptyListData.paragraph);
        const fragment = document.createDocumentFragment();

        if (emptyList) {
            const li = document.createElement('li');

            li.classList.add('section-activities__list-item');
            li.append(emptyList);

            fragment.append(li);
        }

        return fragment;
    };

    private toggleMoreButtonState = () => {
        if (this.tabsPanelData[this.tabsPanelState].length <= this.tabsPanelShowedItemsQuantity) {
            this.moreButton?.classList.add('hidden');
        } else {
            this.moreButton?.classList.remove('hidden');
        }
    };

    private onMoreButtonHandler = () => {
        this.tabsPanelShowedItemsQuantity += 2;

        this.clearTabsPanel();
        this.renderList(this.tabsPanelData);
    };

    private openDialog = ({ target }: Event) => {
        if (!(target instanceof HTMLElement)) {
            return;
        }

        let state: 'details' | 'signup';

        if (target.closest('.activity-card__details-button')) {
            state = 'details';
        } else if (target.closest('.activity-card__signup-button')) {
            state = 'signup';
        } else {
            return;
        }

        const li = target.closest('.section-activities__list-item');

        if (!(li instanceof HTMLLIElement) || !li) {
            return;
        }

        const selectedCard = Number(li.dataset.index);

        this.dialog?.openDialog({
            data: this.tabsPanelData[this.tabsPanelState][selectedCard],
            type: this.tabsPanelState,
            state
        });
    };

    static init = () => {
        InitComponent.init<HTMLUListElement>(`.${classNames.root}`, (root) => new SectionActivities(root, MOCK_ACTIVITIES));
    };
}

SectionActivities.init();
