import { Directus } from '@directus/sdk';

export default async () => {
    const directus = new Directus(import.meta.env.PUBLIC_DIRECTUS_URL);

    if (directus.auth.token) return directus;

    return directus;
};