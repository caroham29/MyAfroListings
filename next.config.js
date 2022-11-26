const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const withTM = require("next-transpile-modules")([
]); // pass the modules you would like to see transpiled

// Use the SentryWebpack plugin to upload the source maps during build step

const basePath = "";

module.exports = withTM({
  experimental: {
    scrollRestoration: true,
  },
  future: {
    webpack5: true,
  },
  productionBrowserSourceMaps: true,
  webpack(config, options) {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: path.join(__dirname, "node_modules/tinymce/skins"),
            to: path.join(__dirname, "public/assets/libs/tinymce/skins"),
          },
          {
            from: path.join(__dirname, "node_modules/tinymce/themes"),
            to: path.join(__dirname, "public/assets/libs/tinymce/themes"),
          },
          {
            from: path.join(__dirname, "node_modules/tinymce/icons"),
            to: path.join(__dirname, "public/assets/libs/tinymce/icons"),
          },
        ],
      })
    ); // Copy tinymce to the public folder

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [{ removeViewBox: false }],
            },
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: "file-loader",
        },
      ],
    });

    // Start Sentry Code

    // In `pages/_app.js`, Sentry is imported from @sentry/browser. While
    // @sentry/node will run in a Node.js environment. @sentry/node will use
    // Node.js-only APIs to catch even more unhandled exceptions.
    //
    // This works well when Next.js is SSRing your page on a server with
    // Node.js, but it is not what we want when your client-side bundle is being
    // executed by a browser.
    //
    // Luckily, Next.js will call this webpack function twice, once for the
    // server and once for the client. Read more:
    // https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
    //
    // So ask Webpack to replace @sentry/node imports with @sentry/browser when
    // building the browser's bundle
    if (!options.isServer) {
      config.resolve.alias["@sentry/node"] = "@sentry/browser";
    }

    // Define an environment variable so source code can check whether or not
    // it's running on the server so we can correctly initialize Sentry
    config.plugins.push(
      new options.webpack.DefinePlugin({
        "process.env.NEXT_IS_SERVER": JSON.stringify(
          options.isServer.toString()
        ),
      })
    );

    // When all the Sentry configuration env variables are available/configured
    // The Sentry webpack plugin gets pushed to the webpack plugins to build
    // and upload the source maps to sentry.
    // This is an alternative to manually uploading the source maps
    // Note: This is disabled in development mode.

    // End Sentry Code

    return config;
  },
  basePath,
});
