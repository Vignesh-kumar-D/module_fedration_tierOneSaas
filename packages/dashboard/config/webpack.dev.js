const { merge } = require("webpack-merge");
const htmlWebpackPlugin = require("html-webpack-plugin");
const ModulefedrationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const webpackCommon = require("./webpack.common");
const packageJson = require("../package.json");
const PORT = 8083;
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
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  plugins: [
    new ModulefedrationPlugin({
      name: "dashboard",
      filename: "remoteEntry.js",
      exposes: {
        "./dashboardApp": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
    new htmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
};

module.exports = merge(webpackCommon, devConfig);
