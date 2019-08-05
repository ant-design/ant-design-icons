import { pathExists } from 'fs-extra';
import * as signale from 'signale';
import { join } from 'path';
import loadDefaultModuleFirst from '../utils/loadDefaultModuleFirst';
import { CwdNeeded, KitConfig } from '../types';
import chalk from 'chalk';

export const MODULE_NAME = 'iconkit';
export const CONFIG_FILES = [
  `.${MODULE_NAME}rc.js`,
  `.${MODULE_NAME}rc.ts`,
  `${MODULE_NAME}.config.js`,
  `${MODULE_NAME}.config.ts`
];

export default async function resolveUserConfig({
  cwd
}: CwdNeeded): Promise<KitConfig | KitConfig[] | null> {
  const configFilePath = await getFirstExistFilePath({
    cwd,
    filePaths: CONFIG_FILES
  });
  if (!configFilePath) {
    signale.fatal(`Cannot find any config file!`);
    return null;
  }
  signale.pending(
    `Load config file from ${chalk.underline.cyan(configFilePath)}.`
  );
  const userConfig = loadDefaultModuleFirst<KitConfig | KitConfig[] | null>(
    require(configFilePath)
  );
  if (
    Array.isArray(userConfig) ||
    (userConfig && Array.isArray(userConfig.plugins))
  ) {
    return userConfig;
  }
  return null;
}

async function getFirstExistFilePath({
  cwd,
  filePaths
}: CwdNeeded & { filePaths: string[] }): Promise<string | null> {
  for (const filePath of filePaths) {
    const absoluteFilePath = join(cwd, filePath);
    if (await pathExists(absoluteFilePath)) {
      return absoluteFilePath;
    }
  }
  return null;
}
