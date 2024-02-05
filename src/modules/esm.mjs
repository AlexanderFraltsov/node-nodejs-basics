import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { release, version } from 'node:os';
import { sep, join, dirname } from 'node:path';
import { createServer as createServerHttp } from 'node:http';
import './files/c.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));

const random = Math.random();

let unknownObject;

const getObjectFromJSON = async (jsonPath) => JSON.parse(await readFile(join(__dirname, jsonPath), 'utf8'))
if (random > 0.5) {
    unknownObject = await getObjectFromJSON('./files/a.json');
} else {
    unknownObject = await getObjectFromJSON('./files/b.json');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export default {
    unknownObject,
    myServer,
};
