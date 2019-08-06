import { series } from 'gulp';

export async function build() {
  console.log('build');
}

async function clean() {
  console.log('clean');
}

export default series(clean, build);
