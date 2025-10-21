import '../chunks/page-ssr_BX-Sh9ZY.mjs';
import { c as createComponent, m as maybeRenderHead, d as renderComponent, r as renderTemplate, a as createAstro, s as spreadAttributes, b as addAttribute, f as renderSlot } from '../chunks/astro/server_DG5KQk_o.mjs';
import { $ as $$Layout } from '../chunks/Layout_D5TLMdMm.mjs';
import '../chunks/index_CR4ZvYMV.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_Fw_wU3n0.mjs';
export { renderers } from '../renderers.mjs';

const portada = new Proxy({"src":"/_astro/portada.DjAerQsp.png","width":4032,"height":3024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/simonottati/Documents/Personal/paradise/src/images/casa-paradise/portada.png";
							}
							
							return target[name];
						}
					});

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative w-full h-screen overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "src": portada, "alt": "Portada", "class": "absolute top-0 left-0 w-full h-full object-cover -z-10" })} <div class="absolute top-0 left-0 w-full h-full bg-black/50 -z-9"></div> <div class="relative z-10 flex flex-col p-16 justify-end items-left h-full text-white animate-fade-in-bottom select-none"> <p class="text-8xl font-medium mb-4">
Cabañas <br> de Mar
</p> <p class="text-4xl font-extralight max-w-2xl">
El lugar perfecto para pasar vacaciones o simplemente disfrutar de unos
      días de descanso con familia y amigos, entre el campo y el mar
</p> </div> </div>`;
}, "/Users/simonottati/Documents/Personal/paradise/src/components/hero.astro", void 0);

const $$Astro$6 = createAstro();
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$;
  const size = Astro2.props.size;
  const cls = Astro2.props.class;
  const name = Astro2.props.iconName;
  delete Astro2.props.size;
  delete Astro2.props.class;
  delete Astro2.props.iconName;
  const props = Object.assign({
    "xmlns": "http://www.w3.org/2000/svg",
    "stroke-width": 2,
    "width": size ?? 24,
    "height": size ?? 24,
    "stroke": "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "fill": "none",
    "viewBox": "0 0 24 24"
  }, Astro2.props);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(["lucide", { [`lucide-${name}`]: name }, cls], "class:list")}> ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "/Users/simonottati/Documents/Personal/paradise/node_modules/.pnpm/lucide-astro@0.546.0_astro@5.14.6_@types+node@24.8.1_@vercel+functions@2.2.13_jiti@2.6._0242c3686b7a676cfc607963fbf537bc/node_modules/lucide-astro/dist/.Layout.astro", void 0);

const $$Astro$5 = createAstro();
const $$Dog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Dog;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "dog", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M11.25 16.25h1.5L12 17z"></path> <path d="M16 14v.5"></path> <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309"></path> <path d="M8 14v.5"></path> <path d="M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"></path> ` })}`;
}, "/Users/simonottati/Documents/Personal/paradise/node_modules/.pnpm/lucide-astro@0.546.0_astro@5.14.6_@types+node@24.8.1_@vercel+functions@2.2.13_jiti@2.6._0242c3686b7a676cfc607963fbf537bc/node_modules/lucide-astro/dist/Dog.astro", void 0);

const $$Astro$4 = createAstro();
const $$Flame = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Flame;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "flame", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path> ` })}`;
}, "/Users/simonottati/Documents/Personal/paradise/node_modules/.pnpm/lucide-astro@0.546.0_astro@5.14.6_@types+node@24.8.1_@vercel+functions@2.2.13_jiti@2.6._0242c3686b7a676cfc607963fbf537bc/node_modules/lucide-astro/dist/Flame.astro", void 0);

const $$Astro$3 = createAstro();
const $$ShieldCheck = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ShieldCheck;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "shield-check", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path> <path d="m9 12 2 2 4-4"></path> ` })}`;
}, "/Users/simonottati/Documents/Personal/paradise/node_modules/.pnpm/lucide-astro@0.546.0_astro@5.14.6_@types+node@24.8.1_@vercel+functions@2.2.13_jiti@2.6._0242c3686b7a676cfc607963fbf537bc/node_modules/lucide-astro/dist/ShieldCheck.astro", void 0);

const $$Astro$2 = createAstro();
const $$Sparkles = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Sparkles;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "sparkles", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path> <path d="M20 2v4"></path> <path d="M22 4h-4"></path> <circle cx="4" cy="20" r="2"></circle> ` })}`;
}, "/Users/simonottati/Documents/Personal/paradise/node_modules/.pnpm/lucide-astro@0.546.0_astro@5.14.6_@types+node@24.8.1_@vercel+functions@2.2.13_jiti@2.6._0242c3686b7a676cfc607963fbf537bc/node_modules/lucide-astro/dist/Sparkles.astro", void 0);

const $$Astro$1 = createAstro();
const $$Tv = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Tv;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "tv", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m17 2-5 5-5-5"></path> <rect width="20" height="15" x="2" y="7" rx="2"></rect> ` })}`;
}, "/Users/simonottati/Documents/Personal/paradise/node_modules/.pnpm/lucide-astro@0.546.0_astro@5.14.6_@types+node@24.8.1_@vercel+functions@2.2.13_jiti@2.6._0242c3686b7a676cfc607963fbf537bc/node_modules/lucide-astro/dist/Tv.astro", void 0);

const $$Astro = createAstro();
const $$Wifi = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Wifi;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "wifi", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M12 20h.01"></path> <path d="M2 8.82a15 15 0 0 1 20 0"></path> <path d="M5 12.859a10 10 0 0 1 14 0"></path> <path d="M8.5 16.429a5 5 0 0 1 7 0"></path> ` })}`;
}, "/Users/simonottati/Documents/Personal/paradise/node_modules/.pnpm/lucide-astro@0.546.0_astro@5.14.6_@types+node@24.8.1_@vercel+functions@2.2.13_jiti@2.6._0242c3686b7a676cfc607963fbf537bc/node_modules/lucide-astro/dist/Wifi.astro", void 0);

const $$Features = createComponent(($$result, $$props, $$slots) => {
  const features = [
    {
      title: "Servicios",
      description: "Servicio de blanco (sabanas). Kit de cortesia (cafe, te, agua mineral, bombones).",
      icon: $$Sparkles
    },
    {
      title: "Parrilla y Fogonero",
      description: "Espacio de uso comun para poder realizar asados o comidas y disfrutar de fogones entre amigos.",
      icon: $$Flame
    },
    {
      title: "Espacio cerrado",
      description: "Predio cerrado con cerco natural. Camaras de seguridad grabando 24/7 e iluminacion con sensor de movimiento.",
      icon: $$ShieldCheck
    },
    {
      title: "Wi-Fi",
      description: "Fibra optica e internet satelital, para que puedas hacer Home Office desde cualquiera de las caba\xF1as",
      icon: $$Wifi
    },
    {
      title: "Pet Friendly",
      description: "Aceptamos mascotas, preferentemente de razas peque\xF1as, para preservar el cuidado de las cabanas.",
      icon: $$Dog
    },
    {
      title: "Smart TV",
      description: "Television satelital, 100% digital. Contamos con televisores Smart para poder utilizar aplicaciones de streaming de series/peliculas.",
      icon: $$Tv
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="w-full bg-white py-32 px-8"> <div class="max-w-6xl mx-auto"> <h2 class="text-4xl font-bold text-left mb-8">Amenities</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${features.map((feature) => renderTemplate`<div class="bg-gray-100 p-6"> <div class="flex items-center gap-3 mb-3"> ${renderComponent($$result, "feature.icon", feature.icon, { "class": "w-8 h-8 text-black" })} <h3 class="text-xl font-semibold">${feature.title}</h3> </div> <p class="text-black font-light leading-relaxed"> ${feature.description} </p> </div>`)} </div> </div> </section>`;
}, "/Users/simonottati/Documents/Personal/paradise/src/components/features.astro", void 0);

const fogonero = new Proxy({"src":"/_astro/fogonero.kNVqNvtf.png","width":4032,"height":3024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/simonottati/Documents/Personal/paradise/src/images/casa-paradise/fogonero.png";
							}
							
							return target[name];
						}
					});

const $$Opiniones = createComponent(($$result, $$props, $$slots) => {
  const resenas = [
    {
      nombre: "Facundo Mones Ruiz",
      estrellas: 5,
      fechaRelativa: "Hace 8 meses",
      texto: "Las caba\xF1as incre\xEDbles y los anfitriones mucho m\xE1s. Vivi y Pato unos genios. Siempre estuvieron atentos y predispuestos para todo lo que necesitamos. (Eso es muy dif\xEDcil de encontrar). Con respecto a las caba\xF1as, la experiencia fue muy linda. C\xF3modas, equipadas y cuentan con un jard\xEDn hermoso. Otro dato a destacar, es la excelente ubicaci\xF3n en la que se encuentran las mismas. A cuatro cuadras de cruz del sur y a cinco cuadras de una zona de almacenes y restaurantes. Experiencia 10/10 que ya quiero volver a vivir."
    },
    {
      nombre: "Catalina Contepomi",
      estrellas: 5,
      fechaRelativa: "Hace 8 meses",
      texto: "Fui con mi grupo de amigas a la caba\xF1a de 6 y todo estuvo impecable!! el espacio es muy c\xF3modo y muy lindo. El jard\xEDn es un espacio muy grande y clave para los momentos en los que compart\xEDamos con los otros grupos de amigas de las otras caba\xF1as. Viv\xED y Pato fueron muy atentos a cada detalle. Era nuestra primera vez en chapa y nos recomendaron un mont\xF3n de cosas para hacer. Nos hicieron sentir muy c\xF3modas y cuidadas. La ubicaci\xF3n es la mejor ubicaci\xF3n que se puede tener, se puede hacer todo caminando."
    },
    {
      nombre: "Reed",
      estrellas: 5,
      fechaRelativa: "Hace 6 meses",
      texto: "Very nice hosts and nice caba\xF1as. Patricio lent me one of his surfboards to use and they were super helpful with recommendations of places to go and the various beaches. They even gave us a ride to the estacion omnibus when we left. Recommend!"
    },
    {
      nombre: "Marcelo Valerio",
      estrellas: 5,
      fechaRelativa: "Hace 7 meses",
      texto: "Excelente lugar para descansar, desconectarse y conectarse con la naturaleza. Las caba\xF1as buen\xEDsimas, equipadas y todo lo necesario para disfrutar de la estad\xEDa. Estuve ah\xED con mi mujer y la pasamos b\xE1rbaros, con ganas de volver nuevamente. Los due\xF1os Pato y Viv\xED, super divinos y con una energ\xEDa maravillosa y muy amables, gracias por todo, volveremos."
    },
    {
      nombre: "Tahiel Tomasini",
      estrellas: 5,
      fechaRelativa: "Hace 8 meses",
      texto: "S\xFAper c\xF3modas, te hac\xEDan sentir como en casa, perfectas para descansar y desconectarse. La decoraci\xF3n era hermosa, con detalles r\xFAsticos y acogedores que les daban un aire especial. Adem\xE1s, la ubicaci\xF3n era ideal, permiti\xE9ndote disfrutar de la naturaleza o explorar los alrededores con facilidad. Un lugar perfecto para relajarse y disfrutar la naturaleza."
    },
    {
      nombre: "Joha Brauchler",
      estrellas: 5,
      fechaRelativa: "Hace 9 meses",
      texto: "Alquil\xE9 este espacio para brindar los retiros y fue algo m\xE1gico! Nos sentimos todo el tiempo no solo en Caba\xF1as, sino en un hogar con calidez y con amor en cada detalle. Viv\xED y pato, los due\xF1os, s\xFAper atentos y amorosos. Tienen un jard\xEDn hermoso donde se puede disfrutar de la tranquilidad y sonido de los p\xE1jaros. Ideal para compartir momentos. Vamos a volver por m\xE1s!"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="max-w-7xl mx-auto p-4 md:p-8 md:py-16"> <!-- Header con calificación general --> <a href="https://www.google.com/maps/place/Caba%C3%B1as+Paradise+Chapadmalal/@-38.1759253,-57.6533759,17z/data=!4m8!3m7!1s0x95851d1592f6455b:0x4565673369ada6ae!8m2!3d-38.1759253!4d-57.6533759!9m1!1b1!16s%2Fg%2F11hf4gg4_f?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-4 mb-8 hover:opacity-80 transition-opacity"> <div class="text-5xl font-bold text-gray-800">4.7</div> <div> <div class="flex gap-1 mb-1"> <span class="text-amber-400 text-2xl">★</span> <span class="text-amber-400 text-2xl">★</span> <span class="text-amber-400 text-2xl">★</span> <span class="text-amber-400 text-2xl">★</span> <span class="relative inline-block text-2xl"> <span class="text-gray-300">★</span> <span class="absolute top-0 left-0 text-amber-400 overflow-hidden" style="width: 50%;">★</span> </span> </div> <p class="text-sm text-gray-600">64 opiniones en Google Maps</p> </div> </a> <!-- Grid de reseñas --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${resenas.map((resena) => renderTemplate`<div class="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200"> <div class="mb-4"> <h3 class="text-lg font-semibold text-gray-800 mb-2"> ${resena.nombre} </h3> <div class="flex gap-2 mb-2"> <div class="flex"> ${Array.from({ length: resena.estrellas }).map(() => renderTemplate`<span class="text-amber-400 text-xl">★</span>`)} </div> <p class="text-sm text-gray-500 my-auto"> ${resena.fechaRelativa} </p> </div> </div> <p class="text-gray-600 leading-relaxed text-sm">${resena.texto}</p> </div>`)} </div> </div>`;
}, "/Users/simonottati/Documents/Personal/paradise/src/components/opiniones.astro", void 0);

const $$Mapa = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="w-full py-16 px-4 md:px-8 bg-gray-50"> <div class="max-w-7xl mx-auto"> <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
Nuestra Ubicación
</h2> <div class="w-full aspect-video rounded-xl shadow-lg overflow-hidden"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3136.462685327735!2d-57.65337590000001!3d-38.175925299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95851d1592f6455b%3A0x4565673369ada6ae!2sCaba%C3%B1as%20Paradise%20Chapadmalal!5e0!3m2!1ses-419!2sar!4v1761052904377!5m2!1ses-419!2sar" width="100%" height="100%" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-full h-full"></iframe> </div> </div> </section>`;
}, "/Users/simonottati/Documents/Personal/paradise/src/components/Mapa.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Features", $$Features, {})} ${maybeRenderHead()}<section class="grid grid-cols-1 md:grid-cols-2 items-center justify-center p-12 gap-4 h-screen"> <div class="h-full w-full overflow-hidden"> ${renderComponent($$result2, "Image", $$Image, { "src": fogonero, "alt": "Fogonero", "class": "h-full w-full object-cover", "loading": "eager", "decoding": "sync" })} </div> <p class="text-center text-3xl font-light">
El jardín de uso común con plantas, árboles, parrilla y fogonero, ofrece
      un ambiente rodeado de naturaleza para disfrutar entre los huéspedes.
      Nuestro propósito es brindar un trato cercano, un ambiente relajado y
      familiar.
</p> </section> ${renderComponent($$result2, "Opiniones", $$Opiniones, {})} ${renderComponent($$result2, "Mapa", $$Mapa, {})} ` })}`;
}, "/Users/simonottati/Documents/Personal/paradise/src/pages/index.astro", void 0);

const $$file = "/Users/simonottati/Documents/Personal/paradise/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
