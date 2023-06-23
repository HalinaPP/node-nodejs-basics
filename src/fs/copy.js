import { mkdir, readdir, copyFile } from 'fs/promises';
import url from 'url';
import { FILES_PATH, FAILED_MSG } from './constants.js';
import { isExists } from './helpers.js';

const copy = async () => {
    const source = new URL(`${FILES_PATH}`, import.meta.url);
    const destName = new URL('./files_copy/', import.meta.url);

    try {
        const isSourceExists = await isExists(source);
        const isDestNameExists = await isExists(destName);

        if (!isSourceExists || isDestNameExists) {
            throw new Error(FAILED_MSG);
        }

        await mkdir(destName);
        const files = await readdir(source);

        files.map((file) => {
            copyFile(
                url.fileURLToPath(source) + file,
                url.fileURLToPath(destName) + file
            );
        });
    } catch (err) {
        console.log(err.message);
    }
};

copy();
