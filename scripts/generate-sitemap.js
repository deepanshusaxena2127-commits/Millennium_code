#!/usr/bin/env node

/**
 * Simple Sitemap Generator for MillenniumAI
 * Generates sitemap.xml from routes
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SITE_URL = 'https://www.millenniumai.com';
const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/solutions/generative-ai', priority: '0.9', changefreq: 'monthly' },
  { path: '/solutions/nlp', priority: '0.9', changefreq: 'monthly' },
  { path: '/solutions/computer-vision', priority: '0.9', changefreq: 'monthly' },
  { path: '/solutions/content-moderation', priority: '0.9', changefreq: 'monthly' },
  { path: '/solutions/document-analysis', priority: '0.9', changefreq: 'monthly' },
  { path: '/solutions/speech-transcription', priority: '0.9', changefreq: 'monthly' },
  { path: '/solutions/full-stack-dev', priority: '0.9', changefreq: 'monthly' },
  { path: '/industries/automotive', priority: '0.8', changefreq: 'monthly' },
  { path: '/industries/healthcare', priority: '0.8', changefreq: 'monthly' },
  { path: '/industries/finance', priority: '0.8', changefreq: 'monthly' },
  { path: '/industries/ecommerce', priority: '0.8', changefreq: 'monthly' },
  { path: '/industries/agriculture', priority: '0.8', changefreq: 'monthly' },
  { path: '/industries/manufacturing', priority: '0.8', changefreq: 'monthly' },
  { path: '/industries/retail', priority: '0.8', changefreq: 'monthly' },
  { path: '/industries/logistics', priority: '0.8', changefreq: 'monthly' },
  { path: '/industries/security', priority: '0.8', changefreq: 'monthly' },
  { path: '/industries/media', priority: '0.8', changefreq: 'monthly' },
  { path: '/industries/legal', priority: '0.8', changefreq: 'monthly' },
  { path: '/industries/education', priority: '0.8', changefreq: 'monthly' },
  { path: '/company/about', priority: '0.7', changefreq: 'monthly' },
  { path: '/company/careers', priority: '0.7', changefreq: 'weekly' },
  { path: '/company/leadership', priority: '0.7', changefreq: 'monthly' },
  { path: '/company/security', priority: '0.7', changefreq: 'monthly' },
  { path: '/work', priority: '0.8', changefreq: 'weekly' },
  { path: '/insights', priority: '0.8', changefreq: 'daily' },
  { path: '/contact', priority: '0.9', changefreq: 'yearly' }
];

// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

// Write sitemap.xml to dist directory
const distDir = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
console.log('✅ Sitemap generated: dist/sitemap.xml');
