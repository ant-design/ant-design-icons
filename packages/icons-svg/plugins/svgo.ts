import through from 'through2';
import File from 'vinyl';
import SVGO from 'svgo';

export default function svgo(options: SVGO.Options) {
  const optimizer = new SVGO(options);
  return through.obj(function(file: File, encoding, done) {
    if (file.isBuffer()) {
      const before = file.contents.toString(encoding);
      optimizer.optimize(before).then(({ data: after }) => {
        file.contents = Buffer.from(after);
        done(null, file);
      });
    } else {
      done(null, file);
    }
  });
}
