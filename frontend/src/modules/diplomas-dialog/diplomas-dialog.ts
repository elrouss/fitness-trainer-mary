import { Dialog } from 'components/dialog/components/dialog/dialog';
import { Folder } from 'components/folder/folder';

import type { IFolderPanelList } from 'components/folder/interfaces';

export class DiplomasDialog extends Dialog {
    data: IFolderPanelList;

    constructor (data: IFolderPanelList) {
        super('diplomas-dialog');

        this.data = data;

        this.init();
    }

    private init = () => {
        new Folder(this.data);
    };
}
