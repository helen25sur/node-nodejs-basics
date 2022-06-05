import { createWriteStream, appendFile } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { stdin } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToWriteFile = path.join(__dirname, 'files', 'fileToWrite.txt');

export const write = async () => {
  try {
    const writableStream = createWriteStream(pathToWriteFile, 'utf-8');
    writableStream.on('open', () => {
      console.log('Hello! Enter your message!');

      stdin.on('data', (data) => {
        console.log(`You typed ${data.toString()}`);
        appendFile(pathToWriteFile, data.toString(), () => {
          console.log('Your message wrote in the file write.txt');
        });
      });
    });
    writableStream.on('error', () => {
      throw new Error('Writing into the file is impossible');
    });
  } catch (error) {
    console.log('Error', error.message);
  }

  process.on('SIGINT', () => {
    console.log('Thanks! Have a nice day!');
    process.exit();
  });
};

write();
