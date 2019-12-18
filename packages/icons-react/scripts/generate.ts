import * as allIconDefs from '@ant-design/icons-svg';
import { IconDefinition } from '@ant-design/icons-svg/es/types';
import * as path from 'path';
import { promises as fsPromises } from 'fs';
import { template } from 'lodash';

interface IconDefinitionWithIdentifier extends IconDefinition {
  svgIdentifier: string;
}

function walk<T>(
  fn: (iconDef: IconDefinitionWithIdentifier) => Promise<T>,
) {
  return Promise.all(
    Object.keys(allIconDefs).map(svgIdentifier => {
      const iconDef = (allIconDefs as { [id: string]: IconDefinition })[
        svgIdentifier
      ];

      return fn({ svgIdentifier, ...iconDef });
    }),
  );
}

async function generateIcons() {
  const iconsDir = path.join(__dirname, '../src/icons');
  try {
    await fsPromises.access(iconsDir);
  } catch (err) {
    await fsPromises.mkdir(iconsDir);
  }

  const render = template(`
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import React from 'react'
import <%= svgIdentifier %>Svg from '@ant-design/icons-svg/es/asn/<%= svgIdentifier %>';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const <%= svgIdentifier %> = (props: AntdIconProps) => <AntdIcon {...props} icon={<%= svgIdentifier %>Svg} />;
export default <%= svgIdentifier %>;
`.trim());

  await walk(async ({ svgIdentifier }) => {
    // generate icon file
    await fsPromises.writeFile(
      path.resolve(__dirname, `../src/icons/${svgIdentifier}.tsx`),
      render({ svgIdentifier }),
    );

    // generate icon index
    await fsPromises.appendFile(
      path.resolve(__dirname, '../src/icons/index.tsx'),
      `export { default as ${svgIdentifier} } from './${svgIdentifier}';\n`,
    );
  });
}

async function generateEntries() {
  const render = template(`
'use strict';
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _<%= componentIdentifier %> = _interopRequireDefault(require('./lib/icons/<%= componentIdentifier %>'));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _default = _<%= componentIdentifier %>;
  exports.default = _default;
  module.exports = _default;
`.trim());

  await walk(async ({ svgIdentifier }) => {
    // generate `Icon.js` in root folder
    await fsPromises.writeFile(
      path.resolve(__dirname, `../${svgIdentifier}.js`),
      render({
        svgIdentifier
      }),
    );

    // generate `Icon.d.ts` in root folder
    await fsPromises.writeFile(
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
