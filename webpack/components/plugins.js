var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
        template: path.join(PATHS.app, '/index.html'),
        inject: 'body'
    }),
    new ExtractTextPlugin('app.css', {
        allChunks: true
    })
];