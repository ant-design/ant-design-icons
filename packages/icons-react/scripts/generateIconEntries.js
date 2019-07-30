const fs = require('fs');
const { camelCase, capitalize, upperFirst } = require('lodash');
const manifest = require('@ant-design/icons/lib/manifest').default;

const themeMap = {
  fill: 'filled',
  outline: '',
  twotone: 'twoTone',
};

const icons = [];
Object.keys(manifest).forEach(theme => {
  manifest[theme].forEach(name => {
    const baseName = upperFirst(camelCase(name));
    const componentName = baseName + capitalize(themeMap[theme]);
    icons.push(componentName);

    fs.writeFileSync(
      `./${componentName}.js`,
`'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _${componentName} = _interopRequireDefault(require('./lib/icons/${componentName}'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _default = _${componentName};
exports.default = _default;
module.exports = _default;`,
    );
  });
});
