import { readFile } from 'fs/promises';
import { FAILED_MSG, FILES_PATH } from './constants.js';
import { isExists } from './helpers.js';

const read = async () => {
    const fileToRead = new URL(`${FILES_PATH}fileToRead.txt`, import.meta.url);

    try {
        const isFileToReadExists = await isExists(fileToRead);

        if (!isFileToReadExists) {
            throw new Error(FAILED_MSG);
        }

        const fileData = await readFile(fileToRead, { encoding: 'utf8' });
        console.log(fileData);
    } catch (err) {
        console.log(err.message);
    }
};

await read();
