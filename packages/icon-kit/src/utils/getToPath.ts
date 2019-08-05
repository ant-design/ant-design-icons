import { AssetPath } from '../types';
import { join, relative, parse } from 'path';

export function getToPath({
  destination,
  from,
  configContext,
  relativeBase = './'
}: {
  destination: string;
  from: AssetPath;
  configContext: string;
  relativeBase?: string;
}): AssetPath {
  const toAbsolute = join(
    destination,
    relative(join(configContext, relativeBase), from.absolute)
  );
  return {
    ...parse(toAbsolute),
    absolute: toAbsolute
  };
}
