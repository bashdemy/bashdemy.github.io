#!/usr/bin/env node

import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const root = process.cwd();
const publicDir = path.join(root, "public");
const profilePath = path.join(publicDir, "profile-picture.JPG");
const outputPath = path.join(publicDir, "og-image.jpg");

const WIDTH = 1200;
const HEIGHT = 630;

function textSvg() {
  return Buffer.from(`
    <svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="roseGlow" cx="18%" cy="18%" r="70%">
          <stop offset="0%" stop-color="#f3dce3"/>
          <stop offset="62%" stop-color="#fbf7f5"/>
          <stop offset="100%" stop-color="#f4edeb"/>
        </radialGradient>
      </defs>
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#roseGlow)"/>
      <rect x="60" y="60" width="1080" height="510" rx="28" fill="#fffdfc" fill-opacity="0.82" stroke="#e5d7d2" stroke-width="2"/>
      <text x="570" y="185" fill="#7f3f56" font-family="Inter, Arial, sans-serif" font-size="54" font-weight="800">Bazhena Dementyeva</text>
      <text x="570" y="245" fill="#241b20" font-family="Inter, Arial, sans-serif" font-size="34" font-weight="700">Senior Software Engineer</text>
      <text x="570" y="305" fill="#5f5458" font-family="Inter, Arial, sans-serif" font-size="26" font-weight="500">React | Node.js | GraphQL | React Native</text>
      <text x="570" y="350" fill="#5f5458" font-family="Inter, Arial, sans-serif" font-size="26" font-weight="500">Cloud infrastructure | Microservices | Product delivery</text>
      <text x="570" y="465" fill="#b45f78" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="700">bashdemy.com</text>
      <circle cx="945" cy="150" r="72" fill="#d8a0ae" fill-opacity="0.16"/>
      <circle cx="1045" cy="470" r="96" fill="#5f5168" fill-opacity="0.08"/>
    </svg>
  `);
}

async function generateOgImage() {
  const portrait = await sharp(profilePath)
    .rotate()
    .resize(410, 410, { fit: "cover" })
    .jpeg({ quality: 86, mozjpeg: true })
    .toBuffer();

  const portraitFrame = await sharp({
    create: {
      width: 430,
      height: 430,
      channels: 4,
      background: "#ffffff",
    },
  })
    .composite([{ input: portrait, left: 10, top: 10 }])
    .jpeg({ quality: 88, mozjpeg: true })
    .toBuffer();

  await sharp({
    create: {
      width: WIDTH,
      height: HEIGHT,
      channels: 3,
      background: "#fbf7f5",
    },
  })
    .composite([
      { input: textSvg(), left: 0, top: 0 },
      { input: portraitFrame, left: 110, top: 100 },
    ])
    .jpeg({ quality: 86, progressive: true, mozjpeg: true })
    .toFile(outputPath);

  console.log(`Generated ${path.relative(root, outputPath)}`);
}

generateOgImage().catch(error => {
  console.error("Failed to generate OG image:", error);
  process.exit(1);
});
