const path = require('path');

module.exports = {
    entry: './src/importCSS.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist/',
        filename: 'importCSS.js',
        libraryExport: 'default',
        library: 'importCSS',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}