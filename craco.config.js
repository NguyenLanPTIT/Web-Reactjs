module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            const rules = webpackConfig.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf;
            const scssRule = rules.find(rule => rule.test && rule.test.toString().includes('scss'));

            scssRule.use.push({
                loader: require.resolve('resolve-url-loader'),
                options: {
                    sourceMap: true,
                }
            });

            return webpackConfig;
        }
    }
};