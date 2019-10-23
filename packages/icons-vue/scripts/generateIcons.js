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
    `./src/icons/${componentName}.jsx`,
    `
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ${svgName}Svg from '@ant-design/icons-svg/lib/${theme}/${svgName}';

export default {
  name: 'Icon${componentName}',
  displayName: '${componentName}',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ${svgName}Svg } },
      children
    ),
};
`,
  );
});

fs.writeFileSync(
  './src/icons/index.jsx',
  iconConfig.reduce((content, config) => {
    content += `export { default as ${config.componentName} } from './${config.componentName}';\n`; // eslint-disable-line
    return content;
  }, ''),
);
