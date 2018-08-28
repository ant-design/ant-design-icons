import fs = require('fs-extra');
import globby = require('globby');
import path = require('path');
import Prettier = require('prettier');
import { Environment, ThemeType } from '../../typings';
import { log } from '../../utils';
import { normalizeNamesFromDir } from './helpers';

const folderNames: ThemeType[] = ['fill', 'outline', 'twotone'];
export async function normalize(env: Environment) {
  for (const folderName of folderNames) {
    const dir = path.join(env.paths.SVG_DIR, folderName);
    await normalizeNamesFromDir(dir);
    log.notice(`Normalize ${dir}`);
  }
  const defaultDirName: ThemeType = 'outline';
  const listNames = (await globby(['*.svg'], {
    cwd: path.join(env.paths.SVG_DIR, defaultDirName),
    deep: false
  })).map((name) => name.replace(/\.svg$/, ''));
  await fs.writeFile(
    path.join(env.paths.MANIFEST_DIR, './index.json'),
    Prettier.format(JSON.stringify(listNames), {
      ...env.options.prettier,
      singleQuote: false,
      semi: false
    }).replace(';', '')
  );
  log.info(`Generate ${path.join(env.paths.MANIFEST_DIR, './index.json')}`);
  return listNames;
}
