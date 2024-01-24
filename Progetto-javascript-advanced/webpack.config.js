const path = require('path');

module.exports ={
    entry: './JS/script.js',
    output: {
        path: path.resolve(__dirname, 'plus'),
        filename: 'webpack.bundle.js',
    }
};
