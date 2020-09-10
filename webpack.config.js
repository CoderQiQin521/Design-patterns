const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    devServer: {
        open: true,
        port: 9000,
        proxy: {
            '/api/*': {
                target: 'http://localhost:8880',
                pathRewrite: { '^/api': '' },
            },
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '设计模式',
            template: './src/index.html',
        }),
    ],
};
