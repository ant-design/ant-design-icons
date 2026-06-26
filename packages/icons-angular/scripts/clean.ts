import * as fs from 'fs-extra';
import * as path from 'path';

function clean() {
  const iconDist = path.resolve(__dirname, '../dist/icons');
  fs.removeSync(iconDist);
}

clean();
