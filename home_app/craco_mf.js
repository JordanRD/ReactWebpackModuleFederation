const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const paths = require("react-scripts/config/paths");

module.exports = class CracoModuleFederationPlugin {
    constructor(moduleFederationConfig) {
        this.moduleFederationConfig = moduleFederationConfig;
    }

    overrideWebpackConfig({ webpackConfig, pluginOptions }) {
        // console.log(
        //     "this.moduleFederationConfig:",
        //     this.moduleFederationConfig
        // );
        if (this.moduleFederationConfig) {
            webpackConfig.output.publicPath = "auto";

            if (pluginOptions?.useNamedChunkIds) {
                webpackConfig.optimization.chunkIds = "named";
            }

            const htmlWebpackPlugin = webpackConfig.plugins.find(
                (plugin) => plugin.constructor.name === "HtmlWebpackPlugin"
            );

            htmlWebpackPlugin.userOptions = {
                ...htmlWebpackPlugin.userOptions,
                publicPath: paths.publicUrlOrPath,
                // excludeChunks: [this.moduleFederationConfig.name],
            };

            webpackConfig.plugins = [
                ...webpackConfig.plugins,
                new ModuleFederationPlugin(this.moduleFederationConfig),
            ];
        }
        return webpackConfig;
    }

    overrideDevServerConfig({ devServerConfig }) {
        devServerConfig.headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
            "Access-Control-Allow-Headers": "*",
        };

        return devServerConfig;
    }
};
