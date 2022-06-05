import { createReadStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { stdout } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToReadFile = path.join(__dirname, 'files', 'fileToRead.txt');

export const read = async () => {
  try {
    const readableStream = createReadStream(pathToReadFile, 'utf-8');
    readableStream.pipe(stdout);
    readableStream.on('error', () => {
      throw new Error('Reading is impossible');
    });
  } catch (error) {
    console.log('Error', error.message);
  }
};

read();
