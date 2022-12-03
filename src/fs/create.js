import { writeFile, existsSync } from 'fs';

const FILES_PATH = './src/fs/files/';

const create = async () => {
    const fileName = `${FILES_PATH}fresh.txt`;

    try {
        if (existsSync(fileName)) {
            throw new Error('FS operation failed');
        } else {
            await writeFile(fileName, 'I am fresh and young', 'utf-8', (err) => {
                if (err) throw err.message;
                console.log('The file has been saved!');
            });
        }
    } catch (err) {
        console.log(err.message);
    }
};

await create();