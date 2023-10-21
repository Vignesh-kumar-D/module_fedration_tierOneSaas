const { merge } = require("webpack-merge");
const modulefedrationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const webpackCommon = require("./webpack.common");
const packageJson = require("../package.json");
const devConfig = {
  mode: "development",
  output: {
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new modulefedrationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./marketingApp": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(webpackCommon, devConfig);
