import { unlink } from 'fs/promises';
import { FAILED_MSG, FILES_PATH } from './constants.js';
import { isExists } from './helpers.js';

const remove = async () => {
    const fileToRemove = new URL(`${FILES_PATH}fileToRemove.txt`, import.meta.url);

    try {
        const isFileToRemoveExists = await isExists(fileToRemove);

        if (!isFileToRemoveExists) {
            throw new Error(FAILED_MSG);
        }

        await unlink(fileToRemove);
        console.log(`File ${fileToRemove} was removed`);

    } catch (err) {
        console.log(err.message);
    }
};

await remove();