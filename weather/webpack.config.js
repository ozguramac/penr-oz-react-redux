const Dotenv = require('dotenv-webpack');
module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: "babel"
      }
    ]
  },
  plugins: [
    new Dotenv({
      path: './src/.env'
    })
  ],
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  devServer: {
    contentBase: "./"
  }
};
