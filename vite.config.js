import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

function collectHtmlEntries(rootDir) {
  const ignoredDirs = new Set(['node_modules', 'dist', 'public', '.git']);
  const entries = [];

  function walk(currentDir) {
    for (const entry of fs.readdirSync(currentDir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        if (!ignoredDirs.has(entry.name)) {
          walk(path.join(currentDir, entry.name));
        }
        continue;
      }

      if (entry.name.endsWith('.html')) {
        entries.push(path.join(currentDir, entry.name));
      }
    }
  }

  walk(rootDir);
  return entries;
}

const rootDir = process.cwd();
const htmlEntries = collectHtmlEntries(rootDir);

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      input: htmlEntries
    }
  }
});
