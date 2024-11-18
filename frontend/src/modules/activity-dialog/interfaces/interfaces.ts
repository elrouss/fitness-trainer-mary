import type { IActivityCard } from 'components/activity-card/interfaces';
import type { TTabsPanelState } from 'pages/home/components/home/components/section-activities/interfaces';

export type TActivityDialogState = 'details' | 'signup';

export interface IActivityDialog {
    data: IActivityCard;
    type: TTabsPanelState;
    state: TActivityDialogState;
}

export type TActivityDetails = Omit<IActivityCard, 'img'>;
