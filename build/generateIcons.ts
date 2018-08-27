'use strict';
import fs = require('fs');
import globby = require('globby');
import _ = require('lodash');
import parse5 = require('parse5');
import path = require('path');
import rimraf = require('rimraf');
import { from } from 'rxjs';
import { map, mergeMap, reduce } from 'rxjs/operators';
import SVGO = require('svgo');
import {
  COMPONENT_NAMES_LIST,
  EXPORT_CONST,
  MANIFEST_CONTENT
} from './constants';
import { environment } from './env';
import {
  BuildTimeIconMetaData,
  Environment,
  IconDefinition,
  NameAndPath,
  Node
} from './typings';
import { generateAbstractTree, log } from './utils';

export async function build(env: Environment) {
  const svgo = new SVGO(env.options.svgo);

  await clear(env);

  const svgFileNames = await globby(['*.svg'], { cwd: env.paths.SVG_DIR });

  /**
   * SVG Meta Data Flow
   * An example:
   * 'alipay-circle.svg'
   *         ↓
   *  {
   *    kebabCaseName: 'alipay-circle',
   *    identifier: 'AlipayCircle',
   *    svgFilePath: '<path-to-your-dir>/alipay-circle.svg'
   *  }
   *         ↓
   *  {
   *    identifier: 'AlipayCircle',
   *    icon: {
   *      name: 'alipay-circle',
   *      width: 1024,
   *      height: 1024,
   *      viewBox: '0 0 1024 1024',
   *      style: '',
   *      children: [
   *        { tag: 'path', attrs: { d: 'M230.404 576.536c-12.087 9.728-25.043 23.93...' } }
   *      ]
   *    }
   *  }
   */
  const svgMetaData$ = from(svgFileNames).pipe(
    map<string, NameAndPath>((fileNameWithExtension) => {
      const fileName = fileNameWithExtension.replace(/\.svg$/, '');
      const kebabCaseName =
        fileName === 'html5' ? fileName : _.kebabCase(fileName); // 'html5' is not kebab-case but used in <Icon />.
      const identifier = _.upperFirst(_.camelCase(fileName));
      const svgFilePath = path.resolve(
        env.paths.SVG_DIR,
        fileNameWithExtension
      );
      return { kebabCaseName, identifier, svgFilePath };
    }),
    mergeMap<NameAndPath, BuildTimeIconMetaData>(
      async ({ kebabCaseName, identifier, svgFilePath }) => {
        const { data } = await svgo.optimize(
          fs.readFileSync(svgFilePath, 'utf8')
        );
        const icon: IconDefinition = {
          name: kebabCaseName,
          ...generateAbstractTree(
            (parse5.parseFragment(data) as any).childNodes[0] as Node,
            kebabCaseName
          )
        };
        return { identifier, icon };
      }
    )
  );

  /**
   * File 'svgs.ts' content flow.
   */
  const svgsTsFile$ = svgMetaData$.pipe(
    reduce<BuildTimeIconMetaData, [string, string]>(
      ([exportConst, componentName], { identifier, icon }) => [
        exportConst +
          `export const ${identifier}: IconDefinition = ${JSON.stringify(
            icon
          )}\n`,
        componentName + `  ${identifier},\n`
      ],
      ['', '']
    ),
    map(([exportConst, componentName]) =>
      fs
        .readFileSync(env.paths.SVGS_TS_TEMPLATE, 'utf8')
        .replace(EXPORT_CONST, exportConst)
        .replace(COMPONENT_NAMES_LIST, componentName)
    )
  );

  /**
   * File 'manifest.ts' content flow.
   */
  const manifestTsFile$ = svgMetaData$.pipe(
    reduce<BuildTimeIconMetaData, string>(
      (manifestContent, { icon, identifier }) =>
        manifestContent + `  '${icon.name}': '${identifier}'\n`,
      ''
    ),
    map((manifestContent) =>
      fs
        .readFileSync(env.paths.MANIFEST_TS_TEMPLATE, 'utf8')
        .replace(MANIFEST_CONTENT, manifestContent)
    )
  );

  /**
   * Subscriptions
   * write two files ('svgs.ts' and 'manifest.ts') to 'src' directory
   */
  svgsTsFile$.subscribe((content) => {
    log(
      `Generate "svgs.ts" to ${path.relative(
        __dirname,
        env.paths.SVGS_TS_TEMPLATE
      )}.`
    );
    fs.writeFileSync(env.paths.SVGS_TS_OUTPUT, content, 'utf8');
  });

  manifestTsFile$.subscribe((content) => {
    log(
      `Generate "manifest.ts" to ${path.relative(
        __dirname,
        env.paths.MANIFEST_TS_TEMPLATE
      )}.`
    );
    fs.writeFileSync(env.paths.MANIFEST_TS_OUTPUT, content, 'utf8');
  });
}

// Start
build(environment);

/**
 * Clear by using 'rimraf'.
 */
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
