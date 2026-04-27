#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const publicDir = path.join(process.cwd(), "public");
const distDir = path.join(process.cwd(), "out");
const isDirectRun = process.argv[1]
  ? path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
  : false;

function ensureSitemapAccessible() {
  const sitemapPath = path.join(publicDir, "sitemap.xml");
  const distSitemapPath = path.join(distDir, "sitemap.xml");

  if (fs.existsSync(sitemapPath)) {
    console.log("✅ Sitemap found and will be copied to out");
  } else {
    console.log("⚠️  Sitemap not found, creating basic sitemap");
    const basicSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://bashdemy.com/</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;
    fs.writeFileSync(sitemapPath, basicSitemap);
  }
}

function ensureRobotsAccessible() {
  const robotsPath = path.join(publicDir, "robots.txt");

  if (!fs.existsSync(robotsPath)) {
    console.log("⚠️  Robots.txt not found, creating basic robots.txt");
    const basicRobots = `User-agent: *
Allow: /

# Sitemap location
Sitemap: https://bashdemy.com/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1`;
    fs.writeFileSync(robotsPath, basicRobots);
  }
}

function ensureManifestAccessible() {
  const manifestPath = path.join(publicDir, "manifest.json");

  if (!fs.existsSync(manifestPath)) {
    console.log("⚠️  Manifest.json not found, creating basic manifest");
    const basicManifest = {
      name: "Bazhena Dementyeva - Senior Software Engineer",
      short_name: "Bazhena Dementyeva",
      description:
        "Senior software engineer in Sydney working across full-stack product delivery, cloud infrastructure, and microservices",
      start_url: "/",
      display: "standalone",
      background_color: "#ffffff",
      theme_color: "#ffffff",
      icons: [
        {
          src: "/flower-icon.svg",
          sizes: "any",
          type: "image/svg+xml",
        },
      ],
    };
    fs.writeFileSync(manifestPath, JSON.stringify(basicManifest, null, 2));
  }
}

function optimizeSEO() {
  console.log("Starting SEO optimization...");

  ensureSitemapAccessible();
  ensureRobotsAccessible();
  ensureManifestAccessible();

  console.log("SEO optimization completed.");
}

if (isDirectRun) {
  optimizeSEO();
}

export default optimizeSEO;
