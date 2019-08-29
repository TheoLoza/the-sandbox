Some notes when setting up the environment and workflow:

After installing npm and node.js, create a package.json file using 'npm init'.

Installing webpack: npm install webpack --save-dev
This should put webpack as a devDependency where all the other tools are.

Installing a library: npm install jquery --save
This will only save it as a dependency, code that we will need for the app

Sharing the project would be really simple. The package.json file only needs to be sent because it has all the info on dependencies needed. Just go to the directory where the package is, then do npm install to get all dependencies.

Using --save-dev and --save will only install packages locally (only in the current project). To install globally: npm install live-server --global (needs root permissions)

CONFIGURING WEBPACK:
Create a file in the root of the project called webpack.config.js (more explained in the video on lecture 134)

RUNNING OUR PROJECT:
Use npm run 'script name here'
The script name is from the package.json file

CONFIGURING BABEL:
Create a file called .babelrc
