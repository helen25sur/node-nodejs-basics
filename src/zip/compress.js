import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import path from 'path';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToFile = path.join(__dirname, 'files', 'fileToCompress.txt');
const pathToCompressArch = path.join(__dirname, 'archive.txt.gz');

export const compress = async () => {
  const readableStream = createReadStream(pathToFile, 'utf-8');
  const writableStream = createWriteStream(pathToCompressArch);
  const gzip = createGzip();

  pipeline(readableStream, gzip, writableStream, (err) => {
    if (err) {
      console.error('An error occurred:', err);
    }
  });
};

compress();
