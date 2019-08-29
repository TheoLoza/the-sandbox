const path = require('path');

module.exports = {
    // Entry point start looking for all the dependencies
    entry: './src/js/index.js',

    // Output property: where to save bundle file
    output: {
        // Path needs to be absolute path, need a package from node here
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js'
    },
    // mode: 'development' // Won't compress code. Other mode is production, which will minify and shake the code to compress the bundle size
    // Moved to the package.json script
};