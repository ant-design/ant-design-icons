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
 * util lib
 */
const kebabcase = require('lodash.kebabcase');

/**
 * paths
 */
const SVG_DIR = path.resolve(__dirname, '../src/svg');
const OUTPUT_DIR = path.resolve(__dirname, '../src/components');
const OUTPUT_INDEX = path.resolve(OUTPUT_DIR, '../index.ts');
const OUTPUT_METADATA = path.resolve(OUTPUT_DIR, '../metadata.ts');
const OUTPUT_SYMBOLS = path.resolve(OUTPUT_DIR, '../symbols.ts');
const outputDirs = [OUTPUT_DIR, OUTPUT_INDEX, OUTPUT_METADATA, OUTPUT_SYMBOLS];

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
    return;
  }

  const svgFileNames = await globby(['*.svg'], { cwd: SVG_DIR });
  const svgFilePaths = svgFileNames.map((name) => path.resolve(SVG_DIR, name));

  await Promise.all(outputDirs.map((dir) => rimraf(dir)));
  await mkdirp(OUTPUT_DIR);

  console.log(chalk.green(`[Generate SVG Component] Icon Amount: ${svgFileNames.length}`));

  const componentNames = [];
  const metaData = {};

  for (const svgPath of svgFilePaths) {
    const svgCode = fs.readFileSync(svgPath);
    const componentCode = await svgr(svgCode, svgrConfig, { filePath: svgPath });
    const svgName = `${getComponentName({ filePath: svgPath })}`;
    fs.writeFileSync(path.resolve(OUTPUT_DIR, `${svgName}.tsx`), componentCode);
    componentNames.push(svgName);
    metaData[kebabcase(svgName)] = svgName;
  }

  console.log(chalk.green(`[Generate SVG Component] Icon Components Generated!`));

  fs.writeFileSync(OUTPUT_INDEX,
    fs.readFileSync(path.resolve(__dirname, './index.ts.template'), { encoding: 'utf8' })
      .replace('<% EXPORT_ALL_REACT_COMPONENTS %>', componentNames.map((name) => `export { default as ${name} } from './components/${name}';`).join('\n'))
  );

  console.log(chalk.green(`[Generate SVG Component] Entry Generated!`));

  fs.writeFileSync(OUTPUT_METADATA,
    fs.readFileSync(path.resolve(__dirname, './metadata.ts.template'), { encoding: 'utf8' })
      .replace('<% METADATA_JSON %>', JSON.stringify(metaData))
  );

  console.log(chalk.green(`[Generate SVG Component] Meta Data Generated!`));

  fs.writeFileSync(OUTPUT_SYMBOLS,
    fs.readFileSync(path.resolve(__dirname, './symbols.ts.template'), { encoding: 'utf8' })
      .replace('<% IMPORT_HOLDER %>', componentNames.map((name, i) => `import ${name} from './svg/${svgFileNames[i]}';`).join('\n'))
      .replace('<% COMPONENT_NAMES_LIST %>', '  ' + componentNames.join(', \n  '))
  );

  console.log(chalk.green(`[Generate SVG Component] Symbols Generated!`));
}

/**
 * start
 */
build(svgrConfig);
