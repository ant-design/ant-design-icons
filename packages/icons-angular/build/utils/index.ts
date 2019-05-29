const fs = require('fs-extra');
const path = require('path');
const rimraf = require('rimraf');

import chalk from 'chalk';

import { Environment, ThemeType } from '../typings';

export const log = {
  info(message: string): void {
    return console.log(chalk.green(`🌟 [Generate] ${message}`));
  },
  notice(message: string): void {
    return console.log(chalk.blueBright(`🌟 [Notice] ${message}`));
  }
};

export function getIdentifier(identifier: string, theme: ThemeType): string {
  switch (theme) {
    case 'fill':
      return `${identifier}Fill`;
    case 'outline':
      return `${identifier}Outline`;
    case 'twotone':
      return `${identifier}TwoTone`;
    default:
      throw new TypeError(
        `Unknown theme type: ${theme}, identifier: ${identifier}`
      );
  }
}

export function withSuffix(name: string, theme: ThemeType) {
  switch (theme) {
    case 'fill':
      return `${name}-fill`;
    case 'outline':
      return `${name}-o`;
    case 'twotone':
      return `${name}-twotone`;
    default:
      throw new TypeError(`Unknown theme type: ${theme}, name: ${name}`);
  }
}

/**
 * Clear by using 'rimraf'.
 */
export async function clear(env: Environment) {
  log.notice(`Clear folders.`);
  return Promise.all(
    (Object.keys(env.paths) as Array<keyof typeof env.paths>)
      .filter((key) => key.endsWith('OUTPUT')) // DO NOT DELETE THIS LINE!!!
      .map((key) => {
        // This is evil. Make sure you just delete the OUTPUT.
        log.notice(`Delete ${path.relative(env.base, env.paths[key])}.`);
        return new Promise((resolve) => rimraf(env.paths[key], resolve));
      })
  );
}

export function isAccessable(url: string) {
  let accessable = false;
  try {
    fs.accessSync(url);
    accessable = true;
  } catch (error) {
    accessable = false;
  }
  return accessable;
}
