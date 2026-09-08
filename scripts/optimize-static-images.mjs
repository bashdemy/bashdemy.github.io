#!/usr/bin/env node

import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const root = process.cwd();
const publicDir = path.join(root, "public");

const photoAssets = [
  "bread.jpg",
  "cat-picture.jpg",
  "grad.jpg",
  "group.JPG",
  "jits.jpg",
  "profile-picture.JPG",
  "runner-up-project.jpg",
  "sushi.jpg",
  "sonia-kania/branding.jpg",
  "sonia-kania/couples.jpeg",
  "sonia-kania/portraits.jpg",
];

const MAX_DIMENSION = 1600;
const JPEG_QUALITY = 82;

async function optimizeImage(relativePath) {
  const filePath = path.join(publicDir, relativePath);
  const input = await fs.readFile(filePath);
  const before = input.byteLength;
  const image = sharp(input).rotate();
  const metadata = await image.metadata();
  const width = metadata.width || MAX_DIMENSION;
  const height = metadata.height || MAX_DIMENSION;

  const output = await image
    .resize({
      width: Math.min(width, MAX_DIMENSION),
      height: Math.min(height, MAX_DIMENSION),
      fit: "inside",
      withoutEnlargement: true,
    })
    .jpeg({ quality: JPEG_QUALITY, progressive: true, mozjpeg: true })
    .toBuffer();

  if (output.byteLength < before) {
    await fs.writeFile(filePath, output);
  }

  return {
    relativePath,
    before,
    after: Math.min(before, output.byteLength),
  };
}

async function run() {
  const results = await Promise.all(photoAssets.map(optimizeImage));
  for (const result of results) {
    const beforeKb = Math.round(result.before / 1024);
    const afterKb = Math.round(result.after / 1024);
    console.log(`${result.relativePath}: ${beforeKb}KB -> ${afterKb}KB`);
  }
}

run().catch(error => {
  console.error("Failed to optimise static images:", error);
  process.exit(1);
});
