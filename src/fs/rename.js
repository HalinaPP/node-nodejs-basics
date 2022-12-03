
import fs from 'fs/promises';
import { FAILED_MSG, FILES_PATH } from './constants.js';
import { isExists } from './helpers.js';

const rename = async () => {
    const oldPath = new URL(`${FILES_PATH}wrongFilename.txt`, import.meta.url);
    const newPath = new URL(`${FILES_PATH}properFilename.md`, import.meta.url);

    try {
        const isOldPathExists = await isExists(oldPath);
        const isNewPathExists = await isExists(newPath);

        if (!isOldPathExists || isNewPathExists) {
            throw new Error(FAILED_MSG);
        }

        await fs.rename(oldPath, newPath)
        console.log(`File ${oldPath} was renamed to ${newPath}`);

    } catch (err) {
        console.log(err.message);
    }
};

await rename();