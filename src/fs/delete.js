import {
  rm
} from 'fs/promises';
import path from 'path';
import {
  fileURLToPath
} from 'url';

const __filename = fileURLToPath(
  import.meta.url);
const __dirname = path.dirname(__filename);

const pathToFileForRemove = path.join(__dirname, 'files', 'fileToRemove.txt');

export const remove = async () => {
  try {
    await rm(pathToFileForRemove);
    console.log('File removed!');
  } catch {
    throw new Error('FS operation failed');
  }
};

remove();
