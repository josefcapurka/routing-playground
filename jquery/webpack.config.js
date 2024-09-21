const path = require('path');
// TODO configure to use ts
module.exports = {
    entry: './src/compiled_js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                include: /\.js$/,
                exclude: /node_modules/, // not necessary
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    mode: 'development', // 'production'
};
