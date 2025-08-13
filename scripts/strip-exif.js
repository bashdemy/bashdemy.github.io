#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
import { cwd, argv, exit } from 'node:process';
import sharp from 'sharp';

const distDir = path.join(cwd(), 'dist');

async function* walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(fullPath);
    } else {
      yield fullPath;
    }
  }
}

function isImageNeedingStrip(filePath) {
  const lower = filePath.toLowerCase();
  return (
    lower.endsWith('.jpg') || lower.endsWith('.jpeg') || lower.endsWith('.png')
  );
}

async function stripExifInPlace(filePath) {
  const inputBuffer = await fs.readFile(filePath);
  // By default, sharp does not copy metadata unless withMetadata() is called
  const output = await sharp(inputBuffer).toBuffer();
  await fs.writeFile(filePath, output);
}

async function run() {
  try {
    console.log('🔧 Stripping EXIF metadata from images in dist...');
    let processed = 0;
    for await (const filePath of walk(distDir)) {
      if (isImageNeedingStrip(filePath)) {
        await stripExifInPlace(filePath);
        processed += 1;
      }
    }
    console.log(`✅ EXIF strip complete. Processed ${processed} image(s).`);
  } catch (err) {
    console.error('❌ Failed to strip EXIF metadata:', err);
    exit(1);
  }
}

if (import.meta.url === `file://${argv[1]}`) {
  run();
}

export default run;
