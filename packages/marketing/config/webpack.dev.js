const { merge } = require("webpack-merge");
const htmlWebpackPlugin = require("html-webpack-plugin");
const ModulefedrationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const webpackCommon = require("./webpack.common");
const packageJson = require("../package.json");
const PORT = 8081;
const devConfig = {
  mode: "development",
  output: {
    publicPath: `http://localhost:${PORT}/`,
  },
  devServer: {
    port: PORT,
    historyApiFallback: {
      index: "/index.html",
    },
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
    new htmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
};

module.exports = merge(webpackCommon, devConfig);
