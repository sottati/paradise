// Helper para obtener la URL de una imagen local
export function getOptimizedImageUrl(
  source: string | { src: string },
  width?: number,
  height?: number
): string {
  // Si source es un objeto con propiedad src, extraer el src
  const imagePath = typeof source === 'string' ? source : source.src;

  // Retornar la ruta de la imagen local
  // Astro procesará automáticamente las imágenes en /src/images/
  return imagePath;
}
