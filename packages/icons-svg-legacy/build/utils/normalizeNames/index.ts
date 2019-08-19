import globby = require('globby');
import _ = require('lodash');
import path = require('path');
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
  const listNames = _.uniq(
    _.flatten(
      await Promise.all(
        (['fill', 'outline', 'twotone'] as ThemeType[]).map((theme) => {
          return globby(['*.svg'], {
            cwd: path.join(env.paths.SVG_DIR, theme),
            deep: false
          });
        })
      )
    )
  ).map((name) => name.replace(/\.svg$/, ''));
  return listNames;
}
