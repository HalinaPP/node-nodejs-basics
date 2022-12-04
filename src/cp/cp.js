import { spawn } from 'child_process';
import { stdin } from 'process';

const spawnChildProcess = async (args) => {
    const scriptFile = new URL('./files/script.js', import.meta.url);
    const scriptFilePath = scriptFile.pathname.slice(1);

    const argsArr = args.split(' ');

    const childProcess = spawn(`node`, [scriptFilePath, ...argsArr]);

    stdin.on('data', (input) => {
        childProcess.stdin.write(input);
    });

    childProcess.stdout.on('data', (output) => {
        console.log(output.toString());
    });
};

spawnChildProcess('--arg1 value1 --arg2 value2 --arg3 value3');