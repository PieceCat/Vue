const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [{
                test: /vue-preview.src.*?js$/,
                use: 'babel-loader'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel-preset-env']
                    }
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'autoprefixer-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'autoprefixer-loader', 'less-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'autoprefixer-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|gif|woff|woff2|eot|ttf|otf|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10240
                    }
                }]
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: 'index.html',
            filename: 'index.html'
        })
    ]
}