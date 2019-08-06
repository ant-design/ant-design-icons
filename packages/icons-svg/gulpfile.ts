import { series, src, dest } from 'gulp';

export default function() {
  return src('svg/**/*.svg').pipe(dest('src'));
}
