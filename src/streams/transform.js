import { stdin, stdout } from 'process';
import { pipeline, Transform } from 'stream';
import { EOL } from 'os';

const reverseString = new Transform({
    transform(chunk, encoding, cb) {
        const stringForTransform = chunk.toString().replace(EOL, '');
        const revertedString = stringForTransform.split('').reverse().join('') + EOL;

        cb(null, revertedString);
    }
});

const transform = async () => {
    console.log('Type something for reversing:');
    pipeline(
        stdin,
        reverseString,
        stdout,
        (err) => {
            if (err) {
                console.log('Error during reverting string:', err);
            }
        });
};

await transform();
