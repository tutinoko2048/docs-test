
/** @type {import('webpack').Configuration} */
const webpackConfig = {
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: "json-loader",
        type: "javascript/auto"
      }
    ]
  },
  resolve: {
    extensions: [ ".ts", ".tsx", ".js", ".jsx", ".json" ]
  }
}

module.exports = webpackConfig;