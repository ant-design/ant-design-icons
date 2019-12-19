import * as allIconDefs from '@ant-design/icons-svg';
import { IconDefinition } from '@ant-design/icons-svg/es/types';
import { renderIconDefinitionToSVGElement } from '@ant-design/icons-svg/lib/helpers';
import { promises as fsPromises } from 'fs';
import { template } from 'lodash';
import * as path from 'path';

interface IconDefinitionWithIdentifier extends IconDefinition {
  svgIdentifier: string;
}

function walk<T>(fn: (iconDef: IconDefinitionWithIdentifier) => Promise<T>) {
  return Promise.all(
    Object.keys(allIconDefs).map(svgIdentifier => {
      const iconDef = (allIconDefs as { [id: string]: IconDefinition })[
        svgIdentifier
      ];

      return fn({ svgIdentifier, ...iconDef });
    })
  );
}

async function generateIcons() {
  const iconsDir = path.join(__dirname, '../lib/icons');
  try {
    await fsPromises.access(iconsDir);
  } catch {
    await fsPromises.mkdir(iconsDir);
  }

  const indexRender = template(`
// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

<%= content %>`);
  const indexContent: string[] = [];

  const manifestRender = template(`
// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import { Manifest } from './types';

export const manifest: Manifest = {
  filled: [
    <%= filled %>
  ],
  outlined: [
    <%= outlined %>
  ],
  twotone: [
    <%= twotone %>
  ]
}`);
  const manifestContent: {
    filled: string[];
    outlined: string[];
    twotone: string[];
  } = {
    filled: [],
    outlined: [],
    twotone: []
  };

  const staicFileRender = template(
    `
// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import { IconDefinition } from '../types';

export const <%= svgIdentifier %>: IconDefinition = {
    name: '<%= name %>',
    theme: '<%= theme %>',
    icon: '<%= inlineIcon %>'
}`.trim()
  );

  const svgRender = template(`<%= inlineIcon %>`);

  const jsonpRender = template(
    `
// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

(function() {
  __ant_icon_load({
      name: '<%= name %>',
      theme: '<%= theme %>',
      icon: '<%= inlineIcon %>'
  });
})()
`.trim()
  );

  await walk(async ({ svgIdentifier, name, theme, icon }) => {
    const inlineIcon = renderIconDefinitionToSVGElement({ name, theme, icon });

    // Generate static loading resources.
    await fsPromises.writeFile(
      path.resolve(__dirname, `../lib/icons/${theme}/${svgIdentifier}.ts`),
      staicFileRender({ svgIdentifier, name, theme, inlineIcon })
    );

    await fsPromises.writeFile(
      path.resolve(
        __dirname,
        `../lib/inline-svg/${theme}/${name}.svg`
      ),
      svgRender({ inlineIcon })
    );

    await fsPromises.writeFile(
      path.resolve(__dirname, `../lib/inline-svg/${theme}/${name}.js`),
      jsonpRender({ name, theme, inlineIcon })
    );

    indexContent.push(
      `export { ${svgIdentifier} } from './${theme}/${svgIdentifier}';`
    );

    manifestContent[theme].push(`'${name}'`);
  });

  await fsPromises.writeFile(
    path.resolve(__dirname, `../lib/icons/public_api.ts`),
    indexRender({ content: indexContent.join('\n') })
  );

  await fsPromises.writeFile(
    path.resolve(__dirname, `../lib/manifest.ts`),
    manifestRender({
      filled: manifestContent.filled.join(', '),
      outlined: manifestContent.outlined.join(', '),
      twotone: manifestContent.twotone.join(', ')
    })
  );
}

generateIcons();
