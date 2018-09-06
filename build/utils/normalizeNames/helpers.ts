import fs = require('fs-extra');
import globby = require('globby');
import _ = require('lodash');
import path = require('path');
import { from } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

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
  const mapper: { [key: string]: string | undefined } = {
    ['arrawsalt']: 'arrows-alt',
    ['arrowdown']: 'arrow-down',
    ['arrowleft']: 'arrow-left',
    ['arrowright']: 'arrow-right',
    ['arrowup']: 'arrow-up',
    ['customerservice']: 'customer-service',
    ['html-5']: 'html5',
    ['time-circle']: 'clock-circle',
    ['video']: 'video-camera',
    ['unlike']: 'dislike',
    ['verticle-left']: 'vertical-left',
    ['verticle-right']: 'vertical-right',
    ['doubleleft']: 'double-left',
    ['indent']: 'menu-unfold',
    ['outdent']: 'menu-fold',
    ['time-out']: 'pause-circle',
    ['exclaimination']: 'exclamation',
    ['warning-circle']: 'exclamation-circle',
    ['code-library']: 'code',
    ['yuan-circle']: 'pay-circle',
    ['yuan']: 'pay-circle',
    ['pay-cirlce']: 'pay-circle',
    ['app-store']: 'appstore',
    ['pie-chart-circle-fil']: 'pie-chart',
    ['image']: 'picture',
    ['poweroff-circle']: 'pause-circle',
    ['dingtalk']: 'dingding',
    ['point-map']: 'dot-chart',
    ['totop']: 'to-top',
    ['id-card']: 'idcard',
    ['infomation']: 'info',
    ['location']: 'environment',
    ['error']: 'warning',
    ['file-copy']: 'copy',
    ['detail']: 'profile',
    ['calendar-check']: 'schedule',
    ['earth']: 'global',
    ['edit-square']: 'form',
    ['file-exception']: 'exception',
    ['add-user']: 'user-add',
    ['addteam']: 'usergroup-add',
    ['delete-team']: 'usergroup-delete',
    ['delete-user']: 'user-delete',
    ['user-delete']: 'user-delete',
    ['alibabacloud']: 'aliyun',
    ['share']: 'share-alt',
    ['attachment']: 'paper-clip',
    ['wrench']: 'tool',
    ['batch-folding']: 'switcher',
    ['sever']: 'hdd',
    ['medicinebox']: 'medicine-box'
  };
  const result = mapper[kebabCaseName];
  if (result) {
    return result;
  }
  return kebabCaseName;
}
