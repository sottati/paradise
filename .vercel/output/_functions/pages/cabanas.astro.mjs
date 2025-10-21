import '../chunks/page-ssr_BX-Sh9ZY.mjs';
import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DG5KQk_o.mjs';
import { $ as $$Layout } from '../chunks/Layout_D5TLMdMm.mjs';
import { a as getCabanas, g as getOptimizedImageUrl } from '../chunks/imageUrlBuilder_B_AEKoRz.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const cabanas = await getCabanas();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-16 px-4 md:px-8"> <div class="max-w-7xl mx-auto"> <h1 class="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
Nuestras Cabañas
</h1> <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
Descubre nuestras cómodas cabañas en Chapadmalal, perfectas para tu escapada.
</p> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${cabanas.map((cabana) => renderTemplate`<a${addAttribute(`/cabanas/${cabana.slug.current}`, "href")} class="group block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"> ${cabana.imagenes && cabana.imagenes[0] && renderTemplate`<div class="aspect-video overflow-hidden"> <img${addAttribute(getOptimizedImageUrl(cabana.imagenes[0].asset, 600, 400), "src")}${addAttribute(cabana.imagenes[0].alt || cabana.nombre, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy"> </div>`} <div class="p-6"> <h2 class="text-2xl font-semibold text-gray-800 mb-2"> ${cabana.nombre} </h2> <p class="text-gray-600 flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"> <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path> </svg> ${cabana.capacidad} </p> <div class="mt-4 text-blue-600 group-hover:text-blue-700 font-medium flex items-center gap-2">
Ver más
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </div> </div> </a>`)} </div> </div> </section> ` })}`;
}, "/Users/simonottati/Documents/Personal/paradise/src/pages/cabanas/index.astro", void 0);

const $$file = "/Users/simonottati/Documents/Personal/paradise/src/pages/cabanas/index.astro";
const $$url = "/cabanas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
