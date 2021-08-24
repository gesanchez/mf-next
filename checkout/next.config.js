const { withFederatedSidecar } = require("@module-federation/nextjs-mf");
const path = require('path');

module.exports = withFederatedSidecar({
  name: "checkout",
  filename: "static/chunks/remoteEntry.js",
  exposes: {
    "./title": "./components/Title",
    "./checkout": "./pages/checkout",
    "./p/test": "./pages/p/test",
    "./pages-map": "./pages-map",
  },
  shared: {
    react: {
      requiredVersion: false,
      singleton: true,
    },
  },
})({
  webpack5: true,
  webpack(config, options) {
    const { webpack } = options;

    config.experiments = { topLevelAwait: true };
    config.output.publicPath = "auto";

    config.module.rules.push({
      test: /_app.tsx/,
      loader: "@module-federation/nextjs-mf/lib/federation-loader.js",
    });
    if (options.isServer) {
      Object.assign(config.resolve.alias, {
        checkout: false
      });
    } else {
      config.plugins.push(
        new webpack.container.ModuleFederationPlugin({
          remoteType: "var",
          remotes: {
            checkout: "checkout"
          },
          shared: {
            "@module-federation/nextjs-mf/lib/noop": {
              eager: false,
            },
            react: {
              singleton: true,
              eager: true,
              requiredVersion: false,
            },
          },
        })
      );
    }
    config.resolve.alias['config'] = path.resolve(__dirname, 'config.js');

    console.log(config.resolve.alias);
    return config;
  },
  publicRuntimeConfig: {
    basePath: "http://localhost:3000"
  }
});
