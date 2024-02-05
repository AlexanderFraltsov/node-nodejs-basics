import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const compress = async () => {
	const gzip = createGzip();
	pipeline(
		createReadStream(join(__dirname, 'files/fileToCompress.txt')),
		gzip,
		createWriteStream(join(__dirname, 'files/archive.gz')),
		(err) => {
			if (err) {
				console.error('An error occurred:', err);
				process.exitCode = 1;
			}
		},
	)
};

await compress();
