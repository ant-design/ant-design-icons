import File from 'vinyl';

const twotoneRE = /twotone/g;
export const isTwotoneSVG = (file: File) => {
  return twotoneRE.test(file.path);
};
