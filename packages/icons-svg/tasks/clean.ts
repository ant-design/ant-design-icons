import del from 'del';

export default function clean() {
  return del(['src', 'inline-svg', 'docs/inline-svg', 'docs/list.md']);
}
