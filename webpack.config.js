let webpack = require('webpack');

module.exports = {
    // Don't minify the output script
    mode: 'none',

    // Don't polyfill native node libraries for the browser
    target: 'node',

    plugins: [
        // Ignore native requires
        new webpack.IgnorePlugin(/\.node/),
    ],

    output: {
        // Make sure the output file is named `index.js`
        filename: 'index.js',
    }
};