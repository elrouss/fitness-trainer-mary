import type { IActivityCard } from 'components/activity-card/interfaces';

export type TTabsPanelState = 'past' | 'future';
export type TActivities = Record<TTabsPanelState, IActivityCard[]>;
