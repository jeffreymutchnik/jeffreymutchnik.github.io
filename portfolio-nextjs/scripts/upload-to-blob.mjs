#!/usr/bin/env node

/**
 * Upload work files to Vercel Blob Storage
 *
 * Prerequisites:
 * 1. Create a Vercel Blob store at https://vercel.com/dashboard/stores
 * 2. Copy the BLOB_READ_WRITE_TOKEN to .env.local
 *
 * Usage:
 *   node scripts/upload-to-blob.mjs
 *
 * Output:
 *   - Creates blob-url-mapping.json with old path → new URL mappings
 *   - Updates src/data/creative-work.ts with new URLs (optional with --update flag)
 */

import { put } from "@vercel/blob";
import { readdir, readFile, writeFile, stat } from "fs/promises";
import { join, relative, extname } from "path";
import { config } from "dotenv";

// Load environment variables
config({ path: ".env.local" });

const WORK_DIRS = ["public/work", "public/images/work"];
const OUTPUT_FILE = "blob-url-mapping.json";

// File extension to content type mapping
const CONTENT_TYPES = {
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
};

async function getAllFiles(dir, files = []) {
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory()) {
        await getAllFiles(fullPath, files);
      } else {
        files.push(fullPath);
      }
    }
  } catch (err) {
    // Directory might not exist
    console.log(`Note: ${dir} not found, skipping...`);
  }
  return files;
}

async function uploadFile(filePath) {
  const ext = extname(filePath).toLowerCase();
  const contentType = CONTENT_TYPES[ext] || "application/octet-stream";

  // Create a clean path name for the blob (remove 'public/' prefix)
  const blobPath = relative("public", filePath);

  const fileBuffer = await readFile(filePath);

  const blob = await put(blobPath, fileBuffer, {
    access: "public",
    contentType,
    addRandomSuffix: false, // Keep clean URLs
  });

  return blob;
}

async function main() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error("Error: BLOB_READ_WRITE_TOKEN not found in .env.local");
    console.error("1. Go to https://vercel.com/dashboard/stores");
    console.error("2. Create a Blob store (or select existing)");
    console.error("3. Copy the read-write token");
    console.error("4. Add it to .env.local as BLOB_READ_WRITE_TOKEN=your_token");
    process.exit(1);
  }

  console.log("📦 Collecting files to upload...\n");

  let allFiles = [];
  for (const dir of WORK_DIRS) {
    const files = await getAllFiles(dir);
    allFiles = allFiles.concat(files);
  }

  if (allFiles.length === 0) {
    console.log("No files found to upload.");
    return;
  }

  console.log(`Found ${allFiles.length} files to upload.\n`);

  const urlMapping = {};
  let uploaded = 0;
  let failed = 0;

  for (const filePath of allFiles) {
    const relativePath = relative("public", filePath);
    const originalPath = "/" + relativePath; // e.g., /work/patientiq/case-studies/file.pdf

    try {
      const blob = await uploadFile(filePath);
      urlMapping[originalPath] = blob.url;
      uploaded++;
      console.log(`✓ [${uploaded}/${allFiles.length}] ${relativePath}`);
    } catch (err) {
      failed++;
      console.error(`✗ Failed: ${relativePath} - ${err.message}`);
    }
  }

  console.log(`\n📊 Results: ${uploaded} uploaded, ${failed} failed\n`);

  // Save mapping file
  await writeFile(OUTPUT_FILE, JSON.stringify(urlMapping, null, 2));
  console.log(`📄 URL mapping saved to ${OUTPUT_FILE}`);

  // Show sample of URLs
  const sample = Object.entries(urlMapping).slice(0, 3);
  console.log("\n📋 Sample URLs:");
  for (const [old, newUrl] of sample) {
    console.log(`   ${old}`);
    console.log(`   → ${newUrl}\n`);
  }

  console.log("\n✅ Upload complete!");
  console.log("\nNext steps:");
  console.log("1. Run: node scripts/update-creative-work-urls.mjs");
  console.log("   This will update src/data/creative-work.ts with the new blob URLs");
}

main().catch(console.error);
