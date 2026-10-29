# Diseño de Paradise

La web conserva las fotos originales, el logo, Inter y la composición con una imagen grande de entrada. El refactor lleva ese lenguaje a las cinco páginas y acerca las cabañas y la consulta por WhatsApp a la portada.

## Referencias

- [Airbnb en Refero Styles](https://styles.refero.design/style/194faa2f-2f69-4bbf-9e29-290f28fa8ca2). Referencia para el espacio entre secciones, la jerarquía tipográfica, las imágenes con bordes suaves y los botones de alto contraste.
- [Instalación oficial de shadcn/ui en Astro](https://ui.shadcn.com/docs/installation/astro). Integración con React, Tailwind y componentes locales.
- [Navigation Menu](https://ui.shadcn.com/docs/components/radix/navigation-menu), [Sheet](https://ui.shadcn.com/docs/components/radix/sheet) y [Dialog](https://ui.shadcn.com/docs/components/radix/dialog). Primitivas para la navegación y la galería con manejo de foco y teclado.

## Decisiones

El fondo blanco cálido y el verde oscuro acompañan los jardines y la madera de las fotos. Los tokens de color, radios y tipografía viven en `src/styles/global.css`.

`src/components/ui` contiene los componentes de shadcn obtenidos con su CLI, con ajustes de tamaño táctil, tiempos de transición y etiquetas en español. `ButtonLink.astro` usa las variantes del mismo Button para renderizar enlaces estáticos en Astro. Las tarjetas, badges y separadores se renderizan en el servidor. Solo la navegación y la galería se hidratan con React.

Las tarjetas de cabañas se comparten entre la portada, el listado y las recomendaciones en cada ficha. Las fotos de la galería se optimizan durante el build. El visor permite recorrer todas las fotos con botones y flechas, cerrar con Escape y recuperar el foco.

Se mantienen las seis reseñas originales. Se retiran la calificación global y las fechas relativas escritas a mano, que no se actualizaban desde Google. El enlace a Google permite consultar la información vigente.

## Validación

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm exec playwright install chromium
pnpm test:e2e
```

Las pruebas recorren las cinco páginas en escritorio y móvil, revisan desbordes y accesibilidad con axe, y prueban el menú y el visor de fotos. Los servicios externos se bloquean durante las pruebas para que sus tiempos de respuesta no alteren los resultados. El mapa y los embeds de Instagram conservan sus URLs; su disponibilidad depende de esos servicios.
