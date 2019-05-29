'use strict';
const fs = require('fs-extra');
const _ = require('lodash');
const path = require('path');
const Prettier = require('prettier');
const SVGO = require('svgo');

import { from, of, Observable, Subscription } from 'rxjs';
import { concat, filter, map, mergeMap, reduce } from 'rxjs/operators';
import {
  oldIcons,
  EXPORT_DEFAULT_COMPONENT_FROM_DIR,
  EXPORT_DEFAULT_MANIFEST,
  ICON_IDENTIFIER,
  ICON_JSON
} from './constants';
import {
  BuildTimeIconMetaData,
  Environment,
  IconDefinition,
  Manifest,
  NameAndPath,
  ThemeType,
  WriteFileMetaData
} from './typings';
import { clear, getIdentifier, isAccessable, log } from './utils';
import { normalize } from './utils/normalizeNames';

export async function build(env: Environment): Promise<Subscription> {
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

  const svgBasicNames: string[] = await normalize(env);

  // SVG Meta Data Flow
  const svgMetaDataWithTheme$ = from<ThemeType[]>([
    'fill',
    'outline',
    'twotone'
  ]).pipe(
    map<ThemeType, Observable<BuildTimeIconMetaData>>(theme =>
      from(svgBasicNames).pipe(
        map<string, NameAndPath>((kebabCaseName: string) => {
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
        mergeMap<NameAndPath, Promise<BuildTimeIconMetaData>>(
          async ({
            kebabCaseName,
            identifier
          }) => {
            const tryUrl = path.resolve(
              env.paths.SVG_DIR,
              theme,
              `${kebabCaseName}.svg`
            );
            const optimizer = singleType.includes(theme)
              ? svgoForSingleIcon
              : svgo;
            const { data } = await optimizer.optimize(
              await fs.readFile(tryUrl, 'utf8')
            );
            const icon: IconDefinition = {
              name: kebabCaseName,
              theme,
              icon: data
            };
            return { identifier, icon };
          }
        )
      )
    )
  );

  // Nomalized build time icon meta data
  const BuildTimeIconMetaData$ = svgMetaDataWithTheme$.pipe(
    // @ts-ignore
    mergeMap<Observable<BuildTimeIconMetaData>, BuildTimeIconMetaData>(
      (metaData$: BuildTimeIconMetaData) => metaData$
    ),
    map<BuildTimeIconMetaData, BuildTimeIconMetaData>(
      ({ identifier, icon }) => {
        icon = _.cloneDeep(icon);
        if (typeof icon.icon !== 'function') {
          if (!oldIcons.includes(icon.name)) {
            icon.icon = icon.icon.replace(
              'viewBox="0 0 1024 1024"',
              'viewBox="64 64 896 896"'
            );
          }
          if (icon.icon.includes('class')) {
            icon.icon = icon.icon.replace(/class="(\w|\S).*?"/, '');
          }
        }
        // if (icon.theme === 'twotone') {
        //   if (typeof icon.icon !== 'function' && icon.icon.children) {
        //     icon.icon.children.forEach((pathElment) => {
        //       pathElment.attrs.fill = pathElment.attrs.fill || '#333';
        //     });
        //   }
        // }
        return { identifier, icon };
      }
    )
  );

  // Inline SVG files content flow.
  const inlineSVGFiles$ = BuildTimeIconMetaData$.pipe(
    map<BuildTimeIconMetaData, WriteFileMetaData>(({ icon }) => {
      return {
        path: path.resolve(
          env.paths.INLINE_SVG_OUTPUT_DIR,
          icon.theme,
          `./${icon.name}.svg`
        ),
        content: icon.icon
      };
    })
  );

  // Icon files content flow.
  const iconTsTemplate = await fs.readFile(env.paths.ICON_TEMPLATE, 'utf8');
  const iconFiles$ = BuildTimeIconMetaData$.pipe(
    map<
      BuildTimeIconMetaData,
      { identifier: string; content: string; theme: ThemeType }
    >(
      ({
        identifier,
        icon
      }) => {
        return {
          identifier,
          theme: icon.theme!,
          content: Prettier.format(
            iconTsTemplate
              .replace(ICON_IDENTIFIER, identifier)
              .replace(ICON_JSON, JSON.stringify(icon)),
            { ...env.options.prettier, parser: 'typescript' }
          )
        };
      }
    ),
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
    // @ts-ignore
    mergeMap<Observable<BuildTimeIconMetaData>, BuildTimeIconMetaData>(
      (metaData$: BuildTimeIconMetaData) => metaData$
    ),
    reduce<BuildTimeIconMetaData, string>(
      (acc, { identifier, icon }) =>
        acc +
        `export { ${identifier} } from './${icon.theme}/${identifier}';\n`,
      ''
    ),
    map<string, WriteFileMetaData>(content => ({
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
  const manifestFile$ = from<ThemeType[]>(['fill', 'outline', 'twotone']).pipe(
    map<ThemeType, { theme: ThemeType; names: string[] }>(theme => ({
      theme,
      names: svgBasicNames.filter((name: string) =>
        isAccessable(path.resolve(env.paths.SVG_DIR, theme, `${name}.svg`))
      )
    })),
    reduce<{ theme: ThemeType; names: string[] }, Manifest>(
      (acc, { theme, names }) => {
        acc[theme] = names;
        return acc;
      },
      { fill: [], outline: [], twotone: [] }
    ),
    map<Manifest, WriteFileMetaData>(names => ({
      path: env.paths.MANIFEST_OUTPUT,
      content: Prettier.format(
        manifestTsTemplate.replace(
          EXPORT_DEFAULT_MANIFEST,
          `export const manifest: Manifest = ${JSON.stringify(names)};`
        ),
        env.options.prettier
      )
    }))
  );

  // Types file content flow
  const typesTsTemplate = await fs.readFile(env.paths.TYPES_TEMPLATE, 'utf8');
  const types$ = of<WriteFileMetaData>({
    path: env.paths.TYPES_OUTPUT,
    content: typesTsTemplate
  });

  const files$ = iconFiles$.pipe(
    concat(inlineSVGFiles$),
    concat(manifestFile$),
    concat(indexFile$),
    concat(types$)
  );

  return new Promise<Subscription>((resolve, reject) => {
    const subscription = files$
      .pipe(
        mergeMap(async ({ path: writeFilePath, content }) => {
          await fs.writeFile(writeFilePath, content, 'utf8');
          log.info(`Generated ./${path.relative(env.base, writeFilePath)}.`);
        })
      )
      .subscribe(undefined, reject, () => {
        log.notice('Done.');
        resolve(subscription);
      });
  });
}
