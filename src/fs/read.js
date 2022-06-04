import {
  readFile
} from 'fs/promises';
import path from 'path';
import {
  fileURLToPath
} from 'url';

const __filename = fileURLToPath(
  import.meta.url);
const __dirname = path.dirname(__filename);
const pathToFile = path.join(__dirname, 'files', 'fileToRead.txt');

export const read = async () => {

  try {
    const readed = await readFile(pathToFile);
    await console.log(readed.toString());
  } catch {
    throw new Error('FS operation failed');
  }
};

read();
