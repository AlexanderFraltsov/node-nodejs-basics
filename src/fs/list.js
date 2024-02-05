import fs from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const list = async () => {
	const dir = 'files';
	const dirPath = join(__dirname, dir);
	const failedMessage = 'FS operation failed';

	try {
		await fs.access(dirPath, fs.F_OK);
	} catch (error) {
		throw new Error(failedMessage);
	}

    const files = await fs.readdir(dirPath, { recursive: true });
	console.log(files);
};

await list();
