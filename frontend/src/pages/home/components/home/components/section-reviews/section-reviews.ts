import { ReviewsList } from 'components/reviews-list/reviews-list';

import { MOCK_REVIEWS } from '../mock/reviews';

import type { ISectionReviews } from './interfaces';

export class SectionReviews {
    private data: ISectionReviews;

    constructor (data: ISectionReviews) {
        this.data = data;
    }

    init = () => {
        new ReviewsList(this.data.reviews).render();
    };
}

new SectionReviews(MOCK_REVIEWS).init();
