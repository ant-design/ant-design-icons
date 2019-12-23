import through from 'through2';
import File from 'vinyl';
import { template } from 'lodash';
import { readFileSync } from 'fs';

type MapFileToInterpolateType = (afterFile: {
  name: string;
  content: string;
}) => object;

export interface UseTemplateOptions {
  tplSource: string;
  mapFileToInterpolate: MapFileToInterpolateType;
}

export default function useTemplate({
  tplSource,
  mapFileToInterpolate
}: UseTemplateOptions) {
  const executor = template(readFileSync(tplSource, 'utf8'));
  return through.obj(function(file: File, encoding, done) {
    if (file.isBuffer()) {
      const before = file.contents.toString(encoding);
      const after = executor(
        mapFileToInterpolate({ name: file.stem, content: before })
      );
      file.contents = Buffer.from(after);
      done(null, file);
    } else {
      done(null, file);
    }
  });
}
