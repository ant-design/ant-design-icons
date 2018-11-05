import fs = require('fs-extra');
import globby = require('globby');
import _ = require('lodash');
import path = require('path');
import { from } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { renameMapper } from '../../constants';

export async function normalizeNamesFromDir(dir: string, outDir?: string) {
  const rawNames$ = from(await globby(['*.svg'], { cwd: dir, deep: false }));
  const beforeAndAfter$ = rawNames$.pipe(
    map((fileNameWithExtension) => {
      const normalized =
        normalizeName(
          fileNameWithExtension
            .replace(/\.svg$/, '')
            .replace(/-o$/, '')
            .replace(/-fill$/, '')
            .replace(/-twotone$/, '')
        ) + '.svg';
      return {
        before: fileNameWithExtension,
        after: normalized
      };
    })
  );
  return new Promise<void>((resolve, reject) => {
    beforeAndAfter$
      .pipe(
        mergeMap(async ({ before, after }) =>
          fs.rename(path.join(dir, before), path.join(outDir || dir, after))
        )
      )
      .subscribe(undefined, reject, resolve);
  });
}

export function normalizeName(fileName: string): string {
  return manulRename(_.kebabCase(fileName));
}

export function manulRename(kebabCaseName: string): string {
  const result = renameMapper[kebabCaseName];
  if (result) {
    return result;
  }
  return kebabCaseName;
}
