import { cp, existsSync, mkdir } from 'fs';

const copy = async () => {
    const source = './src/fs/files/';
    const dest = './src/fs/files_copy/';
    try {
        if (existsSync(dest) || !existsSync(source)) {
            throw new Error('FS operation failed');
        }

        await mkdir(dest, async (err) => {
            if (err) {
                throw new Error('mkdir operation failed:', err.message);
            }

            await cp(source, dest, { recursive: true }, (err) => {
                if (err) {
                    throw new Error('copy operation failed:', err.message);
                }
                console.log(`folder ${source} was copied to ${dest}`);
            });

        });
    } catch (err) {
        console.log(err.message);
    }
};

copy();
