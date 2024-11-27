import MOCK_IMG_1 from 'assets/images/IMG_1605.jpg';

import type { ISectionFeedback } from '../section-feedback/interfaces';

export const MOCK_FEEDBACK: ISectionFeedback = {
    photoCover: MOCK_IMG_1,
    multiselect: {
        options: [
            {
                label: 'Персональная (разовая)',
                name: 'trainingType',
                value: 'personalOneTimeTraining'
            },
            {
                label: 'Персональная (10 тренировок)',
                name: 'trainingType',
                value: 'personalMultipleTimeTraining'
            },
            {
                label: 'Сплит (разовая)',
                name: 'trainingType',
                value: 'splitOneTimeTraining'
            },
            {
                label: 'Сплит (10 тренировок)',
                name: 'trainingType',
                value: 'splitMultipleTimeTraining'
            },
            {
                label: 'Онлайн-сопровождение',
                name: 'trainingType',
                value: 'online'
            }
        ]
    }
} as const;
