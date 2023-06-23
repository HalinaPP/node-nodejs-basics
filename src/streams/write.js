import { createWriteStream } from 'fs';
import { stdin } from 'process';

const write = async () => {
    const fileToWrite = new URL('./files/fileToWrite.txt', import.meta.url);

    const output = createWriteStream(fileToWrite);

    console.log('Type something for writing to the file:');
    stdin.pipe(output);
};

await write();