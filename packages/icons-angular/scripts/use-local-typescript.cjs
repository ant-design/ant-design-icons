'use strict';

const Module = require('module');
const path = require('path');

const workspaceRoot = path.resolve(__dirname, '..');
const localTypescriptPackage = require.resolve('typescript/package.json', {
  paths: [workspaceRoot],
});
const localTypescriptDir = path.dirname(localTypescriptPackage);
const localTypescriptMain = require.resolve('typescript', {
  paths: [workspaceRoot],
});
const originalResolveFilename = Module._resolveFilename;

Module._resolveFilename = function resolveFilename(request, parent, isMain, options) {
  if (request === 'typescript') {
    return localTypescriptMain;
  }

  if (request === 'typescript/package.json') {
    return localTypescriptPackage;
  }

  if (request.startsWith('typescript/')) {
    const localRequest = path.join(localTypescriptDir, request.slice('typescript/'.length));
    return originalResolveFilename.call(this, localRequest, parent, isMain, options);
  }

  return originalResolveFilename.call(this, request, parent, isMain, options);
};
