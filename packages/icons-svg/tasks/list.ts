import { src, dest } from 'gulp';
import { parse } from 'path';
import { sync } from 'globby';
import { set, get } from 'lodash';
import { oldIcons } from '../build/constants';
import gulpTemplate from 'gulp-template';
import { templateSettings } from 'lodash';

export default function list() {
  const acc: {
    [name: string]: {
      fill?: string;
      outline?: string;
      twotone?: string;
    };
  } = {};

  const themes = ['outline', 'fill', 'twotone'];

  for (const theme of themes) {
    sync(`docs/inline-svg/${theme}/*.svg`, { cwd: process.cwd() }).forEach(
      (p) => {
        const parsed = parse(p);
        let name = parsed.name;
        if (oldIcons.includes(name)) {
          name = `${name} (< 3.9)`;
        }
        set(
          acc,
          [name, theme],
          `<img width="70" height="70" src="./inline-svg/${theme}/${
            parsed.base
          }" alt="${name}" />`
        );
      }
    );
  }

  let content = '';
  Object.keys(acc).forEach((name) => {
    const target = acc[name]!;
    const row = themes.map((theme) => get(target, theme, ' - '));
    row.unshift(name);
    content += row.join(' | ') + '\n';
  });

  return src('build/templates/list.md')
    .pipe(gulpTemplate({ content }, templateSettings))
    .pipe(dest('docs'));
}
