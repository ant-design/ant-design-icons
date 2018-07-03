const path = require('path');

module.exports = {
  entry: {
    index: './src/index.ts',
    symbols: './src/symbols.ts'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'lib')
  },
  externals: {
    react:'react'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.svg$/,
        use: [
          { loader: 'svg-to-symbol-loader', options: require('./build/svgToSymbol.config') }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
}
