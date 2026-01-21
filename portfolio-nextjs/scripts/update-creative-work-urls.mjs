#!/usr/bin/env node

/**
 * Update creative-work.ts with Vercel Blob URLs
 *
 * Reads the blob-url-mapping.json file created by upload-to-blob.mjs
 * and updates all file paths in src/data/creative-work.ts
 *
 * Usage:
 *   node scripts/update-creative-work-urls.mjs
 */

import { readFile, writeFile } from "fs/promises";

const MAPPING_FILE = "blob-url-mapping.json";
const CREATIVE_WORK_FILE = "src/data/creative-work.ts";

async function main() {
  // Read the URL mapping
  let mapping;
  try {
    const mappingContent = await readFile(MAPPING_FILE, "utf-8");
    mapping = JSON.parse(mappingContent);
  } catch (err) {
    console.error(`Error: Could not read ${MAPPING_FILE}`);
    console.error("Run 'node scripts/upload-to-blob.mjs' first to upload files.");
    process.exit(1);
  }

  // Read the creative-work.ts file
  let content;
  try {
    content = await readFile(CREATIVE_WORK_FILE, "utf-8");
  } catch (err) {
    console.error(`Error: Could not read ${CREATIVE_WORK_FILE}`);
    process.exit(1);
  }

  // Replace all file paths with blob URLs
  let replacements = 0;
  let updatedContent = content;

  for (const [oldPath, newUrl] of Object.entries(mapping)) {
    // Escape special regex characters in the path
    const escapedPath = oldPath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`"${escapedPath}"`, "g");

    if (updatedContent.match(regex)) {
      updatedContent = updatedContent.replace(regex, `"${newUrl}"`);
      replacements++;
    }
  }

  if (replacements === 0) {
    console.log("No paths were updated. Files may already use blob URLs.");
    return;
  }

  // Write the updated file
  await writeFile(CREATIVE_WORK_FILE, updatedContent);

  console.log(`✅ Updated ${replacements} file paths in ${CREATIVE_WORK_FILE}`);
  console.log("\nChanges made:");
  console.log("- Local paths like '/work/...' → Vercel Blob URLs");
  console.log("- Local paths like '/images/work/...' → Vercel Blob URLs");
  console.log("\nNext steps:");
  console.log("1. Review the changes: git diff src/data/creative-work.ts");
  console.log("2. Test locally: npm run dev");
  console.log("3. Commit and push the changes");
}

main().catch(console.error);
