const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: ['./src/js/app.js', './src/scss/styles.scss'],
    output: {
        path: path.resolve(__dirname, 'wwwroot'),
        filename: 'js/app.js',
        publicPath: '/',
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
                    // { loader: 'postcss-loader', options: { sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } },
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    context: 'src',
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/styles.css',
        }),
        new HtmlWebpackPlugin({
            title: 'Playground 😄',
            template: path.resolve(__dirname, 'src') + '/template.html',
            filename: 'index.html',
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'wwwroot'),
        compress: false,
        port: 1111,
    },
}
