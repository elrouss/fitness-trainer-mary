interface IErrors {
    errors: {
        minLength?: number;
        maxLength?: number;
        pattern: RegExp;
        required?: boolean;
    };
}

interface IMessages<T = string> {
    messages: {
        minLength?: T;
        maxLength?: T;
        pattern: T;
        required?: T;
    };
}

export type TValidationSettings = Record<string, IErrors & IMessages>;
