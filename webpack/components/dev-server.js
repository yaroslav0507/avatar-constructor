'use strict';

module.exports = {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: PATHS.build,
    stats: 'errors-only',
    host: process.env.HOST,
    port: process.env.PORT,
    quiet: false
};