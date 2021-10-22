const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    main: './src/index.tsx',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: '[name]-[contenthash].js',
    path: path.resolve(__dirname, 'build'),
  },
  devtool: 'source-map',
  devServer: {
    hot: true,
    liveReload: true,
    client: {
      logging: 'info',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Weather Test App',
      template: 'public/index-template.html',
      inject: 'body',
    }),
  ],
  resolve: {
    root: [path.resolve(__dirname, './src')],
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimize: true,
    minimizer: [new TerserPlugin({
      parallel: true,
    })],
  },
};
