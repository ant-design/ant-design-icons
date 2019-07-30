module.exports = {
  testURL: 'http://localhost',
  transform: {
    '\\.tsx?$': './node_modules/rc-tools/scripts/jestPreprocessor.js'
  },
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  snapshotSerializers: ['enzyme-to-json/serializer']
};
