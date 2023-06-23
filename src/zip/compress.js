import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { createGzip } from 'zlib';

const compress = async () => {
    const fileToCompress = new URL('./files/fileToCompress.txt', import.meta.url);
    const archive = new URL('./files/archive.gz', import.meta.url);

    const streamToCompress = createReadStream(fileToCompress);
    const archiveStream = createWriteStream(archive);
    const gzib = createGzip();

    pipeline(streamToCompress, gzib, archiveStream, (err) => {
        if (err) {
            console.log('Can not archive file:', err);
        } else {
            console.log(`File ${fileToCompress} was compressed`);
        }
    });
};

await compress();
