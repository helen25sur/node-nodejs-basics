import {
  readdir
} from 'fs/promises';
import path from 'path';
import {
  fileURLToPath
} from 'url';

const __filename = fileURLToPath(
  import.meta.url);
const __dirname = path.dirname(__filename);
const pathToDir = path.join(__dirname, 'files');

export const list = async () => {

  try {
    const files = await readdir(pathToDir, {
      withFileTypes: true
    });
    const resArr = [];
    for await (const file of files) {
      resArr.push(file.name);
    }
    await console.log(resArr);
  } catch {
    throw new Error('FS operation failed');
  }

};

list();
