import imgMary1 from 'assets/images/mary-1.jpg';
import imgMary2 from 'assets/images/mary-2.jpg';
import imgMary3 from 'assets/images/mary-3.jpg';

import type { IFlipCard } from 'types/flip-card';

export const MOCK_WORKOUT: IFlipCard[] = [
    {
        type: 'secondary',
        theme: 'calm',
        title: 'Онлайн-сопровождение',
        details: 'Из любой точки мира',
        img: imgMary3,
        services: [
            {
                title: 'Онлайн-сопровождение',
                price: 10000
            }
        ],
        icon: 'online'
    },
    {
        type: 'primary',
        theme: 'brand',
        title: 'Сплит-тренировки (2\u00a0человека) в\u00a0',
        link: {
            text: 'A-FITNESS',
            href: 'https://spb.afitness.ru/devyatkino/'
        },
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
        title: 'Персональные тренировки в\u00a0',
        link: {
            text: 'A-FITNESS',
            href: 'https://spb.afitness.ru/devyatkino/'
        },
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
