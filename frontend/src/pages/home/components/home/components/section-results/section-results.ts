import { InitComponent } from 'services/init-component/init-component';

import { Slider2 } from 'components/slider2/slider2';

import { MOCK_RESULTS } from '../mock/results';

import type { ISectionResults } from './interfaces';

const classNames = {
    root: 'section-results'
} as const;

class SectionResults extends InitComponent {
    root: HTMLElement | null;

    data?: ISectionResults | null;

    constructor (root: HTMLElement | null, data?: ISectionResults | null) {
        super();

        this.root = root;

        this.data = data;

        this.renderSlider();
    }

    private renderSlider = () => {
        if (!this.data?.slider) {
            return;
        }

        new Slider2(this.data.slider).render();
    };

    static init = () => {
        InitComponent.init<HTMLElement>(`.${classNames.root}`, (root) => new SectionResults(root, MOCK_RESULTS));
    };
}

SectionResults.init();
