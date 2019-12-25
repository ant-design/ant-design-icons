const { camelCase, upperFirst } = require('lodash');
const manifest = require('@ant-design/icons-svg/lib/manifest').default;

const themeMap = {
  fill: 'filled',
  outline: 'outlined', // default theme
  twotone: 'twoTone',
};

exports.getComponentNameList = () => {
  const icons = [];
  Object.keys(manifest).forEach(theme => {
    manifest[theme].forEach(name => {
      const baseName = upperFirst(camelCase(name));
      icons.push({
        theme,
        componentName: baseName + upperFirst(themeMap[theme]),
        svgName: baseName + upperFirst(theme === 'twotone' ? 'twoTone' : theme),
      });
    });
  });
  return icons;
};
