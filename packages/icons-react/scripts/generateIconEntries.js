const fs = require('fs');

const { getComponentNameList } = require('./utils');

const iconConfig = getComponentNameList();

iconConfig.forEach(config => {
  const { componentName } = config;
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

  fs.writeFileSync(
    `./${componentName}.d.ts`,
    `export { default } from './lib/icons/${componentName}';`,
  );
});
