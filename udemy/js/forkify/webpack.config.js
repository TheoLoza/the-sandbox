const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // Entry point start looking for all the code dependencies we need and the index.js file
    entry: ['babel-polyfill', './src/js/index.js'],

    // Output property: where to save bundle file
    output: {
        // Path needs to be absolute path, need a package from node here
        path: path.resolve(__dirname, 'dist/'),
        filename: 'js/bundle.js'
    },
    // mode: 'development' // Won't compress code. Other mode is production, which will minify and shake the code to compress the bundle size
    // Moved to the package.json script

    // Setting up the webpack dev server (dependency)
    devServer: {
        // What folder should webpack server our files
        contentBase: './dist'
    },
    // Plugins: allows us to use complex processing on our input files. In our case, it's the index.html file
    plugins: [
        // alot of arguements are objects
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    // Loaders: Allows us to import or load files then process them SASS -> CSS or ES6 -> ES5
    module: {
        rules: [{
            test: /\.js$/, // Files we want to test
            exclude: /node_modules/, // Files we want to exclude
            use: {
                loader: 'babel-loader'
            }
        }]
    }
};