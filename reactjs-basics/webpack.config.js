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
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }
        ]
    }
};

module.exports = config;