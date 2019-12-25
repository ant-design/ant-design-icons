const fs = require('fs');
const path = require('path');
const lodash = require('lodash');
const allIconDefs = require('@ant-design/icons-svg');

const fsPromises = fs.promises;
const template = lodash.template;

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
    await fsPromises.access(iconsDir);
  } catch (err) {
    await fsPromises.mkdir(iconsDir);
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
  props: [ ...Icon.props ],
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
    await fsPromises.writeFile(
      path.resolve(__dirname, `../src/icons/${svgIdentifier}.jsx`),
      render({ svgIdentifier }),
    );
  });

  // generate icon index
  const entryText = Object.keys(allIconDefs)
    .map(svgIdentifier => {
      return `export { default as ${svgIdentifier} } from './${svgIdentifier}';`;
    })
    .join('\n');

  await fsPromises.appendFile(
    path.resolve(__dirname, '../src/icons/index.jsx'),
    `
// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY
    `.trim() +
      '\n' +
      entryText,
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
    await fsPromises.writeFile(
      path.resolve(__dirname, `../${svgIdentifier}.js`),
      render({
        svgIdentifier,
      }),
    );

    // generate `Icon.d.ts` in root folder
    await fsPromises.writeFile(
      path.resolve(__dirname, `../${svgIdentifier}.d.ts`),
      `
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
      `.trim(),
    );
  });
}

if (process.argv[2] === '--target=icon') {
  generateIcons();
}

if (process.argv[2] === '--target=entry') {
  generateEntries();
}
