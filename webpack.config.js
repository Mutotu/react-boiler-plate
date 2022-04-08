const path = require('path');

module.exports = {
  entry: './lib/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: path.resolve(__dirname, 'public', 'index.html'),
  //   }),
  //   new ESLintPlugin({}),
  // ],
};
