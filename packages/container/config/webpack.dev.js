const { merge } = require("webpack-merge");
const htmlWebpackPlugin = require("html-webpack-plugin");
const modulefedrationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");
const webpackCommon = require("./webpack.common");
const devConfig = {
  mode: "development",
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new modulefedrationPlugin({
      name: "container",
      remotes: {
        marketing: "marketing@http://localhost:8081/remoteEntry.js",
      },
      shared: packageJson.dependencies,
    }),
    new htmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
};

module.exports = merge(webpackCommon, devConfig);
