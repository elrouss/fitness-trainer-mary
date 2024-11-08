const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PostCssPresetEnvPlugin = require('postcss-preset-env');
const loader = require('sass-loader');

module.exports = [
  {
    test: /\.ts$/i,
    loader: 'ts-loader',
    options: {
      transpileOnly: true,
    },
    exclude: /node_modules|\.d\.ts$/,
  },
  {
    test: /\.(?:js|mjs|cjs)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        targets: 'defaults',
        presets: ['@babel/preset-env'],
      },
    },
  },
  {
    test: /\.(css|scss)$/i,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [PostCssPresetEnvPlugin],
          },
        },
      },
      'sass-loader',
    ],
  },
  {
    test: /\.pug/,
    use: [
      {
        loader: 'raw-loader'
      },
      {
        loader: 'pug-html-loader',
        options: {
          pretty: true
        }
      }
    ]
  },
  {
    test: /\.(woff2?|ttf)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'assets/fonts/[name].[contenthash].[ext]',
    },
  },
  {
    test: /\.(png|jpe?g|webp|ico)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'assets/images/[name].[contenthash].[ext]',
    },
    // TODO: временно закомментировал, так как не подтягиваются изображения. Надо смотреть
    // use: [
    //   {
    //     loader: 'image-webpack-loader',
    //     options: {
    //       mozjpeg: {
    //         progressive: true,
    //       },
    //       optipng: {
    //         enabled: false,
    //       },
    //       pngquant: {
    //         quality: [0.65, 0.9],
    //         speed: 4,
    //       },
    //       webp: {
    //         quality: 75,
    //       },
    //     },
    //   },
    // ],
  },
];
