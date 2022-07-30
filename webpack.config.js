const HtmlWebpackPlugin = require("html-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/public"),
    filename: "[name].bundle.js",
    clean: true,
  },
  devtool: "source-map",

  optimization: {
    minimizer: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        inject: true,
        minify: {
          caseSensitive: true,
          collapseWhitespace: true,
          conservativeCollapse: true,
          keepClosingSlash: true,
          minifyCSS: true,
          minifyJS: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
        },
      }),
      // minimizing images
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["jpegtran", { progressive: true }],
              ["optipng", { optimizationLevel: 5 }],
              ["svgo"],
            ],
          },
        },
      }),
    ],
  },

  module: {
    rules: [
      // transfer HTML file
      {
        test: /\.html$/,
        loader: "html-loader",
      },

      // transfer CSS file
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },

      // transfer img file
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader",
        generator: {
          outputPath: "img",
          name: "[name].[ext]",
        },
      },
    ],
  },
};
