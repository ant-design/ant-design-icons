import del from 'del';

export const clean = (dirs: string[]) =>
  function CleanDirectories() {
    return del(dirs);
  };
