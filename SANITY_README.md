# Guía de uso de Sanity Studio - Paradise Chapadmalal

## Acceso al Panel de Administración

### En desarrollo (local)
1. Ejecuta el servidor de desarrollo:
   ```bash
   pnpm dev
   ```

2. Accede a: `http://localhost:4321/studio`

### En producción
Accede a: `https://paradisechapadmalal.com/studio`

## Primeros pasos

### 1. Crear las 3 cabañas

Al entrar al Studio por primera vez, debes crear las 3 cabañas:

1. Click en **"Cabaña"** en el menú lateral
2. Click en el botón **"Create"** o **"+"**
3. Completa los campos:
   - **Nombre**: `Del Mar` (o `Rincon` o `Casa Paradise`)
   - **Slug**: Click en "Generate" para generar automáticamente desde el nombre
   - **Capacidad**: `2-3 personas` (o según corresponda)
   - **Galería de Imágenes**: Click en "Upload" para subir imágenes

4. Click en **"Publish"** para guardar

Repite este proceso para las 3 cabañas:
- **Del Mar**: 2-3 personas
- **Rincón**: 3-4 personas
- **Casa Paradise**: 7-8 personas

### 2. Subir imágenes

Para cada cabaña:
1. En el campo "Galería de Imágenes", click en **"Upload"**
2. Selecciona múltiples imágenes desde tu computadora (aprox. 10 por cabaña)
3. Las imágenes aparecerán en el orden que las subas
4. **Para reordenar**: Arrastra y suelta las imágenes para cambiar el orden
5. **Texto alternativo** (opcional): Click en una imagen y agrega descripción en "Texto alternativo"
6. Click en **"Publish"** para guardar los cambios

## Importante sobre los Slugs

Los slugs deben coincidir exactamente con los que están en el navbar:
- `casa-paradise` (minúsculas, con guión)
- `rincon` (sin tilde)
- `del-mar` (con guión)

**No cambies los slugs** una vez creados, ya que las URLs dependen de ellos.

## Consejos para las imágenes

- **Formato recomendado**: JPG o PNG
- **Tamaño recomendado**: Mínimo 1200px de ancho
- **Peso**: Sanity optimiza automáticamente las imágenes
- **Primera imagen**: La primera imagen de la galería es la que aparece en el listado de cabañas
- **Orden**: Arrastra las imágenes para reordenar - la primera será la imagen destacada

## Variables de entorno necesarias

El archivo `.env` ya está configurado con:
```
PUBLIC_SANITY_PROJECT_ID=vqbixtq7
PUBLIC_SANITY_DATASET=production
SANITY_TOKEN=[tu-token-aquí]
```

**No compartas el archivo `.env`** - ya está en `.gitignore`

## Deployment en Vercel

Cuando hagas deploy en Vercel, debes agregar las variables de entorno:

1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega:
   - `PUBLIC_SANITY_PROJECT_ID`: `vqbixtq7`
   - `PUBLIC_SANITY_DATASET`: `production`
   - `SANITY_TOKEN`: [tu token de Sanity]

## CORS en Sanity

Para que el sitio funcione en producción, debes configurar CORS:

1. Ve a https://www.sanity.io/manage
2. Selecciona tu proyecto `Paradise Chapadmalal`
3. Ve a **API** → **CORS Origins**
4. Agrega estos orígenes:
   - `http://localhost:4321` (para desarrollo)
   - `https://paradisechapadmalal.com` (para producción)
   - `https://*.vercel.app` (para previews de Vercel)
5. Marca **"Allow credentials"**

## Soporte

Si tienes problemas o preguntas, contacta a Simon.
