const path = require("path");

module.exports = {
  mode: "development",
  stats: "errors-only",
  entry: {
    cart: "./scripts/cart.js",
    account: "./scripts/account.js",
    collection: "./scripts/collection.js",
    common: "./scripts/common.js",
    homepage: "./scripts/homepage.js",
    styles: "./styles/styles.scss",
    IE11: "./styles/IE11.scss"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "assets")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/polyfill"]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].css"
            }
          },
          {
            loader: "extract-loader"
          },
          {
            loader: "css-loader?-url"
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  }
};
