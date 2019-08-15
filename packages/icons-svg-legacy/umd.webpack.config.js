const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');

const banner = `${pkg.name} ${pkg.version}`;

module.exports = {
  entry: './lib/dist.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'umd.js',
    library: 'AntDesignIcons',
    libraryTarget: 'umd'
  },
  plugins: [new webpack.BannerPlugin(banner)]
};
