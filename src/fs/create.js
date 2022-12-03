import { writeFile } from 'fs/promises';
import { FILES_PATH, FAILED_MSG } from './constants.js';
import { isExists } from './helpers.js';

const create = async () => {
    const fileName = new URL(`${FILES_PATH}fresh.txt`, import.meta.url);

    try {
        const isfileExists = await isExists(fileName);
        if (isfileExists) {
            throw new Error(FAILED_MSG);
        }

        await writeFile(fileName, 'I am fresh and young', 'utf-8');
        console.log('The file has been saved!');
    } catch (err) {
        console.log(err.message);
    }
};

await create();