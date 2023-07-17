// const CracoModuleFederationPlugin = require("./craco_mf");
// // const moduleFederationPlugin = require("./craco_mf");
// const { dependencies } = require("./package.json");

module.exports = {
    // plugins: [
    //     {
    //         plugin: new CracoModuleFederationPlugin({
    //             name: "Home", // nama aplikasi (bebas)
    //             /**
    //         define module yang mau dipakai di Home
    //         misalnya Header berarti mulai import dari HeaderApp (harus sesuai sama name di webpack.config header_app)
    //         path selanjutnya akan ikutin "ModuleFederationPlugin.exposes" di webpack.config header_app misalnya Header berarti HeaderApp/Header
    //          */
    //             remotes: {
    //                 HeaderApp: "HeaderApp@http://localhost:3001/remoteEntry.js",
    //             },
    //             shared: {
    //                 //  to specify various options to control how modules are shared among federated modules
    //                 // singleton =>  ensures that the shared module is loaded only once in the application, and the same instance is shared across all modules that depend on it. This option prevents duplication of code and ensures consistent state
    //                 // requiredVersion => only use the shared module when version matches
    //                 ...dependencies, // other dependencies
    //                 react: {
    //                     // react
    //                     singleton: true,
    //                     requiredVersion: dependencies["react"],
    //                 },
    //                 "react-dom": {
    //                     // react-dom
    //                     singleton: true,
    //                     requiredVersion: dependencies["react-dom"],
    //                 },
    //             },
    //         }),
    //     },
    // ],
};
