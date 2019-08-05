const path = require('path');

export default {
  name: 'simple-copy-all-txt',
  context: __dirname,
  sources: ['./files/**/*.txt'],
  relativeBase: './files',
  destination: path.resolve(__dirname, './des')
};
