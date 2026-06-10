import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

const index = 'dist/index.html';
const routes = ['company', 'contact', 'privacy', 'disclaimer', 'articles'];

if (existsSync(index)) {
  copyFileSync(index, 'dist/404.html');

  for (const route of routes) {
    const target = join('dist', route, 'index.html');
    mkdirSync(dirname(target), { recursive: true });
    copyFileSync(index, target);
  }
}
