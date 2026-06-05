'use strict';

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const localTypescriptHook = require.resolve('./use-local-typescript.cjs');
const localTypescriptLoaderRegister = path.resolve(__dirname, 'register-local-typescript-loader.mjs');
const requireHookOption = `--require=${localTypescriptHook}`;
const loaderOption = `--import=${localTypescriptLoaderRegister}`;
const workspaceRoot = path.resolve(__dirname, '..');
const repoRoot = path.resolve(workspaceRoot, '../..');

function prependNodeOption(option, nodeOptions) {
  return nodeOptions?.includes(option) ? nodeOptions : [option, nodeOptions].filter(Boolean).join(' ');
}

function ensureLocalToolchainPackage(packageName) {
  const targetPackageJson = require.resolve(`${packageName}/package.json`, {
    paths: [repoRoot],
  });
  const targetDir = path.dirname(targetPackageJson);
  const linkDir = path.join(workspaceRoot, 'node_modules', ...packageName.split('/'));

  if (fs.existsSync(linkDir)) {
    return;
  }

  fs.mkdirSync(path.dirname(linkDir), { recursive: true });
  fs.symlinkSync(targetDir, linkDir, 'junction');
}

[
  '@angular/cli',
  '@angular/build',
  '@angular/compiler-cli',
  'ng-packagr',
].forEach(ensureLocalToolchainPackage);

const nodeOptions = prependNodeOption(
  requireHookOption,
  prependNodeOption(loaderOption, process.env.NODE_OPTIONS),
);

if (!process.execArgv.includes(loaderOption) && !process.execArgv.includes(localTypescriptLoaderRegister)) {
  const result = spawnSync(
    process.execPath,
    ['--import', localTypescriptLoaderRegister, '--require', localTypescriptHook, __filename, ...process.argv.slice(2)],
    {
      env: {
        ...process.env,
        NODE_OPTIONS: process.env.NODE_OPTIONS,
      },
      stdio: 'inherit',
    },
  );

  process.exit(result.status ?? 1);
}

process.env.NODE_OPTIONS = nodeOptions;
require(localTypescriptHook);
require(path.join(workspaceRoot, 'node_modules/@angular/cli/bin/ng'));
