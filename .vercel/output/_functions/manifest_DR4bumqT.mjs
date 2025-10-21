import { p as decodeKey } from './chunks/astro/server_DG5KQk_o.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DGkdFVFn.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/simonottati/Documents/Personal/paradise/","cacheDir":"file:///Users/simonottati/Documents/Personal/paradise/node_modules/.astro/","outDir":"file:///Users/simonottati/Documents/Personal/paradise/dist/","srcDir":"file:///Users/simonottati/Documents/Personal/paradise/src/","publicDir":"file:///Users/simonottati/Documents/Personal/paradise/public/","buildClientDir":"file:///Users/simonottati/Documents/Personal/paradise/dist/client/","buildServerDir":"file:///Users/simonottati/Documents/Personal/paradise/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.14.6_@types+node@24.8.1_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.30.2_a0afff432ce3e59b251455b9f4f42793/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/_slug_.DyoZSSRp.css"}],"routeData":{"route":"/cabanas","isIndex":true,"type":"page","pattern":"^\\/cabanas\\/?$","segments":[[{"content":"cabanas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cabanas/index.astro","pathname":"/cabanas","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"inline","content":"body{margin:0;padding:0}\n"}],"routeData":{"type":"page","isIndex":false,"route":"/studio/[...params]","pattern":"^\\/studio(?:\\/(.*?))?\\/?$","segments":[[{"content":"studio","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/.pnpm/@sanity+astro@3.2.10_@emotion+is-prop-valid@1.2.2_@sanity+client@7.12.0_@sanity+types@4_986a0e6f5e64ac70068c61daae79fcba/node_modules/@sanity/astro/dist/studio/studio-route.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/_slug_.DyoZSSRp.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/simonottati/Documents/Personal/paradise/node_modules/.pnpm/@sanity+astro@3.2.10_@emotion+is-prop-valid@1.2.2_@sanity+client@7.12.0_@sanity+types@4_986a0e6f5e64ac70068c61daae79fcba/node_modules/@sanity/astro/dist/studio/studio-route.astro",{"propagation":"none","containsHead":true}],["/Users/simonottati/Documents/Personal/paradise/src/pages/cabanas/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/simonottati/Documents/Personal/paradise/src/pages/cabanas/index.astro",{"propagation":"none","containsHead":true}],["/Users/simonottati/Documents/Personal/paradise/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.14.6_@types+node@24.8.1_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.30.2_a0afff432ce3e59b251455b9f4f42793/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/cabanas/[slug]@_@astro":"pages/cabanas/_slug_.astro.mjs","\u0000@astro-page:src/pages/cabanas/index@_@astro":"pages/cabanas.astro.mjs","\u0000@astro-page:node_modules/.pnpm/@sanity+astro@3.2.10_@emotion+is-prop-valid@1.2.2_@sanity+client@7.12.0_@sanity+types@4_986a0e6f5e64ac70068c61daae79fcba/node_modules/@sanity/astro/dist/studio/studio-route@_@astro":"pages/studio/_---params_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DR4bumqT.mjs","/Users/simonottati/Documents/Personal/paradise/node_modules/.pnpm/astro@5.14.6_@types+node@24.8.1_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.30.2_a0afff432ce3e59b251455b9f4f42793/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Bjp2-x23.mjs","/Users/simonottati/Documents/Personal/paradise/src/components/navbar.astro?astro&type=script&index=0&lang.ts":"_astro/navbar.astro_astro_type_script_index_0_lang.CIkoXO0g.js","/Users/simonottati/Documents/Personal/paradise/node_modules/.pnpm/sanity@4.11.0_@emotion+is-prop-valid@1.2.2_@portabletext+sanity-bridge@1.1.14_@sanity+s_090f24f5c80011f9e5e970bfea39cd23/node_modules/sanity/lib/_chunks-es/resources2.mjs":"_astro/resources2.DDHUSZP4.js","/Users/simonottati/Documents/Personal/paradise/node_modules/.pnpm/sanity@4.11.0_@emotion+is-prop-valid@1.2.2_@portabletext+sanity-bridge@1.1.14_@sanity+s_090f24f5c80011f9e5e970bfea39cd23/node_modules/sanity/lib/_chunks-es/VideoPlayer.mjs":"_astro/VideoPlayer.bYXyL93D.js","/Users/simonottati/Documents/Personal/paradise/node_modules/.pnpm/sanity@4.11.0_@emotion+is-prop-valid@1.2.2_@portabletext+sanity-bridge@1.1.14_@sanity+s_090f24f5c80011f9e5e970bfea39cd23/node_modules/sanity/lib/_chunks-es/resources4.mjs":"_astro/resources4.BZC0k3V9.js","/Users/simonottati/Documents/Personal/paradise/node_modules/.pnpm/sanity@4.11.0_@emotion+is-prop-valid@1.2.2_@portabletext+sanity-bridge@1.1.14_@sanity+s_090f24f5c80011f9e5e970bfea39cd23/node_modules/sanity/lib/_chunks-es/resources.mjs":"_astro/resources.BIl04m2X.js","/Users/simonottati/Documents/Personal/paradise/node_modules/.pnpm/sanity@4.11.0_@emotion+is-prop-valid@1.2.2_@portabletext+sanity-bridge@1.1.14_@sanity+s_090f24f5c80011f9e5e970bfea39cd23/node_modules/sanity/lib/_chunks-es/resources5.mjs":"_astro/resources5.Dgbl-oEh.js","/Users/simonottati/Documents/Personal/paradise/node_modules/.pnpm/sanity@4.11.0_@emotion+is-prop-valid@1.2.2_@portabletext+sanity-bridge@1.1.14_@sanity+s_090f24f5c80011f9e5e970bfea39cd23/node_modules/sanity/lib/_chunks-es/resources3.mjs":"_astro/resources3.eGKV2BVM.js","/Users/simonottati/Documents/Personal/paradise/node_modules/.pnpm/sanity@4.11.0_@emotion+is-prop-valid@1.2.2_@portabletext+sanity-bridge@1.1.14_@sanity+s_090f24f5c80011f9e5e970bfea39cd23/node_modules/sanity/lib/_chunks-es/ViteDevServerStopped.mjs":"_astro/ViteDevServerStopped.tt-dZpPD.js","/Users/simonottati/Documents/Personal/paradise/node_modules/.pnpm/@sanity+client@7.12.0_debug@4.4.3/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js":"_astro/stegaEncodeSourceMap.BuR-f25Y.js","/Users/simonottati/Documents/Personal/paradise/node_modules/.pnpm/@sanity+ui@3.1.10_@emotion+is-prop-valid@1.2.2_react-dom@19.2.0_react@19.2.0__react-is@_d5bcffe4d295e751aaaf08e88e9e744c/node_modules/@sanity/ui/dist/_chunks-es/refractor.mjs":"_astro/refractor.CWlFtvds.js","/Users/simonottati/Documents/Personal/paradise/node_modules/.pnpm/sanity@4.11.0_@emotion+is-prop-valid@1.2.2_@portabletext+sanity-bridge@1.1.14_@sanity+s_090f24f5c80011f9e5e970bfea39cd23/node_modules/sanity/lib/_chunks-es/index.mjs":"_astro/index.Dwe7rryN.js","/Users/simonottati/Documents/Personal/paradise/node_modules/.pnpm/sanity@4.11.0_@emotion+is-prop-valid@1.2.2_@portabletext+sanity-bridge@1.1.14_@sanity+s_090f24f5c80011f9e5e970bfea39cd23/node_modules/sanity/lib/_chunks-es/index2.mjs":"_astro/index2.OC6Zj8mE.js","/Users/simonottati/Documents/Personal/paradise/node_modules/.pnpm/sanity@4.11.0_@emotion+is-prop-valid@1.2.2_@portabletext+sanity-bridge@1.1.14_@sanity+s_090f24f5c80011f9e5e970bfea39cd23/node_modules/sanity/lib/_chunks-es/index3.mjs":"_astro/index3.CAQBQ1tj.js","/Users/simonottati/Documents/Personal/paradise/node_modules/.pnpm/@sanity+vision@4.11.0_@babel+runtime@7.28.4_@codemirror+lint@6.9.0_@codemirror+theme-on_4395f993e64912f71a2dca1e708140db/node_modules/@sanity/vision/lib/_chunks-es/resources.mjs":"_astro/resources.Da5OsD9Z.js","/Users/simonottati/Documents/Personal/paradise/node_modules/.pnpm/@sanity+vision@4.11.0_@babel+runtime@7.28.4_@codemirror+lint@6.9.0_@codemirror+theme-on_4395f993e64912f71a2dca1e708140db/node_modules/@sanity/vision/lib/_chunks-es/SanityVision.mjs":"_astro/SanityVision.vIErRoaq.js","/Users/simonottati/Documents/Personal/paradise/node_modules/.pnpm/sanity@4.11.0_@emotion+is-prop-valid@1.2.2_@portabletext+sanity-bridge@1.1.14_@sanity+s_090f24f5c80011f9e5e970bfea39cd23/node_modules/sanity/lib/_chunks-es/resources6.mjs":"_astro/resources6.T9plZGp-.js","/Users/simonottati/Documents/Personal/paradise/node_modules/.pnpm/sanity@4.11.0_@emotion+is-prop-valid@1.2.2_@portabletext+sanity-bridge@1.1.14_@sanity+s_f2c3cf52cd3cb80efca988c36bce987e/node_modules/sanity/lib/_chunks-es/resources2.mjs":"_astro/resources2.UVMaEfsR.js","/Users/simonottati/Documents/Personal/paradise/node_modules/.pnpm/sanity@4.11.0_@emotion+is-prop-valid@1.2.2_@portabletext+sanity-bridge@1.1.14_@sanity+s_f2c3cf52cd3cb80efca988c36bce987e/node_modules/sanity/lib/_chunks-es/VideoPlayer.mjs":"_astro/VideoPlayer.CXhsKw_b.js","/Users/simonottati/Documents/Personal/paradise/node_modules/.pnpm/sanity@4.11.0_@emotion+is-prop-valid@1.2.2_@portabletext+sanity-bridge@1.1.14_@sanity+s_f2c3cf52cd3cb80efca988c36bce987e/node_modules/sanity/lib/_chunks-es/resources4.mjs":"_astro/resources4.DKx_oV8S.js","/Users/simonottati/Documents/Personal/paradise/node_modules/.pnpm/sanity@4.11.0_@emotion+is-prop-valid@1.2.2_@portabletext+sanity-bridge@1.1.14_@sanity+s_f2c3cf52cd3cb80efca988c36bce987e/node_modules/sanity/lib/_chunks-es/resources.mjs":"_astro/resources.Dwy31qRI.js","/Users/simonottati/Documents/Personal/paradise/node_modules/.pnpm/sanity@4.11.0_@emotion+is-prop-valid@1.2.2_@portabletext+sanity-bridge@1.1.14_@sanity+s_f2c3cf52cd3cb80efca988c36bce987e/node_modules/sanity/lib/_chunks-es/resources5.mjs":"_astro/resources5.BXr6T7Nd.js","/Users/simonottati/Documents/Personal/paradise/node_modules/.pnpm/sanity@4.11.0_@emotion+is-prop-valid@1.2.2_@portabletext+sanity-bridge@1.1.14_@sanity+s_f2c3cf52cd3cb80efca988c36bce987e/node_modules/sanity/lib/_chunks-es/resources3.mjs":"_astro/resources3.4ICn-URm.js","/Users/simonottati/Documents/Personal/paradise/node_modules/.pnpm/sanity@4.11.0_@emotion+is-prop-valid@1.2.2_@portabletext+sanity-bridge@1.1.14_@sanity+s_f2c3cf52cd3cb80efca988c36bce987e/node_modules/sanity/lib/_chunks-es/ViteDevServerStopped.mjs":"_astro/ViteDevServerStopped.CLzLNsEd.js","/Users/simonottati/Documents/Personal/paradise/node_modules/.pnpm/@sanity+astro@3.2.10_@emotion+is-prop-valid@1.2.2_@sanity+client@7.12.0_@sanity+types@4_986a0e6f5e64ac70068c61daae79fcba/node_modules/@sanity/astro/dist/studio/studio-component":"_astro/studio-component.BpNnWM9X.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/simonottati/Documents/Personal/paradise/src/components/navbar.astro?astro&type=script&index=0&lang.ts","const l=document.getElementById(\"navbar\");function e(){window.scrollY>50?l?.classList.add(\"navbar-scrolled\"):l?.classList.remove(\"navbar-scrolled\")}e();window.addEventListener(\"scroll\",e);"]],"assets":["/_astro/paradiseicon.Dj1BnRr5.png","/_astro/paradiseiso.BJxsr27d.png","/_astro/fogonero.kNVqNvtf.png","/_astro/portada.DjAerQsp.png","/_astro/_slug_.DyoZSSRp.css","/favicon.svg","/_astro/SanityVision.vIErRoaq.js","/_astro/VideoPlayer.CXhsKw_b.js","/_astro/VideoPlayer.bYXyL93D.js","/_astro/ViteDevServerStopped.CLzLNsEd.js","/_astro/ViteDevServerStopped.tt-dZpPD.js","/_astro/browser.DH86xxuo.js","/_astro/index.Dwe7rryN.js","/_astro/index.b3ljxyxO.js","/_astro/index2.OC6Zj8mE.js","/_astro/index3.CAQBQ1tj.js","/_astro/refractor.CWlFtvds.js","/_astro/resources.BIl04m2X.js","/_astro/resources.Da5OsD9Z.js","/_astro/resources.Dwy31qRI.js","/_astro/resources2.DDHUSZP4.js","/_astro/resources2.UVMaEfsR.js","/_astro/resources3.4ICn-URm.js","/_astro/resources3.eGKV2BVM.js","/_astro/resources4.BZC0k3V9.js","/_astro/resources4.DKx_oV8S.js","/_astro/resources5.BXr6T7Nd.js","/_astro/resources5.Dgbl-oEh.js","/_astro/resources6.T9plZGp-.js","/_astro/stegaEncodeSourceMap.BuR-f25Y.js","/_astro/studio-component.BpNnWM9X.js","/_astro/studio-component.dBrjQDNT.js"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"gdRfjqT1UKf/id62pGXLNmeOyFC2UnSKZRLiEPCWZ3g="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
