import { readdir } from 'fs/promises';
import { FAILED_MSG, FILES_PATH } from './constants.js';
import { isExists } from './helpers.js';

const list = async () => {
    const source = new URL(`${FILES_PATH}`, import.meta.url);

    try {
        const isSourceExists = await isExists(source);

        if (!isSourceExists) {
            throw new Error(FAILED_MSG);
        }

        const files = await readdir(source);

        files.map((file) => {
            console.log(file);
        });
    } catch (err) {
        console.log(err.message);
    }
};

await list();
