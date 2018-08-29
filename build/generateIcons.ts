'use strict';
import fs = require('fs-extra');
import _ = require('lodash');
import parse5 = require('parse5');
import path = require('path');
import Prettier = require('prettier');
import { from, Observable } from 'rxjs';
import { concat, map, mergeMap, reduce } from 'rxjs/operators';
import SVGO = require('svgo');
import {
  EXPORT_DEFAULT_COMPONENT_FROM_DIR,
  ICON_GETTER_FUNCTION,
  ICON_IDENTIFIER,
  ICON_JSON
} from './constants';
import {
  BuildTimeIconMetaData,
  Environment,
  IconDefinition,
  NameAndPath,
  Node,
  ThemeType,
  WriteFileMetaData
} from './typings';
import {
  clear,
  generateAbstractTree,
  getIdentifier,
  getRollbackSVGPath,
  log
} from './utils';
import { normalize } from './utils/normalizeNames';

export async function build(env: Environment) {
  const svgo = new SVGO(env.options.svgo);
  const singleType: ThemeType[] = ['fill', 'outline'];
  const svgoForSingleIcon = new SVGO({
    ...env.options.svgo,
    plugins: [
      ...env.options.svgo.plugins!,
      // single color should remove the `fill` attribute.
      { removeAttrs: { attrs: ['fill'] } }
    ]
  });

  await clear(env);

  const svgBasicNames = await normalize(env);

  // SVG Meta Data Flow
  const svgMetaDataWithTheme$ = from<ThemeType>([
    'fill',
    'outline',
    'twotone'
  ]).pipe(
    map<ThemeType, Observable<BuildTimeIconMetaData>>((theme) =>
      from(svgBasicNames).pipe(
        map<string, NameAndPath>((kebabCaseName) => {
          const identifier = getIdentifier(
            _.upperFirst(_.camelCase(kebabCaseName)),
            theme
          );
          return { kebabCaseName, identifier };
        }),
        mergeMap<NameAndPath, BuildTimeIconMetaData>(
          async ({ kebabCaseName, identifier }) => {
            const url = await getRollbackSVGPath(env, kebabCaseName, theme, [
              'fill',
              'outline'
            ]);
            let optimizer = svgo;
            if (singleType.includes(theme)) {
              optimizer = svgoForSingleIcon;
            }
            const { data } = await optimizer.optimize(
              await fs.readFile(url, 'utf8')
            );
            const icon: IconDefinition = {
              name: kebabCaseName,
              theme,
              ...generateAbstractTree(
                (parse5.parseFragment(data) as any).childNodes[0] as Node,
                kebabCaseName
              )
            };
            return { identifier, icon };
          }
        )
      )
    )
  );

  // Icon files content flow.
  const iconTsTemplate = await fs.readFile(env.paths.ICON_TEMPLATE, 'utf8');
  const twoToneIconTsTemplate = await fs.readFile(
    env.paths.TWO_TONE_ICON_TEMPLATE,
    'utf8'
  );
  const iconFiles$ = svgMetaDataWithTheme$.pipe(
    mergeMap<Observable<BuildTimeIconMetaData>, BuildTimeIconMetaData>(
      (metaData$) => metaData$
    ),
    map<
      BuildTimeIconMetaData,
      { identifier: string; content: string; theme: ThemeType }
    >(({ identifier, icon }) => ({
      identifier,
      theme: icon.theme,
      content:
        icon.theme === 'twotone'
          ? Prettier.format(
              twoToneIconTsTemplate
                .replace(ICON_IDENTIFIER, identifier)
                .replace(
                  ICON_GETTER_FUNCTION,
                  `function ${identifier}(primaryColor = '#333', secondaryColor = '#E6E6E6') { return ${JSON.stringify(
                    icon
                  )
                    .replace(/"#333"/g, 'primaryColor')
                    .replace(/"#E6E6E6"/g, 'secondaryColor')} };`
                ),
              env.options.prettier
            )
          : Prettier.format(
              iconTsTemplate
                .replace(ICON_IDENTIFIER, identifier)
                .replace(ICON_JSON, JSON.stringify(icon)),
              env.options.prettier
            )
    })),
    map<
      { identifier: string; content: string; theme: ThemeType },
      WriteFileMetaData
    >(({ identifier, content, theme }) => ({
      path: path.resolve(
        env.paths.ICON_OUTPUT_DIR,
        theme,
        `./${identifier}.ts`
      ),
      content
    }))
  );

  // Index File content flow
  const indexTsTemplate = await fs.readFile(env.paths.INDEX_TEMPLATE, 'utf8');
  const indexFile$ = svgMetaDataWithTheme$.pipe(
    mergeMap<Observable<BuildTimeIconMetaData>, BuildTimeIconMetaData>(
      (metaData$) => metaData$
    ),
    reduce<BuildTimeIconMetaData, string>(
      (acc, { identifier, icon }) =>
        acc +
        `export { default as ${identifier} } from './${
          icon.theme
        }/${identifier}';\n`,
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
          await fs.writeFile(writeFilePath, content, 'utf8');
          log.info(`Generated ./${path.relative(env.base, writeFilePath)}.`);
        })
      )
      .subscribe(undefined, reject, () => {
        log.notice('Done.');
        resolve();
      });
  });
}
