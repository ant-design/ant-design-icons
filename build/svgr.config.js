const path = require('path');

module.exports = {
  icon: true,
  replaceAttrValues: { none: 'currentColor' },
  template: require(path.resolve(__dirname, './component.template.js'))
};
