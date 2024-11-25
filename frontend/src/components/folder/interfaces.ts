export interface IFolderPanelList {
    degrees: [string, string];
    diplomas: [string, string];
    certificates: [string, string, string];
    awards: [string, string, string, string];
}

export type TFolderTab = keyof IFolderPanelList;
