const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ProvidePlugin } = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, 'dist'), // 输出文件夹
    chunkFilename: 'js/[name]-chunk.js', // 分包文件
    filename: '[name].js', // 入口文件 
  },
  mode: 'development', // development - production
  devtool: 'inline-source-map', // 源码模式, 打包模式
  // inline-source-map 展示源码
  // cheap-source-map 会将css 写入到js中, 运行时写入到style标签中
  // hidden-source-map 隐藏源码
  // eval 使用eval压缩
  module: {
    rules: [
      {
        test: /\.m?js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(css|less)$/i,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader, // 不要同时使用 style-loader 与 mini-css-extract-plugin
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                localIdentName: '[local]-[hash:base64:5]',
              }
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
            },
          },
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
            maxSize: 100, // 转换base64
          }
        }
      },
      {
        test: /\.(nes|gba|bin)$/,
        loader: 'file-loader',
        options: {
          esModule: false
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
    }),
    new MiniCssExtractPlugin(),
  ],
  optimization: {
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
      },
      '/gbaFile': {
        changeOrigin: true,
        target: 'https://cxy-game-file.oss-cn-beijing.aliyuncs.com',  // 代理目标地址
        pathRewrite: { '^/gbaFile': '' }
      }
    }
  }
};
