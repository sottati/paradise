import { createClient } from '@sanity/client';

const sanityClient = createClient(
            {"apiVersion":"2024-01-01","projectId":"vqbixtq7","dataset":"production","useCdn":false}
          );

globalThis.sanityClient = sanityClient;
