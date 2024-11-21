export interface ISlide {
    name: string;
    age?: string;
    description: string;
    // TODO: обсудить опциональность фото. Если его нет, заглушку?
    img: string;
}

export type TSlides = ISlide[];
