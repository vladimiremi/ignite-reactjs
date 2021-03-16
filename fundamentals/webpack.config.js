const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public', 'index.html'),
        hot: true,
    },
    plugins: [ //não aceita valor falso
        isDevelopment && new ReactRefreshWebpackPlugin, //pode dar falso
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
    ].filter(Boolean),//resolve o problema do thuthy, retira todos os falses de dentro
    module: {
        rules: [
            {
                test: /\.(j|t)sx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',//a integração do babel e o webpack
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    }
                } 
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ], 
            }
        ]
    }
};