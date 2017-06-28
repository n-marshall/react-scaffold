const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Resolve paths
const BUILD_DIR = path.resolve(__dirname, "./build");
const APP_DIR = path.resolve(__dirname, "src");

const commonConfig = {
  entry: ["babel-polyfill", APP_DIR],
  output: {
    path: BUILD_DIR,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        // Babel loader for React's JSX
        test: /\.jsx?$/,
        loaders: ["babel-loader", "eslint-loader"],
        include: APP_DIR,
        exclude: [/node_modules/]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  plugins: []
};

function developmentConfig() {
  const config = {
    devServer: {
      historyApiFallback: true,
      contentBase: "public",
      stats: "errors-only",
      host: process.env.HOST, // Defaults to `localhost`
      port: process.env.PORT // Defaults to 8080
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new HtmlWebpackPlugin({
        hash: true
      })
    ]
  };

  return Object.assign({}, commonConfig, config, {
    plugins: commonConfig.plugins.concat(config.plugins)
  });
}

function productionConfig() {
  return commonConfig;
}

module.exports = function(env) {
  console.log("env", env);

  if (env === "production") {
    return productionConfig();
  }

  return developmentConfig();
};
