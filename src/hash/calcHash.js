const { createHash } = await import('node:crypto');
import { createReadStream } from 'fs';
import { stdout } from 'process';

const calculateHash = async () => {
    const fileToCalculateHashFor = new URL('./files/fileToCalculateHashFor.txt', import.meta.url);

    const hash = createHash('sha256');
    const input = createReadStream(fileToCalculateHashFor);
    input.pipe(hash).setEncoding('hex').pipe(stdout);
};

await calculateHash();
