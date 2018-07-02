/**
 * core transform libs
 */
const { default: svgr, getComponentName } = require('@svgr/core');

/**
 * io libs
 */
const globby = require('globby');
const path = require('path');
const fs = require('fs');
const { rimraf, mkdirp } = require('mz-modules');
const chalk = require('chalk');

/**
 * paths
 */
const SVG_DIR = path.resolve(__dirname, './svg');
const OUTPUT_DIR = path.resolve(__dirname, '../src/components');
const OUTPUT_INDEX = path.resolve(OUTPUT_DIR, '../index.ts');

/**
 * template
 */
const indexTemplate = require('./index.template');

/**
 * default svgr config
 */
const svgrConfig = require('./svgr.config');


/**
 * Generate react component from raw svg files.
 * @param svgrConfig {object} the svgr config.
 * @returns {Promise<void>}
 */
async function build(svgrConfig = {}) {
  if (!fs.existsSync(SVG_DIR)) {
    console.error(chalk.red(`[Generate SVG Component] Cannot find the svg files. Check the dir: ${SVG_DIR}.`));
  }
  const svgFileNames = await globby([ '*.svg' ], { cwd: SVG_DIR });
  const svgFilePaths = svgFileNames.map((name) => path.resolve(SVG_DIR, name));

  await rimraf(OUTPUT_DIR);
  await mkdirp(OUTPUT_DIR);

  console.log(chalk.green(`[Generate SVG Component] Icon Amount: ${svgFileNames.length}`));

  const componentNames = [];

  for (const svgPath of svgFilePaths) {
    const svgCode = fs.readFileSync(svgPath);
    const componentCode = await svgr(svgCode, svgrConfig, { filePath: svgPath });
    const svgName = `${getComponentName({ filePath: svgPath })}`;
    fs.writeFileSync(path.resolve(OUTPUT_DIR, `${svgName}.tsx`), componentCode);
    componentNames.push(svgName);
  }

  console.log(chalk.green(`[Generate SVG Component] Icon Components Generated!`));

  fs.writeFileSync(OUTPUT_INDEX, indexTemplate('./components', componentNames));

  console.log(chalk.green(`[Generate SVG Component] Entry Generated!`));
}

/**
 * start
 */
build(svgrConfig);
