const path = require('path');

module.exports = {
    entry: "./src/index.js",
    mode: 'development', // development - production
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}