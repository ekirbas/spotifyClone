const path = require('path');
const { SourceMapDevToolPlugin } = require("webpack");
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public'),
        publicPath: '/'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test: /\.js$/,
            enforce: 'pre',
            use: ['source-map-loader'],
        },
        {
            test: /\.less$/i,
            use: [
                // compiles Less to CSS
                "style-loader",
                "css-loader",
                "less-loader",
            ],
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
        {
            test: /\.(png|jpe?g|svg|gif)$/i,
            use: [
                {
                    loader: 'file-loader',
                },
            ],
        },
            /*    {
                   test: /\.svg$/,
                   loader: 'svg-inline-loader'
               } */
        ]
    },
    /*     externals: {
            'react': 'React'
        }, */

    plugins: [
        new SourceMapDevToolPlugin({
            filename: "[file].map"
        }),

    ],
    mode: 'development',
    devServer: {
        allowedHosts: 'all',
        static: path.resolve(__dirname, 'public'),
        compress: true,
        port: 8080,
        historyApiFallback: true,
    },
};
