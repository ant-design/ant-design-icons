'use strict';
import fs = require('fs-extra');
import _ = require('lodash');
import parse5 = require('parse5');
import path = require('path');
import Prettier = require('prettier');
import { from, Observable, of, Subscription } from 'rxjs';
import { concat, filter, map, mergeMap, reduce } from 'rxjs/operators';
import SVGO = require('svgo');
import {
  EXPORT_DEFAULT_COMPONENT_FROM_DIR,
  EXPORT_DEFAULT_MANIFEST,
  EXPORT_DIST,
  ICON_IDENTIFIER,
  ICON_JSON,
  NEW_VIEWBOX,
  NORMAL_VIEWBOX,
  oldIcons,
  THEME_FILL,
  THEME_OUTLINE,
  THEME_TWOTONE
} from './constants';
import { renderIconDefinitionToSVGElement } from './templates/helpers';
import {
  BuildTimeIconMetaData,
  Environment,
  IconDefinition,
  Manifest,
  NameAndPath,
  Node,
  ThemeType,
  WriteFileMetaData
} from './typings';
import {
  clear,
  generateAbstractTree,
  getIdentifier,
  isAccessable,
  log,
  replaceFillColor
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
  const svgMetaDataWithTheme$ = from<ThemeType[]>([
    'fill',
    'outline',
    'twotone'
  ]).pipe(
    map<ThemeType, Observable<any>>((theme) =>
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
        mergeMap<NameAndPath, any>(
          async ({ kebabCaseName, identifier }: any) => {
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
              icon: {
                ...generateAbstractTree(
                  (parse5.parseFragment(data) as any).childNodes[0] as Node,
                  kebabCaseName
                )
              }
            };
            return { identifier, icon };
          }
        )
      )
    )
  );

  // Nomalized build time icon meta data
  const BuildTimeIconMetaData$ = svgMetaDataWithTheme$.pipe(
    mergeMap<Observable<BuildTimeIconMetaData>, any>(
      (metaData$: any) => metaData$
    ),
    map<any, BuildTimeIconMetaData>(
      ({ identifier, icon }) => {
        icon = _.cloneDeep(icon);
        if (typeof icon.icon !== 'function') {
          icon.icon.attrs.focusable = false;

          if (!oldIcons.includes(icon.name)) {
            icon.icon.attrs.viewBox = '64 64 896 896';
          }
          if (icon.icon.attrs.class) {
            icon.icon.attrs = _.omit(icon.icon.attrs, ['class']);
          }
        }
        if (icon.theme === 'twotone') {
          if (typeof icon.icon !== 'function' && icon.icon.children) {
            icon.icon.children.forEach((pathElment: any) => {
              pathElment.attrs.fill = pathElment.attrs.fill || '#333';
            });
          }
        }
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
        content: renderIconDefinitionToSVGElement(icon)
      };
    })
  );

  // Icon files content flow.
  const iconTsTemplate = await fs.readFile(env.paths.ICON_TEMPLATE, 'utf8');
  const iconFiles$ = BuildTimeIconMetaData$.pipe(
    map<
      BuildTimeIconMetaData,
      { identifier: string; content: string; theme: ThemeType }
    >(({ identifier, icon }) => {
      return {
        identifier,
        theme: icon.theme,
        content:
          icon.theme === 'twotone'
            ? Prettier.format(
                iconTsTemplate
                  .replace(ICON_IDENTIFIER, identifier)
                  .replace(
                    ICON_JSON,
                    JSON.stringify({ ...icon, icon: 'FUNCTION' }).replace(
                      `"FUNCTION"`,
                      `function (primaryColor: string, secondaryColor: string) {` +
                        ` return ${replaceFillColor(
                          JSON.stringify(icon.icon)
                        )};` +
                        ` }`
                    )
                  ),
                { ...env.options.prettier, parser: 'typescript' }
              )
            : Prettier.format(
                iconTsTemplate
                  .replace(ICON_IDENTIFIER, identifier)
                  .replace(ICON_JSON, JSON.stringify(icon)),
                env.options.prettier
              )
      };
    }),
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
    mergeMap<Observable<BuildTimeIconMetaData>, any>(
      (metaData$: any) => metaData$
    ),
    reduce<any, string>(
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
  const manifestFile$ = from<ThemeType[]>(['fill', 'outline', 'twotone']).pipe(
    map<ThemeType, { theme: ThemeType; names: string[] }>((theme) => ({
      theme,
      names: svgBasicNames.filter((name) =>
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
    map<Manifest, WriteFileMetaData>((names) => ({
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

  // Dist File content flow
  const distTsTemplate = await fs.readFile(env.paths.DIST_TEMPLATE, 'utf8');
  const dist$ = BuildTimeIconMetaData$.pipe(
    map<BuildTimeIconMetaData, string>(({ identifier, icon }) => {
      let content = '';
      if (icon.theme === 'twotone') {
        if (typeof icon.icon !== 'function') {
          const paths = (icon.icon.children || [])
            .filter(({ attrs }) => typeof attrs.d === 'string') // fix the <defs> element in the top level children
            .map(({ attrs }) => {
              const { fill, d } = attrs;
              if (fill && d) {
                return `['${fill}', '${d}']`;
              }
              return `'${d}'`;
            })
            .join(',');
          content = Prettier.format(
            `export const ${identifier}: IconDefinition = ` +
              `getIcon('${icon.name}', '${icon.theme}', ${replaceFillColor(
                `function (primaryColor: string, secondaryColor: string) {` +
                  ` return getNode('${icon.icon.attrs.viewBox}', ${paths}) }`
              )})`,
            { ...env.options.prettier, parser: 'typescript' }
          );
        }
      } else {
        if (typeof icon.icon !== 'function') {
          const paths = (icon.icon.children || [])
            .filter(({ attrs }) => typeof attrs.d === 'string')
            .map(({ attrs }) => {
              const { fill, d } = attrs;
              if (fill && d) {
                return `['${fill}', '${d}']`;
              }
              return `'${d}'`;
            })
            .join(',');
          content = Prettier.format(
            `export const ${identifier}: IconDefinition = ` +
              `getIcon('${icon.name}', '${icon.theme}', ` +
              `getNode('${icon.icon.attrs.viewBox}', ${paths})` +
              `);`,
            env.options.prettier
          );
        }
      }
      content = content
        .replace(NORMAL_VIEWBOX, 'normalViewBox')
        .replace(NEW_VIEWBOX, 'newViewBox')
        .replace(THEME_FILL, 'fill')
        .replace(THEME_OUTLINE, 'outline')
        .replace(THEME_TWOTONE, 'twotone');
      return content;
    }),
    reduce<string, string>((acc, nextContent) => acc + nextContent, ''),
    map<string, WriteFileMetaData>((content) => ({
      path: env.paths.DIST_OUTPUT,
      content: distTsTemplate.replace(EXPORT_DIST, content)
    }))
  );

  // Types file content flow
  const typesTsTemplate = await fs.readFile(env.paths.TYPES_TEMPLATE, 'utf8');
  const types$ = of<WriteFileMetaData>({
    path: env.paths.TYPES_OUTPUT,
    content: typesTsTemplate
  });

  // Helpers file content flow
  const helpersTsTemplate = await fs.readFile(
    env.paths.HELPERS_TEMPLATE,
    'utf8'
  );
  const helpers$ = of<WriteFileMetaData>({
    path: env.paths.HELPERS_OUTPUT,
    content: helpersTsTemplate
  });

  const files$ = iconFiles$.pipe(
    concat(inlineSVGFiles$),
    concat(manifestFile$),
    concat(indexFile$),
    concat(dist$),
    concat(types$),
    concat(helpers$)
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
