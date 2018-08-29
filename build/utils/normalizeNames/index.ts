import fs = require('fs-extra');
import globby = require('globby');
import path = require('path');
import Prettier = require('prettier');
import { EXPORT_DEFAULT_MANIFEST } from '../../constants';
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
  const manifestTsTemplate = await fs.readFile(
    env.paths.MANIFEST_TEMPLATE,
    'utf8'
  );
  await fs.writeFile(
    env.paths.MANIFEST_OUTPUT,
    Prettier.format(
      manifestTsTemplate.replace(
        EXPORT_DEFAULT_MANIFEST,
        `export default ${JSON.stringify(listNames)};`
      ),
      env.options.prettier
    )
  );
  log.info(`Generate ${env.paths.MANIFEST_OUTPUT}`);
  return listNames;
}
