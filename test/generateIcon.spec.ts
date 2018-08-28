import fs = require('fs-extra');
import path = require('path');
import { environment } from '../build/env';
import { build } from '../build/generateIcons';
import { Environment } from '../build/typings';

describe.skip('build/generateIcon.ts', () => {
  const env: Environment = {
    paths: {
      SVG_DIR: path.resolve(__dirname, './root/svg'),
      ICON_TEMPLATE: path.resolve(
        __dirname,
        '../build/templates/icon.ts.template'
      ),
      ICON_IMPORT_TEMPLATE: path.resolve(
        __dirname,
        '../build/templates/icon-import.ts.template'
      ),
      INDEX_TEMPLATE: path.resolve(
        __dirname,
        '../build/templates/index.ts.template'
      ),
      ICON_OUTPUT_DIR: path.resolve(__dirname, './case/src/'),
      ALL_ICON_OUTPUT: path.resolve(__dirname, './case/src/*.ts'),
      INDEX_OUTPUT: path.resolve(__dirname, './case/src/index.ts')
    },
    base: path.resolve(__dirname, './'),
    options: {
      svgo: environment.options.svgo,
      prettier: environment.options.prettier
    }
  };
  const closePath =
    'M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.' +
    '7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-' +
    '5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.' +
    '9 824.9c-4.4 5.2-.7 13.1 6.1 13.1h79.8c4.7 0 9.2-2.1 12.' +
    '3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.' +
    '8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z';
  it('should work.', async () => {
    await build(env);
    const closeString = await fs.readFile(
      `${env.paths.ICON_OUTPUT_DIR}/Close.ts`,
      'utf8'
    );
    expect(closeString).toContain(closePath);
  });
});
