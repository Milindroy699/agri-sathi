// Generates PWA raster icons from public/favicon.svg.
// Run: node scripts/make-icons.mjs
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const root = fileURLToPath(new URL('..', import.meta.url));
const iconsDir = path.join(root, 'public', 'icons');
await mkdir(iconsDir, { recursive: true });

const svg = await readFile(path.join(root, 'public', 'favicon.svg'));

// Maskable icon: extra padding so the glyph survives a circular mask.
const maskableSvg = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512">
     <rect width="512" height="512" fill="#1f7a3d"/>
     <g transform="translate(96 96) scale(5)">${svg.toString().replace(/<\/?svg[^>]*>/g, '')}</g>
   </svg>`
);

await Promise.all([
  sharp(svg).resize(192, 192).png().toFile(path.join(iconsDir, 'icon-192.png')),
  sharp(svg).resize(512, 512).png().toFile(path.join(iconsDir, 'icon-512.png')),
  sharp(maskableSvg).resize(512, 512).png().toFile(path.join(iconsDir, 'icon-maskable-512.png')),
]);

await writeFile(path.join(iconsDir, '.gitkeep'), '');
console.log('Icons written to public/icons/');
