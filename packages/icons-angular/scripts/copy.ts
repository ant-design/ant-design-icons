import * as fs from 'fs-extra';
import * as path from 'path';

function copyAssets() {
  const from = path.resolve(__dirname, '../src/inline-svg');
  const to = path.resolve(__dirname, '../dist/icons/src/inline-svg');
  fs.copy(from, to);
}

copyAssets();
