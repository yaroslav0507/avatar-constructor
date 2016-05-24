var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
        template: path.join(PATHS.app, '/index.html'),
        inject: 'body'
    }),
    new ExtractTextPlugin('app.css', {
        allChunks: true
    }),
    new CopyWebpackPlugin([{
        context: projectDir + '/app/img/',
        from: '**/*.png',
        to: projectDir + '/build/img/'
    }])
];