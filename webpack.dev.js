import { merge } from 'webpack-merge'
const common = require('./webpack.common.js');
const path = require('path');

export default merge(common, {
    mode: 'development',

    devtool: 'eval-source-map',

    devServer: {
        watchFiles: ['./src/template.html'],
        static: path.resolve(import.meta.dirname, 'dist'),
        open: true,
    },

    output: {
        filename: 'main.js',
        path: path.resolve(import.meta.dirname, 'dist'),
        clean: true,
    },
});
