const parseEnv = () => {
    const envKeys = Object.keys(process.env);
    const rssEnvKeys = envKeys.filter(item => item.startsWith('RSS_'));

    const rssEnvsArr = rssEnvKeys.reduce((ouputArr, rssEnvKey) => {
        ouputArr.push(`${rssEnvKey}=${process.env[rssEnvKey]}`);
        return ouputArr;
    }, []);

    const rssEnvs = rssEnvsArr.join('; ');

    console.log(rssEnvs);
};

parseEnv();