import * as allIconDefs from '@ant-design/icons-svg';
import { IconDefinition } from '@ant-design/icons-svg/es/types';
import * as path from 'path';
import * as fs from 'fs';
import { promisify } from 'util';
import { template } from 'lodash';

const writeFile = promisify(fs.writeFile);

interface IconDefinitionWithIdentifier extends IconDefinition {
  svgIdentifier: string;
}

function walk<T>(fn: (iconDef: IconDefinitionWithIdentifier) => Promise<T>) {
  return Promise.all(
    Object.keys(allIconDefs).map(svgIdentifier => {
      const iconDef = (allIconDefs as { [id: string]: IconDefinition })[svgIdentifier];

      return fn({ svgIdentifier, ...iconDef });
    }),
  );
}

async function generateIcons() {
  const iconsDir = path.join(__dirname, '../src/icons');
  try {
    await promisify(fs.access)(iconsDir);
  } catch (err) {
    await promisify(fs.mkdir)(iconsDir);
  }

  const render = template(
    `
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import <%= svgIdentifier %>Svg from '@ant-design/icons-svg/lib/asn/<%= svgIdentifier %>';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface <%= svgIdentifier %>IconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const <%= svgIdentifier %>: <%= svgIdentifier %>IconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={<%= svgIdentifier %>Svg}></AntdIcon>;
};

<%= svgIdentifier %>.displayName = '<%= svgIdentifier %>';
<%= svgIdentifier %>.inheritAttrs = false;
export default <%= svgIdentifier %>;
`.trim(),
  );

  await walk(async ({ svgIdentifier }) => {
    // generate icon file
    await writeFile(
      path.resolve(__dirname, `../src/icons/${svgIdentifier}.tsx`),
      render({ svgIdentifier }),
    );
  });

  // generate icon index
  const entryText = Object.keys(allIconDefs)
    .sort()
    .map(svgIdentifier => {
      return `export { default as ${svgIdentifier} } from './${svgIdentifier}';`;
    })
    .join('\n');

  await promisify(fs.appendFile)(
    path.resolve(__dirname, '../src/icons/index.tsx'),
    `
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
${entryText}
    `.trim(),
  );
}

async function generateEntries() {
  //   const render = template(
  //     `
  // 'use strict';
  //   Object.defineProperty(exports, "__esModule", {
  //     value: true
  //   });
  //   exports.default = void 0;

  //   var _<%= svgIdentifier %> = _interopRequireDefault(require('./lib/icons/<%= svgIdentifier %>'));

  //   function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  //   var _default = _<%= svgIdentifier %>.default || _<%= svgIdentifier %>;
  //   exports.default = _default;
  //   module.exports = _default;
  // `.trim(),
  //   );

  const render = template(`export { default } from './es/icons/<%= svgIdentifier %>';`.trim());

  await walk(async ({ svgIdentifier }) => {
    // generate `Icon.js` in root folder
    await writeFile(
      path.resolve(__dirname, `../${svgIdentifier}.js`),
      render({
        svgIdentifier,
      }),
    );
    // generate `Icon.d.ts` in root folder
    await writeFile(
      path.resolve(__dirname, `../${svgIdentifier}.d.ts`),
      `export { default } from './lib/icons/${svgIdentifier}';`,
    );
  });
}

if (process.argv[2] === '--target=icon') {
  generateIcons();
}

if (process.argv[2] === '--target=entry') {
  generateEntries();
}
