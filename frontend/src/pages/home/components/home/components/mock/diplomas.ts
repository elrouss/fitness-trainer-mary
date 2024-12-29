import MOCK_DEGREE_1 from 'assets/images/degrees-1.jpg';
import MOCK_DEGREE_2 from 'assets/images/degrees-2.jpg';
import MOCK_DIPLOMAS_1 from 'assets/images/diplomas-1.jpg';
import MOCK_DIPLOMAS_2 from 'assets/images/diplomas-2.jpg';
import MOCK_CERTIFICATES_1 from 'assets/images/certificates-1.jpg';
import MOCK_CERTIFICATES_2 from 'assets/images/certificates-2.jpg';
import MOCK_CERTIFICATES_3 from 'assets/images/certificates-3.jpg';
import MOCK_AWARDS_1 from 'assets/images/awards-1.jpg';
import MOCK_AWARDS_2 from 'assets/images/awards-2.jpg';
import MOCK_AWARDS_3 from 'assets/images/awards-3.jpg';
import MOCK_AWARDS_4 from 'assets/images/awards-4.jpg';

import type { ITextCardWithPortfolio } from '../section-about/interfaces';

export const MOCK_DIPLOMAS: Record<'portfolio', ITextCardWithPortfolio['portfolio']> = {
    portfolio: {
        degrees: [
            MOCK_DEGREE_1,
            MOCK_DEGREE_2,
            MOCK_DEGREE_2
        ],
        diplomas: [
            MOCK_DIPLOMAS_1,
            MOCK_DIPLOMAS_2,
            MOCK_DIPLOMAS_2
        ],
        certificates: [
            MOCK_CERTIFICATES_1,
            MOCK_CERTIFICATES_2,
            MOCK_CERTIFICATES_3
        ],
        awards: [
            MOCK_AWARDS_1,
            MOCK_AWARDS_2,
            MOCK_AWARDS_3,
            MOCK_AWARDS_4
        ]
    }
} as const;
