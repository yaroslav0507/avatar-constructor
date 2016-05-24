var webpack = require('webpack');
var jsLoader = require('./webpack/components/js-loader');

module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],
        singleRun: true,
        frameworks: ['mocha', 'chai', 'sinon-chai'],
        files: [
            'test.config.js'
        ],
        preprocessors: {
            'test.config.js': ['webpack', 'sourcemap']
        },
        reporters: ['dots'],
        webpack: {
            devtool: "source-map",
            module: {
                loaders: [jsLoader]
            }
        },
        webpackServer: {
            noInfo: true
        }
    });
};