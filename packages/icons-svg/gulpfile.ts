import { series, parallel } from 'gulp';
import copyTemplates from './tasks/generate/copyTemplates';
import generateLibraryEntry from './tasks/generate/generateLibraryEntry';
import generateFilledIcons from './tasks/generate/generateFilledIcons';
import generateOutlinedIcons from './tasks/generate/generateOutlinedIcons';
import generateTwoToneIcons from './tasks/generate/generateTwoToneIcons';
import { clean } from './tasks/preProcess/clean';

export default series(
  clean(['src', 'inline-svg', 'es', 'lib']),
  parallel(
    copyTemplates,
    generateFilledIcons,
    generateOutlinedIcons,
    generateTwoToneIcons,
    generateLibraryEntry
  )
);
