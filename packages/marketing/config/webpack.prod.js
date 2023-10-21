const { merge } = require("webpack-merge");
const ModulefedrationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const webpackCommon = require("./webpack.common");
const packageJson = require("../package.json");
const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/marketing/latest/",
  },
  plugins: [
    new ModulefedrationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./marketingApp": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(webpackCommon, prodConfig);
