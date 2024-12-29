import MARY1 from 'assets/images/mary-strong.jpg';
import MARY2 from 'assets/images/mary-bicycle.jpg';
import MARY4 from 'assets/images/mary-stairs.jpg';
import MARY5 from 'assets/images/mary-power.jpg';
import TOUR1 from 'assets/images/tour-1.jpg';
import TOUR2 from 'assets/images/tour-2.jpg';
import TOUR3 from 'assets/images/tour-3.jpg';

import { MOCK_DIPLOMAS } from './diplomas';

import type { ISectionAbout } from '../section-about/interfaces';

export const MOCK_ABOUT: ISectionAbout = {
    text1: {
        title: 'Обо мне',
        description: 'Мечтаю всем людям показать мир своими глазами и сделать спорт любимым делом, ',
        accentDescription: 'а не вынужденным страданием',
        portfolio: MOCK_DIPLOMAS.portfolio
    },
    text2: {
        description: 'Я заботливый фитнес-тренер, который плавно и бережно внедрит вам здоровый образ ',
        accentDescription: 'путем уникальных конкретно для вас методов под текущий образ жизни и сопротивления'
    },
    facts: [
        {
            title: '27+',
            subtitle: 'лет в спорте'
        },
        {
            title: '40+',
            subtitle: 'спортивных наград'
        },
        {
            title: '10+',
            subtitle: 'лет тренерского опыта'
        }
    ],
    slider: [
        MARY1,
        TOUR1,
        MARY2,
        TOUR2,
        TOUR3
    ],
    img1: MARY4,
    img2: MARY5
} as const;
