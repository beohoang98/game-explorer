const { override, addWebpackPlugin } = require("customize-cra");
const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");

module.exports = override(addWebpackPlugin(new TsconfigPathsPlugin()));
