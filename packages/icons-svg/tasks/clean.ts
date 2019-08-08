import del from 'del';

export function clean() {
  return del(['src', 'inline-svg']);
}
