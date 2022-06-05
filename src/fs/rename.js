import {
  rename as renamePath
} from 'fs/promises';
import path from 'path';
import {
  fileURLToPath
} from 'url';

const __filename = fileURLToPath(
  import.meta.url);
const __dirname = path.dirname(__filename);
const pathToOldNameFile = path.join(__dirname, 'files', 'wrongFilename.txt');
const pathToNewNameFile = path.join(__dirname, 'files', 'properFilename.md');

export const rename = async () => {
  try {
    await renamePath(pathToOldNameFile, pathToNewNameFile);
    console.log('File renamed!');
  } catch {
    throw new Error('FS operation failed');
  }
};

rename();
