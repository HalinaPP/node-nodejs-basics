import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { Unzip } from 'zlib';

const decompress = async () => {
    const fileToDecompress = new URL('./files/fileToCompress.txt', import.meta.url);
    const archive = new URL('./files/archive.gz', import.meta.url);

    const streamToDecompress = createWriteStream(fileToDecompress);
    const archiveStream = createReadStream(archive);

    pipeline(archiveStream, Unzip(), streamToDecompress, (err) => {
        if (err) {
            console.log('Can not unzip file:', err);
        } else {
            console.log(`File ${fileToDecompress} was uncompressed`);
        }
    });
};

await decompress();