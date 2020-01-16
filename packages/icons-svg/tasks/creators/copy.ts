import { src, dest } from 'gulp';

export interface CopyCreatorOptions {
  from: string[];
  toDir: string;
}

export const copy = ({ from, toDir }: CopyCreatorOptions) =>
  function CopyFiles() {
    return src(from).pipe(dest(toDir));
  };
