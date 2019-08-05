#!/usr/bin/env node

const signale = require('signale');
const script = process.argv[2];

const pkg = require('../package.json');
process.env.ICONKIT_DIR = dirname(require.resolve('../package'));
process.env.ICONKIT_VERSION = pkg.version;

switch (script) {
  case 'generate':
    require(`./lib/scripts/generate`);
    break;
  default:
    signale.warn(`Unknown or unregitered command "${script}."`);
    break;
}
