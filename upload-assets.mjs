import { put } from '@vercel/blob';
import { readdir } from 'fs/promises';
import { createReadStream } from 'fs';
import path from 'path';

/**
 * This script uploads .wav and .zip files from a local directory to Vercel Blob.
 * Requirements: Node.js 20.6+ (for --env-file support)
 * Usage: node --env-file=.env.local scripts/upload-assets.mjs <local_directory_path>
 */

const targetDir = process.argv[2];

if (!targetDir) {
  console.error('Please specify a directory. Example: node scripts/upload-assets.mjs ./private/audio');
  process.exit(1);
}

if (!process.env.BLOB_READ_WRITE_TOKEN) {
  console.error('Missing BLOB_READ_WRITE_TOKEN in environment.');
  console.log('Ensure you have pulled your env vars via `vercel env pull .env.local`');
  process.exit(1);
}

async function uploadFiles(dir) {
  const files = await readdir(dir, { withFileTypes: true });

  for (const file of files) {
    const filePath = path.join(dir, file.name);

    if (file.isDirectory() && file.name !== 'node_modules' && file.name !== '.git') {
      await uploadFiles(filePath);
      continue;
    }

    const ext = path.extname(file.name).toLowerCase();
    if (['.wav', '.zip'].includes(ext)) {
      console.log(`Uploading: ${file.name}...`);
      try {
        const stream = createReadStream(filePath);
        const { url } = await put(file.name, stream, { access: 'public', addRandomSuffix: false });
        console.log(`✅ Uploaded: ${url}`);
      } catch (err) {
        console.error(`❌ Failed ${file.name}:`, err.message);
      }
    }
  }
}

uploadFiles(targetDir).catch(console.error);