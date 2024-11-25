import { Folder } from 'components/folder/folder';

import { MOCK_DIPLOMAS } from '../mock/diplomas';

import type { ISectionDiplomas } from './interfaces';

export class SectionReviews {
    private data: ISectionDiplomas;

    constructor (data: ISectionDiplomas) {
        this.data = data;

        this.init();
    }

    private init = () => {
        new Folder(this.data.folder);
    };
}

new SectionReviews(MOCK_DIPLOMAS);
