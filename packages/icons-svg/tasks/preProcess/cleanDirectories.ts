import del from 'del';

export default function cleanDirectories() {
  return del([
    'src',
    'inline-svg',
    'docs/inline-svg',
    'docs/list.md',
    'es',
    'lib'
  ]);
}
