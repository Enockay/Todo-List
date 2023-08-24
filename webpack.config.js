const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode : "development",
    entry: {
        index:'./src/index.js',
        main : './src/main.js'},
    devServer : {
            static :'./dist',
        },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    
    optimization : {
        runtimeChunk: 'single',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title : 'Todo-List',
        })
    ],
    devtool : 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                    test: /\.(jpg|jpeg|png|gif)$/,
                    use: [
                      {
                        loader: 'file-loader',
                        options: {
                          name: '[name].[ext]',
                          outputPath: 'images/',
                        },
                      },
                    ],
            },
        ]
}
}