import { Transform } from 'stream';

export const transform = async () => {
  const reverseString = new Transform({
    transform(chunk, encoding, cb) {
      this.push(chunk.toString().split('').reverse().join(''));
      cb();
    },
  });

  process.stdin.pipe(reverseString).pipe(process.stdout);
};
transform();
