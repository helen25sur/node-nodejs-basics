import { createGunzip } from 'zlib';
import { pipeline } from 'stream';
import path from 'path';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToFile = path.join(__dirname, 'fileDecompressed.txt');
const pathToCompressArch = path.join(__dirname, 'archive.txt.gz');

export const decompress = async () => {
  const readableStream = createReadStream(pathToCompressArch);
  const writableStream = createWriteStream(pathToFile, null);
  const gunZip = createGunzip();

  pipeline(readableStream, gunZip, writableStream, (err) => {
    if (err) {
      console.error('An error occurred:', err);
    }
  });
};

decompress();
