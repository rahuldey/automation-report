const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  target: 'electron-renderer',
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    esmodules: true,
                  },
                },
              ],
              '@babel/preset-react',
            ],
          },
        },
      },
      {
        test: [/\.css$/i],
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [],
  resolve: {
    extensions: ['.js'],
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build'),
  },
};
