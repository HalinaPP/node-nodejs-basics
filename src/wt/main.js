import { Worker } from 'worker_threads';
import { cpus } from 'os';

const cpu = cpus();

const workerName = new URL('./worker.js', import.meta.url);

const runCalculation = (numberToCalcFibonacci) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker(workerName, { workerData: numberToCalcFibonacci });
        worker.on('message', resolve);
        worker.on('error', reject);
    });
};

const getWorkerResult = (items) => {
    const result = [];

    items.map(item => {
        const status = item.status === 'fulfilled' ? 'resolved' : 'error';
        const data = item.status === 'fulfilled' ? item.value : null;
        result.push({ status, data });
    });

    return result;
}

const performCalculations = async () => {
    let numberToCalcFibonacci = 10;

    try {
        const calculationResult = await Promise.allSettled(cpu.map(() => {
            return runCalculation(numberToCalcFibonacci++);
        }));

        const workerResult = getWorkerResult(calculationResult);

        console.log('Workers result:', workerResult);
    } catch (err) {
        console.log(err);
    }
};

await performCalculations();