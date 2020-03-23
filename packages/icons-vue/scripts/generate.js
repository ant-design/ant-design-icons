const fs = require('fs');
const path = require('path');
const lodash = require('lodash');
const allIconDefs = require('@ant-design/icons-svg');
const util = require('util');

const promisify = util.promisify;
const template = lodash.template;

const writeFile = promisify(fs.writeFile);

function walk(fn) {
  return Promise.all(
    Object.keys(allIconDefs).map(svgIdentifier => {
      const iconDef = allIconDefs[svgIdentifier];

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
// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import <%= svgIdentifier %>Svg from '@ant-design/icons-svg/lib/asn/<%= svgIdentifier %>';

export default {
  name: 'Icon<%= svgIdentifier %>',
  displayName: '<%= svgIdentifier %>',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: <%= svgIdentifier %>Svg } },
      children,
    ),
};
`.trim(),
  );

  await walk(async ({ svgIdentifier }) => {
    // generate icon file
    await writeFile(
      path.resolve(__dirname, `../src/icons/${svgIdentifier}.jsx`),
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
    path.resolve(__dirname, '../src/icons/index.jsx'),
    `
// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY
${entryText}
    `.trim(),
  );
}

async function generateEntries() {
  const render = template(
    `
'use strict';
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _<%= svgIdentifier %> = _interopRequireDefault(require('./lib/icons/<%= svgIdentifier %>'));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _default = _<%= svgIdentifier %>;
  exports.default = _default;
  module.exports = _default;
`.trim(),
  );

  await walk(async ({ svgIdentifier }) => {
    // generate `Icon.js` in root folder
    await writeFile(
      path.resolve(__dirname, `../${svgIdentifier}.js`),
      render({
        svgIdentifier,
      }),
    );
    const tsType = `
import Vue from 'vue';
import { IconDefinition } from '@ant-design/icons-svg/lib/types';
declare class ${svgIdentifier} extends Vue {
  static install(vue: typeof Vue): void;
  icon: IconDefinition;
  twoToneColor?: string | [string, string];
  tabIndex?: number;
  spin?: boolean;
  rotate?: number;
};
export default ${svgIdentifier};
      `.trim();
    // generate `Icon.d.ts` in root folder
    await writeFile(path.resolve(__dirname, `../${svgIdentifier}.d.ts`), tsType);

    // generate `Icon.d.ts` in lib/icons folder
    await writeFile(path.resolve(__dirname, `../lib/icons/${svgIdentifier}.d.ts`), tsType);

    // generate `Icon.d.ts` in es/icons folder
    await writeFile(path.resolve(__dirname, `../es/icons/${svgIdentifier}.d.ts`), tsType);
  });
}

if (process.argv[2] === '--target=icon') {
  generateIcons();
}

if (process.argv[2] === '--target=entry') {
  generateEntries();
}
