#!/usr/bin/env node

const script = process.argv[2];
const path = require('path');
const signale = require('signale');

const pkg = require('../package.json');
process.env.ICONKIT_DIR = path.dirname(require.resolve('../package'));
process.env.ICONKIT_VERSION = pkg.version;

switch (script) {
  case 'generate':
    require('../lib/scripts/generate');
    break;
  default:
    signale.warn(`Unknown or unregitered command "${script}."`);
    break;
}
