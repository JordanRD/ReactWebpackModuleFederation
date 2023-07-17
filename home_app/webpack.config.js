const HtmlWebpackPlugin = require("html-webpack-plugin");
// import ModuleFederationPlugin from webpack
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// import dependencies from package.json, which includes react and react-dom
const { dependencies } = require("./package.json");

module.exports = {
    entry: "./src/entry.js",
    mode: "development",
    devServer: {
        port: 3000, // port server
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-env",
                                "@babel/preset-react",
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new ModuleFederationPlugin({
            name: "Home", // nama aplikasi (bebas)

            /**
            define module yang mau dipakai di Home
            misalnya Header berarti mulai import dari HeaderApp (harus sesuai sama name di webpack.config header_app)
            path selanjutnya akan ikutin "ModuleFederationPlugin.exposes" di webpack.config header_app misalnya Header berarti HeaderApp/Header
             */
            remotes: {
                HeaderApp: "HeaderApp@http://localhost:3001/remoteEntry.js",
            },
            shared: {
                //  to specify various options to control how modules are shared among federated modules
                // singleton =>  ensures that the shared module is loaded only once in the application, and the same instance is shared across all modules that depend on it. This option prevents duplication of code and ensures consistent state
                // requiredVersion => only use the shared module when version matches

                ...dependencies, // other dependencies
                react: {
                    // react
                    singleton: true,
                    requiredVersion: dependencies["react"],
                },
                "react-dom": {
                    // react-dom
                    singleton: true,
                    requiredVersion: dependencies["react-dom"],
                },
            },
        }),
    ],
    resolve: {
        extensions: [".js", ".jsx"],
    },
    target: "web",
};
