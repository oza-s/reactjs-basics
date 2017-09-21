var webpack = require("webpack");
var path = require("path");
// path: default nodejs library which is globally available.
// This will allow us to resolve the path of my application basically.

var DIST_DIR = path.resolve(__dirname, "dist");
//DIST_DIR: the directory where we want to copy our transpiled, prepare and bundled files.
//The directory which will serve my application. So this is where we use path from 'path' package.
// Whole line means, copy everything which has been prepared for serving it into the dist folder.

var SRC_DIR = path.resolve(__dirname, "src");
// this line tells web pack that src folder is the entrance path.
// This is where you find source code and copy it into dist folder.

var config = {
    entry: SRC_DIR + "/app/index.js", // this is the entry point. Tell web pack which file you should start your compiling and transpiling journey.
    //web pack's logic is it has one or more entry points/files and then it looks and then it looks for the dependencies of those files.
    // All the import statements at the top and pulls in these imports so it builds up a bundle.
    //It also makes sure that all the import are pulled in right order.
    //index.js is our root file because this will be the file that will start my application later on.
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/" //This is important for web pack development server because we are putting everything in the dist folder
        //but on the real server we would deploy this. This tells web pack that this is the folder where our app lives in on public server.
    },
    module: {   //module: defines all the modules you want to use during your web pack process.
        loaders: [
            {
                test: /\.js?/, //this tells web pack, which files you should test or look at regarding this loader.
                // Since we are writing everything with es6 we want to look at every javascript file.
                // ? means have a look at all javascript files.
                include: SRC_DIR,   //which files you should scan for such files.
                loader: "babel-loader", // you state which loader you are going to use for transpiling.
                query: {    //babel takes some presets to wor correctly.
                    presets: ["react", "es2015", "stage-2"]
                }
            }
        ]
    }
};

module.exports = config;