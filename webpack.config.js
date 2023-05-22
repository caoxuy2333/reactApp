const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ProvidePlugin } = require('webpack');

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, 'dist'), // 输出文件夹
    chunkFilename: 'js/[name]-chunk.js', // 分包文件
    filename: '[name].js', // 入口文件
    publicPath: './'
  },
  mode: 'production', // development - production
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(css|less)$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]-[hash:base64:5]',
              }
            }
          },
          'less-loader'
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: "asset",
        generator: {
          filename: "assets/[hash:8][ext]" // 打包输出
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 , // 转换base64
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      // 'xhr': path.resolve(path.join(__dirname, 'src/fetch'))
      'assets': path.resolve(__dirname, 'assets') // 设置别名
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack',
      template: path.resolve(__dirname, 'src/index.html')
    }),
    new ProvidePlugin({
      'mockjs': path.resolve(path.join(__dirname, 'src/fetch/mock')),
      'request': path.resolve(path.join(__dirname, 'src/fetch')),
    })
  ],
  optimization:{
    // 将每个module打包成单个文件, 并行加载, 提升加载速度
    splitChunks: {
      chunks: 'all',
      name: 'modules/chunk', // 打包后的文件名
      maxSize: 200000, // 设置每个文件的最大值 (单位: bytes)
    }
  },
  devServer: {
    compress: true,
    port: 9000,
    historyApiFallback: true, // 直接访问子路由404的问题
    compress: true,
    proxy: {
      // 加 ^ 防止router和http请求重复导致访问不到路由
      '^/login': {
        changeOrigin: true,
        target: 'http://www.baidu.com',  // 代理目标地址
        pathRewrite: { '^/login': '/login' }
      },
      // 增加 ^ 匹配不到, 遂删除 ^ 符号
      '/socket': {
        changeOrigin: true,
        target: 'http://127.0.0.1:8082',  // 代理目标地址
        pathRewrite: { '^/socket': '' }
      },
      // 反向代理
      '/cxyPrint': {
        changeOrigin: true,
        target: 'http://127.0.0.1:8091',  // 代理目标地址
        pathRewrite: { '^/cxyPrint': '' }
      }
    }
  }
};
