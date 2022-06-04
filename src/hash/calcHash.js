import { createReadStream } from 'fs';
const { createHash } = await import('crypto');
import { stdout } from 'process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToFile = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

export const calculateHash = async () => {
  try {
    const hash = await createHash('SHA256');
    const input = createReadStream(pathToFile);
    input.pipe(hash).setEncoding('hex').pipe(stdout);
  } catch (error) {
    console.log(error.message);
  }
};

calculateHash();
