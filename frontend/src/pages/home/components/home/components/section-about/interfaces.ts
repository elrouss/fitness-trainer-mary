import type { IFolderPanelList } from 'components/folder/interfaces';
import type { ITextCard } from 'components/text-card/interfaces';
import type { TFactCards } from 'components/fact-card/interfaces';
import type { TSlides } from 'modules/slider/interfaces';

export interface ITextCardWithPortfolio extends ITextCard {
    portfolio: IFolderPanelList;
}

export interface ISectionAbout {
    text1: ITextCardWithPortfolio;
    text2: ITextCard;
    facts: TFactCards;
    slider: TSlides;
    img1: string;
    img2: string;
}

export interface IRenderTextCardParams {
    data?: ITextCard;
    container?: HTMLElement | null;
    action: 'prepend' | 'after';
    className?: string;
}
