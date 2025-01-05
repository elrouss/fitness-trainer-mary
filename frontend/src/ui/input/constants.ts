import type { TValidationSettings } from './interfaces';

export const validationSettings: TValidationSettings = {
    name: {
        errors: {
            minLength: 2,
            maxLength: 200,
            pattern: /^[А-Яа-яЁё\s-]{2,100}$/,
            required: true
        },
        messages: {
            minLength: 'Минимальная длина: 2 символа',
            maxLength: 'Максимальная длина: 100 символов',
            pattern: 'Неправильный формат. Допустимо: кириллица, дефис и пробелы',
            required: 'Обязательное для заполнения поле'
        }
    },
    phone: {
        errors: {
            pattern: /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/,
            required: true
        },
        messages: {
            pattern: 'Неправильный формат поля',
            required: 'Обязательное для заполнения поле'
        }
    }
} as const;
