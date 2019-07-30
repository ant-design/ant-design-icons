const fs = require('fs');
const path = require('path');
const { camelCase, upperFirst } = require('lodash');
const manifest = require('@ant-design/icons-svg/lib/manifest').default;

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
    // const fileName = componentName.replace('filled', '');
    // todo: svg 需要统一 filled, outlined, twotone
    const iconName = baseName + upperFirst(theme === 'twotone' ? 'twoTone': theme);
    icons.push(componentName);
    console.log(`Generate: ${componentName}`);
    fs.writeFileSync(
      `./src/icons/${componentName}.tsx`,
      `
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import { ${iconName} as ${iconName}Svg } from '@ant-design/icons-svg/lib';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ${componentName} = (props: AntdIconProps) => <AntdIcon {...props} icon={${iconName}Svg} />;
export default ${componentName};
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
