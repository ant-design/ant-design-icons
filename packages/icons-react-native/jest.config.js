const { createConfig } = require('@umijs/test');

const defaultConfig = createConfig({
  target: 'browser',
});

/** @type {import('@umijs/test').Config} */
const config = {
  ...defaultConfig,
  testMatch: [ '**/?(*.)+(spec|test).[jt]s?(x)' ],
  setupFiles: [
    ...(defaultConfig.setupFiles || []),
    './test/setup.js'
  ],
  setupFilesAfterEnv: [
    ...(defaultConfig.setupFilesAfterEnv || []),
  ],
};

module.exports = config;
