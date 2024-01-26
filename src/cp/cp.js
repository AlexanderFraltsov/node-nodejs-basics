import { fork } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const spawnChildProcess = async (args) => {
    fork(join(__dirname, 'files/script.js'), args);
};

spawnChildProcess(['1', 2]);
