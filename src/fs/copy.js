import {
  mkdir,
  copyFile,
  readdir
} from 'fs/promises';
import path from 'path';
import {
  fileURLToPath
} from 'url';

const __filename = fileURLToPath(
  import.meta.url);
const __dirname = path.dirname(__filename);
const pathToDefaultFolder = path.join(__dirname, 'files');
const pathToNewFolder = path.join(__dirname, 'files_copy');

export const copy = async () => {

  try {
    await mkdir(pathToNewFolder);
    const files = await readdir(pathToDefaultFolder, {
      withFileTypes: true
    });
    for (const file of files) {
      const pathToDefaultFile = path.join(pathToDefaultFolder, file.name);
      const pathToNewFile = path.join(pathToNewFolder, file.name);
      await copyFile(pathToDefaultFile, pathToNewFile);
    }
    console.log('All files copied!');
  } catch {
    throw new Error('FS operation failed');
  }
};

copy();
