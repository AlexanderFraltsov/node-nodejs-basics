import { createWriteStream } from 'node:fs';
import { stdin } from 'node:process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const write = async () => {
    stdin.pipe(createWriteStream(join(__dirname, 'files/fileToWrite.txt')));
};

await write();
