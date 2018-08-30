'use strict';
import fs = require('fs-extra');
import _ = require('lodash');
import parse5 = require('parse5');
import path = require('path');
import Prettier = require('prettier');
import { from, Observable, of } from 'rxjs';
import { concat, filter, map, mergeMap, reduce } from 'rxjs/operators';
import SVGO = require('svgo');
import {
  EXPORT_DEFAULT_COMPONENT_FROM_DIR,
  EXPORT_DEFAULT_MANIFEST,
  EXPORT_DEFAULT_MAPPER,
  getManulMapper,
  ICON_GETTER_FUNCTION,
  ICON_IDENTIFIER,
  ICON_JSON,
  NAME_WITH_THEME
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
  getRollbackTheme,
  isAccessable,
  log,
  withSuffix
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
        filter(({ kebabCaseName }) =>
          isAccessable(
            path.resolve(env.paths.SVG_DIR, theme, `${kebabCaseName}.svg`)
          )
        ),
        mergeMap<NameAndPath, BuildTimeIconMetaData>(
          async ({ kebabCaseName, identifier }) => {
            const tryUrl = path.resolve(
              env.paths.SVG_DIR,
              theme,
              `${kebabCaseName}.svg`
            );
            let optimizer = svgo;
            if (singleType.includes(theme)) {
              optimizer = svgoForSingleIcon;
            }
            const { data } = await optimizer.optimize(
              await fs.readFile(tryUrl, 'utf8')
            );
            const icon: IconDefinition = {
              name: kebabCaseName,
              theme,
              nameWithTheme: withSuffix(kebabCaseName, theme),
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
                  `function ${identifier}(primaryColor: string, secondaryColor: string) { return ${JSON.stringify(
                    icon
                  )
                    .replace(/"#333"/g, 'primaryColor')
                    .replace(/"#E6E6E6"/g, 'secondaryColor')}; }`
                )
                .replace(NAME_WITH_THEME, icon.nameWithTheme),
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

  // Manifest File content flow
  const manifestTsTemplate = await fs.readFile(
    env.paths.MANIFEST_TEMPLATE,
    'utf8'
  );
  const manifestFile$ = of(svgBasicNames).pipe(
    map<string[], WriteFileMetaData>((names) => ({
      path: env.paths.MANIFEST_OUTPUT,
      content: Prettier.format(
        manifestTsTemplate.replace(
          EXPORT_DEFAULT_MANIFEST,
          `export default ${JSON.stringify(names)};`
        ),
        env.options.prettier
      )
    }))
  );

  // Map name to themed name File content flow
  const mapNameToThemedNameTsTemplate = await fs.readFile(
    env.paths.MAP_NAME_TO_THEMED_NAME_TEMPLATE,
    'utf8'
  );
  const mapNameToThemedNameFile$ = of(svgBasicNames).pipe(
    map<string[], string>((basicNames) => {
      const computedMapper = basicNames
        .map((basicName) => {
          const rollbackTheme = getRollbackTheme(env, basicName, [
            'outline',
            'fill',
            'twotone'
          ]);
          const themedName = withSuffix(basicName, rollbackTheme);
          return {
            basicName,
            themedName
          };
        })
        .reduce<{ [key: string]: string }>((acc, { basicName, themedName }) => {
          acc[basicName] = themedName;
          return acc;
        }, {});
      const resultMapper = {
        ...computedMapper,
        ...getManulMapper(true)
      };
      return Object.keys(resultMapper)
        .map((key) => `['${key}']: '${resultMapper[key]}',`)
        .join('\n');
    }),
    map<string, WriteFileMetaData>((content) => ({
      path: env.paths.MAP_NAME_TO_THEMED_NAME_OUTPUT,
      content: Prettier.format(
        mapNameToIdentifierTsTemplate.replace(EXPORT_DEFAULT_MAPPER, content),
        env.options.prettier
      )
    }))
  );

  // Map name to identifier File content flow
  const mapNameToIdentifierTsTemplate = await fs.readFile(
    env.paths.MAP_NAME_TO_IDENTIFIER_TEMPLATE,
    'utf8'
  );
  const mapNameToIdentifierFile$ = svgMetaDataWithTheme$.pipe(
    mergeMap<Observable<BuildTimeIconMetaData>, BuildTimeIconMetaData>(
      (metaData$) => metaData$
    ),
    reduce<BuildTimeIconMetaData, string>(
      (acc, { identifier, icon }) =>
        acc + `['${withSuffix(icon.name, icon.theme)}']: '${identifier}',\n`,
      ''
    ),
    map<string, string>((contentWithTheme) => {
      const computedMapper = svgBasicNames
        .map((basicName) => {
          const rollbackTheme = getRollbackTheme(env, basicName, [
            'outline',
            'fill',
            'twotone'
          ]);
          const computedIdentifier = getIdentifier(
            _.upperFirst(_.camelCase(basicName)),
            rollbackTheme
          );
          return {
            basicName,
            computedIdentifier
          };
        })
        .reduce<{ [key: string]: string }>(
          (acc, { basicName, computedIdentifier }) => {
            acc[basicName] = computedIdentifier;
            return acc;
          },
          {}
        );
      const resultMapper = {
        ...computedMapper,
        ...getManulMapper()
      };
      return (
        contentWithTheme +
        Object.keys(resultMapper)
          .map((key) => `['${key}']: '${resultMapper[key]}',`)
          .join('\n')
      );
    }),
    map<string, WriteFileMetaData>((content) => ({
      path: env.paths.MAP_NAME_TO_IDENTIFIER_OUTPUT,
      content: Prettier.format(
        mapNameToIdentifierTsTemplate.replace(EXPORT_DEFAULT_MAPPER, content),
        env.options.prettier
      )
    }))
  );

  const files$ = iconFiles$.pipe(
    concat(manifestFile$),
    concat(indexFile$),
    concat(mapNameToIdentifierFile$),
    concat(mapNameToThemedNameFile$)
  );

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
