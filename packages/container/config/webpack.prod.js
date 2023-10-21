const { merge } = require("webpack-merge");
const ModulefedrationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");
const webpackCommon = require("./webpack.common");

// const domain = process.env.PRODUCTION_DOMAIN;
const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/container/latest/",
  },
  plugins: [
    new ModulefedrationPlugin({
      name: "container",
      remotes: {
        marketing: `marketing@/marketing/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(webpackCommon, prodConfig);
