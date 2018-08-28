import path = require('path');
import { Environment } from './typings';

export const environment: Environment = {
  paths: {
    SVG_DIR: path.resolve(__dirname, '../svg'),
    ICON_TEMPLATE: path.resolve(__dirname, './templates/icon.ts.template'),
    ICON_IMPORT_TEMPLATE: path.resolve(
      __dirname,
      './templates/icon-import.ts.template'
    ),
    INDEX_TEMPLATE: path.resolve(__dirname, './templates/index.ts.template'),
    ICON_OUTPUT_DIR: path.resolve(__dirname, '../src/'),
    ALL_ICON_OUTPUT: path.resolve(__dirname, '../src/*.ts'),
    INDEX_OUTPUT: path.resolve(__dirname, '../src/index.ts')
  },
  base: path.resolve(__dirname, '../'),
  options: {
    // SVGO Options
    // refer from @material-ui/icons
    // https://github.com/mui-org/material-ui/blob/master/packages/material-ui-icons/builder.js#L18
    svgo: {
      floatPrecision: 4,
      plugins: [
        { cleanupAttrs: true },
        { removeDoctype: true },
        { removeXMLProcInst: true },
        { removeComments: true },
        { removeMetadata: true },
        { removeTitle: true },
        { removeDesc: true },
        { removeUselessDefs: true },
        { removeXMLNS: true },
        { removeEditorsNSData: true },
        { removeEmptyAttrs: true },
        { removeHiddenElems: true },
        { removeEmptyText: true },
        { removeEmptyContainers: true },
        { removeViewBox: true },
        { cleanupEnableBackground: true },
        { minifyStyles: true },
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
        { cleanupListOfValues: true },
        { moveElemsAttrsToGroup: true },
        { moveGroupAttrsToElems: true },
        { collapseGroups: true },
        { removeRasterImages: true },
        { mergePaths: true },
        { convertShapeToPath: true },
        { sortAttrs: true },
        { removeDimensions: true },
        { removeAttrs: true },
        { removeElementsByAttr: true },
        { removeStyleElement: true },
        { removeScriptElement: true }
      ]
    },
    prettier: {
      parser: 'babylon',
      singleQuote: true
    }
  }
};
