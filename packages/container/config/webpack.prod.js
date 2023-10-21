const { merge } = require("webpack-merge");
const modulefedrationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");
const webpackCommon = require("./webpack.common");

const domain = process.env.PRODUCTION_DOMAIN;
const devConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "container/latest/",
  },
  plugins: [
    new modulefedrationPlugin({
      name: "container",
      remotes: {
        marketing: `marketing@${domain}/marketing/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(webpackCommon, devConfig);
