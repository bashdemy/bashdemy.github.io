#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const TARGET_SEARCH_TERMS = [
  'Bazhena Dementyeva',
  'Maria Dementyeva',
  'Maria Demy',
  'bashdemy',
];

const SEO_FILES = [
  'index.html',
  'public/manifest.json',
  'public/sitemap.xml',
  'src/components/About.jsx',
];

function checkFileForTerms(filePath, terms) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const foundTerms = [];

    terms.forEach(term => {
      if (content.includes(term)) {
        foundTerms.push(term);
      }
    });

    return foundTerms;
  } catch (error) {
    console.log(`❌ Error reading ${filePath}: ${error.message}`);
    return [];
  }
}

function testSEO() {
  console.log('🔍 Testing SEO for target search terms...');
  console.log('Target terms:', TARGET_SEARCH_TERMS.join(', '));
  console.log('');

  let totalFound = 0;
  const results = {};

  SEO_FILES.forEach(file => {
    const filePath = path.join(process.cwd(), file);
    const foundTerms = checkFileForTerms(filePath, TARGET_SEARCH_TERMS);

    if (foundTerms.length > 0) {
      console.log(
        `✅ ${file}: Found ${foundTerms.length}/${TARGET_SEARCH_TERMS.length} terms`
      );
      console.log(`   Found: ${foundTerms.join(', ')}`);
      totalFound += foundTerms.length;
      results[file] = foundTerms;
    } else {
      console.log(`❌ ${file}: No target terms found`);
    }
  });

  console.log('');
  console.log(
    `📊 Summary: Found ${totalFound} instances of target terms across ${SEO_FILES.length} files`
  );

  const allFoundTerms = new Set();
  Object.values(results).forEach(terms => {
    terms.forEach(term => allFoundTerms.add(term));
  });

  const missingTerms = TARGET_SEARCH_TERMS.filter(
    term => !allFoundTerms.has(term)
  );

  if (missingTerms.length === 0) {
    console.log('🎉 All target search terms are included in the SEO files!');
  } else {
    console.log(`⚠️  Missing terms: ${missingTerms.join(', ')}`);
  }

  return {
    totalFound,
    coverage: (allFoundTerms.size / TARGET_SEARCH_TERMS.length) * 100,
    missingTerms,
  };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  testSEO();
}

export default testSEO;
