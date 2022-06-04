import {
  writeFile,
  access
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
    await access(pathToFile);
    throw new Array('FS operation failed');
  } catch (err) {
    if (err['0'] !== undefined) {
      console.error(err['0']);
      process.exit();
    }
  }
  await writeFile(pathToFile, 'I am fresh and young',
    console.log('File created')
  );
};

create();
