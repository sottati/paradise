import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from './sanity';

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}

// Helper para generar URL optimizada
export function getOptimizedImageUrl(
  source: any,
  width?: number,
  height?: number
) {
  let image = builder.image(source);

  if (width) {
    image = image.width(width);
  }

  if (height) {
    image = image.height(height);
  }

  return image.auto('format').quality(80).url();
}
