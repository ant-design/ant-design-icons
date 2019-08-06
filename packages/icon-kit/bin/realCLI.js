#!/usr/bin/env node

const program = require('commander');
const pkg = require('../package.json');
const debug = require('debug')('iconkit:cli');
const path = require('path');

process.env.ICONKIT_DIR = path.dirname(require.resolve('../package'));
process.env.ICONKIT_VERSION = pkg.version;

program.version(pkg.version);

program.option('-r, --require <module>', 'prerequire any module');

program
  .command('generate')
  .description('Generate files.')
  .action(() => {
    require('../lib/scripts/generate');
  });

program.parse(process.argv);

if (typeof program.require === 'string') {
  debug(`ready to load module: ${program.require}`);
  const resolvedPath = require.resolve(program.require, {
    paths: [process.cwd()]
  });
  debug(`the module "${program.require}" is resolved: ${resolvedPath}`);
  require(resolvedPath);
  debug(`the module "${program.require}" is loaded`);
}
