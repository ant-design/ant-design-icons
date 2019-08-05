export default function slash(input: string) {
  const isExtendedLengthPath = /^\\\\\?\\/.test(input);

  if (isExtendedLengthPath) {
    return input;
  }

  return input.replace(/\\/g, '/');
}
