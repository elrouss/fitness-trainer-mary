import imgMary1 from 'assets/images/mary-1.jpg';
import imgMary2 from 'assets/images/mary-2.jpg';
import imgMary3 from 'assets/images/mary-3.jpg';

import type { IFlipCard } from 'types/flip-card';

export const MOCK_WORKOUT: IFlipCard[] = [
    {
        type: 'secondary',
        theme: 'calm',
        title: 'Онлайн сопровождение',
        details: 'Уровень подготовки любой',
        img: imgMary3,
        services: [
            {
                title: 'Онлайн сопровождение',
                price: 10000
            }
        ],
        icon: 'online'
    },
    {
        type: 'primary',
        theme: 'brand',
        title: 'Сплит тренировки\n(2 человека)',
        img: imgMary2,
        services: [
            {
                title: 'Разовая',
                price: 5000

            },
            {
                title: 'Блок из 10 тренировок',
                price: 45000
            }
        ],
        icon: 'people'
    },
    {
        type: 'primary',
        theme: 'calm',
        title: 'Персональные тренировки\n(в зале)',
        img: imgMary1,
        services: [
            {
                title: 'Разовая',
                price: 3000

            },
            {
                title: 'Блок из 10 тренировок',
                price: 25000
            }
        ],
        icon: 'person'
    }
] as const;
