import path = require('path');
import { Environment } from './typings';
import { getSVGOPlugin } from './utils';

export const environment: Environment = {
  paths: {
    SVG_DIR: path.resolve(__dirname, '../svg'),
    SVGS_TS_TEMPLATE: path.resolve(__dirname, './templates/svgs.ts.template'),
    SVGS_TS_OUTPUT: path.resolve(__dirname, '../src/svgs.ts'),
    MANIFEST_TS_TEMPLATE: path.resolve(__dirname, './templates/manifest.ts.template'),
    MANIFEST_TS_OUTPUT: path.resolve(__dirname, '../src/manifest.ts')
  },
  base: path.resolve(__dirname, '../'),
  options: {
    svgo: {
      plugins: getSVGOPlugin()
    }
  }
};
