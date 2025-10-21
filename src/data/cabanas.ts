import type { ImageMetadata } from 'astro';

export interface Imagen {
  src: ImageMetadata;
  alt: string;
}

export interface Cabana {
  _id: string;
  nombre: string;
  slug: {
    current: string;
  };
  capacidad: string;
  imagenes: Imagen[];
}

// Función helper para obtener imágenes de una carpeta
function getImagesFromFolder(folderPath: string, cabanaName: string): Imagen[] {
  // Usamos import.meta.glob para obtener todas las imágenes de la carpeta
  const imageModules = import.meta.glob<{ default: ImageMetadata }>('/src/images/**/*.{png,jpg,jpeg,JPG,PNG,JPEG}', { eager: true });

  const images: Imagen[] = [];

  for (const path in imageModules) {
    // Filtrar solo las imágenes de la carpeta específica
    if (path.includes(folderPath)) {
      const fileName = path.split('/').pop()?.replace(/\.[^/.]+$/, '') || '';
      const imageMetadata = imageModules[path].default;

      images.push({
        src: imageMetadata,
        alt: `${cabanaName} - ${fileName}`
      });
    }
  }

  // Ordenar alfabéticamente por nombre de archivo (usando el src de ImageMetadata)
  return images.sort((a, b) => a.src.src.localeCompare(b.src.src));
}

export const cabanas: Cabana[] = [
  {
    _id: "casa-paradise",
    nombre: "Casa Paradise",
    slug: {
      current: "casa-paradise"
    },
    capacidad: "6 personas",
    imagenes: getImagesFromFolder('casa-paradise', 'Casa Paradise')
  },
  {
    _id: "del-mar",
    nombre: "Del Mar",
    slug: {
      current: "del-mar"
    },
    capacidad: "4 personas",
    imagenes: getImagesFromFolder('del-mar', 'Del Mar')
  },
  {
    _id: "rincon",
    nombre: "Rincón",
    slug: {
      current: "rincon"
    },
    capacidad: "2 personas",
    imagenes: getImagesFromFolder('rincon', 'Rincón')
  }
];

// Helper para obtener todas las cabañas
export function getCabanas(): Cabana[] {
  return cabanas;
}

// Helper para obtener una cabaña por slug
export function getCabanaBySlug(slug: string): Cabana | undefined {
  return cabanas.find(cabana => cabana.slug.current === slug);
}
