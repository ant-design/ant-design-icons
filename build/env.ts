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
    ICON_OUTPUT_DIR: path.resolve(__dirname, '../src/'),
    THEME_FILL_OUTPUT: path.resolve(__dirname, '../src/fill/*.ts'),
    THEME_OUTLINE_OUTPUT: path.resolve(__dirname, '../src/outline/*.ts'),
    THEME_TWO_TONE_OUTPUT: path.resolve(__dirname, '../src/twotone/*.ts'),
    INDEX_OUTPUT: path.resolve(__dirname, '../src/index.ts'),
    MANIFEST_OUTPUT: path.resolve(__dirname, '../src/manifest.ts'),
    DIST_TEMPLATE: path.resolve(__dirname, './templates/dist.ts.template'),
    DIST_OUTPUT: path.resolve(__dirname, '../src/dist.ts'),
    TYPES_TEMPLATE: path.resolve(__dirname, './templates/types.ts'),
    TYPES_OUTPUT: path.resolve(__dirname, '../src/types.ts'),
    HELPERS_TEMPLATE: path.resolve(__dirname, './templates/helpers.ts'),
    HELPERS_OUTPUT: path.resolve(__dirname, '../src/helpers.ts'),
    INLINE_SVG_OUTPUT_DIR: path.resolve(__dirname, '../inline-svg/'),
    INLINE_SVG_THEME_FILL_OUTPUT: path.resolve(
      __dirname,
      '../inline-svg/fill/*.svg'
    ),
    INLINE_SVG_THEME_OUTLINE_OUTPUT: path.resolve(
      __dirname,
      '../inline-svg/outline/*.svg'
    ),
    INLINE_SVG_THEME_TWO_TONE_OUTPUT: path.resolve(
      __dirname,
      '../inline-svg/twotone/*.svg'
    )
  },
  base: path.resolve(__dirname, '../'),
  options: {
    // SVGO Options
    // refer from @material-ui/icons
    // https://github.com/mui-org/material-ui/blob/master/packages/material-ui-icons/builder.js#L18
    svgo: {
      floatPrecision: 2,
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
        { removeAttrs: { attrs: ['class'] } }
      ]
    },
    prettier: {
      parser: 'babylon',
      singleQuote: true
    }
  }
};
