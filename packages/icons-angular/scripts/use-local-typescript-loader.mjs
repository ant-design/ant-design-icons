import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const require = createRequire(import.meta.url);
const workspaceRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const localTypescriptPackage = require.resolve('typescript/package.json', {
  paths: [workspaceRoot],
});
const localTypescriptDir = path.dirname(localTypescriptPackage);
const localTypescriptMain = require.resolve('typescript', {
  paths: [workspaceRoot],
});

export async function resolve(specifier, context, nextResolve) {
  if (specifier === 'typescript') {
    return {
      shortCircuit: true,
      url: pathToFileURL(localTypescriptMain).href
    };
  }

  if (specifier === 'typescript/package.json') {
    return {
      shortCircuit: true,
      url: pathToFileURL(localTypescriptPackage).href
    };
  }

  if (specifier.startsWith('typescript/')) {
    return {
      shortCircuit: true,
      url: pathToFileURL(path.join(localTypescriptDir, specifier.slice('typescript/'.length))).href
    };
  }

  return nextResolve(specifier, context);
}
