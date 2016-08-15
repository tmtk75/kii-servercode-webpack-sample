"use strict"

var webpack = require("webpack"),
    path    = require("path");

module.exports = {

  entry: {
    app: "./src/index.js",
  },

  resolve: {
    root: ".",
    extensions: ["", ".js"],
  },

  output: {
    path: path.join(__dirname, "dist"),
    filename: `bundle.[name].js`,
  },

  module: {
    loaders: [
      { test: /(\.js)$/, loader: 'babel?cacheDirectory', exclude: /node_modules/ },
    ],
  },

}
