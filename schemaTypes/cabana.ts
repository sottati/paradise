import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'cabana',
  title: 'Cabaña',
  type: 'document',
  fields: [
    defineField({
      name: 'nombre',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'nombre',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'capacidad',
      title: 'Capacidad',
      type: 'string',
      description: 'Ej: 2-3 personas',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imagenes',
      title: 'Galería de Imágenes',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Texto alternativo',
              description: 'Descripción de la imagen para accesibilidad',
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
    }),
  ],
  preview: {
    select: {
      title: 'nombre',
      subtitle: 'capacidad',
      media: 'imagenes.0',
    },
  },
})
