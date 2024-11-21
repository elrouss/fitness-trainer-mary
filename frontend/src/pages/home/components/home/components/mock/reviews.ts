import REVIEW1 from 'assets/images/review-1.jpg';
import REVIEW2 from 'assets/images/review-2.jpg';
import REVIEW3 from 'assets/images/review-3.jpg';
import REVIEW4 from 'assets/images/review-4.jpg';
import REVIEW5 from 'assets/images/review-5.jpg';
import REVIEW6 from 'assets/images/review-6.jpg';

import type { ISectionReviews } from '../section-reviews/interfaces';

export const MOCK_REVIEWS: ISectionReviews = {
    reviews: [
        REVIEW1,
        REVIEW2,
        REVIEW3,
        REVIEW4,
        REVIEW5,
        REVIEW6
    ]
} as const;
