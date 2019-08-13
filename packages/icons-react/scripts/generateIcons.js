const fs = require('fs');
const path = require('path');

const { getComponentNameList } = require('./utils');

const iconsDir = path.join(__dirname, '../src/icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir);
}

const iconConfig = getComponentNameList();

iconConfig.forEach(config => {
  const { theme, componentName, svgName } = config;
  fs.writeFileSync(
    `./src/icons/${componentName}.tsx`,
    `
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY
import React from 'react';
import ${svgName}Svg from '@ant-design/icons-svg/lib/${theme}/${svgName}';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ${componentName} = (props: AntdIconProps) => <AntdIcon {...props} icon={${svgName}Svg} />;
export default ${componentName};
`,
  );
});

fs.writeFileSync(
  './src/icons/index.tsx',
  iconConfig.reduce((content, config) => {
    content += `export { default as ${config.componentName} } from './${config.componentName}';\n`; // eslint-disable-line
    return content;
  }, ''),
);
