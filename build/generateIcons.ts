'use strict';
import fs = require('fs');
import globby = require('globby');
import _ = require('lodash');
import parse5 = require('parse5');
import path = require('path');
import rimraf = require('rimraf');
import SVGO = require('svgo');
import { environment } from './env';
import { Environment, IconDefinition, Node } from './typings';
import { generateAbstractTree, log } from './utils';

export async function build(env: Environment) {
  const startTime = Date.now();

  // clear.
  log(`Clear folders.`);
  await Promise.all(
    Object.keys(env.paths)
      .filter((key) => key.endsWith('OUTPUT')) // DO NOT DELETE THIS LINE!!!
      .map((key) => {
        // This is evil. Make sure you just delete the OUTPUT.
        log(`Delete ${env.paths[key]}.`);
        return new Promise((resolve) => rimraf(env.paths[key], resolve));
      })
  );

  // get names and paths.
  const svgFileNames: string[] = await globby(['*.svg'], { cwd: env.paths.SVG_DIR });
  const kebabCaseNames = svgFileNames.map((name) => _.kebabCase(name.replace(/\.svg$/, '')));
  const componentNames = kebabCaseNames.map((name) => _.upperFirst(_.camelCase(name)));
  const svgFilePaths = svgFileNames.map((name) => path.resolve(env.paths.SVG_DIR, name));
  log(`Icon Amount: ${svgFileNames.length}.`);

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
    const ast = generateAbstractTree(domFragment.childNodes[0] as Node, kebabCaseName);
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
  log(`Generate "svgs.ts" to ${path.relative(__dirname, env.paths.SVGS_TS_TEMPLATE)}.`);
  const svgsTs = fs.readFileSync(env.paths.SVGS_TS_TEMPLATE, 'utf8');
  const renderedSvgsTs = svgsTs
    .replace(
      '<% EXPORT_CONST %>',
      components.map(({ name, icon }) => `export const ${name}: IconDefinition = ${JSON.stringify(icon)}`).join('\n')
    )
    .replace(
      '<% COMPONENT_NAMES_LIST %>',
      components.map(({ name }) => `  ${name},`).join('\n')
    );
  fs.writeFileSync(env.paths.SVGS_TS_OUTPUT, renderedSvgsTs, 'utf8');

  // render manifest.ts
  log(`Generate "manifest.ts" to ${path.relative(__dirname, env.paths.MANIFEST_TS_TEMPLATE)}.`);
  const manifestTs = fs.readFileSync(env.paths.MANIFEST_TS_TEMPLATE, 'utf8');
  const renderedManifestTs = manifestTs
    .replace(
      '<% MANIFEST_CONTENT %>',
      components.map(({ icon, name }) => `  '${icon.name}': '${name}'`).join(',\n')
    );
  fs.writeFileSync(env.paths.MANIFEST_TS_OUTPUT, renderedManifestTs, 'utf8');
  log(`Finished.`);

  log(`Build Time: ${(Date.now() - startTime) / 1000}s.`);
}

// run
build(environment);
