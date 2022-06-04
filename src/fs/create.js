import {
  writeFile
} from "fs/promises";
import path from 'path';
import {
  fileURLToPath
} from 'url';

const __filename = fileURLToPath(
  import.meta.url);
const __dirname = path.dirname(__filename);
const pathToFile = path.join(__dirname, 'files', 'fresh.txt');

export const create = async () => {
  try {
    await writeFile(pathToFile, 'I am fresh and young', {
      flag: 'wx'
    });
    console.log('File created');
  } catch {
    throw new Error('FS operation failed');
  }
};

create();
