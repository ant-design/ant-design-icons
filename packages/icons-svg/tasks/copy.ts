import { src, dest } from 'gulp';

export default function copy() {
  return src(['build/templates/*.ts']).pipe(dest('src'));
}
