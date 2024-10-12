import { errors } from '@strapi/utils';

import type { Event } from '@strapi/database/dist/lifecycles';
import type { TParams } from '../../../../../types/general';
import type { ApiFeedbackFeedback } from '../../../../../types/generated/contentTypes';

const { ApplicationError } = errors;

export default {
    beforeCreate({ params }: Event) {
        const { data: {
            hasPersonalDataConsent
        }} = params as TParams<ApiFeedbackFeedback>;


        if (!hasPersonalDataConsent) {
            throw new ApplicationError('ValidationError', { errors: [
                {
                    path: [
                        'hasPersonalDataConsent'
                    ],
                    message: `hasPersonalDataConsent must be 'true', but the final value was: '${hasPersonalDataConsent}'.`,
                    name: 'ValidationError'
                }
            ]})
        }
    },
};
