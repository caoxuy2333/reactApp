const config = require('./webpack.config')

config.mode = 'production';
config.devtool = 'hidden-source-map';

module.exports = config;