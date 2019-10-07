import { series, parallel } from 'gulp';
import cleanDirectories from './tasks/preProcess/cleanDirectories';
import copyTemplates from './tasks/generate/copyTemplates';
import generateLibraryEntry from './tasks/generate/generateLibraryEntry';
import generateFilledIcons from './tasks/generate/generateFilledIcons';
import generateOutlinedIcons from './tasks/generate/generateOutlinedIcons';
import generateTwoToneIcons from './tasks/generate/generateTwoToneIcons';
import generateIconsListInDocs from './tasks/sideEffects/generateIconsListInDocs';

export default series(
  cleanDirectories,
  copyTemplates,
  parallel(
    generateFilledIcons,
    generateOutlinedIcons,
    generateTwoToneIcons,
    generateLibraryEntry
  ),
  generateIconsListInDocs
);
