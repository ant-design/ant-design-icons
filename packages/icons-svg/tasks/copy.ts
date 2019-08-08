import { src, dest } from 'gulp';

export function copy() {
  return src(['build/templates/*.ts']).pipe(dest('src'));
}
