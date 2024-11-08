const path = require('path');

const webpackConfigPlugins = require('./config/webpack/webpack.config.plugins');
const webpackConfigRules = require('./config/webpack/webpack.config.rules');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';

const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
  mode,
  target,
  devtool,
  entry: [
    '@babel/polyfill',
    path.resolve(__dirname, 'src/index.ts')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true
  },
  devServer: {
    watchFiles: ['src/**/*'],
    client: {
      logging: 'none',
      overlay: false,
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    compress: true,
    liveReload: true,
    hot: false,
  },
  plugins: webpackConfigPlugins,
  module: {
    rules: webpackConfigRules
  },
  resolve: {
    extensions: [
      '.ts',
      '.js'
    ],
    alias: {
      api: path.resolve(__dirname, 'src/api/'),
      assets: path.resolve(__dirname, 'src/assets/'),
      components: path.resolve(__dirname, 'src/components/'),
      constants: path.resolve(__dirname, 'src/constants/'),
      helpers: path.resolve(__dirname, 'src/helpers/'),
      modules: path.resolve(__dirname, 'src/modules/'),
      pages: path.resolve(__dirname, 'src/pages/'),
      services: path.resolve(__dirname, 'src/services/'),
      styles: path.resolve(__dirname, 'src/styles/'),
      types: path.resolve(__dirname, 'src/types/'),
      ui: path.resolve(__dirname, 'src/ui/')
  }
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
