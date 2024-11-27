import mockPhoto1 from 'assets/images/mary-4.jpg';
import mockPhoto2 from 'assets/images/mary-5.jpg';

import type {
    IBenefitCardImg,
    IBenefitCardText
} from 'types/benefit-card';

export const MOCK_BENEFITS: Array<IBenefitCardImg | IBenefitCardText> = [
    {
        theme: 'dark',
        title: 'Адаптация программы',
        description: 'Я\u00a0адаптирую программу в\u00a0зависимости от\u00a0прогресса клиента или его самочувствия, чтобы максимизировать эффективность и\u00a0безопасность занятий'
    },
    {
        theme: 'light',
        title: 'Мотивация и\u00a0поддержка',
        description: 'Я\u00a0стараюсь вдохновлять и\u00a0поддерживать своих клиентов в\u00a0процессе тренировок, чтобы они могли преодолеть трудности и\u00a0не\u00a0сдаваться'
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
        title: 'Разнообразие тренировок',
        description: 'Я\u00a0постоянно внедряю новые упражнения и\u00a0методики, чтобы занятия были интересными и\u00a0разнообразными, что помогает удерживать клиентов от\u00a0скуки'
    },
    {
        theme: 'dark',
        title: 'Обратная связь',
        description: 'Я\u00a0предоставляю регулярную обратную связь о\u00a0прогрессе клиента, что помогает им\u00a0видеть результаты и\u00a0чувствовать удовлетворение от\u00a0своих усилий'
    }
] as const;
