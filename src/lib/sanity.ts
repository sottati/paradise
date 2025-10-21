import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'vqbixtq7',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // `false` if you want to ensure fresh data
  token: import.meta.env.SANITY_TOKEN,
});

// Helper para obtener todas las cabañas
export async function getCabanas() {
  return await sanityClient.fetch(`
    *[_type == "cabana"] | order(nombre asc) {
      _id,
      nombre,
      slug,
      capacidad,
      imagenes[] {
        asset->{
          _id,
          url
        },
        alt
      }
    }
  `);
}

// Helper para obtener una cabaña por slug
export async function getCabanaBySlug(slug: string) {
  return await sanityClient.fetch(
    `
    *[_type == "cabana" && slug.current == $slug][0] {
      _id,
      nombre,
      slug,
      capacidad,
      imagenes[] {
        asset->{
          _id,
          url
        },
        alt
      }
    }
  `,
    { slug }
  );
}
