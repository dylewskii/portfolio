// const { merge } = require("webpack-merge");
// const common = require("./webpack.common");

// module.exports = merge(common, {
//   mode: "development",
//   devtool: "inline-source-map",

//   devServer: {
//     static: "./dist",
//     hot: true,
//     host: "localhost",
//     port: 8080,
//   },
//   optimization: {
//     runtimeChunk: "single",
//   },
// });

const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  target: "web",
  devServer: {
    static: "./dist",
    hot: true,
  },
  optimization: {
    runtimeChunk: "single",
  },
});
