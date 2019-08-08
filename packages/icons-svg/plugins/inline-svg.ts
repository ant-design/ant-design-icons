import through from 'through2';
import File from 'vinyl';
import { IconDefinition } from '../build/templates/types';
import {
  renderIconDefinitionToSVGElement,
  HelperRenderOptions
} from '../build/helpers';

export default function inlineSVG(options: HelperRenderOptions = {}) {
  return through.obj(function(file: File, encoding, done) {
    if (file.isBuffer()) {
      const before = file.contents.toString(encoding);
      const icond = new Function(`return ${before}`)() as IconDefinition;
      const after = renderIconDefinitionToSVGElement(icond, options);
      file.contents = Buffer.from(after);
      done(null, file);
    } else {
      done(null, file);
    }
  });
}
