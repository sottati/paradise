# Auditoría de Paradise Chapadmalal

Fecha: 29 de octubre de 2026. Sitio auditado: https://paradisechapadmalal.com/

La web funciona como catálogo y canal de contacto. Las cinco páginas responden, las fotos comprobadas están disponibles y WhatsApp abre correctamente. El mayor problema técnico está en el inicio: dos imágenes descargan 7,25 MB. También hay problemas de contraste, accesibilidad y presentación de la información que conviene resolver.

No encontré una falla que impida recorrer el sitio. Esto no equivale a una certificación de accesibilidad ni a garantizar su comportamiento en todos los dispositivos.

## Alcance y método

- Navegación real en producción con Chromium, con ventanas de 1280 × 800, 768 × 1024, 375 × 667 y 320 × 568 píxeles CSS.
- Recorrido del inicio, listado y las tres fichas. Prueba del menú móvil, Escape, navegación a una ficha y salida a WhatsApp.
- Comprobación de respuesta HTTP de las cinco páginas y de 86 URLs propias de imágenes, variantes y CSS mediante HEAD. Las variantes compartidas se contaron una sola vez.
- Inspección del HTML publicado, encabezados HTTP, tamaños de recursos y atributos de carga.
- axe-core 4.10.3 en el inicio a 375 px y en Casa Paradise. El contenido interno de los iframes de terceros quedó fuera de la evaluación automática.
- Revisión del código del repositorio para localizar las causas. La compilación directa de Astro pasó durante la revisión previa.

Los tamaños móviles son pruebas de adaptación del diseño con el navegador de escritorio. No se emularon Safari, un teléfono físico, CPU lenta o una conexión móvil. No se ejecutó Lighthouse ni se obtuvo información de Search Console o métricas de usuarios reales. No se hicieron cambios en producción ni se enviaron mensajes.

Los datos completos están en [evidencia.json](auditoria-web-2026-10-29/evidencia.json).

Las referencias al código se revisaron sobre el commit `5fe55beb203b32f6c7159d622a37af5a2cf43545`. Durante el cierre aparecieron cambios locales sobre alarmas en servicios y fichas. Se preservaron; los hallazgos describen la versión observada en producción durante esta auditoría.

## Qué está funcionando

| Comprobación | Resultado |
| --- | --- |
| Inicio, listado y tres fichas | HTTP 200 |
| 86 recursos propios comprobados | Todos respondieron HTTP 200 |
| Menú móvil | Abre, cierra con su botón y permite navegar |
| WhatsApp | El enlace llega a la pantalla de WhatsApp con un destinatario |
| Mapa e Instagram | Cargaron durante la prueba |
| Dominio con www | La navegación termina en el dominio sin www |
| Entrada con HTTP | La navegación termina en HTTPS; no se determinó el código exacto del salto |
| CSS | 5.240 bytes comprimidos con Brotli |
| HTML del inicio | 5.983 bytes comprimidos con Brotli |
| Caché de imágenes y CSS | Un año y `immutable`, apropiado para nombres con hash |
| Galerías | Usan variantes mediante `srcset` y carga diferida para las fotos secundarias |
| Rutas inexistentes | Responden 404, sin devolver un falso 200 |

El sitio estático y el poco JavaScript propio son una buena base. Los 338 MB de fotos originales del repositorio no se descargan completos al visitar la web.

## Hallazgos y prioridades

P1 significa resolver primero por impacto directo. P2 corresponde a mejoras importantes de uso, contenido y descubrimiento. P3 reúne ajustes de menor impacto inmediato. La prioridad comercial expresa criterio de revisión; no mide pérdidas de reservas.

### 1. P1 · El inicio descarga imágenes demasiado grandes

La portada publicada pesa **4.151.406 bytes** y el fogonero **3.097.128 bytes**. Suman **7.248.534 bytes**, aproximadamente 7,25 MB decimales, antes de contar Instagram, el mapa y otros recursos.

Ambas imágenes carecen de `srcset` y `sizes` en el inicio. Confirmé que a 320 px se mantienen las mismas URLs grandes. WebP comprime el formato, pero aquí falta ajustar la resolución enviada al visitante.

**Corrección:** generar variantes según ancho de pantalla y densidad, limitar la resolución máxima y revisar visualmente la calidad. Optimizar también los logos, que se entregan con más de 1000 px para mostrarse a 40 o 128 px.

**Cómo verificar:** en una carga sin caché a 375 px, comprobar `currentSrc`, dimensiones y bytes descargados. Comparar también la portada a 1280 px. No dar por resuelto el problema solo por cambiar la extensión.

Código: [hero.astro](https://github.com/sottati/paradise/blob/5fe55beb203b32f6c7159d622a37af5a2cf43545/src/components/hero.astro#L7), [index.astro](https://github.com/sottati/paradise/blob/5fe55beb203b32f6c7159d622a37af5a2cf43545/src/pages/index.astro#L49).

### 2. P1 · La carga prioriza una foto que aparece más abajo

La portada usa `loading="lazy"` y prioridad automática. El fogonero usa `loading="eager"` y `decoding="sync"`, aunque está debajo de los servicios y los reels.

En la primera navegación, el fogonero comenzó a solicitarse a los 413 ms y la portada a los 610 ms. Es una observación de esta sesión, no una demora garantizada de todos los visitantes.

**Corrección:** portada con carga inmediata y prioridad alta; fogonero con carga diferida y decodificación asíncrona. Mantener las dimensiones reservadas.

**Cómo verificar:** revisar el orden de solicitudes y la primera pantalla en una conexión limitada, con caché vacía.

Código: los mismos archivos del hallazgo 1.

### 3. P1 · Poco contraste en la navegación de páginas internas

La barra usa texto blanco sobre negro con opacidad del 30 %. Sobre el fondo blanco de las fichas, queda gris claro. En una captura de Rincón medí un fondo RGB 178,178,178: el contraste con blanco es aproximadamente **2,12:1**, por debajo de 4,5:1 para texto normal. El botón móvil también pierde contraste sobre ese fondo.

**Corrección:** usar una variante de navegación con fondo suficientemente oscuro o texto oscuro en las páginas internas y sobre secciones claras. Revisar foco y hover.

**Cómo verificar:** comprobar la barra en inicio, listado y fichas, tanto arriba como después de desplazarse.

Código: [navbar.astro](https://github.com/sottati/paradise/blob/5fe55beb203b32f6c7159d622a37af5a2cf43545/src/components/navbar.astro#L35).
Evidencia: [ficha en escritorio](auditoria-web-2026-10-29/ficha-escritorio.png).

### 4. P1 · El recorrido hacia una consulta tiene poca ayuda

En la primera pantalla móvil no aparece una acción de consulta ni un acceso visible al catálogo fuera del menú. El inicio tampoco presenta las tres opciones con su capacidad.

Las fichas muestran nombre, capacidad, fotos y el enlace de consulta. No explican dormitorios, camas, baños, equipamiento particular, espacios privados y compartidos, condiciones de estadía o distancias verificadas.

**Corrección:** agregar accesos claros a cabañas y consulta en la portada, mostrar las tres opciones y completar las fichas con información confirmada por la familia. No publicar condiciones supuestas.

**Cómo verificar:** una persona que entra por primera vez debería poder elegir una opción y entender qué preguntar sin depender únicamente de las fotos.

Código: [index.astro](https://github.com/sottati/paradise/blob/5fe55beb203b32f6c7159d622a37af5a2cf43545/src/pages/index.astro#L31), [ficha](https://github.com/sottati/paradise/blob/5fe55beb203b32f6c7159d622a37af5a2cf43545/src/pages/cabanas/[slug].astro#L19), [datos](https://github.com/sottati/paradise/blob/5fe55beb203b32f6c7159d622a37af5a2cf43545/src/data/cabanas.ts#L11).

### 5. P2 · Instagram se carga anticipadamente y repite su script

El HTML contiene tres etiquetas con `embed.js`. En esta sesión el navegador descargó ese archivo una sola vez por caché o reutilización; no corresponde afirmar que hubo tres descargas. Las tres etiquetas siguen siendo innecesarias y pueden repetir su ejecución.

Los tres iframes se cargan desde el inicio. Su contenido agrega solicitudes y depende de Instagram. El HTML original contiene bloques vacíos sin un enlace o una imagen de respaldo visible si el embed falla.

**Corrección:** una sola carga del script. Preferir miniaturas con enlace o activar los embeds al acercarse a la sección o por interacción. Mantener un enlace útil si falla el servicio.

**Cómo verificar:** abrir el sitio bloqueando Instagram y comprobar que queda una sección útil; revisar que los reels no se soliciten al entrar si están lejos de la pantalla.

Código: [reel-ig.astro](https://github.com/sottati/paradise/blob/5fe55beb203b32f6c7159d622a37af5a2cf43545/src/components/reel-ig.astro#L17).

### 6. P2 · Desborde horizontal en pantallas de 320 px

Con el inicio a 320 × 568, el documento mide 326 px de ancho. Los tres embeds de Instagram imponen un mínimo de 326 px y generan desplazamiento horizontal. No apareció ese desborde en el inicio a 375 px ni en las fichas comprobadas a 320 px.

**Corrección:** adaptar o reemplazar el embed en pantallas angostas. Evitar ocultar el desborde globalmente, porque eso puede recortar contenido y esconder otros errores.

**Cómo verificar:** con los reels ya cargados, `document.documentElement.scrollWidth` no debe superar el ancho de la ventana.

Código: [reel-ig.astro](https://github.com/sottati/paradise/blob/5fe55beb203b32f6c7159d622a37af5a2cf43545/src/components/reel-ig.astro#L17).
Evidencia: [reel a 320 px](auditoria-web-2026-10-29/reel-320.png).

### 7. P2 · El menú móvil necesita completar su accesibilidad

El botón conserva el nombre "Abrir menú" incluso cuando está abierto. No tiene `aria-expanded` ni `aria-controls`. Presionar Escape no lo cierra. Además, usa `focus:outline-none` sin una alternativa explícita de foco.

El botón medido es de 24 × 24 px. Ampliarlo facilitaría su uso táctil; ese tamaño por sí solo no demuestra incumplimiento de WCAG 2.2.

**Corrección:** sincronizar estado y etiqueta accesible, relacionar botón y panel, agregar foco visible y cierre con Escape con retorno al botón. Si se mantiene como un desplegable, no imponer un encierro de foco propio de un diálogo modal.

**Cómo verificar:** recorrerlo solo con teclado y con un lector de pantalla. Confirmar apertura, cierre, anuncio de estado y navegación.

Código: [navbar.astro](https://github.com/sottati/paradise/blob/5fe55beb203b32f6c7159d622a37af5a2cf43545/src/components/navbar.astro#L49).

### 8. P2 · Faltan idioma y estructura semántica

Las cinco páginas declaran `lang="en"`, aunque el contenido principal está en español. El inicio no tiene `h1`. No hay un elemento `main` para el contenido principal.

axe detectó regiones de contenido sin identificar y, en Casa Paradise, ausencia de región principal y un salto de jerarquía al footer. Los cuatro iframes del inicio no tienen nombre accesible.

**Corrección:** declarar español, usar un `h1` descriptivo en el inicio, envolver el contenido en `main`, agregar un enlace para saltar la navegación y dar títulos descriptivos a los iframes.

**Cómo verificar:** repetir axe y revisar manualmente encabezados y regiones. Que axe no reporte un problema no significa que toda la página sea accesible.

Código: [Layout.astro](https://github.com/sottati/paradise/blob/5fe55beb203b32f6c7159d622a37af5a2cf43545/src/layouts/Layout.astro#L8), [hero.astro](https://github.com/sottati/paradise/blob/5fe55beb203b32f6c7159d622a37af5a2cf43545/src/components/hero.astro#L16), [Mapa.astro](https://github.com/sottati/paradise/blob/5fe55beb203b32f6c7159d622a37af5a2cf43545/src/components/Mapa.astro#L12).

### 9. P2 · Los metadatos no distinguen las páginas

Las cinco páginas tienen el mismo título, "Paradise Chapadmalal". No hay descripción, canonical, metadatos Open Graph ni datos estructurados.

**Corrección:** título y descripción propios por página, canonical coherente con el dominio elegido y una tarjeta para compartir con imagen y texto. Evaluar datos estructurados de alojamiento con información real. Su presencia no garantiza una mejor posición ni resultados enriquecidos.

**Cómo verificar:** inspeccionar el HTML publicado de cada ruta y probar la vista previa al compartir. Una descripción ausente no impide que Google indexe una página.

Código: [Layout.astro](https://github.com/sottati/paradise/blob/5fe55beb203b32f6c7159d622a37af5a2cf43545/src/layouts/Layout.astro#L20).

### 10. P2 · Las galerías limitan la inspección de las cabañas

Las fotos se presentan como imágenes sin enlace ni botón para ampliarlas. En celular, las secundarias son pequeñas y se recortan a cuadrados. Los textos alternativos usan nombres como "Casa Paradise - IMG_2949".

En Casa Paradise, la imagen principal de la ficha es el fogonero compartido. El código ordena por la ruta de la imagen procesada, en lugar de definir un orden editorial o garantizar que la portada de la cabaña aparezca primero.

**Corrección:** elegir explícitamente portada y orden, describir lo que muestra cada foto y permitir abrirla completa. Si se agrega un visor, debe funcionar con teclado, Escape y foco adecuado. Preparar variantes mayores para esa ampliación.

**Cómo verificar:** poder reconocer dormitorio, baño y cocina sin adivinar lo que quedó fuera del recorte.

Código: [GaleriaCabana.astro](https://github.com/sottati/paradise/blob/5fe55beb203b32f6c7159d622a37af5a2cf43545/src/components/GaleriaCabana.astro#L40), [cabanas.ts](https://github.com/sottati/paradise/blob/5fe55beb203b32f6c7159d622a37af5a2cf43545/src/data/cabanas.ts#L49).
Evidencia: [Casa Paradise en móvil](auditoria-web-2026-10-29/ficha-movil.png).

### 11. P2 · Las reseñas usan fechas relativas que no se actualizan

Las frases "Hace 8 meses" y similares están escritas directamente en el código. La calificación 4.7 y las 64 opiniones también son valores fijos. No comprobé el valor actual en Google, por lo que no afirmo que sean incorrectos.

**Corrección:** usar fechas reales, o registrar la fecha de actualización de la selección. Revisar periódicamente el número de opiniones y la calificación si se decide mantenerlos.

**Cómo verificar:** las fechas no deben depender de una frase fija y debe quedar claro cuándo se actualizaron los datos.

Código: [opiniones.astro](https://github.com/sottati/paradise/blob/5fe55beb203b32f6c7159d622a37af5a2cf43545/src/components/opiniones.astro#L9).

### 12. P3 · Faltan sitemap y una página 404 propia

`/robots.txt`, `/sitemap.xml` y `/sitemap-index.xml` responden 404. No encontré otra ubicación declarada para el sitemap. Una URL inexistente devuelve correctamente 404, pero muestra la respuesta genérica de Vercel.

**Corrección:** publicar un sitemap con las cinco rutas, referenciarlo desde robots y crear un 404 con acceso a inicio, cabañas y contacto.

La ausencia de robots no bloquea el rastreo y un sitemap no es indispensable para un sitio pequeño bien enlazado. Son mejoras de mantenimiento y descubrimiento.

Código: [astro.config.mjs](https://github.com/sottati/paradise/blob/5fe55beb203b32f6c7159d622a37af5a2cf43545/astro.config.mjs#L6), carpeta `src/pages`.

### 13. P3 · Detalles de mantenimiento

El footer de producción dice 2025. Aunque el código calcula el año actual, el sitio es estático y ese valor cambia al compilar. No puede actualizarse solo con el paso del tiempo.

Las animaciones no contemplan `prefers-reduced-motion`. También hay textos de servicios sin tildes y el README conserva la plantilla de Astro.

La versión de pnpm instalada en este entorno, 11.8.0, rechazó scripts de instalación de esbuild y sharp. La ejecución directa de Astro sí compiló. Esto es un problema de reproducibilidad a revisar en desarrollo; no demuestra una falla del sitio publicado.

**Corrección:** definir versión de Node y gestor de paquetes, documentar el build, configurar explícitamente los scripts permitidos, revisar contenido y respetar la preferencia de movimiento reducido.

Código: [Footer.astro](https://github.com/sottati/paradise/blob/5fe55beb203b32f6c7159d622a37af5a2cf43545/src/components/Footer.astro#L5), [global.css](https://github.com/sottati/paradise/blob/5fe55beb203b32f6c7159d622a37af5a2cf43545/src/styles/global.css#L3), [package.json](https://github.com/sottati/paradise/blob/5fe55beb203b32f6c7159d622a37af5a2cf43545/package.json#L1).

## Lectura de rendimiento

La primera navegación de escritorio, sin limitación artificial de red o CPU, registró:

| Dato de esta sesión | Valor |
| --- | --- |
| Primer byte de la respuesta de navegación | Aproximadamente 396 ms desde el inicio |
| Primer contenido visible, FCP | 624 ms |
| Última entrada LCP recuperada en esa visita | 1260 ms, un párrafo de la portada |
| Evento de carga de la página | 3565 ms |

Son observaciones puntuales desde este entorno. No son resultados de Lighthouse ni representan una conexión 4G o el percentil 75 de visitantes reales. No se midió INP. No asigné una puntuación de rendimiento o accesibilidad.

El peso de 7,25 MB corresponde únicamente a los dos archivos de imagen. Los recursos internos de los iframes no quedan completamente reflejados en el registro de rendimiento de la página principal, así que no se presenta un total de descarga de todo el sitio.

## Orden de trabajo recomendado

1. Reducir y adaptar las dos imágenes del inicio y corregir sus prioridades de carga.
2. Resolver el contraste de la navegación y completar el menú móvil.
3. Hacer visibles las cabañas y el contacto, y completar las fichas con información confirmada.
4. Corregir idioma, estructura, metadatos y galería.
5. Diferir Instagram, resolver su desborde y agregar respaldo.
6. Publicar sitemap y 404 propio; corregir fechas, textos y documentación.
7. Repetir la prueba con Lighthouse móvil, caché vacía y limitación de red y CPU. Validar también Safari en un iPhone real y el recorrido con lector de pantalla.

No hace falta cambiar de framework para abordar estos problemas.

## Capturas

- [Inicio en escritorio](auditoria-web-2026-10-29/inicio-escritorio.png).
- [Inicio a 375 px](auditoria-web-2026-10-29/inicio-movil.png).
- [Casa Paradise a 375 px](auditoria-web-2026-10-29/ficha-movil.png).
- [Rincón en escritorio](auditoria-web-2026-10-29/ficha-escritorio.png).
- [Reel a 320 px](auditoria-web-2026-10-29/reel-320.png).
- [Mapa cargado](auditoria-web-2026-10-29/mapa-320.png).
