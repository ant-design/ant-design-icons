const path = require('path');

export default {
  name: 'test',
  context: __dirname,
  sources: ['svg/**/*.svg'],
  relativeBase: './svg',
  destination: path.resolve(__dirname, './src/asn')
};
