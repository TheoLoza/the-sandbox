Some notes when setting up the environment and workflow:

After installing npm and node.js, create a package.json file using 'npm init'.

Installing webpack: npm install webpack --save-dev
This should put webpack as a devDependency where all the other tools are.

Installing a library: npm install jquery --save
This will only save it as a dependency, code that we will need for the app

Sharing the project would be really simple. The package.json file only needs to be sent because it has all the info on dependencies needed. Just go to the directory where the package is, then do 'npm install' to get all dependencies.

Using --save-dev and --save will only install packages locally (only in the current project). To install globally: npm install live-server --global (needs root permissions)

CORE CONCEPTS OF WEBPACK:
Entry point: Where webpack will start the bundling. Looking for the dependencies and bundle them into one js file.
Output: Tell webpack exactly where to save the bundled file.
Loaders: Allows us to import or load files then process them SASS -> CSS or ES6 -> ES5
Plugins: Allows processing input files

CONFIGURING WEBPACK:
Create a file in the root of the project called webpack.config.js (more explained in the video on lecture 134)

RUNNING OUR PROJECT:
Use npm run 'script name here'
The script name is from the package.json file

CONFIGURING BABEL:
Create a file called .babelrc

Some notes on the actual project:

I put some notes here because they don't really belong in the comments of the files we worked on.

HANDLING THE CORS IN CERTAIN API:
We can use crossorigin.me and paste their link before our API link.
If that proxy does not work, then seach for 'cors proxy' and try to find one that works.

STATE MANAGEMENT:
We want to keep different changing components of our app into one central place or object.
Tools like Redux help with state management.

EVENT LISTENERS ARE IN THE CONTROLLER!

EVERY ASYNC FUNCTION RETURNS A PROMISE OBJECT!

LOCALSTORAGE API:
Allows us to save key value pairs in the browser.
The data will stay intact even when the page reloads
Can get, set, and delete
Learned that it will still persist even if you close the webpack server, maybe because of how webpack dev server works
