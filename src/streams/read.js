import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
	createReadStream(join(__dirname, './files/fileToRead.txt')).pipe(stdout);
};

await read();
