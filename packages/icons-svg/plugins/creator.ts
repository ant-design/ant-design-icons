import through from 'through2';
import File from 'vinyl';

export const createTransformStream = (fn: (raw: string, file: File) => string) =>
  through.obj((file: File, encoding, done) => {
    if (file.isBuffer()) {
      const before = file.contents.toString(encoding);
      try {
        const after = fn(before, file);
        file.contents = Buffer.from(after);
        done(null, file);
      } catch (err) {
        done(err, null);
      }
    } else {
      done(null, file);
    }
  });

export const createTransformStreamAsync = (
  fn: (raw: string, file: File) => Promise<string>
) =>
  through.obj((file: File, encoding, done) => {
    if (file.isBuffer()) {
      const before = file.contents.toString(encoding);
      fn(before, file)
        .then((after) => {
          file.contents = Buffer.from(after);
          done(null, file);
        })
        .catch((err) => {
          done(err, null);
        });
    } else {
      done(null, file);
    }
  });
