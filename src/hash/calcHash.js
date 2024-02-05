import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const {
	createHash,
} = await import('node:crypto');

const calculateHash = async () => {
    const hash = createHash('sha256');
	const input = createReadStream(join(__dirname, 'files/fileToCalculateHashFor.txt'));
	input.pipe(hash).setEncoding('hex').pipe(stdout)
};

await calculateHash();
