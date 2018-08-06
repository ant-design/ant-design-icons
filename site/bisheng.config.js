'use strict';

const webpack = require('webpack');
const WebpackBar = require('webpackbar');

module.exports = {
  port: 9527,
  theme: './site/theme',
  source: './docs',
  webpackConfig(config) {
    usePrettyWebpackBar(config);
    return config;
  }
};

function usePrettyWebpackBar(config) {
  // remove old progress plugin.
  config.plugins = config.plugins
    .filter((plugin) => {
      return !(plugin instanceof webpack.ProgressPlugin)
        && !(plugin instanceof WebpackBar);
    });

  // use brand new progress bar.
  config.plugins.push(
    new WebpackBar({
      name: '📦  Site',
      minimal: false,
    })
  );
}
