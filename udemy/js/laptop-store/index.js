// Read contents of JSON file and parse it into a JS object
// Use node's powerful modules
const fs = require('fs'); // Core node module, already comes with node.js
const http = require('http');
const url = require('url');

// Load the file
// Have to pass the absolute file path!
// Need to pass the encoding or it will return a buffer instead of a file
const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8'); // Will return the data.json file contents as text
// Parse the JSON text into an object
const laptopData = JSON.parse(json);

// Creating the web server
// Callback function will be fired when someone accesses the server
const server = http.createServer((request, response) => {
    // console.log('Server accessed'); // Will load indefinitely if no response

    // Implementing routing: Different actions based on the url
    // console.log(request.url); // Url is stored in the request object
    const pathName = url.parse(request.url, true).pathname;

    // Loading query, the type of laptop the user selected. Will be denoted by an id. url?id=number
    const id = url.parse(request.url, true).query.id; // id from the query string

    // Products overview
    if (pathName === '/products' || pathName === '/') {
        // Setting a HTTP header: Small message we send with a request to let the browser know what kind of data is coming in
        // Takes in the status code and the content type
        response.writeHead(200, {
            'Content-type': 'text/html'
        });

        // Sending response
        // Load html first, then add the cards
        fs.readFile(`${__dirname}/templates/template-overview.html`, 'utf-8', (error, data) => {
            let overviewOut = data;

            fs.readFile(`${__dirname}/templates/template-card.html`, 'utf-8', (error, data) => {
                const cardsOutput = laptopData.map(element => replaceTemplate(data, element)).join('');

                overviewOut = overviewOut.replace('{%CARDS%}', cardsOutput);

                response.end(overviewOut);
            });
        });
    } else if (pathName === '/laptop' && id < laptopData.length) {
        // Laptop detail
        response.writeHead(200, {
            'Content-type': 'text/html'
        });

        fs.readFile(`${__dirname}/templates/template-laptop.html`, 'utf-8', (error, data) => {
            const laptop = laptopData[id];
            const output = replaceTemplate(data, laptop);
            response.end(output);
        });
    } else if ((/\.(jpg|jpeg|png|gif)$/i).test(pathName)) {
        // Route for the images, if our pathname has these extensions, then we will read 
        // those images and serve it as a response

        fs.readFile(`${__dirname}/data/img/${pathName}`, (error, data) => {
            response.writeHead(200, {
                'Content-type': 'image/jpg'
            });
            response.end(data);
        });
    } else {
        // Not found
        response.writeHead(404, {
            'Content-type': 'text/html'
        });
        response.end('Error!');
    }
});

// Listening on a specific port and IP address
// Callback function will get fired as soon as we start listening (not mandatory)
server.listen(1337, 'localhost', () => {
    console.log('Server listening');
});

// Function to replace our placeholders with JSON content
function replaceTemplate(originalHTML, laptop) {
    let output = originalHTML.replace(/{%PRODUCTNAME%}/g, laptop.productName);
    output = output.replace(/{%IMAGE%}/g, laptop.image); // Notice that we're changing the output var now
    output = output.replace(/{%PRICE%}/g, laptop.price);
    output = output.replace(/{%SCREEN%}/g, laptop.screen);
    output = output.replace(/{%CPU%}/g, laptop.cpu);
    output = output.replace(/{%STORAGE%}/g, laptop.storage);
    output = output.replace(/{%RAM%}/g, laptop.ram);
    output = output.replace(/{%DESCRIPTION%}/g, laptop.description);
    output = output.replace(/{%ID%}/g, laptop.id);

    return output;
}