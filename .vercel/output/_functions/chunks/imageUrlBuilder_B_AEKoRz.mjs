import imageUrlBuilder from '@sanity/image-url';
import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: "vqbixtq7",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
  // `false` if you want to ensure fresh data
  token: "skxdVVY3QjEssnOt10ZXPx8K7dhDZ8iretovgT9y2JDFJiipIZmXMidhm3lGHf0Ee2DZQdYUT9wtlXkFQSA59av1GhMGKFolfoqbpmaE1Y6RDPk0ZqXHEDicTSas6L93G0g05KWs2oZVsmZxFFqpCxRK06JlSSMvlVQurVrd3hwULiuf6NFW"
});
async function getCabanas() {
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

const builder = imageUrlBuilder(sanityClient);
function getOptimizedImageUrl(source, width, height) {
  let image = builder.image(source);
  if (width) {
    image = image.width(width);
  }
  if (height) {
    image = image.height(height);
  }
  return image.auto("format").quality(80).url();
}

export { getCabanas as a, getOptimizedImageUrl as g };
