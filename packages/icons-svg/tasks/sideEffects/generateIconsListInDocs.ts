import { src, dest } from 'gulp';
import { parse } from 'path';
import { sync } from 'globby';
import { set, get } from 'lodash';
import { oldIconNames, ThemeType } from '../../build/constants';
import gulpTemplate from 'gulp-template';
import { templateSettings } from 'lodash';

export default function generateIconsListInDocs() {
  const acc: {
    [name: string]: {
      filled?: string;
      outlined?: string;
      twotone?: string;
    };
  } = {};

  const themes: ThemeType[] = ['filled', 'outlined', 'twotone'];
  const counters = {
    filled: 0,
    outlined: 0,
    twotone: 0
  };

  for (const theme of themes) {
    sync(`docs/inline-svg/${theme}/*.svg`, { cwd: process.cwd() }).forEach(
      (p) => {
        const parsed = parse(p);
        let name = parsed.name;
        if (oldIconNames.includes(name)) {
          name = `${name} (< 3.9)`;
        }
        set(
          acc,
          [name, theme],
          `<img width="70" height="70" src="./inline-svg/${theme}/${parsed.base}" alt="${name}" />`
        );
        counters[theme]++;
      }
    );
  }

  const total = (Object.keys(counters) as Array<ThemeType>).reduce(
    (count, nextTheme) => count + counters[nextTheme],
    0
  );

  let content =
    `name | ${themes.join(' | ')}\n` + `:----:|:-------:|:----:|:--------:\n`;
  content += `${total} in total | ${themes
    .map((theme) => counters[theme])
    .join(' | ')}\n`;
  Object.keys(acc).forEach((name) => {
    const target = acc[name]!;
    const row = themes.map((theme) => get(target, theme, ' - '));
    content += `${name} | ${row.join(' | ')}\n`;
  });

  return src('build/templates/list.md')
    .pipe(gulpTemplate({ content }, templateSettings))
    .pipe(dest('docs'));
}
