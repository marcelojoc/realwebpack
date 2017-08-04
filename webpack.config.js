//Este es el tipo más sencillo de un webpack.config
const path = require('path');
module.exports = {
  entry: {
    pag1: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  devServer: {
  contentBase: path.join(__dirname, "./"),
  compress: true,
  port: 9000
}
}