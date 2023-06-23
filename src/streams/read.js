import { createReadStream } from 'fs';
import { stdout } from 'process';

const read = async () => {
    const fileToRead = new URL('./files/fileToRead.txt', import.meta.url);

    const input = createReadStream(fileToRead);
    input.pipe(stdout);
};

await read();