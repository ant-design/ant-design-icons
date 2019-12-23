import { src, dest } from 'gulp';

export default function copyTemplates() {
  return src(['build/templates/*.ts']).pipe(dest('src'));
}
