export type TFormCustomEventDetail = Record<'reset', () => void>;
export type TFormCustomEvent = CustomEvent<TFormCustomEventDetail>;
