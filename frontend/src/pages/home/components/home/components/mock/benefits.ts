import mockPhoto1 from 'assets/images/mary-4.jpg';
import mockPhoto2 from 'assets/images/mary-5.jpg';

import type {
    IBenefitCardImg,
    IBenefitCardText
} from 'types/benefit-card';

export const MOCK_BENEFITS: Array<IBenefitCardImg | IBenefitCardText> = [
    {
        theme: 'dark',
        title: 'Индивидуальный подход',
        description: 'Тренер разрабатывает программу тренировок, основанную на Ваших целях, уровне фитнеса и физическом состоянии. Тренер разрабатывает программу тренировок'
    },
    {
        theme: 'light',
        title: 'Мотивация и поддержка',
        description: 'Тренер разрабатывает программу тренировок, основанную на Ваших целях, уровне фитнеса и физическом состоянии'
    },
    {
        theme: 'img',
        img: mockPhoto1,
        alt: 'Победа Марии на соревновании'
    },
    {
        theme: 'img',
        img: mockPhoto2,
        alt: 'Мария тренируется с гантелями'
    },
    {
        theme: 'light',
        title: 'Регулярная оценка прогресса',
        description: 'Тренер разрабатывает программу тренировок, основанную на Ваших целях, уровне фитнеса и физическом состоянии'
    },
    {
        theme: 'dark',
        title: 'Разнообразие тренировок',
        description: 'Тренер разрабатывает программу тренировок, основанную на Ваших целях, уровне фитнеса и физическом состоянии'
    }
] as const;
