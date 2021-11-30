const path = require("path");

const { override, addWebpackAlias } = require("customize-cra");

const p = (templates) => path.join(__dirname, "src", templates.raw[0]);

module.exports = override(
    // addWebpackPlugin(new TsconfigPathsPlugin()),
    addWebpackAlias({
        "@core": p`core`,
        "@components": p`components`,
        "@features": p`features`,
        "@assets": p`assets`,
    }),
);
