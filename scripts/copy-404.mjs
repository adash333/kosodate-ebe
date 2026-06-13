import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const index = 'dist/index.html';
const siteOrigin = 'https://5micro.net';
const extraRoutes = ['/search'];

function routesFromSitemap() {
  const sitemap = 'public/sitemap.xml';
  if (!existsSync(sitemap)) return [];

  const xml = readFileSync(sitemap, 'utf8');
  return Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g))
    .map(([, loc]) => {
      try {
        const url = new URL(loc);
        if (url.origin !== siteOrigin) return null;
        return url.pathname.replace(/\/$/, '') || '/';
      } catch {
        return null;
      }
    })
    .filter((route) => route && route !== '/');
}

function copyRoute(route) {
  const cleanRoute = route.replace(/^\/+/, '').replace(/\/+$/, '');
  if (!cleanRoute) return;

  const target = join('dist', cleanRoute, 'index.html');
  mkdirSync(dirname(target), { recursive: true });
  copyFileSync(index, target);
}

if (existsSync(index)) {
  copyFileSync(index, 'dist/404.html');

  const routes = new Set([...routesFromSitemap(), ...extraRoutes]);
  for (const route of routes) {
    copyRoute(route);
  }
}
