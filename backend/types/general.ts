import type { Struct } from '@strapi/strapi';
import type { Params } from '@strapi/database/dist/lifecycles';

export type TParams<T extends Struct.CollectionTypeSchema> = Omit<Params, 'data'> & {
    data: T['attributes'];
}