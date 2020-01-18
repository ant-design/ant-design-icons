import { series, parallel } from 'gulp';
import generateLibraryEntry from './tasks/generate/generateLibraryEntry';
import generateFilledIcons from './tasks/generate/generateFilledIcons';
import generateOutlinedIcons from './tasks/generate/generateOutlinedIcons';
import generateTwoToneIcons from './tasks/generate/generateTwoToneIcons';
import { clean, copy } from './tasks/creators';
import { generateIcons } from './tasks/creators/generate';
import { generalConfig, remainFillConfig } from './plugins/svgo/presets';
import {
  assignAttrsAtTag,
  adjustViewBox
} from './plugins/svg2Definition/transforms';

export default series(
  clean(['src', 'inline-svg', 'es', 'lib']),
  parallel(
    copy({
      from: ['build/templates/*.ts'],
      toDir: 'src'
    }),
    generateIcons({
      theme: 'twotone',
      from: ['svg/twotone/*.svg'],
      toDir: 'src/asn',
      svgoConfig: remainFillConfig,
      extraNodeTransformFactories: [
        assignAttrsAtTag('svg', { focusable: 'false' }),
        adjustViewBox
      ]
    }),
    generateFilledIcons,
    generateOutlinedIcons,
    generateTwoToneIcons,
    generateLibraryEntry
  )
);
