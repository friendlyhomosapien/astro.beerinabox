import { Auth, Directus, TypeMap } from '@directus/sdk';

const client = new Directus(import.meta.env.DIRECTUS_URL);

export default client as Directus<TypeMap, Auth>;
