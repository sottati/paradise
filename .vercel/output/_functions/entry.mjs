import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CrTTDLCp.mjs';
import { manifest } from './manifest_DR4bumqT.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/cabanas/_slug_.astro.mjs');
const _page2 = () => import('./pages/cabanas.astro.mjs');
const _page3 = () => import('./pages/studio/_---params_.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.14.6_@types+node@24.8.1_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.30.2_a0afff432ce3e59b251455b9f4f42793/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/cabanas/[slug].astro", _page1],
    ["src/pages/cabanas/index.astro", _page2],
    ["node_modules/.pnpm/@sanity+astro@3.2.10_@emotion+is-prop-valid@1.2.2_@sanity+client@7.12.0_@sanity+types@4_986a0e6f5e64ac70068c61daae79fcba/node_modules/@sanity/astro/dist/studio/studio-route.astro", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "0f6c0ae0-ed8e-4d18-a480-af3014579a97",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
