/**
 * Auto-generate sitemap.xml at build time
 * This file is executed after `npm run build`
 */

import fs from "fs";
import path from "path";
import { siteContent, siteMeta } from "../src/lib/content.js";

// Absolute domain (must include https)
const BASE_URL = siteMeta.domain;

// Collect all URLs from content
function collectUrls() {
  const urls = new Set();

  /* ---------- Static pages ---------- */
  urls.add("/");
  urls.add("/contact");
  urls.add("/insights");

  /* ---------- Solutions ---------- */
  Object.values(siteContent.solutions || {}).forEach((item) => {
    urls.add(`/solutions/${item.slug}`);
  });

  /* ---------- Industries ---------- */
  Object.values(siteContent.industries || {}).forEach((item) => {
    urls.add(`/industries/${item.slug}`);
  });

  /* ---------- Company pages ---------- */
  Object.values(siteContent.company || {}).forEach((item) => {
    urls.add(`/company/${item.slug}`);
  });

  /* ---------- Work / Case studies ---------- */
  Object.values(siteContent.work || {}).forEach((item) => {
    urls.add(`/work/${item.slug}`);
  });

  /* ---------- Insights categories ---------- */
  Object.values(siteContent.insights?.categories || {}).forEach((item) => {
    urls.add(`/insights/${item.slug}`);
  });

  /* ---------- Insights articles ---------- */
  Object.values(siteContent.insights?.articles || {}).forEach((item) => {
    urls.add(`/insights/article/${item.slug}`);
  });

  return Array.from(urls);
}

// Generate sitemap XML
function generateSitemap() {
  const urls = collectUrls();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>${BASE_URL}${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  const outputPath = path.resolve("dist/sitemap.xml");

  fs.writeFileSync(outputPath, xml.trim(), "utf8");
  console.log(`✅ sitemap.xml generated at ${outputPath}`);
}

// Run
generateSitemap();
