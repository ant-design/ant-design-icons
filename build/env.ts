import path = require('path');
import { Environment } from './typings';

export const environment: Environment = {
  paths: {
    SVG_DIR: path.resolve(__dirname, '../svg'),
    ICON_TEMPLATE: path.resolve(__dirname, './templates/icon.ts.template'),
    INDEX_TEMPLATE: path.resolve(__dirname, './templates/index.ts.template'),
    MANIFEST_TEMPLATE: path.resolve(
      __dirname,
      './templates/manifest.ts.template'
    ),
    TWO_TONE_ICON_TEMPLATE: path.resolve(
      __dirname,
      './templates/twoToneIcon.ts.template'
    ),
    MAP_NAME_TO_IDENTIFIER_TEMPLATE: path.resolve(
      __dirname,
      './templates/mapNameToIdentifier.ts.template'
    ),
    MAP_NAME_TO_THEMED_NAME_TEMPLATE: path.resolve(
      __dirname,
      './templates/mapNameToThemedName.ts.template'
    ),
    ICON_OUTPUT_DIR: path.resolve(__dirname, '../src/'),
    THEME_FILL_OUTPUT: path.resolve(__dirname, '../src/fill/*.ts'),
    THEME_OUTLINE_OUTPUT: path.resolve(__dirname, '../src/outline/*.ts'),
    THEME_TWO_TONE_OUTPUT: path.resolve(__dirname, '../src/twotone/*.ts'),
    INDEX_OUTPUT: path.resolve(__dirname, '../src/index.ts'),
    MANIFEST_OUTPUT: path.resolve(__dirname, '../src/manifest.ts'),
    MAP_NAME_TO_IDENTIFIER_OUTPUT: path.resolve(
      __dirname,
      '../src/mapNameToIdentifier.ts'
    ),
    MAP_NAME_TO_THEMED_NAME_OUTPUT: path.resolve(
      __dirname,
      '../src/mapNameToThemedName.ts'
    )
  },
  base: path.resolve(__dirname, '../'),
  options: {
    // SVGO Options
    // refer from @material-ui/icons
    // https://github.com/mui-org/material-ui/blob/master/packages/material-ui-icons/builder.js#L18
    svgo: {
      floatPrecision: 1,
      plugins: [
        { cleanupAttrs: true },
        { removeDoctype: true },
        { removeXMLProcInst: true },
        { removeXMLNS: true },
        { removeComments: true },
        { removeMetadata: true },
        { removeTitle: true },
        { removeDesc: true },
        { removeUselessDefs: true },
        { removeEditorsNSData: true },
        { removeEmptyAttrs: true },
        { removeHiddenElems: true },
        { removeEmptyText: true },
        { removeEmptyContainers: true },
        { removeViewBox: false },
        { cleanupEnableBackground: true },
        { convertStyleToAttrs: true },
        { convertColors: true },
        { convertPathData: true },
        { convertTransform: true },
        { removeUnknownsAndDefaults: true },
        { removeNonInheritableGroupAttrs: true },
        { removeUselessStrokeAndFill: true },
        { removeUnusedNS: true },
        { cleanupIDs: true },
        { cleanupNumericValues: true },
        { moveElemsAttrsToGroup: true },
        { moveGroupAttrsToElems: true },
        { collapseGroups: true },
        { removeRasterImages: false },
        { mergePaths: true },
        { convertShapeToPath: true },
        { sortAttrs: true },
        { removeDimensions: true },
        { removeAttrs: { attrs: 'class' } }
      ]
    },
    prettier: {
      parser: 'babylon',
      singleQuote: true
    }
  }
};
