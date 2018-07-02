/**
 * SVGR Config
 * https://github.com/smooth-code/svgr#options
 */

const path = require('path');

module.exports = {
  icon: true,
  svgAttributes: { fill: 'currentColor' },
  template: require(path.resolve(__dirname, './component.template.js')),
  svgoConfig: {
    minifyStyles: false
  }
};
