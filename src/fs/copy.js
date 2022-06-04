import {
  constants
} from 'fs';
import {
  mkdir,
  copyFile,
  readdir,
  access
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
    await access(pathToNewFolder);
    throw new Array('FS operation failed');
  } catch (err) {
    if (err['0'] !== undefined) {
      console.error(err['0']);
      process.exit();
    }
  }

  await mkdir(pathToNewFolder, {
    recursive: true
  });
  const files = await readdir(pathToDefaultFolder, {
    withFileTypes: true
  });
  for (const file of files) {
    const pathToDefaultFile = path.join(pathToDefaultFolder, file.name);
    const pathToNewFile = path.join(pathToNewFolder, file.name);

    await copyFile(pathToDefaultFile, pathToNewFile, constants.COPYFILE_FICLONE);
  }
  console.log('All files copied!');
};

copy();
