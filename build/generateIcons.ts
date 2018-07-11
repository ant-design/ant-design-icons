'use strict';

import fs = require('fs');
import globby = require('globby');
import _ = require('lodash');
import parse5 = require('parse5');
import path = require('path');
import SVGO = require('svgo');
// tslint:disable-next-line:no-var-requires
const pkg = require('../package.json');
// tslint:disable-next-line:no-var-requires
const { rimraf } = require('mz-modules');
import assert = require('assert');
import chalk from 'chalk';
import { generateAbstractTree, getSVGOPlugin, IconDefinition, INode } from './utils';

const environment: IEnvironment = {
  paths: {
    SVG_DIR: path.resolve(__dirname, '../src/svg'),
    SVGS_TS_TEMPLATE: path.resolve(__dirname, './templates/svgs.ts.template'),
    SVGS_TS_OUTPUT: path.resolve(__dirname, '../src/svgs.ts'),
    MANIFEST_TS_TEMPLATE: path.resolve(__dirname, './templates/manifest.ts.template'),
    MANIFEST_TS_OUTPUT: path.resolve(__dirname, '../src/manifest.ts')
  },
  base: path.resolve(__dirname, '../'),
  options: {
    svgo: {
      plugins: getSVGOPlugin()
    }
  }
};

interface IEnvironment {
  paths: { [key: string]: string };
  base: string;
  options: {
    svgo: SVGO.Options
  };
}

async function build(env: IEnvironment) {
  console.time('Build Time');

  // clear.
  console.log(chalk.green(`🌟 [Generate SVG] Clear folders.`));
  await Promise.all(
    Object.keys(env.paths)
      .filter((key) => key.endsWith('OUTPUT')) // DO NOT DELETE THIS LINE!!!
      .map((key) => rimraf(env.paths[key])) // This is evil. Make sure you just delete the OUTPUT.
  );

  // get names and paths.
  const svgFileNames: string[] = await globby(['*.svg'], { cwd: env.paths.SVG_DIR });
  const kebabCaseNames = svgFileNames.map((name) => _.kebabCase(name.replace(/\.svg$/, '')));
  const componentNames = kebabCaseNames.map((name) => _.upperFirst(_.camelCase(name)));
  const svgFilePaths = svgFileNames.map((name) => path.resolve(env.paths.SVG_DIR, name));
  console.log(chalk.green(`🌟 [Generate SVG] Icon Amount: ${svgFileNames.length}.`));

  // optimizing SVG files.
  const svgo = new SVGO(env.options.svgo);

  // generate icon definitions.
  let i = 0;
  const components: Array<{ name: string, icon: IconDefinition }> = [];
  for (const svgUrl of svgFilePaths) {
    const svg = fs.readFileSync(svgUrl, 'utf8');
    const kebabCaseName = kebabCaseNames[i];
    const componentName = componentNames[i];
    const compressedSvg = await svgo.optimize(svg);
    const domFragment: any = parse5.parseFragment(compressedSvg.data);
    const ast = generateAbstractTree(domFragment.childNodes[0] as INode, kebabCaseName);
    const icon: IconDefinition = {
      ...ast,
      name: kebabCaseName
    };
    components.push({
      name: componentName,
      icon
    });
    i++;
  }

  // render svgs.ts
  console.log(
    chalk.green(`🌟 [Generate SVG] Generate "svgs.ts" to ${path.relative(__dirname, env.paths.SVGS_TS_TEMPLATE)}.`)
  );
  const svgsTs = fs.readFileSync(env.paths.SVGS_TS_TEMPLATE, 'utf8');
  assert(typeof pkg.iconPrefix === 'string');
  const renderedSvgsTs = svgsTs
    .replace(
      '<% EXPORT_CONST %>',
      components.map(({ name, icon }) => `export const ${name}: IconDefinition = ${JSON.stringify(icon)}`).join('\n')
    )
    .replace(
      '<% COMPONENT_NAMES_LIST %>',
      components.map(({ name }) => `  ${name},`).join('\n')
    )
    .replace(
      '<% PREFIX %>',
      `'${pkg.iconPrefix}'` // see packge.json's iconPrefix field.
    );
  fs.writeFileSync(env.paths.SVGS_TS_OUTPUT, renderedSvgsTs, 'utf8');

  // render manifest.ts
  console.log(
    chalk.green(
      `🌟 [Generate SVG] Generate "manifest.ts" to ${path.relative(__dirname, env.paths.MANIFEST_TS_TEMPLATE)}.`
    )
  );
  const manifestTs = fs.readFileSync(env.paths.MANIFEST_TS_TEMPLATE, 'utf8');
  const renderedManifestTs = manifestTs
    .replace(
      '<% MANIFEST_CONTENT %>',
      components.map(({ icon, name }) => `  '${icon.name}': '${name}'`).join(',\n')
    );
  fs.writeFileSync(env.paths.MANIFEST_TS_OUTPUT, renderedManifestTs, 'utf8');
  console.log(chalk.green(`🌟 [Generate SVG] Finished.`));
  console.timeEnd('Build Time');
}

// run
build(environment);
