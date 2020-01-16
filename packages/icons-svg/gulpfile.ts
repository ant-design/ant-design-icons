import { series, parallel } from 'gulp';
import generateLibraryEntry from './tasks/generate/generateLibraryEntry';
import generateFilledIcons from './tasks/generate/generateFilledIcons';
import generateOutlinedIcons from './tasks/generate/generateOutlinedIcons';
import generateTwoToneIcons from './tasks/generate/generateTwoToneIcons';
import { clean, copy } from './tasks/creators';
import { generateIcons } from './tasks/creators/generate';
import { generalConfig } from './plugins/svgo/presets';

export default series(
  clean(['src', 'inline-svg', 'es', 'lib']),
  parallel(
    copy({
      from: ['build/templates/*.ts'],
      toDir: 'src'
    }),
    generateIcons({
      from: ['svg/filled/*.svg'],
      toDir: 'src/asn',
      svgoConfig: generalConfig
    }),
    generateFilledIcons,
    generateOutlinedIcons,
    generateTwoToneIcons,
    generateLibraryEntry
  )
);
