const {getComponentName} = require('@svgr/core');
const kebabcase = require('lodash.kebabcase');

module.exports = {
  extractId({name, filePath}) {
    return `antd-icon-${kebabcase(getComponentName({filePath}))}`;
  }
}
