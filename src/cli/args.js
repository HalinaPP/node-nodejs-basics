const parseArgs = () => {
    const args = process.argv.slice(2);

    const outputArgs = args.reduce((output, arg, index, arr) => {
        const nextArg = arr[index + 1];

        if (nextArg && arg.startsWith('--')) {
            const argName = arg.slice(2);
            output.push(`${argName} is ${nextArg}`);
        }

        return output;
    }, []);

    console.log(outputArgs.join(', '));
};

parseArgs();