import assert = require('assert');
import fs = require('fs');
import path = require('path');
import { build } from '../build/generateIcons';
import { Environment } from '../build/typings';
import { getSVGOPlugin } from '../build/utils';

describe('build/generateIcon.ts', () => {
  const env: Environment = {
    paths: {
      SVG_DIR: path.resolve(__dirname, './case/svgs'),
      SVGS_TS_TEMPLATE: path.resolve(__dirname, '../build/templates/svgs.ts.template'),
      SVGS_TS_OUTPUT: path.resolve(__dirname, './case/src/svgs.ts'),
      MANIFEST_TS_TEMPLATE: path.resolve(__dirname, '../build/templates/manifest.ts.template'),
      MANIFEST_TS_OUTPUT: path.resolve(__dirname, './case/src/manifest.ts')
    },
    base: path.resolve(__dirname, '../'),
    options: {
      svgo: {
        plugins: getSVGOPlugin()
      }
    }
  };
  const closeTarget = {
    width: 1024,
    height: 1024,
    viewBox: '0 0 1024 1024',
    style: '',
    children: [
      {
        tag: 'path',
        attrs:
        {
          d:
            'M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.' +
            '1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.' +
            '8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9c-4.4 5.2-.7 13.1 6.1 1' +
            '3.1h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 ' +
            '5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z'
        }
      }
    ],
    name: 'close'
  };
  it('should work.', async () => {
    await build(env);
    const svgTsString = fs.readFileSync(env.paths.SVGS_TS_OUTPUT, 'utf8');
    const raw = /export const Close: IconDefinition = .+/.exec(svgTsString);
    assert(raw !== null);
    const actualCloseObject = JSON.parse(raw![0].replace('export const Close: IconDefinition = ', ''));
    assert.deepEqual(actualCloseObject, closeTarget);
  });
});
