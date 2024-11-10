interface IBenefitCardGeneral {
    theme: 'img' | 'dark' | 'light';
}

export interface IBenefitCardText extends IBenefitCardGeneral {
    title: string;
    description: string;
}

export interface IBenefitCardImg extends IBenefitCardGeneral {
    img: string;
    alt: string;
}

