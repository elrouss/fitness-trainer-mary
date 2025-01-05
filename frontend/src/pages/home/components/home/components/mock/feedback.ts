import MOCK_IMG_1 from 'assets/images/IMG_1605.jpg';

import type { ISectionFeedback } from '../section-feedback/interfaces';

export const MOCK_FEEDBACK: ISectionFeedback = {
    photoCover: MOCK_IMG_1,
    multiselect: {
        options: [
            {
                label: 'Персональная (разовая)',
                name: 'trainingType',
                value: '1'
            },
            {
                label: 'Персональная (10 тренировок)',
                name: 'trainingType',
                value: '2'
            },
            {
                label: 'Сплит (разовая)',
                name: 'trainingType',
                value: '3'
            },
            {
                label: 'Сплит (10 тренировок)',
                name: 'trainingType',
                value: '4'
            },
            {
                label: 'Онлайн-сопровождение',
                name: 'trainingType',
                value: '5'
            }
        ]
    }
} as const;
