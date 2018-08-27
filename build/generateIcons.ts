'use strict';
import fs = require('fs');
import globby = require('globby');
import _ = require('lodash');
import parse5 = require('parse5');
import path = require('path');
import rimraf = require('rimraf');
import SVGO = require('svgo');
import { environment } from './env';
import {
  BuildTimeIconMetaData,
  Environment,
  NamesAndPaths,
  Node
} from './typings';
import { generateAbstractTree, log } from './utils';

export async function build(env: Environment) {
  const startTime = Date.now();

  await clear(env);

  const namesAndPaths = await generateNamesAndPaths(env);

  const buildTimeIconMetaData = await generateIconDefinitions(
    env,
    namesAndPaths
  );

  await writeFile(env, buildTimeIconMetaData);

  log(`Build Time: ${(Date.now() - startTime) / 1000}s.`);
}

// run
build(environment);

async function clear(env: Environment) {
  log(`Clear folders.`);
  return Promise.all(
    Object.keys(env.paths)
      .filter((key) => key.endsWith('OUTPUT')) // DO NOT DELETE THIS LINE!!!
      .map((key) => {
        // This is evil. Make sure you just delete the OUTPUT.
        log(`Delete ${env.paths[key]}.`);
        return new Promise((resolve) => rimraf(env.paths[key], resolve));
      })
  );
}

async function generateNamesAndPaths(env: Environment): Promise<NamesAndPaths> {
  log(`Generate names and paths`);
  const svgFileNames: string[] = await globby(['*.svg'], {
    cwd: env.paths.SVG_DIR
  });
  log(`Icon Amount: ${svgFileNames.length}.`);
  const kebabCaseNames = svgFileNames.map((name) => {
    if (name === 'html5.svg') {
      // html5 is special.
      return name.replace(/\.svg$/, '');
    }
    return _.kebabCase(name.replace(/\.svg$/, ''));
  });
  const componentNames = kebabCaseNames.map((name) =>
    _.upperFirst(_.camelCase(name))
  );
  const svgFilePaths = svgFileNames.map((name) =>
    path.resolve(env.paths.SVG_DIR, name)
  );
  return {
    kebabCaseNames,
    componentNames,
    svgFilePaths
  };
}

async function generateIconDefinitions(
  env: Environment,
  { svgFilePaths, kebabCaseNames, componentNames }: NamesAndPaths
): Promise<BuildTimeIconMetaData[]> {
  const svgo = new SVGO(env.options.svgo);
  const buildTimeIconMetaData: BuildTimeIconMetaData[] = [];
  for (let i = 0; i < svgFilePaths.length; i++) {
    const svgUrl = svgFilePaths[i];
    const kebabCaseName = kebabCaseNames[i];
    const componentName = componentNames[i];
    const compressedSvg = await svgo.optimize(fs.readFileSync(svgUrl, 'utf8'));
    const domFragment: any = parse5.parseFragment(compressedSvg.data);
    const ast = generateAbstractTree(
      domFragment.childNodes[0] as Node,
      kebabCaseName
    );
    buildTimeIconMetaData.push({
      identifier: componentName,
      icon: {
        ...ast,
        name: kebabCaseName
      }
    });
  }
  return buildTimeIconMetaData;
}

async function writeFile(
  env: Environment,
  buildTimeIconMetaData: BuildTimeIconMetaData[]
) {
  // render svgs.ts
  log(
    `Generate "svgs.ts" to ${path.relative(
      __dirname,
      env.paths.SVGS_TS_TEMPLATE
    )}.`
  );
  const svgsTs = fs.readFileSync(env.paths.SVGS_TS_TEMPLATE, 'utf8');
  const renderedSvgsTs = svgsTs
    .replace(
      '<% EXPORT_CONST %>',
      buildTimeIconMetaData
        .map(
          ({ identifier, icon }) =>
            `export const ${identifier}: IconDefinition = ${JSON.stringify(
              icon
            )}`
        )
        .join('\n')
    )
    .replace(
      '<% COMPONENT_NAMES_LIST %>',
      buildTimeIconMetaData
        .map(({ identifier }) => `  ${identifier},`)
        .join('\n')
    );
  fs.writeFileSync(env.paths.SVGS_TS_OUTPUT, renderedSvgsTs, 'utf8');

  // render manifest.ts
  log(
    `Generate "manifest.ts" to ${path.relative(
      __dirname,
      env.paths.MANIFEST_TS_TEMPLATE
    )}.`
  );
  const manifestTs = fs.readFileSync(env.paths.MANIFEST_TS_TEMPLATE, 'utf8');
  const renderedManifestTs = manifestTs.replace(
    '<% MANIFEST_CONTENT %>',
    buildTimeIconMetaData
      .map(({ icon, identifier }) => `  '${icon.name}': '${identifier}'`)
      .join(',\n')
  );
  fs.writeFileSync(env.paths.MANIFEST_TS_OUTPUT, renderedManifestTs, 'utf8');
  log(`Finish writing files.`);
}
