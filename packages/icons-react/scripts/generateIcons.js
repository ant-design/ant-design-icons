const fs = require('fs');
const path = require('path');
const { camelCase, capitalize, upperFirst } = require('lodash');
const manifest = require('@ant-design/icons/lib/manifest').default;

const themeMap = {
  fill: 'filled',
  outline: '', // default theme
  twotone: 'twoTone',
};

const iconsDir = path.join(__dirname, '../src/icons');

if (!fs.existsSync(iconsDir)){
  fs.mkdirSync(iconsDir);
}

const icons = [];
Object.keys(manifest).forEach(theme => {
  manifest[theme].forEach(name => {
    const baseName = upperFirst(camelCase(name));
    const componentName = baseName + upperFirst(themeMap[theme]);
    const iconName = baseName + upperFirst(theme === 'twotone' ? 'twoTone': theme);
    icons.push(componentName);
    console.log(`Generate: ${componentName}`);
    fs.writeFileSync(
      `./src/icons/${componentName}.tsx`,
      `
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import { ${iconName} } from '@ant-design/icons/lib';
import Icon, { IconProps } from '../components/Icon';

export default (props: IconProps) => <Icon {...props} icon={${iconName}} theme="${themeMap[theme] ||
        'outlined'}" />;
`,
    );
  });
});

fs.writeFileSync(
  './src/icons/index.tsx',
  icons.reduce((content, icon) => {
    content += `export { default as ${icon} } from './${icon}';\n`; // eslint-disable-line
    return content;
  }, ''),
);
