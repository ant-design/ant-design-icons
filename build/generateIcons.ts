'use strict';
import fse = require('fs-extra');
import globby = require('globby');
import _ = require('lodash');
import parse5 = require('parse5');
import path = require('path');
import Prettier = require('prettier');
import rimraf = require('rimraf');
import { from } from 'rxjs';
import { concat, map, mergeMap, reduce } from 'rxjs/operators';
import SVGO = require('svgo');
import {
  EXPORT_DEFAULT_COMPONENT_FROM_DIR,
  ICON_IDENTIFIER,
  ICON_JSON
} from './constants';
import {
  BuildTimeIconMetaData,
  Environment,
  IconDefinition,
  NameAndPath,
  Node,
  WriteFileMetaData
} from './typings';
import { generateAbstractTree, log } from './utils';

export async function build(env: Environment) {
  const svgo = new SVGO(env.options.svgo);

  await clear(env);

  const svgFileNames = await globby(['*.svg'], {
    cwd: env.paths.SVG_DIR,
    deep: false
  });

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
          await fse.readFile(svgFilePath, 'utf8')
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
   * Icon files content flow.
   */
  const iconTsTemplate = await fse.readFile(env.paths.ICON_TEMPLATE, 'utf8');
  const iconFiles$ = svgMetaData$.pipe(
    map<BuildTimeIconMetaData, { identifier: string; content: string }>(
      ({ identifier, icon }) => ({
        identifier,
        content: Prettier.format(
          iconTsTemplate
            .replace(ICON_IDENTIFIER, identifier)
            .replace(ICON_JSON, JSON.stringify(icon)),
          env.options.prettier
        )
      })
    ),
    map<{ identifier: string; content: string }, WriteFileMetaData>(
      ({ identifier, content }) => ({
        path: path.resolve(env.paths.ICON_OUTPUT_DIR, `./${identifier}.ts`),
        content
      })
    )
  );

  /**
   * Index File content flow
   */
  const indexTsTemplate = await fse.readFile(env.paths.INDEX_TEMPLATE, 'utf8');
  const indexFile$ = svgMetaData$.pipe(
    reduce<BuildTimeIconMetaData, string>(
      (acc, { identifier }) =>
        acc + `export { default as ${identifier} } from './${identifier}';\n`,
      ''
    ),
    map<string, WriteFileMetaData>((content) => ({
      path: env.paths.INDEX_OUTPUT,
      content: Prettier.format(
        indexTsTemplate.replace(EXPORT_DEFAULT_COMPONENT_FROM_DIR, content),
        env.options.prettier
      )
    }))
  );

  const files$ = iconFiles$.pipe(concat(indexFile$));

  return new Promise<void>((resolve, reject) => {
    files$
      .pipe(
        mergeMap(async ({ path: writeFilePath, content }) => {
          await fse.writeFile(writeFilePath, content, 'utf8');
          log.info(`Generated ./${path.relative(env.base, writeFilePath)}.`);
        })
      )
      .subscribe(undefined, reject, () => {
        log.notice('Done.');
        resolve();
      });
  });
}

/**
 * Clear by using 'rimraf'.
 */
async function clear(env: Environment) {
  log.notice(`Clear folders.`);
  return Promise.all(
    Object.keys(env.paths)
      .filter((key) => key.endsWith('OUTPUT')) // DO NOT DELETE THIS LINE!!!
      .map((key) => {
        // This is evil. Make sure you just delete the OUTPUT.
        log.notice(`Delete ${path.relative(env.base, env.paths[key])}.`);
        return new Promise((resolve) => rimraf(env.paths[key], resolve));
      })
  );
}
