import { merge } from 'webpack-merge'
const common = require('./webpack.common.js');
const path = require('path');

export default merge(common, {
    mode: 'production',

    output: {
        filename: 'main.js',
        path: path.resolve(import.meta.dirname, 'dist'),
        clean: true,
    },
});