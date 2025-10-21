import { c as createComponent, m as maybeRenderHead, d as renderComponent, g as renderScript, b as addAttribute, r as renderTemplate, a as createAstro, e as renderHead, f as renderSlot } from './astro/server_DG5KQk_o.mjs';
/* empty css                          */
import './index_CR4ZvYMV.mjs';
import { $ as $$Image } from './_astro_assets_Fw_wU3n0.mjs';

const logo$1 = new Proxy({"src":"/_astro/paradiseicon.Dj1BnRr5.png","width":1042,"height":1066,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/simonottati/Documents/Personal/paradise/src/assets/paradiseicon.png";
							}
							
							return target[name];
						}
					});

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const links = [
    {
      label: "Casa Paradise",
      href: "/cabanas/casa-paradise"
    },
    {
      label: "Rincon",
      href: "/cabanas/rincon"
    },
    {
      label: "Del Mar",
      href: "/cabanas/del-mar"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<nav id="navbar" class="fixed w-full flex justify-center items-center h-16 z-50 transition-all duration-300" data-astro-cid-5knycien> <div class="flex justify-between items-center w-full max-w-4xl px-4 text-white" data-astro-cid-5knycien> <div class="flex gap-4 justify-start w-80" data-astro-cid-5knycien> ${links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="font-light cursor-pointer underline-slide" data-astro-cid-5knycien> ${link.label} </a>`)} </div> <div class="flex-1 flex justify-center" data-astro-cid-5knycien> <a href="/" data-astro-cid-5knycien> ${renderComponent($$result, "Image", $$Image, { "src": logo$1, "alt": "Paradise Chapadmalal", "class": "w-10 h-10", "data-astro-cid-5knycien": true })} </a> </div> <div class="flex justify-end w-80" data-astro-cid-5knycien> <a href="https://wa.link/ob3h9i" target="_blank" class="font-light cursor-pointer underline-slide" data-astro-cid-5knycien>Contactanos</a> </div> </div> </nav> ${renderScript($$result, "/Users/simonottati/Documents/Personal/paradise/src/components/navbar.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/simonottati/Documents/Personal/paradise/src/components/navbar.astro", void 0);

const logo = new Proxy({"src":"/_astro/paradiseiso.BJxsr27d.png","width":1080,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/simonottati/Documents/Personal/paradise/src/assets/paradiseiso.png";
							}
							
							return target[name];
						}
					});

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-900 text-white py-12 px-4 md:px-8"> <div class="max-w-7xl mx-auto"> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"> <!-- Logo y descripción --> <div class="flex flex-col items-center md:items-start"> ${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "Paradise Chapadmalal Logo", "class": "w-32 h-32 mb-4" })} <p class="text-gray-400 text-sm text-center md:text-left">
Cabañas Paradise Chapadmalal
</p> <p class="text-gray-400 text-xs mt-2 text-center md:text-left">
EST. 2019
</p> </div> <!-- Contacto --> <div> <h3 class="text-lg font-semibold mb-4">Contacto</h3> <ul class="space-y-2 text-gray-400 text-sm"> <li>Chapadmalal, Buenos Aires</li> <li> <a href="tel:+54" class="hover:text-white transition-colors">Teléfono</a> </li> <li> <a href="mailto:info@paradise.com" class="hover:text-white transition-colors">Email</a> </li> </ul> </div> <!-- Enlaces rápidos --> <div> <h3 class="text-lg font-semibold mb-4">Enlaces</h3> <ul class="space-y-2 text-gray-400 text-sm"> <li> <a href="/" class="hover:text-white transition-colors">Inicio</a> </li> <li> <a href="/cabanas" class="hover:text-white transition-colors">Cabañas</a> </li> <li> <a href="/cabanas/casa-paradise" class="hover:text-white transition-colors">Casa Paradise</a> </li> <li> <a href="/cabanas/rincon" class="hover:text-white transition-colors">Rincón</a> </li> <li> <a href="/cabanas/del-mar" class="hover:text-white transition-colors">Del Mar</a> </li> <li> <a href="https://www.google.com/maps/place/Caba%C3%B1as+Paradise+Chapadmalal/@-38.1759253,-57.6533759,17z/data=!4m8!3m7!1s0x95851d1592f6455b:0x4565673369ada6ae!8m2!3d-38.1759253!4d-57.6533759!9m1!1b1!16s%2Fg%2F11hf4gg4_f" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">Ubicación</a> </li> </ul> </div> </div> <!-- Copyright --> <div class="border-t border-gray-800 pt-8 text-center"> <p class="text-gray-400 text-sm">
© ${currentYear} Paradise Chapadmalal. Todos los derechos reservados.
</p> </div> </div> </footer>`;
}, "/Users/simonottati/Documents/Personal/paradise/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"><title>Paradise Chapadmalal</title>${renderHead()}</head> <body class="" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Navbar", $$Navbar, { "data-astro-cid-sckkx6r4": true })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} </body></html>`;
}, "/Users/simonottati/Documents/Personal/paradise/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
