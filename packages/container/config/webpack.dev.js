const { merge } = require("webpack-merge");
const ModulefedrationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");
const webpackCommon = require("./webpack.common");

const LOCAL_PORT = 8080;
const devConfig = {
  mode: "development",
  devtool: "cheap-module-source-map",
  output: {
    publicPath: `http://localhost:${LOCAL_PORT}/`,
  },
  devServer: {
    port: LOCAL_PORT,
    historyApiFallback: {
      index: "/index.html",
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  plugins: [
    new ModulefedrationPlugin({
      name: "container",
      remotes: {
        marketing: `marketing@http://localhost:8081/remoteEntry.js`,
        auth: `auth@http://localhost:8082/remoteEntry.js`,
        dashboard: `dashboard@http://localhost:8083/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(webpackCommon, devConfig);
