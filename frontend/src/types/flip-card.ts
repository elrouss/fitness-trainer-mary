export interface IFlipCard {
    type: 'primary' | 'secondary';
    theme: 'calm' | 'brand';
    title: string;
    link?: {
        text: string;
        href: string;
    };
    details?: string;
    img: string;
    services: Array<{
        title: string;
        price: number;
    }>;
    icon: string;
}
