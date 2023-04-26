import { spawn } from 'child_process';
import { stdin } from 'process';
import { fileURLToPath } from 'url'

const spawnChildProcess = async (args) => {
    const scriptFile = new URL('./files/script.js', import.meta.url);
    const __filename = fileURLToPath(scriptFile);

    const childProcess = spawn('node', [__filename, ...args]);

    stdin.on('data', (input) => {
        childProcess.stdin.write(input);
    });

    childProcess.stdout.on('data', (output) => {
        console.log(output.toString());
    });
};

spawnChildProcess(["--arg1", "--arg2", "--arg3"]);