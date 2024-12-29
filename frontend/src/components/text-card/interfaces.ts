import type { IFolderPanelList } from 'components/folder/interfaces';

export interface ITextCard {
    title?: string;
    description: string;
    accentDescription?: string;
    portfolio?: IFolderPanelList;
}
